import { Leaf, Award, Users } from 'lucide-react';

export default function CommunityPage() {
    return (
        <div className="px-6 py-20 max-w-4xl mx-auto text-center">
            <div className="mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6">
                    <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Green Credits</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Civic duty shouldn't be a thankless job. Earn rewards for every verified report and redeem them for local benefits.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/5">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">10</div>
                    <p className="text-slate-400">Credits per Report</p>
                </div>
                <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/5">
                    <div className="text-4xl font-bold text-blue-400 mb-2">50</div>
                    <p className="text-slate-400">Credits for Verification</p>
                </div>
                <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/5">
                    <div className="text-4xl font-bold text-purple-400 mb-2">500</div>
                    <p className="text-slate-400">Credits for "Super Citizen" Badge</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Join the Leaderboard</h2>
                <p className="text-slate-400 mb-8">Compete with neighbors to see who can make the biggest impact on your city's cleanliness and safety.</p>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold transition-colors">
                    View Leaderboard
                </button>
            </div>
        </div>
    );
}
