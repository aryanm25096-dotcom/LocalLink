
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
        <div className="min-h-screen p-6 bg-slate-50/50 dark:bg-slate-950/50">
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Government Dashboard</h1>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold animate-pulse">
                        <Radio className="w-3 h-3" />
                        LIVE FEED
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">Export</Button>
                    <Button size="sm">New Report</Button>
                </div>
            </header>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="map">Map View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-4">
                    {/* Statistics Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                                <FileCheck className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{totalReports}</div>
                                <p className="text-xs text-muted-foreground">Real-time updates</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                                <BarChart3 className="h-4 w-4 text-amber-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-amber-600">{pendingReports}</div>
                                <p className="text-xs text-muted-foreground">Action required</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                                <Clock className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">{inProgressReports}</div>
                                <p className="text-xs text-muted-foreground">Being processed</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">{resolvedReports}</div>
                                <p className="text-xs text-muted-foreground">Completed</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Live Reports and Map */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="h-[600px] overflow-hidden flex flex-col">
                            <CardHeader>
                                <CardTitle>Live Reports</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto p-4">
                                <DashboardTable />
                            </CardContent>
                        </Card>

                        <Card className="h-[600px] overflow-hidden">
                            <CardHeader>
                                <CardTitle>Regional Distribution</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 h-[540px]">
                                <DashboardMap />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Map View Tab */}
                <TabsContent value="map" className="space-y-4">
                    <Card className="h-[700px] overflow-hidden">
                        <CardHeader>
                            <CardTitle>Interactive Map View</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-[640px]">
                            <DashboardMap />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* List View Tab */}
                <TabsContent value="list" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>All Reports</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <DashboardTable />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Analytics Tab */}
                <TabsContent value="analytics" className="space-y-4">
                    <AnalyticsCharts />
                </TabsContent>
            </Tabs>
        </div>
    );
}
