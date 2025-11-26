import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, Mic, X, Zap, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

export function CameraScreen() {
  const router = useRouter();
  const addReport = useStore((state) => state.addReport);
  const webcamRef = useRef<Webcam>(null);
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
  const [detections, setDetections] = useState<cocoSsd.DetectedObject[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);

  // Load COCO-SSD model
  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.ready();
        const loadedModel = await cocoSsd.load();
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (err) {
        console.error("Failed to load TensorFlow model", err);
        setIsModelLoading(false);
      }
    };
    loadModel();
  }, []);

  // Run detection loop
  const runDetection = useCallback(async () => {
    if (
      model &&
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const predictions = await model.detect(video);
      setDetections(predictions);
    }
  }, [model]);

  useEffect(() => {
    const interval = setInterval(() => {
      runDetection();
    }, 500); // Run detection every 500ms
    return () => clearInterval(interval);
  }, [runDetection]);

  const handleCapture = async () => {
    if (!webcamRef.current) return;

    setIsAnalyzing(true);
    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) {
      setIsAnalyzing(false);
      return;
    }

    try {
      // Call Gemini API for analysis
      const response = await fetch("/api/analyze-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageSrc }),
      });

      let reportData;

      if (response.ok) {
        reportData = await response.json();
      } else {
        console.error("API Error:", await response.text());
        // Fallback if API fails
        reportData = {
          category: "Manual Review",
          severity: "medium",
          description: "Could not analyze image automatically. Submitted for manual review.",
          department: "General",
        };
      }

      addReport({
        category: reportData.category,
        location: "Detected Location (GPS)", // In a real app, use Geolocation API
        image: imageSrc,
        department: reportData.department,
        description: reportData.description,
        severity: reportData.severity,
      });

      router.push("/citizen/result");
    } catch (error) {
      console.error("Error capturing/analyzing:", error);
      // Fallback on error
      addReport({
        category: "Error Report",
        location: "Detected Location",
        image: imageSrc,
        department: "Support",
        description: "An error occurred during submission.",
        severity: "low",
      });
      router.push("/citizen/result");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between p-6">
          <Link href="/citizen">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </Link>
          <div className="text-white text-center">
            <p className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0F9D58]" />
              AI Powered
            </p>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative bg-black">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: "environment" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Loading State */}
        {isModelLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-white text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
              <p>Loading AI Model...</p>
            </div>
          </div>
        )}

        {/* Analyzing State */}
        {isAnalyzing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
            <div className="text-white text-center">
              <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4 text-[#0A66C2]" />
              <p className="text-lg font-medium">Analyzing Scene...</p>
              <p className="text-sm opacity-70">Identifying issues with Gemini AI</p>
            </div>
          </div>
        )}

        {/* Detection Overlays */}
        {!isAnalyzing && detections.map((detection, index) => (
          <div
            key={index}
            className="absolute border-2 border-[#0F9D58] rounded-lg transition-all duration-200"
            style={{
              left: detection.bbox[0],
              top: detection.bbox[1],
              width: detection.bbox[2],
              height: detection.bbox[3],
            }}
          >
            <span className="absolute -top-7 left-0 bg-[#0F9D58] text-white text-xs px-2 py-1 rounded-md">
              {detection.class} {Math.round(detection.score * 100)}%
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pb-8 pt-12">
        <div className="flex items-center justify-center gap-12">
          {/* Voice Button */}
          <button
            onClick={() => { }} // Placeholder for voice input
            className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <Mic className="w-6 h-6 text-white" />
          </button>

          {/* Shutter Button */}
          <button
            onClick={handleCapture}
            disabled={isAnalyzing || isModelLoading}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform border-4 border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-16 h-16 bg-[#0A66C2] rounded-full" />
          </button>

          {/* Placeholder for symmetry */}
          <div className="w-14 h-14" />
        </div>

        <p className="text-white text-center mt-6 opacity-70">
          {isModelLoading ? "Initializing..." : "Tap to analyze"}
        </p>
      </div>
    </div>
  );
}