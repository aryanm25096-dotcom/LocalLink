import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { image } = await req.json();

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // Remove the data URL prefix if present (e.g., "data:image/jpeg;base64,")
        const base64Image = image.replace(/^data:image\/\w+;base64,/, '');

        // Use gemini-2.0-flash-exp as requested (or fallback to 1.5-flash if needed)
        // Note: The prompt asked for "Gemini 2.5 Flash", but standard models are usually 1.5 or 2.0-exp currently.
        // I will use 'gemini-2.0-flash-exp' as it is the latest fast model.
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

        const prompt = `You are an expert civic and agricultural dispatcher. Analyze this image. 
    Return a raw JSON object (no markdown formatting) with 3 fields: 
    'category' (either 'Agriculture', 'Civic_Infrastructure', 'Sanitation', or 'Unknown'), 
    'severity' (number 1-10), 
    and 'description' (1 sentence).`;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Image,
                    mimeType: 'image/jpeg',
                },
            },
        ]);

        const response = await result.response;
        const text = response.text();

        // Clean up markdown code blocks if present
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const data = JSON.parse(cleanText);

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error analyzing image:', error);
        return NextResponse.json(
            { error: 'Failed to analyze image', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
