'use client';

import Link from 'next/link';
import { CheckCircle2, MapPin, ArrowRight, Share2, Home } from 'lucide-react';

export default function ResultPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Map Placeholder Area */}
            <div className="h-[45vh] bg-muted relative w-full overflow-hidden">
                {/* In a real app, this would be a map component */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.2090,28.6139,14,0/600x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                        <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 -mt-6 relative z-10 bg-background rounded-t-3xl border-t border-border/50 p-6 flex flex-col">
                <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-6" />

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-500/10 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Report Submitted!</h1>
                    <p className="text-muted-foreground">
                        Ticket #8291 has been created.
                    </p>
                </div>

                {/* Status Bar */}
                <div className="bg-card border border-border rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                            <p className="text-sm font-medium">Connaught Place, New Delhi</p>
                            <p className="text-xs text-muted-foreground">Lat: 28.6139, Long: 77.2090</p>
                        </div>
                    </div>
                    <div className="h-px bg-border my-3" />
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium">Infrastructure / Pothole</span>
                    </div>
                </div>

                <div className="flex-1" />

                {/* Actions */}
                <div className="space-y-3">
                    <Link href="/citizen" className="flex items-center justify-center w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                        Back to Home
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                            <Share2 className="h-4 w-4" />
                            Share
                        </button>
                        <Link href="/citizen/history" className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                            Track Status
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
