import { AlertCircle, Users, Frown, Camera, ArrowRight, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

export function AboutPage() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Dispatcher Bottleneck',
      description: 'Citizens call, wait on hold, describe the issue verbally. Dispatchers manually log it into fragmented systems.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Users,
      title: 'Friction Barrier',
      description: 'Reporting a civic issue takes too many steps—forms, phone calls, follow-ups. Most people give up.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Frown,
      title: 'Citizen Apathy',
      description: 'When nothing gets fixed, people stop reporting. The feedback loop breaks, issues pile up.',
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F1FB] via-white to-white" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full">
              Why LocalLink Exists
            </span>
          </div>
          <h1 className="text-[#0F172A] mb-6 max-w-4xl mx-auto">
            Fixing Cities by Fixing the Data Flow
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-xl">
            LocalLink bridges the gap between the problem on the ground and the fixer in the office.
          </p>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698047542276-1b19a4f6783e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjaXR5JTIwY29tbXVuaXR5JTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY0MTI3NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0F9D58] rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[#0F172A]">AI Detection</p>
                  <p className="text-gray-500">Real-time</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[#0F172A]">Instant Routing</p>
                  <p className="text-gray-500">Auto-dispatch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">The Broken Loop</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traditional civic reporting is slow, manual, and frustrating for everyone involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 ${problem.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <problem.icon className="w-8 h-8" />
                </div>
                <h3 className="text-[#0F172A] mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <div className="mb-6">
                <span className="px-4 py-2 bg-[#0F9D58]/10 text-[#0F9D58] rounded-full">
                  Our Solution
                </span>
              </div>
              <h2 className="text-[#0F172A] mb-6">
                AI-First Civic Dispatch
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                LocalLink uses computer vision and natural language processing to instantly classify civic issues from photos. 
                No forms. No phone calls. Just point your camera and tap.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Zero-UI Reporting</p>
                    <p className="text-gray-600">Take a photo. That's it. AI does the rest.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Smart Routing</p>
                    <p className="text-gray-600">Issues automatically go to the right department.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <p className="text-[#0F172A] mb-1">Real-Time Feedback</p>
                    <p className="text-gray-600">Citizens see progress. Cities build trust.</p>
                  </div>
                </div>
              </div>

              <button className="bg-[#0A66C2] hover:bg-[#1B76D1] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                See How It Works
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730741947187-220695b4f82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwaGFuZCUyMGhvbGRpbmd8ZW58MXx8fHwxNzY0MDkwODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Phone scanning issue"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating AI Tag */}
              <div className="absolute top-12 right-12 bg-white rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-right duration-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#0F172A]">Pothole Detected</p>
                    <p className="text-gray-500">Confidence: 94%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-b from-[#E8F1FB] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0F172A] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-8">
            We believe cities work best when citizens and governments communicate effortlessly. 
            LocalLink is building the civic infrastructure for the AI era—where reporting is instant, 
            routing is intelligent, and every issue gets resolved faster.
          </p>
          <p className="text-gray-600 text-lg">
            Because better cities start with better communication.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
