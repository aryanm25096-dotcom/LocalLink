'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Camera, FileText, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        {
            name: 'Home',
            href: '/citizen',
            icon: Home,
            active: pathname === '/citizen',
        },
        {
            name: 'Report',
            href: '/citizen/report',
            icon: Camera,
            active: pathname === '/citizen/report',
        },
        {
            name: 'Manual',
            href: '/citizen/manual',
            icon: FileText,
            active: pathname === '/citizen/manual',
        },
    ];

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="flex items-center gap-6 p-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            'flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300',
                            item.active
                                ? 'bg-white/10 text-cyan-400 scale-110'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                        )}
                    >
                        <item.icon className={cn("w-6 h-6", item.active && "fill-cyan-400/20")} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
