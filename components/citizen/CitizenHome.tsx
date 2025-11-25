
import { Camera, Mic, Droplets, Construction, Lightbulb, Trash2, PawPrint, Home, User, Leaf, ChevronRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export function LandingPage() {
    const router = useRouter();
    const credits = useStore((state) => state.credits);

    const onNavigate = (screen: string) => {
        if (screen === 'camera') router.push('/citizen/report');
        if (screen === 'credits') router.push('/citizen/credits');
    };

    const quickAccessCategories = [
        { icon: Construction, label: 'Pothole', color: 'bg-orange-500/20 text-orange-400' },
        { icon: Trash2, label: 'Garbage', color: 'bg-green-500/20 text-green-400' },
        { icon: Droplets, label: 'Water Leak', color: 'bg-blue-500/20 text-blue-400' },
        { icon: Lightbulb, label: 'Streetlight', color: 'bg-yellow-500/20 text-yellow-400' },
        { icon: PawPrint, label: 'Stray Animals', color: 'bg-purple-500/20 text-purple-400' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-20">
            {/* Header */}
            <header className="px-6 pt-8 pb-6 flex items-center justify-between bg-gradient-to-b from-[#0f172a] to-transparent sticky top-0 z-50 backdrop-blur-md">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Citizen Services
                    </h1>
                    <p className="text-slate-400 text-sm">Welcome back, Aryan</p>
                </div>
                <div
                    onClick={() => onNavigate('credits')}
                    className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full cursor-pointer hover:bg-emerald-500/20 transition-colors"
                >
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm">{credits}</span>
                </div>
            </header>

            <main className="px-6 space-y-8">
                {/* Primary Action */}
                <section>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-900/20 p-6">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10" />

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-2">Spot an Issue?</h2>
                            <p className="text-blue-100 mb-6 max-w-[80%]">
                                Report potholes, garbage, or leaks in 5 seconds using AI.
                            </p>

                            <Button
                                onClick={() => onNavigate('camera')}
                                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-6 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2 group"
                            >
                                <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Report in 5 Seconds
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Quick Access */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-slate-200">Quick Access</h3>
                        <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto text-sm">
                            View All
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {quickAccessCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => onNavigate('camera')}
                                className="flex flex-col items-center gap-3 p-4 bg-[#0f172a] border border-white/5 rounded-2xl hover:bg-[#1e293b] hover:border-blue-500/30 transition-all group"
                            >
                                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-medium text-slate-300">{category.label}</span>
                            </button>
                        ))}
                        <button className="flex flex-col items-center gap-3 p-4 bg-[#0f172a] border border-white/5 rounded-2xl hover:bg-[#1e293b] transition-all">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium text-slate-300">More</span>
                        </button>
                    </div>
                </section>

                {/* Recent Activity / Stats */}
                <section>
                    <h3 className="font-bold text-lg text-slate-200 mb-4">Your Impact</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0f172a] p-5 rounded-2xl border border-white/5">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">12</div>
                            <p className="text-slate-400 text-sm">Issues Resolved</p>
                        </div>
                        <div className="bg-[#0f172a] p-5 rounded-2xl border border-white/5">
                            <div className="text-3xl font-bold text-blue-400 mb-1">Top 5%</div>
                            <p className="text-slate-400 text-sm">City Rank</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-lg border-t border-white/5 px-6 py-4 pb-8">
                <div className="flex items-center justify-around">
                    <button className="flex flex-col items-center gap-1 text-blue-400">
                        <Home className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button
                        onClick={() => onNavigate('camera')}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-blue-900/50 border-4 border-[#020617]">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
                        <User className="w-6 h-6" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
