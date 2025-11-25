import { BarChart3, Map, Layers, Ticket, TrendingUp, Settings, Bell, Search, Filter, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

import { useRouter } from 'next/navigation';

export function AdminDashboard() {
    const router = useRouter();
    const onNavigate = (screen: string) => {
        if (screen === 'warroom') router.push('/government/war-room');
    };
    const ticketData = [
        {
            id: 'TKT-1847',
            image: 'https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?w=200',
            category: 'Road Hazard',
            location: '1247 Market St',
            priority: 'High',
            status: 'In Progress',
            department: 'Public Works',
            time: '2h ago'
        },
        {
            id: 'TKT-1846',
            image: 'https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?w=200',
            category: 'Garbage',
            location: '890 Valencia St',
            priority: 'Medium',
            status: 'New',
            department: 'Sanitation',
            time: '4h ago'
        },
        {
            id: 'TKT-1845',
            image: 'https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?w=200',
            category: 'Streetlight',
            location: '1523 Mission St',
            priority: 'Low',
            status: 'Resolved',
            department: 'Utilities',
            time: '1d ago'
        },
    ];

    const chartData = [
        { name: 'Mon', reports: 24, resolved: 18 },
        { name: 'Tue', reports: 32, resolved: 28 },
        { name: 'Wed', reports: 28, resolved: 22 },
        { name: 'Thu', reports: 45, resolved: 38 },
        { name: 'Fri', reports: 38, resolved: 35 },
        { name: 'Sat', reports: 22, resolved: 20 },
        { name: 'Sun', reports: 18, resolved: 16 },
    ];

    return (
        <div className="min-h-screen bg-[#F5F5F7]">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-30">
                <div className="p-6">
                    <h2 className="text-[#0A66C2] mb-8">LocalLink Admin</h2>
                </div>
                <nav className="px-3 space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#E8F1FB] text-[#0A66C2] rounded-xl">
                        <BarChart3 className="w-5 h-5" />
                        <span>Overview</span>
                    </button>
                    <button
                        onClick={() => onNavigate('warroom')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <Map className="w-5 h-5" />
                        <span>Live Heatmap</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                        <Layers className="w-5 h-5" />
                        <span>Departments</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                        <Ticket className="w-5 h-5" />
                        <span>Tickets</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                        <TrendingUp className="w-5 h-5" />
                        <span>Analytics</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="ml-64">
                {/* Top Bar */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
                    <div className="flex items-center justify-between px-8 py-4">
                        <div className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search tickets, locations, departments..."
                                    className="w-full pl-12 pr-4 py-2 bg-[#F5F5F7] rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 ml-6">
                            <Button variant="ghost" className="relative p-2 hover:bg-gray-100 rounded-full">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </Button>
                            <div className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white">
                                <span>JD</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 space-y-8">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-xl flex items-center justify-center">
                                    <Ticket className="w-6 h-6 text-[#0A66C2]" />
                                </div>
                                <span className="text-green-500">↑ 12%</span>
                            </div>
                            <div className="text-[#0F172A] mb-1">247</div>
                            <p className="text-gray-600">Active Tickets</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-[#0F9D58]/10 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-[#0F9D58]" />
                                </div>
                                <span className="text-green-500">↑ 8%</span>
                            </div>
                            <div className="text-[#0F172A] mb-1">89%</div>
                            <p className="text-gray-600">Resolution Rate</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-orange-500" />
                                </div>
                                <span className="text-green-500">↓ 15%</span>
                            </div>
                            <div className="text-[#0F172A] mb-1">3.2 Days</div>
                            <p className="text-gray-600">Avg. Resolution Time</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <span className="text-red-500">↑ 3</span>
                            </div>
                            <div className="text-[#0F172A] mb-1">12</div>
                            <p className="text-gray-600">High Priority Today</p>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Weekly Activity */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-[#0F172A]">Weekly Activity</h3>
                                <Button variant="ghost" className="text-gray-600">
                                    <Filter className="w-4 h-4 mr-2" />
                                    Filter
                                </Button>
                            </div>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" stroke="#999" />
                                    <YAxis stroke="#999" />
                                    <Tooltip />
                                    <Bar dataKey="reports" fill="#0A66C2" radius={[8, 8, 0, 0]} />
                                    <Bar dataKey="resolved" fill="#0F9D58" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Response Time Trend */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-[#0F172A] mb-6">Response Time Trend</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" stroke="#999" />
                                    <YAxis stroke="#999" />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="resolved" stroke="#0A66C2" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="text-[#0F172A] mb-4">Real-Time Issue Map</h3>
                        <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1590393820812-8a2ed3ece96f?w=1200"
                                alt="City map"
                                className="w-full h-full object-cover opacity-80"
                            />
                            {/* Hotspot markers */}
                            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-ping" />
                            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full" />

                            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping" />
                            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-full" />

                            <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-yellow-500 rounded-full animate-ping" />
                            <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-yellow-500 rounded-full" />

                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                                        <span className="text-gray-700">High Priority</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full" />
                                        <span className="text-gray-700">Medium</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                        <span className="text-gray-700">Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tickets List */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#0F172A]">Recent Tickets</h3>
                                <Button variant="ghost" className="text-[#0A66C2]">
                                    View All →
                                </Button>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {ticketData.map((ticket) => (
                                <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                            <ImageWithFallback
                                                src={ticket.image}
                                                alt={ticket.category}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-1">
                                                <div>
                                                    <p className="text-[#0F172A] mb-1">
                                                        {ticket.id} • {ticket.category}
                                                    </p>
                                                    <p className="text-gray-600">{ticket.location}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full ${ticket.priority === 'High'
                                                    ? 'bg-red-100 text-red-700'
                                                    : ticket.priority === 'Medium'
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {ticket.priority}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className={`px-3 py-1 rounded-full ${ticket.status === 'Resolved'
                                                    ? 'bg-green-100 text-green-700'
                                                    : ticket.status === 'In Progress'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {ticket.status}
                                                </span>
                                                <span className="text-gray-500">
                                                    {ticket.department}
                                                </span>
                                                <span className="text-gray-400">
                                                    {ticket.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
