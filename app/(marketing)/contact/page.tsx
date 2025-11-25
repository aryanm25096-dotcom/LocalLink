import { Button } from '@/components/ui/button';

export default function ContactPage() {
    return (
        <div className="px-6 py-20 max-w-xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Contact Support</h1>
                <p className="text-slate-400">
                    Having trouble with the app? Or just want to say hi? We're here to help.
                </p>
            </div>

            <form className="space-y-6 bg-[#0f172a] p-8 rounded-3xl border border-white/5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32" placeholder="How can we help?" />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-xl font-bold text-lg">
                    Send Message
                </Button>
            </form>
        </div>
    );
}
