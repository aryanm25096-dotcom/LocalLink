import { RoleCard } from "./role-card";
import { Users, Building2 } from "lucide-react";

export function LaunchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#111827] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="absolute inset-0 bg-network-nodes opacity-30"></div>

            {/* Top Bar */}
            <header className="relative z-10 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <div className="text-white text-xl">L</div>
                    </div>
                    <span className="text-[#F9FAFB] tracking-tight">LocalLink</span>
                </div>
                <a
                    href="#"
                    className="text-sm text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                >
                    Back to Home
                </a>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
                {/* Hero Text */}
                <div className="text-center mb-12 max-w-3xl">
                    <h1 className="text-[#F9FAFB] mb-4">
                        Choose Your LocalLink Experience
                    </h1>
                    <h4 className="text-[#94A3B8]">
                        Citizens and City Officials access their dashboards from here.
                    </h4>
                </div>

                {/* Role Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mb-16">
                    <RoleCard
                        icon={<Users className="w-8 h-8" />}
                        title="I'm a Citizen"
                        description="Report issues, track progress, and earn Green Credits for helping your city."
                        buttonText="Open Citizen Dashboard"
                        buttonHint="Takes you to citizen.locallink dashboard"
                        glowColor="cyan"
                        href="/citizen"
                    />

                    <RoleCard
                        icon={<Building2 className="w-8 h-8" />}
                        title="I'm a City Official"
                        description="View live heatmaps, manage tickets, and coordinate departments in real-time."
                        buttonText="Open Admin Dashboard"
                        buttonHint="Takes you to admin.locallink dashboard"
                        glowColor="purple"
                        href="/admin"
                    />
                </div>

                {/* Coming Soon Section */}
                <div className="w-full max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#334155] to-transparent"></div>
                        <span className="text-sm text-[#64748B] tracking-wide">Coming Soon</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#334155] to-transparent"></div>
                    </div>

                    <div className="glass-panel rounded-2xl p-8">
                        <h3 className="text-[#F9FAFB] mb-2 text-center">
                            Sign in with your LocalLink account (coming soon)
                        </h3>
                        <p className="text-sm text-[#94A3B8] mb-6 text-center">
                            In future, LocalLink will automatically detect your role (Citizen or Official) and redirect you to the correct dashboard.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
                                <input
                                    type="email"
                                    disabled
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/50 border border-[#1E293B] text-[#64748B] placeholder:text-[#475569] cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[#94A3B8] mb-2">Password</label>
                                <input
                                    type="password"
                                    disabled
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A]/50 border border-[#1E293B] text-[#64748B] placeholder:text-[#475569] cursor-not-allowed"
                                />
                            </div>

                            <button
                                disabled
                                className="w-full py-3 rounded-lg bg-[#1E293B] text-[#64748B] cursor-not-allowed"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center">
                <div className="inline-block glass-pill px-6 py-3 rounded-full">
                    <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                        Made with the help of AI
                    </p>
                    <p className="text-sm text-[#64748B]">
                        Team LocalLink · © 2025
                    </p>
                </div>
            </footer>
        </div>
    );
}
