import React from 'react';
import Link from 'next/link';
import { Camera, TriangleAlert, Trash2, Droplets, Lightbulb, Home, FileText, User } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CitizenHome() {
    const { reports, userPoints } = useStore();

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-24 font-sans">
            {/* Top Header */}
            <div className="px-6 pt-12 pb-6 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-white">Citizen<br />Services</h1>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium text-sm">{userPoints || 0} Credits</span>
                </div>
            </div>

            {/* Main CTA Button */}
            <div className="px-6 mb-8">
                <Link href="/citizen/report">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-5 rounded-2xl flex items-center justify-between shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-lg">Report in 5 Seconds</span>
                            <span className="text-blue-100 text-sm opacity-90">AI Auto-Detection Active</span>
                        </div>
                        <div className="bg-white/20 p-3 rounded-xl">
                            <Camera size={28} />
                        </div>
                    </button>
                </Link>
            </div>

            {/* Quick Access Grid */}
            <div className="px-6 mb-8">
                <h2 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">Quick Access</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/citizen/report" className="bg-[#0F172A] border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-800 transition-colors">
                        <div className="bg-amber-500/10 p-3 rounded-full text-amber-500"><TriangleAlert size={24} /></div>
                        <span className="font-medium text-slate-200">Pothole</span>
                    </Link>
                    <Link href="/citizen/report" className="bg-[#0F172A] border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-800 transition-colors">
                        <div className="bg-red-500/10 p-3 rounded-full text-red-500"><Trash2 size={24} /></div>
                        <span className="font-medium text-slate-200">Garbage</span>
                    </Link>
                    <Link href="/citizen/report" className="bg-[#0F172A] border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-800 transition-colors">
                        <div className="bg-blue-500/10 p-3 rounded-full text-blue-500"><Droplets size={24} /></div>
                        <span className="font-medium text-slate-200">Water</span>
                    </Link>
                    <Link href="/citizen/report" className="bg-[#0F172A] border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-800 transition-colors">
                        <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500"><Lightbulb size={24} /></div>
                        <span className="font-medium text-slate-200">Lights</span>
                    </Link>
                </div>
            </div>

            {/* Recent Activity List */}
            <div className="px-6">
                <h2 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">Recent Activity</h2>
                <div className="space-y-3">
                    {reports.slice(0, 3).map((report: any) => (
                        <div key={report.id} className="bg-[#0F172A] border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                                    <FileText size={18} />
                                </div>
                                <div>
                                    <div className="font-medium text-slate-200">{report.category}</div>
                                    <div className="text-xs text-slate-500">{new Date(report.timestamp).toLocaleDateString()}</div>
                                </div>
                            </div>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500 capitalize">{report.status}</span>
                        </div>
                    ))}
                    {reports.length === 0 && <div className="text-center text-slate-500 py-4 text-sm">No recent reports</div>}
                </div>
            </div>

            {/* Fixed Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-[#020617]/90 backdrop-blur-xl border-t border-slate-800 pb-8 pt-4 px-8 flex justify-between z-50">
                <Link href="/citizen" className="flex flex-col items-center gap-1 text-blue-500">
                    <Home size={24} />
                </Link>
                <Link href="/citizen/report" className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                    <Camera size={24} />
                </Link>
                <Link href="/citizen/manual" className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                    <FileText size={24} />
                </Link>
                <Link href="/citizen/profile" className="flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400">
                    <User size={24} />
                </Link>
            </div>
        </div>
    );
}
