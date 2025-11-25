import { Camera, Mic, Droplets, Construction, Lightbulb, Trash2, PawPrint, Home, User, Leaf, ChevronRight, Bell, Clock, FileText, MapPin } from 'lucide-react';
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
        { icon: Construction, label: 'Pothole', color: 'bg-orange-500/20 text-orange-400' },
        { icon: Trash2, label: 'Garbage', color: 'bg-green-500/20 text-green-400' },
        { icon: Droplets, label: 'Water Leak', color: 'bg-blue-500/20 text-blue-400' },
        { icon: Lightbulb, label: 'Streetlight', color: 'bg-yellow-500/20 text-yellow-400' },
        { icon: PawPrint, label: 'Stray Animals', color: 'bg-purple-500/20 text-purple-400' },
        { icon: Mic, label: 'Noise', color: 'bg-pink-500/20 text-pink-400' },
    ];

    const recentActivity = [
        { id: '#1234', type: 'Pothole', status: 'Processing', time: '2h ago', color: 'text-orange-400' },
        { id: '#1230', type: 'Garbage', status: 'Resolved', time: '1d ago', color: 'text-green-400' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-24 font-sans">
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

                {/* Quick Access Grid */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-slate-200">Quick Access</h3>
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
                    </div>
                </section>

                {/* Recent Activity List */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-slate-200">Recent Activity</h3>
                        <Button onClick={() => onNavigate('history')} variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto text-sm">
                            View All
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {recentActivity.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-[#0f172a] border border-white/5 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                                        <FileText className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-200">{item.type} <span className="text-slate-500 text-xs">({item.id})</span></p>
                                        <p className="text-xs text-slate-400">{item.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.status === 'Resolved' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                        {item.status}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-slate-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 pb-8 z-50">
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
                        onClick={() => onNavigate('history')}
                        className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <Clock className="w-6 h-6" />
                        <span className="text-[10px] font-medium">History</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
