"use client";

import {
  AlertCircle,
  CheckCircle2,
  Clock,
  TrendingUp,
  MoreVertical
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useStore } from "@/lib/store";
import { departments } from "./utils/mockData";

const statusColors: Record<string, string> = {
  "pending": "bg-[#1B76D1]/10 text-[#1B76D1]",
  "in-progress": "bg-[#0A66C2]/10 text-[#0A66C2]",
  "resolved": "bg-[#0F9D58]/10 text-[#0F9D58]",
  "rejected": "bg-[#D93025]/10 text-[#D93025]",
};

const priorityColors: Record<string, string> = {
  "low": "bg-[#0F9D58]/10 text-[#0F9D58]",
  "medium": "bg-[#FFC247]/10 text-[#FFC247]",
  "high": "bg-[#D93025]/10 text-[#D93025]",
};

const departmentStatusColors: Record<string, string> = {
  "low": "#0F9D58",
  "medium": "#FFC247",
  "high": "#D93025",
};

export function Dashboard() {
  const reports = useStore((state) => state.reports);

  const activeIssues = reports.filter(r => r.status !== 'resolved' && r.status !== 'rejected').length;
  const resolvedToday = reports.filter(r => r.status === 'resolved').length; // Simplified for now

  const kpis = [
    {
      label: "Active Issues",
      value: activeIssues.toString(),
      icon: AlertCircle,
      color: "#0A66C2"
    },
    {
      label: "Resolved Today",
      value: resolvedToday.toString(),
      icon: CheckCircle2,
      color: "#0F9D58"
    },
    {
      label: "Avg. Resolution Time",
      value: "18h",
      icon: Clock,
      color: "#FFC247"
    },
    {
      label: "Most Common Issue",
      value: "Potholes",
      icon: TrendingUp,
      color: "#1B76D1"
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.label} className="p-5 border-[#ECEDEF] shadow-sm">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-[#0F172A]/60">{kpi.label}</p>
                  <p className="text-3xl text-[#0F172A]">{kpi.value}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${kpi.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: kpi.color }} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Heatmap Preview & Department Load */}
      <div className="grid grid-cols-3 gap-6">
        {/* Heatmap Preview */}
        <Card className="col-span-2 p-6 border-[#ECEDEF] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-[#0F172A]">Issue Heatmap Preview</h2>
            <Button variant="ghost" size="sm" className="text-[#0A66C2]">
              View Full Map →
            </Button>
          </div>
          <div className="relative h-80 bg-[#F4F5F7] rounded-lg overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8F0FE] to-[#F4F5F7]">
              {/* Mock city grid */}
              <svg className="w-full h-full opacity-20">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0A66C2" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Hotspot markers */}
            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-[#D93025]/20 rounded-full blur-xl" />
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#D93025] rounded-full border-2 border-white shadow-lg" />

            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-[#FFC247]/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#FFC247] rounded-full border-2 border-white shadow-lg" />

            <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-[#D93025]/20 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-[#D93025] rounded-full border-2 border-white shadow-lg" />

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <div className="text-xs text-[#0F172A]/60 mb-2">Issue Density</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0F9D58] rounded-full" />
                <span className="text-xs text-[#0F172A]/60">Low</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-[#FFC247] rounded-full" />
                <span className="text-xs text-[#0F172A]/60">Medium</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-[#D93025] rounded-full" />
                <span className="text-xs text-[#0F172A]/60">High</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Department Load Cards */}
        <div className="space-y-4">
          <h2 className="text-lg text-[#0F172A]">Department Load</h2>
          <div className="grid grid-cols-1 gap-3">
            {departments.map((dept: { id: number; name: string; status: string; issueCount: number; avgLoad: number }) => (
              <Card key={dept.id} className="p-4 border-[#ECEDEF] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#0F172A]">{dept.name}</span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: departmentStatusColors[dept.status] }}
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl text-[#0F172A]">{dept.issueCount}</div>
                    <div className="text-xs text-[#0F172A]/60">Active Issues</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#0F172A]">{dept.avgLoad}%</div>
                    <div className="text-xs text-[#0F172A]/60">Load</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports Table */}
      <Card className="border-[#ECEDEF] shadow-sm">
        <div className="p-6 border-b border-[#ECEDEF]">
          <h2 className="text-lg text-[#0F172A]">Recent Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F4F5F7] border-b border-[#ECEDEF]">
              <tr>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Issue</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Category</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Location</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Priority</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Timestamp</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Status</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Assigned To</th>
                <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr
                  key={report.id}
                  className={`border-b border-[#ECEDEF] hover:bg-[#F4F5F7] ${index % 2 === 0 ? 'bg-white' : 'bg-[#F4F5F7]/30'
                    }`}
                >
                  <td className="px-6 py-4">
                    {report.image ? (
                      <img
                        src={report.image}
                        alt={report.category}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500">No Img</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#0F172A]">{report.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#0F172A]/60">{report.location}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={`${priorityColors[report.severity || 'low']} border-0`}>
                      {report.severity || 'low'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#0F172A]/60">{new Date(report.timestamp).toLocaleDateString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={`${statusColors[report.status]} border-0 capitalize`}>
                      {report.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#0F172A]/60">{report.department}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4 text-[#0F172A]/40" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
