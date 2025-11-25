'use client';

import SmartCamera from '@/components/SmartCamera';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AIReportPage() {
    return (
        <div className="min-h-screen bg-black">
            <div className="h-[calc(100vh-64px)] relative">
                <SmartCamera />

                <div className="absolute top-4 left-4 z-50">
                    <Link href="/citizen">
                        <Button variant="ghost" size="icon" className="rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-md">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
