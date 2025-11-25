
import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, Mic, X, Zap, Loader2, Search } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Webcam from 'react-webcam';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { toast } from 'sonner';
import { useStore } from '@/lib/store';
import { useGeolocation } from '@/hooks/useGeolocation';

interface NewCameraProps {
    onCapture?: (image: string) => void;
}

export default function NewCamera({
    onCapture = () => { },
}: NewCameraProps) {
    const router = useRouter();
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
    const [isDetecting, setIsDetecting] = useState(true);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [detections, setDetections] = useState<Array<{ label: string; score: number }>>([]);

    const addReport = useStore((state) => state.addReport);
    const { location, getLocation } = useGeolocation();

    const onNavigate = (screen: string) => {
        if (screen === 'landing') router.push('/citizen');
        if (screen === 'result') router.push('/citizen/result');
    };

    // Load TensorFlow model
    useEffect(() => {
        const loadModel = async () => {
            try {
                const loadedModel = await cocoSsd.load();
                setModel(loadedModel);
                console.log('Object detection model loaded');
            } catch (error) {
                console.error('Error loading model:', error);
            }
        };
        loadModel();
        getLocation(); // Start getting location immediately
    }, [getLocation]);

    // Object detection function
    const detect = useCallback(async () => {
        if (!webcamRef.current || !canvasRef.current || !model || !webcamRef.current.video) {
            return;
        }

        const video = webcamRef.current.video;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx || video.readyState !== 4) {
            return;
        }

        // Get video properties
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        const displayWidth = video.clientWidth;
        const displayHeight = video.clientHeight;

        // Set canvas dimensions to match display size
        canvas.width = displayWidth;
        canvas.height = displayHeight;

        // Calculate scaling factors
        const scaleX = displayWidth / videoWidth;
        const scaleY = displayHeight / videoHeight;

        // Run detection
        const predictions = await model.detect(video);

        // Update detections state for UI overlay
        const currentDetections = predictions.map(p => ({
            label: p.class,
            score: p.score
        }));
        setDetections(currentDetections);

        // Clear canvas
        ctx.clearRect(0, 0, displayWidth, displayHeight);

        // Draw bounding boxes
        predictions.forEach((prediction) => {
            const x = prediction.bbox[0] * scaleX;
            const y = prediction.bbox[1] * scaleY;
            const width = prediction.bbox[2] * scaleX;
            const height = prediction.bbox[3] * scaleY;

            // Draw box
            ctx.strokeStyle = '#0A66C2';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);

            // Draw label background
            ctx.fillStyle = '#0A66C2';
            const text = `${prediction.class} ${Math.round(prediction.score * 100)}%`;
            const textWidth = ctx.measureText(text).width;
            ctx.fillRect(x, y - 25, textWidth + 10, 25);

            // Draw label text
            ctx.fillStyle = '#ffffff';
            ctx.font = '16px Inter';
            ctx.fillText(text, x + 5, y - 7);
        });

        if (isDetecting) {
            requestAnimationFrame(detect);
        }
    }, [model, isDetecting]);

    // Start detection loop
    useEffect(() => {
        if (isDetecting && model) {
            detect();
        }
    }, [isDetecting, model, detect]);

    const getDepartment = (category: string, description: string) => {
        const desc = description.toLowerCase();
        if (category === 'Sanitation' || desc.includes('trash') || desc.includes('garbage') || desc.includes('waste')) return 'Sanitation Bureau';
        if (category === 'Civic_Infrastructure') {
            if (desc.includes('water') || desc.includes('leak') || desc.includes('pipe')) return 'Water Board';
            if (desc.includes('pothole') || desc.includes('crack') || desc.includes('road')) return 'Public Works Dept';
        }
        if (category === 'Agriculture' || desc.includes('plant') || desc.includes('crop') || desc.includes('leaf')) return 'Agriculture Extension';
        return 'General Inquiry';
    };

    const handleCapture = async () => {
        if (!webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) return;

        setIsAnalyzing(true);
        setIsDetecting(false); // Stop detection during analysis

        try {
            // Call analysis API
            const response = await fetch('/api/analyze-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: imageSrc }),
            });

            const data = await response.json();

            if (response.ok) {
                // Determine department
                const department = getDepartment(data.category, data.description || '');

                // Add report to store
                addReport({
                    image: imageSrc,
                    category: data.category,
                    severity: data.severity,
                    description: data.description || 'Issue detected by AI',
                    location: location,
                    department: department,
                });

                onCapture(imageSrc);
                onNavigate("result");
            } else {
                console.error('Analysis failed:', data.error);
                toast.error('Analysis failed. Please try again.');
                setIsDetecting(true); // Resume detection
            }
        } catch (error) {
            console.error('Error calling API:', error);
            toast.error('Network error. Please check your connection.');
            setIsDetecting(true); // Resume detection
        } finally {
            setIsAnalyzing(false);
        }
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
                            AI Vision Active
                        </p>
                    </div>
                    <div className="w-10" />
                </div>
            </div>

            {/* Camera View */}
            <div className="flex-1 relative overflow-hidden">
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                    videoConstraints={{ facingMode: 'environment' }}
                />

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                />

                {/* AI Loading State */}
                {!model && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center">
                            <Loader2 className="w-8 h-8 text-white animate-spin mb-2" />
                            <p className="text-white font-medium">Loading AI Model...</p>
                        </div>
                    </div>
                )}

                {/* Scanning Grid Overlay */}
                {isDetecting && model && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A66C2]/5 via-transparent to-[#0A66C2]/5" />
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(#0A66C2 1px, transparent 1px), linear-gradient(90deg, #0A66C2 1px, transparent 1px)',
                                backgroundSize: '100px 100px'
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pb-10 pt-20">
                <div className="flex items-center justify-center gap-12">
                    {/* Voice Button */}
                    <button
                        className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all border border-white/10"
                    >
                        <Mic className="w-6 h-6 text-white" />
                    </button>

                    {/* Shutter Button */}
                    <button
                        onClick={handleCapture}
                        disabled={!model || isAnalyzing}
                        className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all border-4 border-white/30 ${isAnalyzing ? 'bg-white/10 scale-95' : 'bg-white hover:scale-105'
                            }`}
                    >
                        {isAnalyzing ? (
                            <Loader2 className="w-10 h-10 text-white animate-spin" />
                        ) : (
                            <div className="w-20 h-20 bg-[#0A66C2] rounded-full border-4 border-white" />
                        )}
                    </button>

                    {/* Gallery Button (Placeholder) */}
                    <div className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all border border-white/10">
                        <Search className="w-6 h-6 text-white" />
                    </div>
                </div>

                <p className="text-white/70 text-center mt-6 text-sm font-medium">
                    {isAnalyzing ? 'Analyzing scene...' : 'Tap to analyze'}
                </p>
            </div>
        </div>
    );
}