import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Search,
  Filter,
  Eye,
  UserPlus,
  CheckCircle2,
  X,
  MapPin,
  Calendar,
  Sparkles
} from "lucide-react";
import { Input } from "./ui/input";
import { useStore } from "@/lib/store";

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
  "urgent": "bg-[#D93025] text-white",
};

export function Tickets() {
  const reports = useStore((state) => state.reports);
  const updateStatus = useStore((state) => state.updateStatus);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const handleStatusUpdate = (id: string, newStatus: 'pending' | 'in-progress' | 'resolved' | 'rejected') => {
    updateStatus(id, newStatus);
    if (selectedTicket && selectedTicket.id === id) {
      setSelectedTicket({ ...selectedTicket, status: newStatus });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Header & Filters */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-[#0F172A]">Tickets Management</h1>
            <Button className="bg-[#0A66C2]">
              Export Report
            </Button>
          </div>

          {/* Filters Bar */}
          <Card className="p-4 border-[#ECEDEF] shadow-sm">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F172A]/40" />
                <Input
                  placeholder="Search tickets..."
                  className="pl-10"
                />
              </div>

              <select className="px-3 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
                <option>All Categories</option>
                <option>Potholes</option>
                <option>Garbage</option>
                <option>Streetlights</option>
                <option>Water Leak</option>
              </select>

              <select className="px-3 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
                <option>All Departments</option>
                <option>Sanitation</option>
                <option>Roads</option>
                <option>Water Works</option>
                <option>Electricity</option>
              </select>

              <select className="px-3 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
                <option>All Priorities</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>

              <select className="px-3 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
                <option>All Status</option>
                <option>New</option>
                <option>Assigned</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </Card>

          {/* Tickets Table */}
          <Card className="border-[#ECEDEF] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F4F5F7] border-b border-[#ECEDEF]">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">ID</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Photo</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Category</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Description</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Department</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Priority</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Status</th>
                    <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((ticket, index) => (
                    <tr
                      key={ticket.id}
                      className={`border-b border-[#ECEDEF] hover:bg-[#F4F5F7] cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-[#F4F5F7]/30'
                        }`}
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#0F172A]">#{ticket.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src={ticket.image || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"}
                          alt={ticket.category}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#0F172A]">{ticket.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#0F172A]/60 max-w-xs truncate block">
                          {ticket.description || "No description"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#0F172A]/60">{ticket.department}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={`${priorityColors[ticket.severity || 'low']} border-0 capitalize`}>
                          {ticket.severity || 'low'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={`${statusColors[ticket.status]} border-0 capitalize`}>
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              setSelectedTicket(ticket);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              handleStatusUpdate(ticket.id, 'resolved');
                            }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>

      {/* Ticket Detail Drawer */}
      {selectedTicket && (
        <div className="fixed inset-y-0 right-0 w-[480px] bg-white border-l border-[#ECEDEF] shadow-2xl z-50 overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl text-[#0F172A]">Ticket #{selectedTicket.id}</h2>
                <p className="text-sm text-[#0F172A]/60">{selectedTicket.category}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedTicket(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Image */}
            <img
              src={selectedTicket.image || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"}
              alt={selectedTicket.category}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {/* Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <label className="text-xs text-[#0F172A]/60">Description</label>
                <p className="text-sm text-[#0F172A] mt-1">{selectedTicket.description || "No description provided."}</p>
              </div>

              {/* AI Classification */}
              <div className="p-4 bg-[#E8F0FE] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-sm text-[#0F172A]">AI Classification</span>
                </div>
                <p className="text-sm text-[#0F172A]/60">Analyzed by Gemini AI</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#0F172A]/60">Confidence</span>
                    <span className="text-[#0A66C2]">95%</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0A66C2]"
                      style={{ width: `95%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-xs text-[#0F172A]/60 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  Location
                </label>
                <div className="h-32 bg-[#F4F5F7] rounded-lg flex items-center justify-center">
                  <span className="text-sm text-[#0F172A]/60">{selectedTicket.location}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-[#ECEDEF]">
                <Button className="w-full bg-[#0A66C2]">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Assign Officer
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleStatusUpdate(selectedTicket.id, 'resolved')}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                    Mark Resolved
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleStatusUpdate(selectedTicket.id, 'rejected')}
                  >
                    <X className="w-4 h-4 mr-2 text-red-600" />
                    Reject
                  </Button>
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="text-xs text-[#0F172A]/60 block mb-2">Comments</label>
                <textarea
                  className="w-full p-3 text-sm border border-[#ECEDEF] rounded-lg resize-none"
                  rows={4}
                  placeholder="Add a comment..."
                />
                <Button size="sm" className="mt-2 bg-[#0A66C2]">
                  Add Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
