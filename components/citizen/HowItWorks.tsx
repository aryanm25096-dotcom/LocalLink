import { Camera, Cpu, Send, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Take a Photo',
      subtitle: 'Just Point and Tap',
      description: 'Open the app, point your camera at any civic issue—pothole, garbage, broken streetlight. Tap once to capture.',
      image: 'https://images.unsplash.com/photo-1730741947187-220695b4f82c?w=600',
      tags: []
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI Detects & Classifies',
      subtitle: 'Vision Intelligence at Work',
      description: 'Our AI analyzes the image in milliseconds, identifies the issue type, severity, and location. No manual forms needed.',
      image: 'https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?w=600',
      tags: ['Road Hazard', 'High Priority', 'Pothole']
    },
    {
      number: '03',
      icon: Send,
      title: 'Auto-Routed to Right Department',
      subtitle: 'Smart Dispatch System',
      description: 'The issue is automatically routed to the correct city department with all the details—photo, location, classification.',
      image: '',
      tags: []
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Track Progress in Real-Time',
      subtitle: 'Stay Informed',
      description: 'Get instant updates as your report moves through verification, assignment, and resolution. Full transparency.',
      image: '',
      tags: []
    },
    {
      number: '05',
      icon: Award,
      title: 'Earn Green Credits',
      subtitle: 'Gamified Civic Engagement',
      description: 'Every verified report earns you Green Credits. Unlock badges, climb leaderboards, and become a civic champion.',
      image: '',
      tags: []
    }
  ];

  const departments = [
    { name: 'Sanitation', icon: '🗑️', color: 'bg-green-100 text-green-700' },
    { name: 'Public Works', icon: '🛣️', color: 'bg-blue-100 text-blue-700' },
    { name: 'Utilities', icon: '💡', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Water', icon: '💧', color: 'bg-cyan-100 text-cyan-700' }
  ];

  const timeline = [
    { status: 'Received', time: 'Just now', color: 'bg-[#0A66C2]', completed: true },
    { status: 'Verified', time: '2 hours', color: 'bg-[#0A66C2]', completed: true },
    { status: 'Assigned', time: '1 day', color: 'bg-[#0A66C2]', completed: true },
    { status: 'In Progress', time: '2 days', color: 'bg-orange-500', completed: false },
    { status: 'Resolved', time: 'Pending', color: 'bg-gray-300', completed: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F1FB] to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full">
              How It Works
            </span>
          </div>
          <h1 className="text-[#0F172A] mb-6">
            Civic Reporting in 5 Simple Steps
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-xl">
            From problem to solution—powered by AI, designed for simplicity.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">
                  <span className="text-[#0A66C2] text-6xl opacity-20">
                    {step.number}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#0A66C2] rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-[#0F172A]">{step.title}</h2>
                </div>
                <p className="text-[#0A66C2] mb-4">{step.subtitle}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {step.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {step.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-[#E8F1FB] text-[#0A66C2] rounded-full border border-[#0A66C2]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {step.image ? (
                  <div className="relative">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      {step.tags.length > 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="space-y-4">
                            {step.tags.map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className="bg-[#0A66C2] text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white animate-in fade-in slide-in-from-top duration-700"
                                style={{ animationDelay: `${tagIndex * 200}ms` }}
                              >
                                {tag}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : step.number === '03' ? (
                  // Department Routing Visual
                  <div className="bg-gradient-to-br from-[#E8F1FB] to-white rounded-3xl p-12 border-2 border-[#0A66C2]/20">
                    <div className="relative">
                      {/* Center Issue */}
                      <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-[#0A66C2] rounded-2xl flex items-center justify-center shadow-xl">
                          <Camera className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      {/* Arrows & Departments */}
                      <div className="grid grid-cols-2 gap-6">
                        {departments.map((dept, deptIndex) => (
                          <div key={deptIndex} className="relative">
                            {/* Arrow */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              <ArrowRight className="w-6 h-6 text-[#0A66C2] rotate-90" />
                            </div>
                            
                            {/* Department Card */}
                            <div className={`${dept.color} rounded-2xl p-6 text-center`}>
                              <div className="text-4xl mb-2">{dept.icon}</div>
                              <p>{dept.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : step.number === '04' ? (
                  // Timeline Visual
                  <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
                    <h3 className="text-[#0F172A] mb-8 text-center">Report Timeline</h3>
                    <div className="space-y-6">
                      {timeline.map((item, timeIndex) => (
                        <div key={timeIndex} className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            {item.completed ? (
                              <span className="text-white text-xl">✓</span>
                            ) : (
                              <div className="w-3 h-3 bg-white rounded-full" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-[#0F172A] mb-1">{item.status}</p>
                            <p className="text-gray-500">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Green Credits Visual
                  <div className="bg-gradient-to-br from-[#0F9D58] to-[#0D8A4D] rounded-3xl p-12 text-white text-center shadow-2xl">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-6xl mb-4">+50</div>
                    <p className="text-2xl mb-2">Green Credits Earned!</p>
                    <p className="opacity-90">Report verified by the city</p>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-3xl mb-1">14</div>
                        <p className="text-sm opacity-90">Reports</p>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-3xl mb-1">1.2k</div>
                        <p className="text-sm opacity-90">Credits</p>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-3xl mb-1">#12</div>
                        <p className="text-sm opacity-90">Rank</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#E8F1FB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0F172A] mb-6">
            Ready to Make Your City Better?
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Download LocalLink and start reporting issues in seconds.
          </p>
          <button className="bg-[#0A66C2] hover:bg-[#1B76D1] text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all">
            Download App
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
