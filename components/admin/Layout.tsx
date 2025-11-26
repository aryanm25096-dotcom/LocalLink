"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MapPin,
  Ticket,
  Building2,
  BarChart3,
  Sparkles,
  Users,
  Settings,
  Search,
  Bell,
  Moon,
  ChevronDown
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/heatmap", label: "Live Heatmap", icon: MapPin },
  { path: "/admin/tickets", label: "Tickets", icon: Ticket },
  { path: "/admin/departments", label: "Departments", icon: Building2 },
  { path: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/admin/users", label: "Users & Roles", icon: Users },
  { path: "/admin/settings", label: "Settings", icon: Settings },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#F4F5F7]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#ECEDEF] flex flex-col">
        {/* Logo */}
        <div className="h-16 border-b border-[#ECEDEF] flex items-center px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#0F172A]">LocalLink Admin</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${isActive
                  ? "bg-[#E8F0FE] text-[#0A66C2]"
                  : "text-[#0F172A]/60 hover:bg-[#F4F5F7] hover:text-[#0F172A]"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-[#ECEDEF] flex items-center justify-between px-6">
          {/* Search */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F172A]/40" />
            <Input
              placeholder="Search issues..."
              className="pl-10 border-[#ECEDEF] focus-visible:ring-[#0A66C2]"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <Button variant="ghost" size="icon" className="text-[#0F172A]/60 hover:text-[#0F172A]">
              <Moon className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="text-[#0F172A]/60 hover:text-[#0F172A] relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D93025] rounded-full" />
            </Button>

            {/* User Profile */}
            <div className="flex items-center gap-2 pl-3 border-l border-[#ECEDEF]">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-[#0A66C2] text-white text-sm">RW</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2">
                <div className="text-sm">
                  <div className="text-[#0F172A]">Robert Wilson</div>
                </div>
                <ChevronDown className="w-4 h-4 text-[#0F172A]/40" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
