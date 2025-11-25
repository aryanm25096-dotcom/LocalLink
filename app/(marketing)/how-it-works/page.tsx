import { Camera, Brain, CheckCircle, Smartphone } from 'lucide-react';

export default function HowItWorksPage() {
    const steps = [
        {
            icon: Camera,
            title: "Snap & Report",
            desc: "Open the app, point your camera at a pothole or garbage pile. No forms to fill."
        },
        {
            icon: Brain,
            title: "AI Analysis",
            desc: "Our computer vision model identifies the issue, assesses severity, and tags the location."
        },
        {
            icon: Smartphone,
            title: "Instant Dispatch",
            desc: "The report is routed to the nearest available field crew via the Government Dashboard."
        },
        {
            icon: CheckCircle,
            title: "Resolution",
            desc: "Once fixed, you get a notification and earn Green Credits for your contribution."
        }
    ];

    return (
        <div className="px-6 py-20 max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works</h1>
                <p className="text-slate-400">From chaos to clarity in 4 simple steps.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center space-y-4 group">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>

                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10 translate-x-1/2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
