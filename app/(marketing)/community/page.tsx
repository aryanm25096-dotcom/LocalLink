import { Leaf, Shield, Eye, Award, Zap } from 'lucide-react';

export default function CommunityPage() {
    const badges = [
        { icon: Eye, name: "Observer", desc: "Report 1 Issue", color: "text-blue-400", bg: "bg-blue-500/20" },
        { icon: Shield, name: "Guardian", desc: "Report 10 Issues", color: "text-purple-400", bg: "bg-purple-500/20" },
        { icon: Shield, name: "Protector", desc: "Report 50 Issues", color: "text-orange-400", bg: "bg-orange-500/20" },
        { icon: Zap, name: "Sentinel", desc: "Fastest Reporter", color: "text-yellow-400", bg: "bg-yellow-500/20" },
        { icon: Leaf, name: "Eco Warrior", desc: "Report 20 Garbage Issues", color: "text-emerald-400", bg: "bg-emerald-500/20" },
    ];

    return (
        <div className="px-6 py-20 max-w-4xl mx-auto text-center">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your City. Your Score.</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Earn recognition for making your neighborhood a better place.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
                {badges.map((badge, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-[#0f172a] border border-white/5 rounded-2xl hover:bg-[#1e293b] transition-colors">
                        <div className={`w-12 h-12 ${badge.bg} rounded-full flex items-center justify-center mb-3`}>
                            <badge.icon className={`w-6 h-6 ${badge.color}`} />
                        </div>
                        <h3 className="text-white font-bold text-sm">{badge.name}</h3>
                        <p className="text-xs text-slate-500">{badge.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12">
                <h2 className="text-3xl font-bold text-white mb-4">City Leaderboard</h2>
                <div className="space-y-4 max-w-md mx-auto mt-8">
                    {[1, 2, 3].map((rank) => (
                        <div key={rank} className="flex items-center justify-between bg-[#0f172a] p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-slate-500">#{rank}</span>
                                <div className="w-8 h-8 bg-slate-700 rounded-full" />
                                <span className="text-white font-medium">Citizen_{Math.floor(Math.random() * 9000) + 1000}</span>
                            </div>
                            <span className="text-emerald-400 font-bold">{1000 - (rank * 50)} pts</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
