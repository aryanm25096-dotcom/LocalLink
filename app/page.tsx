import Link from 'next/link';
import { Smartphone, Building2, ArrowRight, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
            LocalLink AI
          </span>
        </h1>
        <p className="text-xl text-slate-400 font-light tracking-wide">
          Civic Intelligence Dispatch Platform
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">

        {/* Citizen Portal Card */}
        <Link
          href="/citizen"
          className="group relative bg-[#0f172a]/50 border border-white/10 hover:border-amber-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

          <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8 text-amber-400" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Citizen Portal</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Report issues in seconds using AI camera. Track status updates and earn Green Credits.
              </p>
            </div>

            <div className="flex items-center text-amber-400 font-medium group-hover:translate-x-2 transition-transform">
              <span>Enter Portal</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </Link>

        {/* Government Dashboard Card */}
        <Link
          href="/government"
          className="group relative bg-[#0f172a]/50 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

          <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Government Dashboard</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Live operations center. Monitor AI analytics, manage dispatch, and resolve critical tickets.
              </p>
            </div>

            <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
              <span>Access Dashboard</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </div>
        </Link>

      </div>

      {/* Footer */}
      <div className="mt-20 text-slate-600 text-sm font-medium tracking-widest uppercase">
        Powered by Gemini 2.5 & Team Kalki
      </div>
    </div>
  );
}
