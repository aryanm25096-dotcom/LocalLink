import { Camera, Brain, Server, ArrowRight } from 'lucide-react';

export default function TechnologyPage() {
    return (
        <div className="px-6 py-20 max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">Our AI Brain</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gemini 2.5</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We leverage state-of-the-art multimodal AI to process visual data, understand context, and predict urban maintenance needs.
                </p>
            </div>

            {/* Pipeline Visualization */}
            <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-12 mb-20 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                <h2 className="text-2xl font-bold text-white mb-12 text-center">The Intelligence Pipeline</h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center z-10">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/50 mb-4 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                            <Camera className="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">Image Capture</h3>
                        <p className="text-xs text-slate-400 max-w-[150px]">High-res input from citizen devices</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-slate-600 hidden md:block" />

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center z-10">
                        <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/50 mb-4 shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
                            <Brain className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">Vision Model</h3>
                        <p className="text-xs text-slate-400 max-w-[150px]">Gemini 2.5 analyzes content & severity</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-slate-600 hidden md:block" />

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center z-10">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50 mb-4 shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
                            <Server className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h3 className="text-white font-bold mb-2">Smart Routing</h3>
                        <p className="text-xs text-slate-400 max-w-[150px]">Dispatched to specific agency API</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
