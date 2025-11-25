import React from 'react';
import Link from 'next/link';
import { TriangleAlert, Trash2, Droplets, Lightbulb, Home, Camera, FileText, User } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CitizenHome() {
    const { reports, credits } = useStore();

    const services = [
        { name: 'Report Pothole', icon: TriangleAlert, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', href: '/citizen/report' },
        { name: 'Garbage Pickup', icon: Trash2, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', href: '/citizen/report' },
        { name: 'Water Leak', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', href: '/citizen/report' },
        { name: 'Street Light', icon: Lightbulb, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', href: '/citizen/report' },
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-24">
            {/* Header */}
            <header className="p-6 pb-2 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Citizen Services</h1>
                    <p className="text-slate-400 text-sm">Welcome back</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm font-medium">{credits || 0} Credits</span>
                </div>
            </header>

            {/* Quick Access Grid */}
            <section className="p-6">
                <h2 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Quick Access</h2>
                <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                        <Link href={service.href} key={service.name} className={`p-4 rounded-2xl border ${service.border} ${service.bg} flex flex-col items-center justify-center gap-3 aspect-square active:scale-95 transition-transform`}>
                            <div className={`p-3 rounded-full bg-white/5 ${service.color}`}>
                                <service.icon size={28} />
                            </div>
                            <span className="font-medium text-slate-200 text-sm text-center">{service.name}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Recent Activity */}
            <section className="px-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Recent Reports</h2>
                </div>
                <div className="space-y-3">
                    {reports.length === 0 ? (
                        <div className="p-6 text-center border border-dashed border-slate-800 rounded-xl">
                            <p className="text-slate-500 text-sm">No reports yet</p>
                        </div>
                    ) : (
                        reports.slice(0, 3).map((report: any) => (
                            <div key={report.id} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                                        <Camera size={18} className="text-slate-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm text-slate-200">{report.category}</h3>
                                        <p className="text-xs text-slate-500">{new Date(report.timestamp).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <span className="text-xs px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 font-medium capitalize">
                                    {report.status}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 w-full bg-[#020617]/90 backdrop-blur-xl border-t border-white/5 pb-6 pt-2 px-6 flex justify-between items-center z-50">
                <Link href="/citizen" className="flex flex-col items-center gap-1 text-blue-500">
                    <Home size={24} />
                    <span className="text-[10px] font-medium">Home</span>
                </Link>
                <Link href="/citizen/report" className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <Camera size={24} />
                    <span className="text-[10px] font-medium">Camera</span>
                </Link>
                <Link href="/citizen/manual" className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <FileText size={24} />
                    <span className="text-[10px] font-medium">Manual</span>
                </Link>
                <Link href="/citizen/profile" className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                    <User size={24} />
                    <span className="text-[10px] font-medium">Profile</span>
                </Link>
            </nav>
        </div>
    );
}
