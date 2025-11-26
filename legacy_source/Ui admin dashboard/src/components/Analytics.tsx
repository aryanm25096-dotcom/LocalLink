import { Card } from "./ui/card";
import { 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  MapPin,
  Award,
  Sparkles
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from "recharts";
import { analyticsData } from "../utils/mockData";

const kpis = [
  {
    label: "Issue Trends (30 days)",
    value: "+23%",
    icon: TrendingUp,
    color: "#0A66C2"
  },
  {
    label: "Avg Resolution Time",
    value: "18h",
    icon: Clock,
    color: "#0F9D58"
  },
  {
    label: "Category Frequency",
    value: "Potholes",
    icon: AlertCircle,
    color: "#FFC247"
  },
  {
    label: "Top Hotspot",
    value: "Ward 9",
    icon: MapPin,
    color: "#1B76D1"
  },
  {
    label: "Dept. Efficiency",
    value: "87%",
    icon: Award,
    color: "#34A853"
  },
];

const pieColors = ["#0A66C2", "#1B76D1", "#0F9D58", "#FFC247", "#D93025", "#34A853"];

const radarData = [
  { metric: "Response Time", value: 85 },
  { metric: "Resolution Rate", value: 92 },
  { metric: "Citizen Satisfaction", value: 78 },
  { metric: "Coverage", value: 88 },
  { metric: "Efficiency", value: 87 },
];

const aiInsights = [
  {
    id: 1,
    text: "Trash complaints increase by 23% in Ward 9 on weekends.",
    impact: "high"
  },
  {
    id: 2,
    text: "Streetlight outages peak between 6 PM – 10 PM.",
    impact: "medium"
  },
  {
    id: 3,
    text: "Potholes cluster more in high-traffic zones near schools.",
    impact: "high"
  },
  {
    id: 4,
    text: "Water leak reports correlate with temperature drops.",
    impact: "medium"
  },
];

const impactColors: Record<string, string> = {
  high: "border-l-[#D93025]",
  medium: "border-l-[#FFC247]",
  low: "border-l-[#0F9D58]",
};

export function Analytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-[#0F172A]">Analytics & Insights</h1>
        <p className="text-sm text-[#0F172A]/60">Data-driven insights for better city management</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-5 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.label} className="p-5 border-[#ECEDEF] shadow-sm">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${kpi.color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color: kpi.color }} />
              </div>
              <p className="text-sm text-[#0F172A]/60 mb-1">{kpi.label}</p>
              <p className="text-2xl text-[#0F172A]">{kpi.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-2 gap-6">
        {/* Issue Trends Line Chart */}
        <Card className="p-6 border-[#ECEDEF] shadow-sm">
          <h2 className="text-lg text-[#0F172A] mb-4">Issue Trends (Last 30 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.issueTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEDEF" />
              <XAxis dataKey="date" stroke="#0F172A60" />
              <YAxis stroke="#0F172A60" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="issues" 
                stroke="#0A66C2" 
                strokeWidth={3}
                dot={{ fill: "#0A66C2", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Resolution Time Trend */}
        <Card className="p-6 border-[#ECEDEF] shadow-sm">
          <h2 className="text-lg text-[#0F172A] mb-4">Resolution Time Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.resolutionTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ECEDEF" />
              <XAxis dataKey="week" stroke="#0F172A60" />
              <YAxis stroke="#0F172A60" />
              <Tooltip />
              <Bar dataKey="hours" fill="#0F9D58" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-6">
        {/* Category Frequency */}
        <Card className="p-6 border-[#ECEDEF] shadow-sm">
          <h2 className="text-lg text-[#0F172A] mb-4">Category Frequency</h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analyticsData.categoryFrequency}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {analyticsData.categoryFrequency.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Department Efficiency Radar */}
        <Card className="p-6 border-[#ECEDEF] shadow-sm">
          <h2 className="text-lg text-[#0F172A] mb-4">Department Efficiency Score</h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#ECEDEF" />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar 
                  name="Performance" 
                  dataKey="value" 
                  stroke="#0A66C2" 
                  fill="#0A66C2" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Top 5 Hotspots */}
      <Card className="p-6 border-[#ECEDEF] shadow-sm">
        <h2 className="text-lg text-[#0F172A] mb-4">Top 5 Hotspots</h2>
        <div className="grid grid-cols-5 gap-4">
          {["Ward 9", "Downtown", "Ward 3", "Industrial Zone", "Park District"].map((location, index) => (
            <div 
              key={location}
              className="p-4 bg-[#F4F5F7] rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#0A66C2]" />
                <span className="text-sm text-[#0F172A]/60">#{index + 1}</span>
              </div>
              <p className="text-sm text-[#0F172A] mb-1">{location}</p>
              <p className="text-xs text-[#0F172A]/60">{45 - index * 5} issues</p>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Insights */}
      <Card className="p-6 border-[#ECEDEF] shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#0A66C2]" />
          <h2 className="text-lg text-[#0F172A]">AI-Generated Civic Insights</h2>
        </div>
        <div className="space-y-3">
          {aiInsights.map((insight) => (
            <div 
              key={insight.id}
              className={`p-4 bg-[#E8F0FE] rounded-lg border-l-4 ${impactColors[insight.impact]}`}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#0F172A]">{insight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
