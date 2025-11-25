import { AlertTriangle, Layers, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="px-6 py-20 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                    Fixing Cities by <br /> Fixing the Data Flow.
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    We believe that the biggest bottleneck in civic maintenance isn't a lack of resources, but a lack of real-time, actionable intelligence.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#0f172a] border border-red-500/20 p-8 rounded-3xl hover:border-red-500/50 transition-colors group">
                    <AlertTriangle className="w-10 h-10 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-3">Dispatcher Bottleneck</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Traditional call centers are overwhelmed. Critical reports get lost in a sea of noise and manual data entry.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-orange-500/20 p-8 rounded-3xl hover:border-orange-500/50 transition-colors group">
                    <Layers className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-3">Friction Barrier</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Complex forms and long hold times discourage citizens from reporting issues, leading to data gaps.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-blue-500/20 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group">
                    <Users className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-3">Citizen Apathy</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        When citizens don't see results, they stop caring. We close the feedback loop to rebuild trust.
                    </p>
                </div>
            </div>
        </div>
    );
}
