import { Camera, Droplets, Lightbulb, Trash2, Home, User, Leaf, ChevronRight, FileText, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export function LandingPage() {
    const router = useRouter();
    const credits = useStore((state) => state.credits);

    const onNavigate = (screen: string) => {
        if (screen === 'camera') router.push('/citizen/report');
        if (screen === 'manual') router.push('/citizen/manual');
        if (screen === 'history') router.push('/citizen/history');
        if (screen === 'credits') router.push('/citizen/credits');
    };

    const quickAccessCategories = [
        { icon: TriangleAlert, label: 'Report Pothole', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
        { icon: Trash2, label: 'Garbage Pickup', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
        { icon: Droplets, label: 'Water Leak', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { icon: Lightbulb, label: 'Street Light', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-24 font-sans">
            {/* Header */}
            <header className="px-6 pt-8 pb-6 flex items-center justify-between sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
                <h1 className="text-2xl font-bold text-white">
                    Citizen Services
                </h1>
                <div
                    onClick={() => onNavigate('credits')}
                    className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full cursor-pointer hover:bg-emerald-500/20 transition-colors"
                >
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm">Green Credits: {credits || 120}</span>
                </div>
            </header>

            <main className="px-6 space-y-8 mt-6">

                {/* Quick Access Grid */}
                <section>
                    <h3 className="font-bold text-lg text-slate-200 mb-4">Quick Access</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {quickAccessCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => onNavigate('camera')}
                                className={`flex flex-col items-center justify-center gap-3 p-6 bg-slate-900 border ${category.border} rounded-2xl hover:bg-slate-800 transition-all group`}
                            >
                                <div className={`w-14 h-14 ${category.bg} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <category.icon className={`w-7 h-7 ${category.color}`} />
                                </div>
                                <span className="text-sm font-medium text-slate-300">{category.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Recent Activity List */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-slate-200">Your Reports</h3>
                        <Button onClick={() => onNavigate('history')} variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto text-sm">
                            View All
                        </Button>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-900 border border-white/5 rounded-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-200">Ticket #402 - Pothole</p>
                                    <p className="text-xs text-slate-400">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400">
                                    Processing
                                </span>
                                <ChevronRight className="w-4 h-4 text-slate-600" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#020617] border-t border-white/10 px-6 py-4 pb-8 z-50">
                <div className="flex items-center justify-between">
                    <button className="flex flex-col items-center gap-1 text-blue-400">
                        <Home className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button
                        onClick={() => onNavigate('camera')}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <Camera className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Camera</span>
                    </button>
                    <button
                        onClick={() => onNavigate('manual')}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <FileText className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Manual</span>
                    </button>
                    <button
                        onClick={() => onNavigate('credits')}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <User className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
