'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Clock, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SmartCamera from '@/components/SmartCamera';
import ProfileCard from '@/components/citizen/ProfileCard';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function CitizenPage() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="min-h-screen p-6 pb-24 space-y-8">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Welcome, Citizen</h1>
          <p className="text-slate-600 dark:text-slate-300">Access your civic services below</p>
        </div>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => setShowProfileModal(true)}
        >
          Profile
        </Button>
      </header>

      {/* Profile Modal */}
      <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Your Profile</DialogTitle>
          </DialogHeader>
          <ProfileCard />
        </DialogContent>
      </Dialog>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Report Issue - Primary Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="md:col-span-2"
        >
          <Card className="h-full relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-500/90 to-blue-600/90 dark:from-blue-600/90 dark:to-blue-700/90 border-white/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-3xl group-hover:blur-2xl transition-all" />

            <CardHeader className="relative z-10">
              <div className="p-4 w-fit rounded-2xl bg-white/20 mb-4">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-white mb-2">Report an Issue</CardTitle>
              <CardDescription className="text-blue-50 text-lg">
                Use AI-powered camera to report civic or agricultural issues instantly
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                onClick={() => {
                  // Scroll to SmartCamera section
                  document.getElementById('smart-camera')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Reporting
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* My History Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/citizen/history">
            <Card className="h-full relative overflow-hidden backdrop-blur-md bg-white/40 dark:bg-slate-900/40 border-white/20 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-green-100/50 dark:bg-green-500/20 blur-2xl group-hover:blur-3xl transition-all" />

              <CardHeader className="relative z-10">
                <div className="p-3 w-fit rounded-xl bg-green-100/50 dark:bg-green-500/20 mb-2">
                  <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">My History</CardTitle>
                <CardDescription className="text-base">
                  View your submitted reports and their status
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>

        {/* Green Credits Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3"
        >
          <Card
            className="relative overflow-hidden backdrop-blur-md bg-gradient-to-r from-emerald-500/90 to-teal-600/90 dark:from-emerald-600/90 dark:to-teal-700/90 border-white/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            onClick={() => setShowProfileModal(true)}
          >
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-3xl group-hover:blur-2xl transition-all" />

            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 w-fit rounded-xl bg-white/20">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white mb-1">Green Credits</CardTitle>
                    <CardDescription className="text-emerald-50">
                      Earn rewards for helping your community
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold"
                >
                  View Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      {/* Smart Camera Section */}
      <div id="smart-camera" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          AI-Powered Issue Reporter
        </h2>
        <SmartCamera />
      </div>
    </div>
  );
}
