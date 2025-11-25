import { CheckCircle, MapPin, Clock, ArrowLeft, Sparkles, AlertTriangle, ChevronRight, Loader2, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { useEffect, useState } from 'react';

interface ClassificationResultProps {
    capturedImage?: string;
}

export function ClassificationResult({ capturedImage: propImage }: ClassificationResultProps) {
    const router = useRouter();
    const reports = useStore((state) => state.reports);
    const [report, setReport] = useState(reports[0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // In a real app, we might pass the ID via query param. 
        // For now, we assume the latest report is the one we just created.
        if (reports.length > 0) {
            setReport(reports[0]);
        }
        setIsLoading(false);
    }, [reports]);

    const onNavigate = (screen: string) => {
        if (screen === 'camera') router.push('/citizen/report');
        if (screen === 'credits') router.push('/citizen/credits');
        if (screen === 'landing') router.push('/citizen');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
        );
    }

    if (!report) {
        return (
            <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white p-6">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
                <h2 className="text-xl font-bold mb-2">No Report Found</h2>
                <p className="text-slate-400 mb-6 text-center">We couldn't find the report details. Please try scanning again.</p>
                <Button onClick={() => onNavigate('camera')} className="bg-[#0A66C2] hover:bg-[#1B76D1]">
                    Return to Camera
                </Button>
            </div>
        );
    }

    // Use prop image if available (e.g. from direct prop usage), otherwise use report image
    const displayImage = propImage || report.image || '/placeholder.jpg';
    const categoryName = report.category.replace(/_/g, ' ');
    const confidence = 98; // Mock confidence as it's not in the store yet

    return (
        <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden pb-20">
            {/* Full Width Header Image */}
            <div className="relative w-full h-[40vh]">
                <ImageWithFallback
                    src={displayImage}
                    alt="Captured issue"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#020617]" />

                {/* Top Navigation */}
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
                    <Button
                        onClick={() => onNavigate('camera')}
                        variant="ghost"
                        className="bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-md"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                    <div className="bg-emerald-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-in slide-in-from-top-4">
                        <CheckCircle className="w-4 h-4 fill-white text-emerald-600" />
                        <span className="font-bold text-sm tracking-wide uppercase">Analysis Complete</span>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative -mt-10 px-4 z-10 space-y-4">

                {/* Main Result Card */}
                <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">AI Confidence: {confidence}%</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">{categoryName}</h1>
                    <p className="text-slate-400 mb-6">{report.description}</p>

                    {/* Timeline / Status */}
                    <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                        <div className="relative flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#0f172a] z-10 flex-shrink-0" />
                            <div>
                                <p className="text-white font-medium text-sm">Issue Reported</p>
                                <p className="text-slate-500 text-xs">Just now</p>
                            </div>
                        </div>
                        <div className="relative flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-[#0f172a] z-10 flex-shrink-0 animate-pulse" />
                            <div>
                                <p className="text-white font-medium text-sm">Auto-Routed to {report.department}</p>
                                <p className="text-slate-500 text-xs">Processing...</p>
                            </div>
                        </div>
                        <div className="relative flex gap-4 opacity-50">
                            <div className="w-6 h-6 rounded-full bg-slate-700 border-4 border-[#0f172a] z-10 flex-shrink-0" />
                            <div>
                                <p className="text-white font-medium text-sm">Estimated Resolution</p>
                                <p className="text-slate-500 text-xs">2-3 Days</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-4 shadow-lg flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wide">Location</p>
                        <p className="text-white font-medium text-sm">
                            {report.location ? `${report.location.lat.toFixed(4)}, ${report.location.lng.toFixed(4)}` : 'Location not available'}
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                        onClick={() => onNavigate('credits')}
                        className="h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-lg shadow-blue-900/20"
                    >
                        Track Status
                    </Button>
                    <Button
                        onClick={() => onNavigate('landing')}
                        variant="outline"
                        className="h-14 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Back Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
