
import { Trophy, CheckCircle, Flame, Star, Award, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

export function GreenCredits() {
    const router = useRouter();
    const onNavigate = (screen: string) => {
        if (screen === 'landing') router.push('/citizen');
    };
    const achievements = [
        {
            icon: CheckCircle,
            label: 'Issue Verified',
            description: 'Your report was confirmed by the city',
            credits: '+50',
            unlocked: true,
            date: 'Today'
        },
        {
            icon: Star,
            label: 'Issue Resolved',
            description: 'Problem fixed within 3 days',
            credits: '+100',
            unlocked: false,
            date: 'Pending'
        },
        {
            icon: Flame,
            label: 'Weekly Streak',
            description: '5 reports this week',
            credits: '+75',
            unlocked: true,
            date: '2 days ago'
        },
        {
            icon: Trophy,
            label: 'Top Reporter',
            description: 'Most reports in your neighborhood',
            credits: '+200',
            unlocked: false,
            date: 'Locked'
        },
    ];

    const currentLevel = 'Guardian';
    const nextLevel = 'Protector';
    const currentXP = 1240;
    const nextLevelXP = 2000;
    const progressPercent = (currentXP / nextLevelXP) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0F9D58]/10 via-white to-[#E8F1FB]">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => onNavigate('landing')}
                            variant="ghost"
                            className="p-2 hover:bg-[#E8F1FB] rounded-full"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <h2 className="text-[#0F172A]">Your Impact</h2>
                    </div>
                    <Button variant="ghost" className="p-2 hover:bg-[#E8F1FB] rounded-full">
                        <Share2 className="w-5 h-5 text-[#0A66C2]" />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
                {/* Hero Card - Badge & Credits */}
                <div className="relative bg-gradient-to-br from-[#0F9D58] to-[#0D8A4D] rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

                    <div className="relative z-10">
                        {/* Badge */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                                    <Award className="w-16 h-16 text-white" />
                                </div>
                                {/* Glow effect */}
                                <div className="absolute inset-0 w-32 h-32 bg-[#0F9D58] rounded-full animate-ping opacity-20" />
                            </div>
                            <div className="text-center">
                                <p className="opacity-90 mb-1">Current Level</p>
                                <h2 className="mb-1">{currentLevel}</h2>
                                <p className="opacity-75">Civic Champion</p>
                            </div>
                        </div>

                        {/* Credits Display */}
                        <div className="text-center mb-6">
                            <div className="text-[56px] leading-none tracking-tight mb-2">
                                {currentXP}
                            </div>
                            <p className="opacity-90">Green Credits</p>
                        </div>

                        {/* Progress to Next Level */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="opacity-90">{currentXP} / {nextLevelXP} XP</p>
                                <p className="opacity-90">{Math.round(progressPercent)}%</p>
                            </div>
                            <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-white rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <p className="opacity-75 text-center">
                                {nextLevelXP - currentXP} XP to {nextLevel}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                        <div className="text-[#0A66C2] mb-1">14</div>
                        <p className="text-gray-600">Reports</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                        <div className="text-[#0F9D58] mb-1">7</div>
                        <p className="text-gray-600">Resolved</p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
                        <div className="text-[#1B76D1] mb-1">92%</div>
                        <p className="text-gray-600">Impact</p>
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-[#0F172A] mb-4">Achievements</h3>
                    <div className="space-y-3">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-4 shadow-sm border-2 transition-all ${achievement.unlocked
                                    ? 'border-[#0F9D58]'
                                    : 'border-gray-200 opacity-60'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${achievement.unlocked
                                        ? 'bg-[#0F9D58] text-white'
                                        : 'bg-gray-100 text-gray-400'
                                        }`}>
                                        <achievement.icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-1">
                                            <p className="text-[#0F172A]">{achievement.label}</p>
                                            {achievement.unlocked && (
                                                <span className="text-[#0F9D58]">
                                                    {achievement.credits}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 mb-1">
                                            {achievement.description}
                                        </p>
                                        <p className="text-gray-400">
                                            {achievement.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leaderboard Preview */}
                <div className="bg-gradient-to-br from-[#E8F1FB] to-white rounded-2xl p-6 border border-[#0A66C2]/20">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#0F172A]">Your Neighborhood</h3>
                        <span className="text-[#0A66C2]">Rank #12</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        You're in the top 15% of civic reporters in Downtown SF
                    </p>
                    <Button
                        onClick={() => onNavigate('landing')}
                        className="w-full bg-[#0A66C2] hover:bg-[#1B76D1] text-white rounded-full"
                    >
                        View Full Leaderboard
                    </Button>
                </div>

                {/* Motivational Message */}
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                    <p className="text-gray-700 mb-2">
                        Keep going! Every report makes your community better.
                    </p>
                    <p className="text-gray-500">
                        You've helped resolve <span className="text-[#0F9D58]">7 issues</span> in your area
                    </p>
                </div>
            </div>
        </div>
    );
}
