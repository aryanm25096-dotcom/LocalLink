import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Trash2, 
  Wrench, 
  Droplet, 
  Zap, 
  Shield, 
  TreePine,
  ChevronRight,
  X,
  TrendingUp
} from "lucide-react";
import { departments } from "../utils/mockData";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const departmentIcons: Record<string, any> = {
  "Sanitation": Trash2,
  "Roads": Wrench,
  "Water Works": Droplet,
  "Electricity": Zap,
  "Public Safety": Shield,
  "Parks & Gardens": TreePine,
};

const departmentColors: Record<string, string> = {
  "Sanitation": "#0A66C2",
  "Roads": "#1B76D1",
  "Water Works": "#0F9D58",
  "Electricity": "#FFC247",
  "Public Safety": "#D93025",
  "Parks & Gardens": "#34A853",
};

const performanceData = [
  { month: "Jul", resolved: 45, pending: 12 },
  { month: "Aug", resolved: 52, pending: 8 },
  { month: "Sep", resolved: 48, pending: 15 },
  { month: "Oct", resolved: 61, pending: 9 },
  { month: "Nov", resolved: 58, pending: 11 },
];

const workloadData = [
  { day: "Mon", issues: 12 },
  { day: "Tue", issues: 15 },
  { day: "Wed", issues: 9 },
  { day: "Thu", issues: 18 },
  { day: "Fri", issues: 14 },
  { day: "Sat", issues: 8 },
  { day: "Sun", issues: 6 },
];

const teamMembers = [
  { name: "John Miller", role: "Lead Officer", tickets: 23, avgTime: "16h" },
  { name: "Sarah Chen", role: "Officer", tickets: 19, avgTime: "18h" },
  { name: "Mike Johnson", role: "Officer", tickets: 15, avgTime: "20h" },
];

export function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState<any>(null);

  return (
    <div className="p-6">
      {selectedDepartment ? (
        // Department Detail Panel
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedDepartment(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl text-[#0F172A]">{selectedDepartment.name}</h1>
                <p className="text-sm text-[#0F172A]/60">Department Details</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl text-[#0F172A]">{selectedDepartment.issueCount}</div>
                <div className="text-xs text-[#0F172A]/60">Pending Issues</div>
              </div>
              <div className="text-right">
                <div className="text-2xl text-[#0F172A]">{selectedDepartment.avgLoad}%</div>
                <div className="text-xs text-[#0F172A]/60">Workload</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-[#F4F5F7]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tickets">Assigned Tickets</TabsTrigger>
              <TabsTrigger value="team">Team Members</TabsTrigger>
              <TabsTrigger value="performance">Performance Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-5 border-[#ECEDEF] shadow-sm">
                  <div className="text-sm text-[#0F172A]/60 mb-1">Total Issues</div>
                  <div className="text-3xl text-[#0F172A]">147</div>
                  <div className="text-xs text-[#0F9D58] mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% from last month
                  </div>
                </Card>
                <Card className="p-5 border-[#ECEDEF] shadow-sm">
                  <div className="text-sm text-[#0F172A]/60 mb-1">Resolved This Week</div>
                  <div className="text-3xl text-[#0F172A]">58</div>
                  <div className="text-xs text-[#0F9D58] mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +8% from last week
                  </div>
                </Card>
                <Card className="p-5 border-[#ECEDEF] shadow-sm">
                  <div className="text-sm text-[#0F172A]/60 mb-1">Avg Response Time</div>
                  <div className="text-3xl text-[#0F172A]">4.2h</div>
                  <div className="text-xs text-[#0F9D58] mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    15% faster
                  </div>
                </Card>
                <Card className="p-5 border-[#ECEDEF] shadow-sm">
                  <div className="text-sm text-[#0F172A]/60 mb-1">Team Members</div>
                  <div className="text-3xl text-[#0F172A]">12</div>
                  <div className="text-xs text-[#0F172A]/60 mt-2">8 active today</div>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 border-[#ECEDEF] shadow-sm">
                  <h3 className="text-lg text-[#0F172A] mb-4">Performance Trend</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ECEDEF" />
                      <XAxis dataKey="month" stroke="#0F172A60" />
                      <YAxis stroke="#0F172A60" />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="resolved" 
                        stroke="#0A66C2" 
                        strokeWidth={2}
                        dot={{ fill: "#0A66C2" }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pending" 
                        stroke="#FFC247" 
                        strokeWidth={2}
                        dot={{ fill: "#FFC247" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6 border-[#ECEDEF] shadow-sm">
                  <h3 className="text-lg text-[#0F172A] mb-4">Weekly Workload</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={workloadData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ECEDEF" />
                      <XAxis dataKey="day" stroke="#0F172A60" />
                      <YAxis stroke="#0F172A60" />
                      <Tooltip />
                      <Bar dataKey="issues" fill="#0A66C2" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tickets">
              <Card className="border-[#ECEDEF] shadow-sm">
                <div className="p-4 border-b border-[#ECEDEF]">
                  <h3 className="text-lg text-[#0F172A]">Active Tickets</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between p-4 border border-[#ECEDEF] rounded-lg hover:bg-[#F4F5F7]"
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={`https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=60&h=60&fit=crop`}
                            alt="Issue"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-sm text-[#0F172A]">Issue #{1000 + i}</p>
                            <p className="text-xs text-[#0F172A]/60">Assigned to John Miller</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card className="border-[#ECEDEF] shadow-sm">
                <div className="p-4 border-b border-[#ECEDEF]">
                  <h3 className="text-lg text-[#0F172A]">Team Members</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#F4F5F7] border-b border-[#ECEDEF]">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Name</th>
                        <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Role</th>
                        <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Active Tickets</th>
                        <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Avg Resolution Time</th>
                        <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member, index) => (
                        <tr 
                          key={member.name}
                          className={`border-b border-[#ECEDEF] ${
                            index % 2 === 0 ? 'bg-white' : 'bg-[#F4F5F7]/30'
                          }`}
                        >
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#0F172A]">{member.name}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#0F172A]/60">{member.role}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#0F172A]">{member.tickets}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-[#0F172A]/60">{member.avgTime}</span>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="ghost" size="sm">
                              View Profile
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="performance">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 border-[#ECEDEF] shadow-sm">
                  <h3 className="text-lg text-[#0F172A] mb-4">Efficiency Score</h3>
                  <div className="flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="text-6xl text-[#0A66C2] mb-2">87%</div>
                      <div className="text-sm text-[#0F172A]/60">Overall Performance</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-[#ECEDEF] shadow-sm">
                  <h3 className="text-lg text-[#0F172A] mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#0F172A]/60">First Response Time</span>
                        <span className="text-sm text-[#0F172A]">2.3h</span>
                      </div>
                      <div className="h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#0F9D58] w-[85%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#0F172A]/60">Resolution Rate</span>
                        <span className="text-sm text-[#0F172A]">92%</span>
                      </div>
                      <div className="h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#0A66C2] w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#0F172A]/60">Customer Satisfaction</span>
                        <span className="text-sm text-[#0F172A]">4.6/5</span>
                      </div>
                      <div className="h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
                        <div className="h-full bg-[#FFC247] w-[92%]" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        // Department Grid
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl text-[#0F172A]">Departments</h1>
            <p className="text-sm text-[#0F172A]/60">Manage all city departments and their performance</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = departmentIcons[dept.name];
              const color = departmentColors[dept.name];
              
              return (
                <Card 
                  key={dept.id}
                  className="p-6 border-[#ECEDEF] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedDepartment(dept)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#0F172A]/40" />
                  </div>

                  <h3 className="text-lg text-[#0F172A] mb-2">{dept.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#0F172A]/60">Pending Issues</span>
                      <span className="text-sm text-[#0F172A]">{dept.issueCount}</span>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#0F172A]/60">Avg. Load</span>
                        <span className="text-sm text-[#0F172A]">{dept.avgLoad}%</span>
                      </div>
                      <div className="h-2 bg-[#F4F5F7] rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all"
                          style={{ 
                            width: `${dept.avgLoad}%`,
                            backgroundColor: color
                          }}
                        />
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDepartment(dept);
                      }}
                    >
                      Open Panel
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
