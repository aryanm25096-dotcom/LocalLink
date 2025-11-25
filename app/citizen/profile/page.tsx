'use client';

import React from 'react';
import { User, Award, Settings } from 'lucide-react';
import { useStore } from '@/lib/store';
import Link from 'next/link';

export default function ProfilePage() {
    const { userPoints, credits } = useStore();

    return (
        <div className="min-h-screen bg-[#020617] text-white p-6 pb-24">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">My Profile</h1>
                <Settings className="text-slate-400" />
            </header>

            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-4 border-4 border-blue-500/20">
                    <User size={48} className="text-blue-400" />
                </div>
                <h2 className="text-xl font-bold">Citizen User</h2>
                <p className="text-slate-400 text-sm">Joined November 2025</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">{credits}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Green Credits</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">{userPoints}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Total Points</div>
                </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Award className="text-yellow-500" />
                    <h3 className="font-bold">Achievements</h3>
                </div>
                <p className="text-slate-400 text-sm text-center py-4">
                    Complete reports to earn badges!
                </p>
            </div>

            <div className="mt-8">
                <Link href="/citizen" className="block w-full py-3 bg-slate-800 rounded-xl text-center font-medium text-slate-300 hover:bg-slate-700 transition-colors">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
