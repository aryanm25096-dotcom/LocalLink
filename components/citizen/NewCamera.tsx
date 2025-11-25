import { useState, useRef, useEffect } from "react";
import { Camera, Mic, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { useRouter } from 'next/navigation';

interface NewCameraProps {
    onCapture?: (image: string) => void;
}

export default function NewCamera({ onCapture }: NewCameraProps) {
    const router = useRouter();
    const [detections, setDetections] = useState<
        Array<{ label: string; top: number; left: number }>
    >([]);
    const [isScanning, setIsScanning] = useState(false);

    const onNavigate = (screen: string) => {
        if (screen === 'landing') router.push('/citizen');
        if (screen === 'result') router.push('/citizen/result');
    };

    useEffect(() => {
        // Simulate AI detection after 1 second
        const timer = setTimeout(() => {
            setIsScanning(true);
            setTimeout(() => {
                setDetections([
                    { label: "Road Hazard", top: 45, left: 35 },
                    { label: "Pothole Detected", top: 60, left: 30 },
                ]);
                setIsScanning(false);
            }, 1500);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleCapture = () => {
        const mockImage = "https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjQwOTA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080";

        if (onCapture) {
            onCapture(mockImage);
        }

        // In a real app, we would save the image to store here or pass it via URL/State
        // For now, we just navigate to result
        onNavigate("result");
    };

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center justify-between p-6">
                    <Button
                        onClick={() => onNavigate("landing")}
                        variant="ghost"
                        className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                        <X className="w-6 h-6" />
                    </Button>
                    <div className="text-white text-center">
                        <p className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#0F9D58]" />
                            Point. Tap. Done.
                        </p>
                    </div>
                    <div className="w-10" />
                </div>
            </div>

            {/* Camera View - Mock Preview */}
            <div className="flex-1 relative">
                {/* Mock camera preview using a city street image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjQwOTA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Camera preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* AI Detection Overlays */}
                {isScanning && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-md mx-auto px-6">
                            <div className="bg-[#0A66C2]/20 border-2 border-[#0A66C2] rounded-2xl p-4 backdrop-blur-sm animate-pulse">
                                <p className="text-white text-center">
                                    Scanning with AI...
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {detections.map((detection, index) => (
                    <div
                        key={index}
                        className="absolute animate-in fade-in slide-in-from-top-4 duration-500"
                        style={{
                            top: `${detection.top}%`,
                            left: `${detection.left}%`,
                        }}
                    >
                        <div className="bg-[#0A66C2] text-white px-4 py-2 rounded-full shadow-lg border-2 border-white/50">
                            <p className="whitespace-nowrap">
                                {detection.label}
                            </p>
                        </div>
                        {/* Bounding Box */}
                        <div className="absolute top-12 left-0 w-48 h-32 border-2 border-[#0A66C2] rounded-lg animate-pulse" />
                    </div>
                ))}

                {/* Scanning Grid Overlay */}
                {isScanning && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A66C2]/10 via-transparent to-[#0A66C2]/10 animate-pulse" />
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pb-8 pt-12">
                <div className="flex items-center justify-center gap-12">
                    {/* Voice Button */}
                    <button
                        onClick={() => onNavigate("result")}
                        className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                    >
                        <Mic className="w-6 h-6 text-white" />
                    </button>

                    {/* Shutter Button */}
                    <button
                        onClick={handleCapture}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform border-4 border-white/50"
                    >
                        <div className="w-16 h-16 bg-[#0A66C2] rounded-full" />
                    </button>

                    {/* Placeholder for symmetry */}
                    <div className="w-14 h-14" />
                </div>

                <p className="text-white text-center mt-6 opacity-70">
                    AI detection active
                </p>
            </div>
        </div>
    );
}