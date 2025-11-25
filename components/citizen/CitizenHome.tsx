import React from 'react';
import Link from 'next/link';
import { TriangleAlert, Trash2, Droplets, Lightbulb, ChevronRight } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CitizenHome() {
    const { reports } = useStore();

    const services = [
        { name: 'Report Pothole', icon: TriangleAlert, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
        { name: 'Garbage Pickup', icon: Trash2, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
        { name: 'Water Leak', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { name: 'Street Light', icon: Lightbulb, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-20 p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-8 pt-2">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Citizen Services</h1>
                    <p className="text-slate-400 text-sm">Welcome back, User</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-400 text-sm font-medium">120 Credits</span>
                </div>
            </header>

            {/* Quick Access Grid */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-slate-200">Quick Access</h2>
                <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                        <Link href="/citizen/report" key={service.name} className={`p-4 rounded-xl border ${service.border} ${service.bg} hover:brightness-110 transition-all active:scale-95 flex flex-col items-center justify-center gap-3 aspect-square`}>
                            <service.icon className={`w-8 h-8 ${service.color}`} />
                            <span className="font-medium text-slate-200 text-sm">{service.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Main CTA */}
            <Link href="/citizen/report" className="block w-full mb-8">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all">
                    Report Issue Now
                </button>
            </Link>

            {/* Recent Activity */}
            <section>
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-lg font-semibold text-slate-200">Recent Activity</h2>
                    <Link href="/citizen/history" className="text-sm text-blue-400 hover:text-blue-300">View All</Link>
                </div>

                <div className="space-y-3">
                    {reports.length === 0 ? (
                        <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl bg-slate-900/50">
                            <p className="text-slate-500">No reports yet</p>
                        </div>
                    ) : (
                        reports.slice(0, 3).map((report: any) => (
                            <div key={report.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-xl">
                                        📸
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-200">{report.category}</h3>
                                        <p className="text-xs text-slate-500">{new Date(report.timestamp).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-medium ${report.status === 'resolved' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                                    {report.status}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}
