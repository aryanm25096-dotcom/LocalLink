'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, FileText, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useStore } from '@/lib/store';

export default function CitizenPage() {
  const credits = useStore((state) => state.credits);

  return (
    <div className="min-h-screen p-6 pb-32 space-y-8 bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 tracking-tight">LocalLink</h1>
          <p className="text-slate-400 mt-1">Empowering Citizens</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Award className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-400 font-bold">{credits} Credits</span>
        </div>
      </header>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 gap-6">

        {/* Report Issue Card (Primary) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <Link href="/citizen/report">
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group cursor-pointer shadow-2xl shadow-blue-900/10">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500/20 blur-[100px] group-hover:bg-blue-500/30 transition-all" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="p-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Report Issue</h2>
                  <p className="text-slate-300 text-lg max-w-xs mx-auto">Use AI to instantly analyze and report civic issues.</p>
                </div>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full px-8 shadow-lg">
                  Open Camera <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Offline Form Card (Secondary) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/citizen/manual">
            <Card className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">Offline Form</h3>
                  <p className="text-slate-400">Submit a detailed report manually</p>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Status Section: My Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-slate-300 mb-4 px-1">My Impact</h3>
            <Card className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-400 font-medium mb-1">Green Credits Score</p>
                  <p className="text-4xl font-bold text-white">{credits}</p>
                </div>
                <div className="h-16 w-16 rounded-full border-4 border-emerald-500/30 flex items-center justify-center">
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
