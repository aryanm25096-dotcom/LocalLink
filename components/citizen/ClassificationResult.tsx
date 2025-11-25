import { CheckCircle, MapPin, Clock, ArrowLeft, Sparkles, AlertTriangle, ChevronRight, Loader2 } from 'lucide-react';
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
        <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
            {/* Full Width Header Image */}
            <div className="relative w-full h-[45vh]">
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
                    <div className="bg-red-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-in slide-in-from-top-4">
                        <AlertTriangle className="w-4 h-4 fill-white" />
                        <span className="font-bold text-sm tracking-wide uppercase">Reported Issue</span>
                    </div>
                </div>
            </div>

            {/* Overlapping Content Card */}
            <div className="relative -mt-10 px-4 pb-8 z-10">
                <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">

                    {/* Title Section */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium text-sm uppercase tracking-wider">AI Analysis Complete</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">{categoryName} Detected</h1>
                        <p className="text-slate-400">{report.description}</p>
                    </div>

                    {/* Confidence Score Visualization */}
                    <div className="mb-8 bg-slate-900/50 rounded-2xl p-5 border border-white/5">
                        <div className="flex justify-between items-end mb-3">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">AI Confidence Score</p>
                                <p className="text-2xl font-bold text-white">{confidence}% <span className="text-sm font-normal text-slate-500">Match</span></p>
                            </div>
                            <div className="text-right">
                                <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                                <span className="text-emerald-400 text-sm font-medium">Verified</span>
                            </div>
                        </div>
                        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-[98%] shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-2xl border border-white/5">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wide">Location</p>
                                <p className="text-white font-medium">
                                    {report.location ? `${report.location.lat.toFixed(4)}, ${report.location.lng.toFixed(4)}` : 'Location not available'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-2xl border border-white/5">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wide">Status</p>
                                <p className="text-white font-medium">Auto-Routed to {report.department}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Button
                        onClick={() => onNavigate('credits')}
                        className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 flex items-center justify-between px-8 group transition-all hover:scale-[1.02]"
                    >
                        <span>Track Status</span>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
