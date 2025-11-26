import Link from 'next/link';
import { Leaf, Camera, History, User, MapPin, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export default function CitizenPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Citizen
                        </h1>
                        <p className="text-xs text-muted-foreground">Welcome back, Aryan</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                    </div>
                </div>
            </header>

            <main className="p-4 space-y-6">
                {/* Green Credits Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Leaf className="h-24 w-24" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 rounded-full bg-green-500/20">
                                <Leaf className="h-4 w-4 text-green-500" />
                            </div>
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">Green Credits</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-foreground">850</span>
                            <span className="text-sm text-muted-foreground">pts</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Top 5% of contributors this month</p>
                    </div>
                </div>

                {/* Quick Access Grid */}
                <div>
                    <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {/* Report Issue */}
                        <Link href="/citizen/report" className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-3 p-3 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                                <Camera className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">Report Issue</h3>
                            <p className="text-xs text-muted-foreground mt-1">Snap & submit via AI</p>
                        </Link>

                        {/* My History */}
                        <Link href="/citizen/history" className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-3 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                                <History className="h-6 w-6 text-blue-500" />
                            </div>
                            <h3 className="font-semibold text-foreground">My History</h3>
                            <p className="text-xs text-muted-foreground mt-1">Track your reports</p>
                        </Link>

                        {/* Nearby Issues */}
                        <Link href="/citizen/map" className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-3 p-3 rounded-lg bg-orange-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                                <MapPin className="h-6 w-6 text-orange-500" />
                            </div>
                            <h3 className="font-semibold text-foreground">Nearby</h3>
                            <p className="text-xs text-muted-foreground mt-1">View local issues</p>
                        </Link>

                        {/* Guidelines */}
                        <Link href="/citizen/guidelines" className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="mb-3 p-3 rounded-lg bg-purple-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                                <FileText className="h-6 w-6 text-purple-500" />
                            </div>
                            <h3 className="font-semibold text-foreground">Guidelines</h3>
                            <p className="text-xs text-muted-foreground mt-1">Rules & rewards</p>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity Preview */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Recent Activity</h2>
                        <Link href="/citizen/history" className="text-xs text-primary hover:underline flex items-center">
                            View All <ChevronRight className="h-3 w-3 ml-1" />
                        </Link>
                    </div>
                    <div className="rounded-xl bg-card border border-border p-4 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">Pothole on Main St.</h4>
                            <p className="text-xs text-muted-foreground">Reported 2 hours ago</p>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-xs font-medium">
                            Pending
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border/50 px-6 py-3 z-50">
                <div className="flex items-center justify-around">
                    <Link href="/citizen" className="flex flex-col items-center gap-1 text-primary">
                        <div className="p-1 rounded-lg bg-primary/10">
                            <div className="h-5 w-5 grid grid-cols-2 gap-0.5">
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                            </div>
                        </div>
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>

                    <Link href="/citizen/report" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Camera className="h-6 w-6" />
                        <span className="text-[10px] font-medium">Camera</span>
                    </Link>

                    <Link href="/citizen/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <User className="h-6 w-6" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
