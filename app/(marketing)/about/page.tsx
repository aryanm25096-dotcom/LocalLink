export default function AboutPage() {
    return (
        <div className="px-6 py-20 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                    Fixing Cities by <br /> Fixing Data Flow.
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    We believe that the biggest bottleneck in civic maintenance isn't a lack of resources, but a lack of real-time, actionable intelligence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">The Problem</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Citizens report issues through outdated channels. Officials are overwhelmed by noise. Problems persist, and trust erodes.
                    </p>
                </div>
                <div className="relative h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 font-mono">Legacy Systems</span>
                </div>

                <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl border border-blue-500/20 flex items-center justify-center md:order-last">
                    <span className="text-blue-400 font-mono">LocalLink AI</span>
                </div>
                <div className="space-y-6 md:order-3">
                    <h2 className="text-2xl font-bold text-white">The Solution</h2>
                    <p className="text-slate-400 leading-relaxed">
                        LocalLink bridges the gap. We use AI to validate reports instantly, route them to the exact department, and close the feedback loop with citizens.
                    </p>
                </div>
            </div>
        </div>
    );
}
