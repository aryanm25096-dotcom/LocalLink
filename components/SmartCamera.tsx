'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Search, Leaf, Building2, Trash2, HelpCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useStore } from '@/lib/store';
import { toast } from 'sonner';
import VoiceInput from './citizen/VoiceInput';
import { Textarea } from '@/components/ui/textarea';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

type AnalysisResult = {
    category: 'Agriculture' | 'Civic_Infrastructure' | 'Sanitation' | 'Unknown';
    severity: number;
    description: string;
};

export default function SmartCamera() {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const { location, error: geoError, loading: geoLoading, getLocation } = useGeolocation();
    const addReport = useStore((state) => state.addReport);
    const [editedDescription, setEditedDescription] = useState('');
    const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
    const [isDetecting, setIsDetecting] = useState(false);

    useEffect(() => {
        if (result) {
            setEditedDescription(result.description);
        }
    }, [result]);

    // Load TensorFlow model on mount
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
    }, []);

    // Object detection function with proper scaling
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

        // Get the actual displayed size
        const displayWidth = video.clientWidth;
        const displayHeight = video.clientHeight;

        // Get the original video size
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Calculate scale factors
        const scaleX = displayWidth / videoWidth;
        const scaleY = displayHeight / videoHeight;

        // Set canvas size to match display size
        canvas.width = displayWidth;
        canvas.height = displayHeight;

        // Run detection
        const predictions = await model.detect(video);

        // Clear previous drawings
        ctx.clearRect(0, 0, displayWidth, displayHeight);

        // Draw bounding boxes with scaled coordinates
        predictions.forEach((prediction) => {
            // Apply scale factors to coordinates
            const x = prediction.bbox[0] * scaleX;
            const y = prediction.bbox[1] * scaleY;
            const width = prediction.bbox[2] * scaleX;
            const height = prediction.bbox[3] * scaleY;

            // Draw bounding box
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);

            // Draw label background
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(x, y - 20, width, 20);

            // Draw label text
            ctx.fillStyle = '#000000';
            ctx.font = '14px Arial';
            ctx.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                x + 4,
                y - 5
            );
        });

        if (isDetecting) {
            requestAnimationFrame(detect);
        }
    }, [model, isDetecting]);

    // Start/stop detection loop
    useEffect(() => {
        if (isDetecting && model) {
            detect();
        }
    }, [isDetecting, model, detect]);

    const handleVoiceResult = (text: string) => {
        setEditedDescription((prev) => prev ? `${prev} ${text}` : text);
    };

    const captureAndAnalyze = useCallback(async () => {
        if (!webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) return;

        setIsAnalyzing(true);
        setResult(null);

        try {
            const response = await fetch('/api/analyze-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: imageSrc }),
            });

            const data = await response.json();
            if (response.ok) {
                setResult(data);
                getLocation(); // Start fetching location immediately after analysis
            } else {
                console.error('Analysis failed:', data.error);
                toast.error('Analysis failed. Please try again.');
            }
        } catch (error) {
            console.error('Error calling API:', error);
            toast.error('Network error. Please check your connection.');
        } finally {
            setIsAnalyzing(false);
        }
    }, [webcamRef, getLocation]);

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

    const handleSubmit = () => {
        if (!result || !webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) return;

        const department = getDepartment(result.category, editedDescription);

        addReport({
            image: imageSrc,
            category: result.category,
            severity: result.severity,
            description: editedDescription,
            location: location,
            department: department,
        });

        toast.success(
            <div className="flex flex-col gap-1">
                <span className="font-bold">✅ Ticket Generated</span>
                <span className="text-xs">🚀 Auto-Routed to: <span className="font-bold text-blue-500">{department}</span></span>
            </div>
        );
        setResult(null); // Reset for next scan
        setEditedDescription('');
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Agriculture': return <Leaf className="w-6 h-6 text-green-500" />;
            case 'Civic_Infrastructure': return <Building2 className="w-6 h-6 text-blue-500" />;
            case 'Sanitation': return <Trash2 className="w-6 h-6 text-amber-500" />;
            default: return <HelpCircle className="w-6 h-6 text-slate-500" />;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Agriculture': return 'text-green-500 border-green-200 bg-green-50/80';
            case 'Civic_Infrastructure': return 'text-blue-500 border-blue-200 bg-blue-50/80';
            case 'Sanitation': return 'text-amber-500 border-amber-200 bg-amber-50/80';
            default: return 'text-slate-500 border-slate-200 bg-slate-50/80';
        }
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-slate-700/30 bg-slate-900 aspect-video md:aspect-video h-[calc(100dvh-200px)] md:h-auto">
            <Webcam
                ref={webcamRef}
                muted={true}
                screenshotFormat="image/jpeg"
                className="w-full h-full object-cover"
                videoConstraints={{ facingMode: 'environment' }}
            />

            {/* Canvas overlay for object detection */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />

            {/* Overlay UI */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6">

                {/* Object Detection Toggle */}
                <div className="absolute top-4 right-4 pointer-events-auto">
                    <Button
                        size="sm"
                        onClick={() => setIsDetecting(!isDetecting)}
                        disabled={!model}
                        className={`rounded-full ${isDetecting ? 'bg-green-500 hover:bg-green-600' : 'bg-white/20 hover:bg-white/30'} backdrop-blur-md border border-white/40 text-white font-bold shadow-lg transition-all`}
                    >
                        {!model ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Loading...
                            </>
                        ) : isDetecting ? (
                            'Detection ON'
                        ) : (
                            'Detection OFF'
                        )}
                    </Button>
                </div>

                {/* Result Card */}
                {result && (
                    <div className="mb-20 pointer-events-auto animate-in slide-in-from-bottom-10 fade-in duration-300">
                        <Card className={`backdrop-blur-md border shadow-lg ${getCategoryColor(result.category)}`}>
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="p-2 bg-white rounded-full shadow-sm">
                                    {getCategoryIcon(result.category)}
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold">{result.category.replace('_', ' ')}</CardTitle>
                                    <p className="text-sm font-medium opacity-80">Severity: {result.severity}/10</p>
                                </div>
                            </CardHeader>


                            <CardContent>
                                <div className="mb-4 relative">
                                    <Textarea
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                        className="min-h-[100px] pr-12 resize-none bg-white/50 dark:bg-slate-900/50"
                                        placeholder="Description..."
                                    />
                                    <div className="absolute bottom-2 right-2">
                                        <VoiceInput onResult={handleVoiceResult} />
                                    </div>
                                </div>

                                {/* Location Status */}
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    {geoLoading ? (
                                        <span className="flex items-center text-blue-600"><Loader2 className="w-4 h-4 mr-1 animate-spin" /> Locating...</span>
                                    ) : location ? (
                                        <span className="flex items-center text-green-600"><MapPin className="w-4 h-4 mr-1" /> GPS Locked</span>
                                    ) : (
                                        <span className="flex items-center text-red-500"><MapPin className="w-4 h-4 mr-1" /> Location Failed</span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Action Button */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-auto">
                    {!result ? (
                        <Button
                            size="lg"
                            onClick={captureAndAnalyze}
                            disabled={isAnalyzing}
                            className="h-14 px-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <Search className="w-6 h-6 mr-2" />
                                    Analyze Scene
                                </>
                            )}
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            onClick={handleSubmit}
                            disabled={geoLoading}
                            className="h-14 px-8 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95"
                        >
                            <CheckCircle2 className="w-6 h-6 mr-2" />
                            Submit Report
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
