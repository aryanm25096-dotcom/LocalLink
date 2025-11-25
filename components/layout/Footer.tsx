import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-white/5 py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1: LocalLink */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">LocalLink AI</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Empowering citizens and governments to build better cities together through AI-driven civic intelligence.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Product */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
                        <li><Link href="/technology" className="hover:text-blue-400 transition-colors">Technology</Link></li>
                        <li><Link href="/community" className="hover:text-blue-400 transition-colors">Community & Credits</Link></li>
                        <li><Link href="/download" className="hover:text-blue-400 transition-colors">Download App</Link></li>
                    </ul>
                </div>

                {/* Column 3: Connect */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold">Connect</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
                        <li><Link href="/government" className="hover:text-blue-400 transition-colors">For Government</Link></li>
                        <li><Link href="/citizen" className="hover:text-blue-400 transition-colors">For Citizens</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                © 2025 LocalLink. Built for Smart Cities.
            </div>
        </footer>
    );
}
