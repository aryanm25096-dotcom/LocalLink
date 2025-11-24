'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, CheckCircle2, Clock, AlertCircle, Filter } from "lucide-react";
import { useStore, Report } from "@/lib/store";
import { toast } from "sonner";
import { useState } from 'react';

export default function DashboardTable() {
    const { reports, updateStatus } = useStore();
    const [filter, setFilter] = useState('All');

    const handleStatusUpdate = (id: string, newStatus: Report['status']) => {
        updateStatus(id, newStatus);
        toast.success(`Report marked as ${newStatus.replace('-', ' ')}`);
    };

    const filteredReports = filter === 'All'
        ? reports
        : reports.filter(r => r.department === filter);

    const departments = ['All', 'Public Works Dept', 'Sanitation Bureau', 'Water Board', 'Agriculture Extension', 'General Inquiry'];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'resolved':
                return <Badge className="bg-green-500 hover:bg-green-600"><CheckCircle2 className="w-3 h-3 mr-1" /> Resolved</Badge>;
            case 'in-progress':
                return <Badge className="bg-blue-500 hover:bg-blue-600"><Clock className="w-3 h-3 mr-1" /> In Progress</Badge>;
            default:
                return <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200"><AlertCircle className="w-3 h-3 mr-1" /> Pending</Badge>;
        }
    };

    if (reports.length === 0) {
        return (
            <div className="p-8 text-center text-muted-foreground">
                No reports yet. Waiting for live data...
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                            <Filter className="w-4 h-4" />
                            Filter: {filter}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
                        {departments.map(dept => (
                            <DropdownMenuItem key={dept} onClick={() => setFilter(dept)}>
                                {dept}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Severity</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredReports.map((report) => (
                            <TableRow key={report.id} className={report.status === 'resolved' ? 'bg-green-50/50 dark:bg-green-900/10' : ''}>
                                <TableCell>
                                    <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100">
                                        <img src={report.image} alt="Report" className="w-full h-full object-cover" />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{report.category.replace('_', ' ')}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">
                                        {report.department || 'Unassigned'}
                                    </Badge>
                                </TableCell>
                                <TableCell className="max-w-[300px] truncate" title={report.description}>
                                    {report.description}
                                </TableCell>
                                <TableCell>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${report.severity > 7 ? 'bg-red-100 text-red-700' :
                                        report.severity > 4 ? 'bg-amber-100 text-amber-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                        {report.severity}/10
                                    </span>
                                </TableCell>
                                <TableCell>{getStatusBadge(report.status)}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, 'pending')}>
                                                Mark Pending
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, 'in-progress')}>
                                                Mark In Progress
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, 'resolved')}>
                                                Mark Resolved
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-end pt-4">
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                        if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
                            useStore.getState().resetStore();
                            toast.success('System reset complete.');
                        }
                    }}
                >
                    Reset Demo Data
                </Button>
            </div>
        </div >
    );
}

