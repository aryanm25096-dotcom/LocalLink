
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart3, FileCheck, Activity, Radio, CheckCircle2, Clock } from 'lucide-react';
import { useStore } from '@/lib/store';
import dynamic from 'next/dynamic';
import DashboardTable from '@/components/government/DashboardTable';
import AnalyticsCharts from '@/components/government/AnalyticsCharts';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const DashboardMap = dynamic(() => import('@/components/government/DashboardMap'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-xl animate-pulse">Loading Map...</div>
});

export default function GovernmentPage() {
    const reports = useStore((state) => state.reports);

    // Calculate real statistics
    const totalReports = reports.length;
    const pendingReports = reports.filter(r => r.status === 'pending').length;
    const inProgressReports = reports.filter(r => r.status === 'in-progress').length;
    const resolvedReports = reports.filter(r => r.status === 'resolved').length;

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden">
            {/* Hero Map Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <DashboardMap />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/90 pointer-events-none" />
            </div>

            <div className="relative z-10 p-6 space-y-6">
                <header className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Command Center</h1>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold animate-pulse">
                            <Radio className="w-3 h-3" />
                            LIVE FEED
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-slate-900/50 border-white/10 text-slate-300 hover:bg-slate-800 hover:text-white">Export Data</Button>
                        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20">New Report</Button>
                    </div>
                </header>

                {/* Floating Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-slate-900/60 backdrop-blur-md border-white/10 shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Total Reports</CardTitle>
                            <FileCheck className="h-4 w-4 text-slate-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">{totalReports}</div>
                            <p className="text-xs text-slate-400">Real-time updates</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900/60 backdrop-blur-md border-white/10 shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Pending Review</CardTitle>
                            <BarChart3 className="h-4 w-4 text-amber-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-amber-400">{pendingReports}</div>
                            <p className="text-xs text-slate-400">Action required</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900/60 backdrop-blur-md border-white/10 shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">In Progress</CardTitle>
                            <Clock className="h-4 w-4 text-cyan-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-cyan-400">{inProgressReports}</div>
                            <p className="text-xs text-slate-400">Being processed</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900/60 backdrop-blur-md border-white/10 shadow-xl">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-slate-300">Resolved</CardTitle>
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-400">{resolvedReports}</div>
                            <p className="text-xs text-slate-400">Completed</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="analytics" className="space-y-4">
                    <TabsList className="bg-slate-900/80 border border-white/10">
                        <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400">Trends</TabsTrigger>
                        <TabsTrigger value="map" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400">Live Locations</TabsTrigger>
                        <TabsTrigger value="list" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400">Ticket Management</TabsTrigger>
                    </TabsList>

                    {/* Analytics Tab */}
                    <TabsContent value="analytics" className="space-y-4">
                        <div className="p-6 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl">
                            <AnalyticsCharts />
                        </div>
                    </TabsContent>

                    {/* Map View Tab */}
                    <TabsContent value="map" className="space-y-4">
                        <Card className="h-[700px] overflow-hidden bg-slate-900/80 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-slate-100">Live Locations</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 h-[640px]">
                                <DashboardMap />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* List View Tab */}
                    <TabsContent value="list" className="space-y-4">
                        <Card className="bg-slate-900/80 backdrop-blur-md border-white/10">
                            <CardHeader>
                                <CardTitle className="text-slate-100">Ticket Management</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <DashboardTable />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
