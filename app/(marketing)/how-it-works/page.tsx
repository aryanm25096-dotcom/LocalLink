import { Camera, Brain, Send, MapPin, Award } from 'lucide-react';

export default function HowItWorksPage() {
    const steps = [
        {
            icon: Camera,
            title: "1. Take Photo",
            desc: "Open the app and snap a picture of the issue. No forms, no typing."
        },
        {
            icon: Brain,
            title: "2. AI Detects",
            desc: "Our vision model instantly identifies the problem (e.g., Pothole) and assesses severity."
        },
        {
            icon: Send,
            title: "3. Auto-Routed",
            desc: "The report is automatically sent to the correct department's dashboard."
        },
        {
            icon: MapPin,
            title: "4. Track Status",
            desc: "Get real-time updates as the issue moves from 'Reported' to 'Resolved'."
        },
        {
            icon: Award,
            title: "5. Earn Credits",
            desc: "Receive Green Credits for every verified report to redeem for rewards."
        }
    ];

    return (
        <div className="px-6 py-20 max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works</h1>
                <p className="text-slate-400">From chaos to clarity in 5 simple steps.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center space-y-4 group">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>

                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10 translate-x-1/2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
