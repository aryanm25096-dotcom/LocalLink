'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useStore } from '@/lib/store';
import { Trophy, Star, Shield, Leaf } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ProfileCard() {
    const credits = useStore((state) => state.credits);

    const getRank = (points: number) => {
        if (points >= 500) return { title: 'Eco-Warrior', icon: Shield, color: 'text-emerald-500', next: 1000 };
        if (points >= 100) return { title: 'Guardian', icon: Star, color: 'text-blue-500', next: 500 };
        return { title: 'Observer', icon: Leaf, color: 'text-green-600', next: 100 };
    };

    const rank = getRank(credits);
    const progress = Math.min(100, (credits / rank.next) * 100);

    return (
        <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-none shadow-lg mb-6 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Trophy className="w-24 h-24" />
            </div>
            <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Green Credits</p>
                        <h2 className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                            {credits}
                        </h2>
                    </div>
                    <div className={`flex flex-col items-end ${rank.color}`}>
                        <rank.icon className="w-8 h-8 mb-1" />
                        <span className="font-bold text-sm">{rank.title}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                        <span>Progress to next rank</span>
                        <span>{credits} / {rank.next}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
