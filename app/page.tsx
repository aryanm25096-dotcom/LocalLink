'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative selection:bg-blue-500/30">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span className="text-xs font-medium text-slate-300">Powered by Gemini AI 2.5</span>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Skip the Call Center.<br />
          Solve the Issue.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-16 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          LocalLink uses AI to instantly route your everyday complaints—from potholes to power outages—directly to the right official. No hold times.
        </p>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">

          {/* Citizen Card */}
          <Link href="/citizen" className="group">
            <Card className="h-full bg-slate-900/40 border-slate-800 backdrop-blur-md hover:bg-slate-900/60 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">For Citizens</CardTitle>
                <CardDescription className="text-slate-400">Report an Issue</CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  Snap a photo. Our AI identifies the problem (Sanitation, Roads, Agri, Utilities) and alerts the exact department instantly.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] transition-all">
                  Launch App <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Official Card */}
          <Link href="/government" className="group">
            <Card className="h-full bg-slate-900/40 border-slate-800 backdrop-blur-md hover:bg-slate-900/60 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white">For Officials</CardTitle>
                <CardDescription className="text-slate-400">Agency Dashboard</CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  View real-time heatmaps, verified AI reports, and manage dispatch without the noise.
                </p>
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600">
                  Login <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

        </div>
      </div>
    </div>
  );
}
