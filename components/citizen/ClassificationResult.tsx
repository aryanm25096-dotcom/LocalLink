import { CheckCircle, MapPin, Clock, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { useRouter } from 'next/navigation';

export function ClassificationResult() {
    const router = useRouter();
    // In a real implementation, we would get this from store or context
    const capturedImage = "https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjQwOTA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080";

    const onNavigate = (screen: string) => {
        if (screen === 'camera') router.push('/citizen/report');
        if (screen === 'credits') router.push('/citizen/credits');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E8F1FB] to-white">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Button
                        onClick={() => onNavigate('camera')}
                        variant="ghost"
                        className="p-2 hover:bg-[#E8F1FB] rounded-full"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <h2 className="text-[#0F172A]">Review Report</h2>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
                {/* Captured Image */}
                <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                        src={capturedImage}
                        alt="Captured issue"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#0F9D58] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        <span>AI Analyzed</span>
                    </div>
                </div>

                {/* AI Classification Card */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#0A66C2] to-[#1B76D1] p-6 text-white">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="opacity-90 mb-2">Category Detected</p>
                                <h3>Road Hazard — Deep Asphalt Crack</h3>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <p>High Priority</p>
                            </div>
                        </div>

                        {/* Confidence Bar */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="opacity-90">AI Confidence</p>
                                <p>91%</p>
                            </div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white rounded-full" style={{ width: '91%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-6">
                        {/* Auto-Routing */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#E8F1FB] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-[#0A66C2]" />
                            </div>
                            <div>
                                <p className="text-[#0F172A] mb-1">Auto-Routed To</p>
                                <p className="text-gray-600">Public Works Department</p>
                                <p className="text-gray-400 mt-1">Expected response: 2-3 business days</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#E8F1FB] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-[#0A66C2]" />
                            </div>
                            <div>
                                <p className="text-[#0F172A] mb-1">Location</p>
                                <p className="text-gray-600">1247 Market St, San Francisco</p>
                                <p className="text-gray-400 mt-1">Coordinates: 37.7749° N, 122.4194° W</p>
                            </div>
                        </div>

                        {/* Timestamp */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#E8F1FB] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-[#0A66C2]" />
                            </div>
                            <div>
                                <p className="text-[#0F172A] mb-1">Reported</p>
                                <p className="text-gray-600">Today at 2:34 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Model Attribution */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
                    <p className="text-center text-gray-500">
                        Identified using <span className="text-[#0A66C2]">Gemini Vision</span> •
                        Processed in 1.2s • Carbon neutral inference
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                    <Button
                        onClick={() => onNavigate('credits')}
                        className="w-full bg-[#0A66C2] hover:bg-[#1B76D1] text-white rounded-full py-6 shadow-lg"
                    >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Confirm & Send Report
                    </Button>
                    <Button
                        onClick={() => onNavigate('camera')}
                        variant="outline"
                        className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full py-6"
                    >
                        Retake Photo
                    </Button>
                </div>

                {/* Info Box */}
                <div className="bg-[#E8F1FB] rounded-2xl p-6">
                    <p className="text-gray-700 mb-2">
                        What happens next?
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-[#0A66C2] mt-1">•</span>
                            <span>Your report is verified by our AI system</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#0A66C2] mt-1">•</span>
                            <span>The city department receives instant notification</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#0A66C2] mt-1">•</span>
                            <span>You'll receive updates as work progresses</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#0A66C2] mt-1">•</span>
                            <span>Earn Green Credits when the issue is resolved</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
