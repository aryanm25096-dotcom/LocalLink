import { Cpu, Eye, Brain, Zap, Shield, Cloud, Activity, Lock, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

export function TechnologyPage() {
  const pipeline = [
    {
      icon: Eye,
      title: 'Image Capture',
      description: 'High-res photo capture with automatic location tagging and metadata',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Vision Model Analysis',
      description: 'Gemini 2.5 processes image, identifies objects, patterns, and context',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cpu,
      title: 'Semantic Classification',
      description: 'AI categorizes issue type, severity level, and urgency automatically',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Smart Routing Engine',
      description: 'Intelligent dispatch to the correct department with full context',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const cvDemo = [
    { input: 'Overflowing Trash Can', output: 'Sanitation Dept', icon: '🗑️', confidence: '96%' },
    { input: 'Asphalt Crack', output: 'Public Works', icon: '🛣️', confidence: '94%' },
    { input: 'Broken Streetlight', output: 'Utilities Dept', icon: '💡', confidence: '98%' },
    { input: 'Water Leak', output: 'Water Department', icon: '💧', confidence: '92%' }
  ];

  const features = [
    { icon: Shield, label: 'Enterprise Security', value: 'SOC 2 Type II' },
    { icon: Activity, label: 'API Uptime', value: '99.97%' },
    { icon: Lock, label: 'Data Encryption', value: 'End-to-End' },
    { icon: Cloud, label: 'Infrastructure', value: 'Google Cloud' },
    { icon: TrendingUp, label: 'Avg Response', value: '<200ms' },
    { icon: Cpu, label: 'AI Processing', value: 'Real-time' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-[#0A66C2]/20 text-[#0A66C2] rounded-full border border-[#0A66C2]/30">
              Technology Stack
            </span>
          </div>
          <h1 className="text-white mb-6">
            Powered by Gemini 2.5 — Vision, Language & Reasoning Combined
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-xl">
            Enterprise-grade AI infrastructure built for speed, accuracy, and scale.
          </p>
          
          {/* Tech Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[300px] rounded-3xl overflow-hidden border border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWklMjBjaXJjdWl0JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjQxMjc1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Pipeline */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">AI Processing Pipeline</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From photo to resolution in milliseconds—powered by cutting-edge computer vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow */}
                {index < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                )}
                
                {/* Card */}
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-all h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Demo Section */}
      <section className="py-24 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Computer Vision in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our AI instantly classifies civic issues and routes them to the right department.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvDemo.map((demo, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F172A] to-black border border-gray-800 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-all"
              >
                <div className="flex items-center gap-6">
                  {/* Input */}
                  <div className="flex-1">
                    <p className="text-gray-500 mb-2">Input</p>
                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{demo.icon}</div>
                        <p className="text-white">{demo.input}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-6 h-6 text-[#0A66C2] flex-shrink-0" />

                  {/* Output */}
                  <div className="flex-1">
                    <p className="text-gray-500 mb-2">Output</p>
                    <div className="bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-xl p-4">
                      <p className="text-[#0A66C2] mb-1">{demo.output}</p>
                      <p className="text-gray-400">{demo.confidence}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 bg-gradient-to-br from-[#0A66C2] to-[#1B76D1] rounded-2xl p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-white text-4xl mb-2">94%</div>
                <p className="text-blue-100">Classification Accuracy</p>
              </div>
              <div>
                <div className="text-white text-4xl mb-2">1.2s</div>
                <p className="text-blue-100">Average Processing Time</p>
              </div>
              <div>
                <div className="text-white text-4xl mb-2">50k+</div>
                <p className="text-blue-100">Issues Processed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Reliability */}
      <section className="py-24 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Enterprise Reliability</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on Google Cloud with enterprise-grade security, scalability, and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-all"
              >
                <div className="w-12 h-12 bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0A66C2]" />
                </div>
                <p className="text-gray-400 mb-2">{feature.label}</p>
                <div className="text-white text-2xl">{feature.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Details */}
          <div className="mt-16 bg-black/40 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-white mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <p className="text-white mb-1">Gemini 2.5</p>
                <p className="text-gray-500">Vision AI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <p className="text-white mb-1">Google Cloud</p>
                <p className="text-gray-500">Infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-white mb-1">Firebase</p>
                <p className="text-gray-500">Real-time DB</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <p className="text-white mb-1">Maps API</p>
                <p className="text-gray-500">Geolocation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Want to Integrate LocalLink?
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            Our API is ready for municipalities and smart city platforms.
          </p>
          <button className="bg-[#0A66C2] hover:bg-[#1B76D1] text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto transition-all">
            Contact for API Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
