import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { 
  Search, 
  UserPlus,
  MoreVertical,
  Shield,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { users } from "../utils/mockData";

const roles = ["Admin", "Officer", "Supervisor"];

const permissions = [
  { id: "view-tickets", label: "View Tickets" },
  { id: "edit-tickets", label: "Edit Tickets" },
  { id: "assign-officers", label: "Assign Officers" },
  { id: "create-departments", label: "Create Departments" },
  { id: "manage-users", label: "Manage Users" },
  { id: "access-heatmap", label: "Access Heatmap" },
  { id: "access-insights", label: "Access Insights" },
];

const roleColors: Record<string, string> = {
  Admin: "bg-[#D93025]/10 text-[#D93025]",
  Officer: "bg-[#0A66C2]/10 text-[#0A66C2]",
  Supervisor: "bg-[#FFC247]/10 text-[#FFC247]",
};

const statusColors: Record<string, string> = {
  Active: "bg-[#0F9D58]/10 text-[#0F9D58]",
  Suspended: "bg-[#0F172A]/10 text-[#0F172A]/60",
};

export function UsersRoles() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-[#0F172A]">Users & Roles</h1>
          <p className="text-sm text-[#0F172A]/60">Manage team members and their permissions</p>
        </div>
        <Button className="bg-[#0A66C2]">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Search Bar */}
      <Card className="p-4 border-[#ECEDEF] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F172A]/40" />
            <Input 
              placeholder="Search users by name, email, or department..." 
              className="pl-10"
            />
          </div>
          <select className="px-4 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
            <option>All Roles</option>
            {roles.map(role => (
              <option key={role}>{role}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
            <option>All Departments</option>
            <option>Sanitation</option>
            <option>Roads</option>
            <option>Water Works</option>
          </select>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {/* User List */}
        <Card className="col-span-2 border-[#ECEDEF] shadow-sm">
          <div className="p-4 border-b border-[#ECEDEF]">
            <h2 className="text-lg text-[#0F172A]">Team Members</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F4F5F7] border-b border-[#ECEDEF]">
                <tr>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Name</th>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Role</th>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Department</th>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Contact</th>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Status</th>
                  <th className="text-left px-6 py-3 text-xs text-[#0F172A]/60">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user.id}
                    className={`border-b border-[#ECEDEF] hover:bg-[#F4F5F7] ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F4F5F7]/30'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-xs">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm text-[#0F172A]">{user.name}</p>
                          <p className="text-xs text-[#0F172A]/60">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={`${roleColors[user.role]} border-0`}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-[#0F172A]/60">{user.department}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-[#0F172A]/60">
                        <div>{user.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={`${statusColors[user.status]} border-0`}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4 text-[#0F172A]/40" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4 text-[#0F172A]/40" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4 text-[#0F172A]/40" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Role-Based Permissions Editor */}
        <Card className="border-[#ECEDEF] shadow-sm h-fit">
          <div className="p-4 border-b border-[#ECEDEF]">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0A66C2]" />
              <h2 className="text-lg text-[#0F172A]">Role Permissions</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <label className="text-xs text-[#0F172A]/60 block mb-2">Select Role</label>
              <select className="w-full px-3 py-2 border border-[#ECEDEF] rounded-lg text-sm bg-white">
                {roles.map(role => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[#0F172A]/60">Permissions</p>
              {permissions.map((permission) => (
                <div 
                  key={permission.id}
                  className="flex items-center justify-between py-2"
                >
                  <label 
                    htmlFor={permission.id}
                    className="text-sm text-[#0F172A] cursor-pointer"
                  >
                    {permission.label}
                  </label>
                  <Switch id={permission.id} defaultChecked />
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-[#0A66C2]">
              Save Permissions
            </Button>
          </div>
        </Card>
      </div>

      {/* Role Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {roles.map((role) => (
          <Card key={role} className="p-5 border-[#ECEDEF] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <Badge className={`${roleColors[role]} border-0`}>
                {role}
              </Badge>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="w-4 h-4 text-[#0F172A]/40" />
              </Button>
            </div>
            <div className="text-3xl text-[#0F172A] mb-1">
              {users.filter(u => u.role === role).length}
            </div>
            <div className="text-xs text-[#0F172A]/60">
              Active {role.toLowerCase()}s
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
