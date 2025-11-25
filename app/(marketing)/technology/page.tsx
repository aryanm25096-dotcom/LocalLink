import { Cpu, Eye, Lock, Zap } from 'lucide-react';

export default function TechnologyPage() {
    return (
        <div className="px-6 py-20 max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">Under the Hood</span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gemini 2.5</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We leverage state-of-the-art multimodal AI to process visual data, understand context, and predict urban maintenance needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0f172a] border border-blue-500/20 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group">
                    <Eye className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-3">Computer Vision</h3>
                    <p className="text-slate-400">
                        Real-time object detection identifies potholes, broken lights, and waste with 98% accuracy using TensorFlow.js and Gemini Vision.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-purple-500/20 p-8 rounded-3xl hover:border-purple-500/50 transition-colors group">
                    <Cpu className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-3">Edge Processing</h3>
                    <p className="text-slate-400">
                        Critical analysis happens on-device, ensuring privacy and speed even in low-connectivity zones.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-emerald-500/20 p-8 rounded-3xl hover:border-emerald-500/50 transition-colors group">
                    <Lock className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-3">Secure Infrastructure</h3>
                    <p className="text-slate-400">
                        End-to-end encryption for all reports. Citizen data is anonymized by default.
                    </p>
                </div>

                <div className="bg-[#0f172a] border border-amber-500/20 p-8 rounded-3xl hover:border-amber-500/50 transition-colors group">
                    <Zap className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-3">Predictive Analytics</h3>
                    <p className="text-slate-400">
                        We don't just fix problems; we predict them. Heatmaps help officials allocate resources before issues escalate.
                    </p>
                </div>
            </div>
        </div>
    );
}
