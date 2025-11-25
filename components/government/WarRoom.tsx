import { Activity, AlertTriangle, Zap, TrendingUp, MapPin, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useRouter } from 'next/navigation';

export function WarRoom() {
    const router = useRouter();
    const onNavigate = (screen: string) => {
        if (screen === 'admin') router.push('/government');
    };
    const heatmapData = [
        { time: '00:00', density: 12, incidents: 3 },
        { time: '04:00', density: 8, incidents: 2 },
        { time: '08:00', density: 45, incidents: 12 },
        { time: '12:00', density: 68, incidents: 18 },
        { time: '16:00', density: 82, incidents: 22 },
        { time: '20:00', density: 54, incidents: 14 },
        { time: '24:00', density: 28, incidents: 7 },
    ];

    const departmentEfficiency = [
        { name: 'Public Works', efficiency: 94, active: 42, avg: '2.1 days' },
        { name: 'Sanitation', efficiency: 88, active: 28, avg: '1.8 days' },
        { name: 'Utilities', efficiency: 91, active: 18, avg: '3.2 days' },
        { name: 'Parks & Rec', efficiency: 76, active: 12, avg: '4.5 days' },
    ];

    const predictiveAlerts = [
        {
            area: 'Mission District',
            type: 'Pothole Cluster',
            risk: 'High',
            prediction: '+15 reports expected',
            icon: AlertTriangle,
            color: 'text-red-400'
        },
        {
            area: 'Downtown',
            type: 'Garbage Overflow',
            risk: 'Medium',
            prediction: 'Peak at 6 PM',
            icon: Activity,
            color: 'text-orange-400'
        },
        {
            area: 'SOMA',
            type: 'Streetlight Outages',
            risk: 'Low',
            prediction: 'Weather related',
            icon: Zap,
            color: 'text-yellow-400'
        },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] text-white">
            {/* Header */}
            <header className="border-b border-gray-800 bg-[#1E293B]">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => onNavigate('admin')}
                            variant="ghost"
                            className="p-2 hover:bg-gray-800 rounded-full text-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <div>
                            <h1 className="text-white mb-1">City Operations War Room</h1>
                            <p className="text-gray-400">Real-time civic intelligence platform</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-green-400">All Systems Operational</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400">Last Updated</p>
                            <p className="text-white">Just now</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="p-8 space-y-6">
                {/* Top KPIs - Futuristic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#0A66C2]/30 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#0A66C2]/20 border border-[#0A66C2]/40 rounded-xl flex items-center justify-center">
                                <Activity className="w-6 h-6 text-[#0A66C2]" />
                            </div>
                            <span className="text-[#0A66C2] text-2xl">↑</span>
                        </div>
                        <div className="text-white text-3xl mb-2">247</div>
                        <p className="text-gray-400">Active Incidents</p>
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[#0A66C2] w-3/4 rounded-full" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-green-500/30 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                            </div>
                            <span className="text-green-400 text-2xl">↑</span>
                        </div>
                        <div className="text-white text-3xl mb-2">94%</div>
                        <p className="text-gray-400">Resolution Rate</p>
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[94%] rounded-full" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <span className="text-purple-400 text-2xl">⚡</span>
                        </div>
                        <div className="text-white text-3xl mb-2">2.8h</div>
                        <p className="text-gray-400">Avg. Response Time</p>
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-1/2 rounded-full" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-red-500/30 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-red-400" />
                            </div>
                            <span className="text-red-400 text-2xl">!</span>
                        </div>
                        <div className="text-white text-3xl mb-2">18</div>
                        <p className="text-gray-400">Critical Alerts</p>
                        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-1/3 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Large Map Section */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-white">Live City Heatmap</h2>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    className="text-[#0A66C2] hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-xl"
                                >
                                    Past 24h
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="text-gray-400 hover:bg-gray-800 border border-gray-700 rounded-xl"
                                >
                                    Past Week
                                </Button>
                            </div>
                        </div>

                        {/* Map Visualization */}
                        <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1590393820812-8a2ed3ece96f?w=1200"
                                alt="City map"
                                className="w-full h-full object-cover opacity-30"
                            />

                            {/* Heatmap Overlays */}
                            <div className="absolute inset-0">
                                {/* Hot zones */}
                                <div className="absolute top-[30%] left-[35%] w-32 h-32">
                                    <div className="absolute inset-0 bg-red-500 opacity-30 rounded-full blur-2xl animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full border border-red-400 text-white">
                                            High Density
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-[55%] left-[55%] w-24 h-24">
                                    <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-full blur-2xl animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-orange-500/80 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-400 text-white text-sm">
                                            Medium
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-[70%] left-[25%] w-20 h-20">
                                    <div className="absolute inset-0 bg-yellow-500 opacity-30 rounded-full blur-xl" />
                                </div>

                                {/* Incident Markers */}
                                <div className="absolute top-[35%] left-[40%]">
                                    <div className="w-3 h-3 bg-[#0A66C2] rounded-full animate-ping" />
                                    <div className="w-3 h-3 bg-[#0A66C2] rounded-full" />
                                </div>

                                <div className="absolute top-[50%] left-[60%]">
                                    <div className="w-3 h-3 bg-[#0A66C2] rounded-full animate-ping" />
                                    <div className="w-3 h-3 bg-[#0A66C2] rounded-full" />
                                </div>
                            </div>

                            {/* Map Controls */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-gray-800">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-red-500 rounded-full" />
                                            <span className="text-gray-300">Critical (45)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-orange-500 rounded-full" />
                                            <span className="text-gray-300">High (82)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                                            <span className="text-gray-300">Medium (120)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-2 border border-gray-800">
                                    <p className="text-gray-400">
                                        <span className="text-[#0A66C2]">247</span> active incidents
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Predictive Alerts */}
                    <div className="space-y-6">
                        {/* Predictive Alerts */}
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-white mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-[#0A66C2]" />
                                Predictive Alerts
                            </h3>
                            <div className="space-y-3">
                                {predictiveAlerts.map((alert, index) => (
                                    <div
                                        key={index}
                                        className="bg-black/40 border border-gray-800 rounded-xl p-4 hover:border-[#0A66C2]/50 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center ${alert.color}`}>
                                                <alert.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className="text-white">{alert.area}</p>
                                                    <span className={`px-2 py-1 rounded-full text-xs ${alert.risk === 'High'
                                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                        : alert.risk === 'Medium'
                                                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                        }`}>
                                                        {alert.risk}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 mb-1">{alert.type}</p>
                                                <p className="text-gray-500">{alert.prediction}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Time Slider Widget */}
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-white mb-4">Time Analysis</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-gray-400">
                                    <span>Last 24 Hours</span>
                                    <span className="text-[#0A66C2]">Current</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="24"
                                    defaultValue="24"
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#0A66C2]"
                                />
                                <ResponsiveContainer width="100%" height={150}>
                                    <AreaChart data={heatmapData}>
                                        <defs>
                                            <linearGradient id="colorDensity" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#0A66C2" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#0A66C2" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="time" stroke="#9CA3AF" />
                                        <YAxis stroke="#9CA3AF" />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #374151', borderRadius: '8px' }}
                                        />
                                        <Area type="monotone" dataKey="density" stroke="#0A66C2" fillOpacity={1} fill="url(#colorDensity)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Department Efficiency */}
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 shadow-2xl">
                    <h2 className="text-white mb-6">Department Efficiency</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {departmentEfficiency.map((dept, index) => (
                            <div key={index} className="bg-black/40 border border-gray-800 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-white">{dept.name}</p>
                                    <span className={`text-2xl ${dept.efficiency >= 90 ? 'text-green-400' :
                                        dept.efficiency >= 80 ? 'text-[#0A66C2]' :
                                            'text-orange-400'
                                        }`}>
                                        {dept.efficiency}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                                    <div
                                        className={`h-full rounded-full ${dept.efficiency >= 90 ? 'bg-green-500' :
                                            dept.efficiency >= 80 ? 'bg-[#0A66C2]' :
                                                'bg-orange-500'
                                            }`}
                                        style={{ width: `${dept.efficiency}%` }}
                                    />
                                </div>
                                <div className="flex items-center justify-between text-gray-400">
                                    <span>{dept.active} active</span>
                                    <span>{dept.avg}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
