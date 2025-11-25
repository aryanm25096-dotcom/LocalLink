import Link from 'next/link';
import { Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10 opacity-30" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 contrast-150 mix-blend-overlay"></div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 max-w-6xl mx-auto w-full">

        {/* Header Section */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">Powered by Gemini AI 2.5</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Skip the Call Center. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Solve the Issue.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            LocalLink uses AI to instantly route your everyday complaints—from potholes to power outages—directly to the right official. No hold times.
          </p>
        </div>

        {/* Portal Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">

          {/* Citizen Card */}
          <div className="group relative bg-[#0f172a]/40 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)] hover:-translate-y-1 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">For Citizens</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Report an Issue</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">
                Snap a photo. AI identifies the problem and alerts the department instantly.
              </p>

              <Link href="/citizen" className="w-full">
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  Launch App
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Official Card */}
          <div className="group relative bg-[#0f172a]/40 border border-white/10 hover:border-purple-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)] hover:-translate-y-1 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                  <Shield className="w-7 h-7 text-purple-400" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">For Officials</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Agency Dashboard</h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1">
                View real-time heatmaps and manage dispatch without the noise.
              </p>

              <Link href="/government" className="w-full">
                <button className="w-full py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  Login
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-[#020617]/50 backdrop-blur-lg">
        <p className="text-slate-600 text-sm font-medium tracking-widest uppercase">
          Built by Team LocalLink © 2025
        </p>
      </footer>
    </div>
  );
}
