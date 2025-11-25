import { Smartphone } from 'lucide-react';

export default function DownloadPage() {
    return (
        <div className="px-6 py-20 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Get LocalLink AI</h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Available now on iOS and Android. Start making a difference in your city today.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
                <button className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl hover:bg-slate-200 transition-colors">
                    <Smartphone className="w-8 h-8" />
                    <div className="text-left">
                        <div className="text-xs font-bold uppercase tracking-wider">Download on the</div>
                        <div className="text-xl font-bold">App Store</div>
                    </div>
                </button>

                <button className="flex items-center gap-4 bg-[#0f172a] border border-white/20 text-white px-8 py-4 rounded-2xl hover:bg-[#1e293b] transition-colors">
                    <Smartphone className="w-8 h-8" />
                    <div className="text-left">
                        <div className="text-xs font-bold uppercase tracking-wider">Get it on</div>
                        <div className="text-xl font-bold">Google Play</div>
                    </div>
                </button>
            </div>

            <div className="relative w-64 h-[500px] mx-auto bg-black border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
                <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                    App Preview
                </div>
            </div>
        </div>
    );
}
