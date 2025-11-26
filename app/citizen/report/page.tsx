'use client';

import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Webcam from 'react-webcam';
import { ArrowLeft, Camera, X, Zap, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function ReportPage() {
    const router = useRouter();
    const webcamRef = useRef<Webcam>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [analyzing, setAnalyzing] = useState(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setIsCapturing(true);
            setAnalyzing(true);

            // Simulate AI Analysis
            setTimeout(() => {
                setAnalyzing(false);
                // Store image in local storage or state management if needed
                // For now, just redirect to result
                router.push('/citizen/result');
            }, 2000);
        }
    }, [webcamRef, router]);

    return (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent">
                <Link href="/citizen" className="p-2 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/40 transition-colors">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
                <div className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10">
                    <span className="text-xs font-medium flex items-center gap-1">
                        <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        AI Powered
                    </span>
                </div>
                <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Camera Viewfinder */}
            <div className="flex-1 relative bg-black">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                    videoConstraints={{
                        facingMode: 'environment'
                    }}
                />

                {/* Analysis Overlay */}
                {analyzing && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                            <Loader2 className="h-12 w-12 text-primary animate-spin relative z-10" />
                        </div>
                        <p className="mt-4 text-lg font-medium animate-pulse">Analyzing Scene...</p>
                        <p className="text-sm text-white/60">Identifying issues and location</p>
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="bg-black/80 backdrop-blur-xl pb-10 pt-6 px-6">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                    <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <div className="h-6 w-6 rounded-sm border-2 border-white/50" />
                    </button>

                    <button
                        onClick={capture}
                        disabled={analyzing}
                        className="h-20 w-20 rounded-full border-4 border-white flex items-center justify-center relative group"
                    >
                        <div className="h-16 w-16 rounded-full bg-white group-active:scale-90 transition-transform duration-100" />
                    </button>

                    <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <X className="h-6 w-6 text-white" />
                    </button>
                </div>
                <p className="text-center text-xs text-white/40 mt-6">
                    Point at the issue and tap to capture
                </p>
            </div>
        </div>
    );
}
