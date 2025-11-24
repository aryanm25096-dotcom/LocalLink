
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart3, Users, FileCheck, Activity, Radio, Map as MapIcon, List } from 'lucide-react';
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
                <div className="flex justify-between items-center">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="map">Map View</TabsTrigger>
                        <TabsTrigger value="list">List View</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>

                    <TabsList>
                        <TabsTrigger value="list_view" className="gap-2"><List className="w-4 h-4" /> List View</TabsTrigger>
                        <TabsTrigger value="map_view" className="gap-2"><MapIcon className="w-4 h-4" /> Map View</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                                <FileCheck className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{reports.length}</div>
                                <p className="text-xs text-muted-foreground">Real-time updates</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Farmers</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">8,540</div>
                                <p className="text-xs text-muted-foreground">+4% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Disbursed Funds</CardTitle>
                                <Activity className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$4.2M</div>
                                <p className="text-xs text-muted-foreground">+18% from last month</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{reports.filter(r => r.status === 'pending').length}</div>
                                <p className="text-xs text-muted-foreground">Action required</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="list_view" className="w-full">
                        <TabsContent value="list_view" className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className="h-[600px] overflow-hidden flex flex-col">
                                    <CardHeader>
                                        <CardTitle>Live Reports</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 overflow-y-auto p-4">
                                        <DashboardTable />
                                    </CardContent>
                                </Card>
                                <Card className="h-[600px]">
                                    <CardHeader>
                                        <CardTitle>Regional Distribution</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-center h-[500px] text-muted-foreground">
                                        Map Visualization Placeholder (Switch to Map View)
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="map_view" className="mt-0">
                            <Card className="h-[600px] overflow-hidden">
                                <CardContent className="p-0 h-full">
                                    <DashboardMap />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </TabsContent>

                <TabsContent value="applications" className="space-y-4">
                    <Card>
                        <CardContent className="p-0">
                            <DashboardTable />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-4">
                    <AnalyticsCharts />
                </TabsContent>
            </Tabs>
        </div>
    );
}
