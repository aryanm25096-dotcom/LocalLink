'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, FileText, AlertTriangle, Phone, Clock, Bell } from 'lucide-react';
import Link from 'next/link';
import SmartCamera from '@/components/SmartCamera';
import ProfileCard from '@/components/citizen/ProfileCard';

const services = [
  {
    title: 'Apply for Subsidy',
    description: 'Get financial support for seeds and fertilizers.',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-100/50',
  },
  {
    title: 'Report Issue',
    description: 'Report crop diseases or infrastructure problems.',
    icon: AlertTriangle,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100/50',
  },
  {
    title: 'Market Prices',
    description: 'Check current market rates for your produce.',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100/50',
  },
  {
    title: 'Helpline',
    description: 'Connect with agricultural experts instantly.',
    icon: Phone,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100/50',
  },
];

export default function CitizenPage() {
  return (
    <div className="min-h-screen p-6 pb-24 space-y-8">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Welcome, Farmer</h1>
          <p className="text-slate-600 dark:text-slate-300">Access your services below</p>
        </div>
        <Button variant="outline" className="rounded-full">Profile</Button>
      </header>

      <ProfileCard />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-48 relative overflow-hidden backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-white/20 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
              <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${service.bgColor} blur-2xl group-hover:blur-3xl transition-all`} />

              <CardHeader>
                <div className={`p-3 w-fit rounded-xl ${service.bgColor} mb-2`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* New section added based on user's instruction */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Link href="/citizen/history">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
            <CardContent className="p-4 flex flex-col items-center justify-center h-32">
              <div className="p-3 bg-blue-500/20 rounded-full mb-2">
                <Clock className="w-6 h-6 text-blue-200" />
              </div>
              <span className="font-medium">My History</span>
            </CardContent>
          </Card>
        </Link>
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
          <CardContent className="p-4 flex flex-col items-center justify-center h-32">
            <div className="p-3 bg-purple-500/20 rounded-full mb-2">
              <Bell className="w-6 h-6 text-purple-200" />
            </div>
            <span className="font-medium">Alerts</span>
          </CardContent>
        </Card>
      </div>

      <SmartCamera />
    </div>
  );
}
