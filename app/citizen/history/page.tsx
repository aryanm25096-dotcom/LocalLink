'use client';

import { useStore } from '@/lib/store';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HistoryPage() {
    const reports = useStore((state) => state.reports);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'resolved': return 'text-green-500 bg-green-100 border-green-200';
            case 'in-progress': return 'text-blue-500 bg-blue-100 border-blue-200';
            default: return 'text-amber-500 bg-amber-100 border-amber-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'resolved': return <CheckCircle2 className="w-4 h-4" />;
            case 'in-progress': return <Clock className="w-4 h-4" />;
            default: return <AlertCircle className="w-4 h-4" />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 pb-24">
            <header className="flex items-center gap-4 mb-8 pt-4">
                <Link href="/citizen">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">My Reports</h1>
            </header>

            <div className="max-w-md mx-auto space-y-6">
                {reports.length === 0 ? (
                    <div className="text-center py-12 opacity-50">
                        <Clock className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                        <p className="text-lg font-medium">No reports history yet</p>
                        <p className="text-sm">Your submitted reports will appear here</p>
                    </div>
                ) : (
                    reports.map((report, index) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-none shadow-md">
                                <div className="relative h-48">
                                    <img src={report.image} alt="Report" className="w-full h-full object-cover" />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border ${getStatusColor(report.status)}`}>
                                        {getStatusIcon(report.status)}
                                        <span className="uppercase">{report.status.replace('-', ' ')}</span>
                                    </div>
                                </div>
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg">{report.category.replace('_', ' ')}</h3>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {new Date(report.timestamp).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                                        {report.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 dark:bg-slate-900/50 p-2 rounded-lg">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {report.location ? (
                                            <span>{report.location.lat.toFixed(6)}, {report.location.lng.toFixed(6)}</span>
                                        ) : (
                                            <span>Location not available</span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
}
