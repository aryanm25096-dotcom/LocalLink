'use client';

import { useStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function AnalyticsCharts() {
    const reports = useStore((state) => state.reports);

    // Calculate Stats
    const totalReports = reports.length;
    const resolvedReports = reports.filter(r => r.status === 'resolved').length;
    const resolutionRate = totalReports > 0 ? Math.round((resolvedReports / totalReports) * 100) : 0;

    // Prepare Data for Pie Chart (By Department)
    const departmentCounts: { [key: string]: number } = {};
    reports.forEach(r => {
        const dept = r.department || 'Unassigned';
        departmentCounts[dept] = (departmentCounts[dept] || 0) + 1;
    });

    const pieData = Object.keys(departmentCounts).map(dept => ({
        name: dept,
        value: departmentCounts[dept],
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    // Prepare Data for Bar Chart (By Status)
    const statusCounts = {
        pending: reports.filter(r => r.status === 'pending').length,
        'in-progress': reports.filter(r => r.status === 'in-progress').length,
        resolved: reports.filter(r => r.status === 'resolved').length,
    };

    const barData = [
        { name: 'Pending', count: statusCounts.pending },
        { name: 'In Progress', count: statusCounts['in-progress'] },
        { name: 'Resolved', count: statusCounts.resolved },
    ];

    if (totalReports === 0) {
        return (
            <div className="text-center p-12 text-slate-500">
                <p>No data available for analytics yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500 uppercase">Total Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">{totalReports}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-500 uppercase">Resolution Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-green-600">{resolutionRate}%</div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Pie Chart */}
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Issues by Department</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[320px]">
                        <ResponsiveContainer width="99%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={(props: any) => `${props.name} ${(props.percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                    </CardContent>
                </Card>

                {/* Bar Chart */}
                <Card className="h-[400px]">
                    <CardHeader>
                        <CardTitle>Resolution Status</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[320px]">
                        <ResponsiveContainer width="99%" height="100%">
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
