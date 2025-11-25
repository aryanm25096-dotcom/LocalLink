import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col">
            {/* Simple Marketing Header */}
            <nav className="px-6 py-6 flex items-center justify-between max-w-6xl mx-auto w-full">
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    LocalLink AI
                </Link>
                <Link href="/" className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </nav>

            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
