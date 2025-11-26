import { Award, Trophy, Shield, Star, Zap, Leaf, Crown, TrendingUp, Users } from 'lucide-react';
import { Footer } from './Footer';

export function CommunityPage() {
  const badges = [
    {
      icon: Award,
      name: 'Observer',
      description: '1-5 reports filed',
      color: 'from-gray-400 to-gray-500',
      glow: 'shadow-gray-500/50',
      unlocked: true
    },
    {
      icon: Shield,
      name: 'Guardian',
      description: '6-20 reports filed',
      color: 'from-blue-400 to-blue-600',
      glow: 'shadow-blue-500/50',
      unlocked: true
    },
    {
      icon: Star,
      name: 'Protector',
      description: '21-50 reports filed',
      color: 'from-purple-400 to-purple-600',
      glow: 'shadow-purple-500/50',
      unlocked: false
    },
    {
      icon: Zap,
      name: 'Sentinel',
      description: '51-100 reports filed',
      color: 'from-orange-400 to-orange-600',
      glow: 'shadow-orange-500/50',
      unlocked: false
    },
    {
      icon: Crown,
      name: 'City Ranger',
      description: '100+ reports filed',
      color: 'from-yellow-400 to-yellow-600',
      glow: 'shadow-yellow-500/50',
      unlocked: false
    },
    {
      icon: Leaf,
      name: 'Eco Warrior',
      description: 'Environmental reports',
      color: 'from-green-400 to-green-600',
      glow: 'shadow-green-500/50',
      unlocked: true
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Chen', score: 2847, avatar: 'SC', color: 'bg-yellow-500', trend: '+124' },
    { rank: 2, name: 'Marcus Johnson', score: 2456, avatar: 'MJ', color: 'bg-gray-400', trend: '+98' },
    { rank: 3, name: 'Elena Rodriguez', score: 2234, avatar: 'ER', color: 'bg-orange-600', trend: '+156' },
    { rank: 4, name: 'David Kim', score: 1987, avatar: 'DK', color: 'bg-blue-500', trend: '+67' },
    { rank: 5, name: 'Priya Patel', score: 1823, avatar: 'PP', color: 'bg-purple-500', trend: '+89' },
    { rank: 6, name: 'James Wilson', score: 1654, avatar: 'JW', color: 'bg-green-500', trend: '+45' },
    { rank: 7, name: 'Maria Garcia', score: 1542, avatar: 'MG', color: 'bg-pink-500', trend: '+72' },
    { rank: 8, name: 'Ahmed Hassan', score: 1423, avatar: 'AH', color: 'bg-cyan-500', trend: '+54' }
  ];

  const impactStats = [
    { icon: Trophy, label: 'Issues Fixed', value: '12,847', color: 'text-[#0A66C2]' },
    { icon: Leaf, label: 'Carbon Saved', value: '2.4 Tons', color: 'text-[#0F9D58]' },
    { icon: Users, label: 'Active Citizens', value: '8,432', color: 'text-purple-500' },
    { icon: TrendingUp, label: 'Resolution Rate', value: '94%', color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F9D58] via-[#0D8A4D] to-[#0A7840] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              Green Credits & Engagement
            </span>
          </div>
          <h1 className="mb-6">
            Your City. Your Score.
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto mb-12">
            Fix issues, earn credits, level up your profile.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-2">1,240</div>
              <p className="text-green-100">Your Credits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-2">#12</div>
              <p className="text-green-100">Your Rank</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-2">14</div>
              <p className="text-green-100">Reports Filed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges System */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">Badge System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock achievements as you contribute to your community. Each badge represents your impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all ${
                  badge.unlocked
                    ? 'border-transparent shadow-xl hover:scale-105 ' + badge.glow
                    : 'border-gray-200 opacity-60'
                }`}
              >
                {/* Glow Effect */}
                {badge.unlocked && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-5 rounded-3xl`} />
                )}

                <div className="relative">
                  {/* Badge Icon */}
                  <div
                    className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center shadow-2xl ${
                      badge.unlocked ? badge.glow : ''
                    }`}
                  >
                    <badge.icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Badge Info */}
                  <div className="text-center">
                    <h3 className="text-[#0F172A] mb-2">{badge.name}</h3>
                    <p className="text-gray-600">{badge.description}</p>

                    {/* Status */}
                    {badge.unlocked ? (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#0F9D58]/10 text-[#0F9D58] rounded-full">
                        <span className="text-xl">✓</span>
                        <span>Unlocked</span>
                      </div>
                    ) : (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-full">
                        <span>🔒</span>
                        <span>Locked</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[#0F172A] mb-2">Community Leaderboard</h2>
              <p className="text-gray-600">Top contributors in your city</p>
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-2 bg-[#0A66C2] text-white rounded-full">
                Weekly
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                Monthly
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                All Time
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Top 3 Spotlight */}
            <div className="bg-gradient-to-br from-[#E8F1FB] to-white p-8 border-b border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leaderboard.slice(0, 3).map((user, index) => (
                  <div
                    key={index}
                    className={`text-center ${index === 0 ? 'md:order-2 md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
                  >
                    <div className="relative inline-block mb-4">
                      <div className={`w-20 h-20 ${user.color} rounded-full flex items-center justify-center text-white text-2xl shadow-xl`}>
                        {user.avatar}
                      </div>
                      {index === 0 && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <Crown className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-[#0F172A] mb-1">{user.name}</div>
                    <div className="text-[#0A66C2] text-2xl mb-1">{user.score.toLocaleString()}</div>
                    <div className="text-gray-500">Rank #{user.rank}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rest of Leaderboard */}
            <div className="divide-y divide-gray-100">
              {leaderboard.slice(3).map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-[#0A66C2] w-8 text-center">
                    #{user.rank}
                  </div>
                  <div className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0F172A] mb-1">{user.name}</p>
                    <p className="text-gray-500">{user.score.toLocaleString()} credits</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#0F9D58]">
                    <TrendingUp className="w-4 h-4" />
                    <span>{user.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Stats */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">Community Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, we're making our city better. Here's what we've accomplished as a community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:scale-105 transition-transform"
              >
                <div className={`w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl text-[#0F172A] mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Progress Visualization */}
          <div className="mt-16 bg-gradient-to-br from-[#0A66C2] to-[#1B76D1] rounded-3xl p-12 text-white text-center">
            <h3 className="mb-4">Monthly Goal Progress</h3>
            <p className="text-blue-100 mb-8">
              Help us reach 15,000 resolved issues this month!
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span>12,847 / 15,000</span>
                <span>86%</span>
              </div>
              <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '86%' }} />
              </div>
              <p className="mt-4 text-blue-100">
                Just 2,153 more reports to hit our goal!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
