import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const schema = {
    description: "Analysis of a civic issue reported by a citizen",
    type: SchemaType.OBJECT,
    properties: {
        category: {
            type: SchemaType.STRING,
            description: "The category of the issue (e.g., Pothole, Garbage, Streetlight, Water Leak, etc.)",
            nullable: false,
        },
        severity: {
            type: SchemaType.STRING,
            description: "The severity of the issue",
            enum: ["low", "medium", "high", "urgent"],
            nullable: false,
        },
        description: {
            type: SchemaType.STRING,
            description: "A brief description of the issue observed in the image",
            nullable: false,
        },
        department: {
            type: SchemaType.STRING,
            description: "The city department responsible for fixing this issue",
            nullable: false,
        },
    },
    required: ["category", "severity", "description", "department"],
};

export async function POST(req: Request) {
    try {
        const { image } = await req.json();

        if (!image) {
            return NextResponse.json(
                { error: "Image data is required" },
                { status: 400 }
            );
        }

        // Remove the data URL prefix if present (e.g., "data:image/jpeg;base64,")
        const base64Image = image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema as any,
            },
        });

        const prompt = "Analyze this image and identify the civic issue. Provide the category, severity, a brief description, and the responsible department.";

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Image,
                    mimeType: "image/jpeg", // Assuming JPEG for simplicity, but could be dynamic
                },
            },
        ]);

        const responseText = result.response.text();
        const analysis = JSON.parse(responseText);

        return NextResponse.json(analysis);
    } catch (error) {
        console.error("Error analyzing image:", error);
        return NextResponse.json(
            { error: "Failed to analyze image" },
            { status: 500 }
        );
    }
}
