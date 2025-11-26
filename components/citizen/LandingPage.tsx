import { Camera, Mic, Droplets, Construction, Lightbulb, Trash2, PawPrint } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Footer } from './Footer';
import Link from 'next/link';

export function LandingPage() {
  const quickAccessCategories = [
    { icon: Construction, label: 'Pothole', color: 'bg-orange-50 text-orange-600' },
    { icon: Trash2, label: 'Garbage', color: 'bg-green-50 text-green-600' },
    { icon: Droplets, label: 'Water Leak', color: 'bg-blue-50 text-blue-600' },
    { icon: Lightbulb, label: 'Streetlight', color: 'bg-yellow-50 text-yellow-600' },
    { icon: PawPrint, label: 'Stray Animals', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjQwOTA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="City street"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#0F172A]">Quick Report</p>
                    <p className="text-gray-500">Point, Tap, Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-10">
            <h2 className="text-[#0F172A] mb-3">
              Report Problems in 5 Seconds — Let AI Handle the Rest.
            </h2>
            <p className="text-gray-600">
              Civic reporting powered by AI. Your city, safer and cleaner.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/citizen/report" className="flex-1">
              <Button
                className="w-full bg-[#0A66C2] hover:bg-[#1B76D1] text-white rounded-full py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Camera className="w-5 h-5 mr-2" />
                Report with Camera
              </Button>
            </Link>
            <Link href="/citizen/report" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#E8F1FB] rounded-full py-6"
              >
                <Mic className="w-5 h-5 mr-2" />
                Speak to Report
              </Button>
            </Link>
          </div>

          {/* Quick Access Categories */}
          <div className="mb-8">
            <h3 className="text-[#0F172A] mb-6">Quick Access</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {quickAccessCategories.map((category, index) => (
                <Link
                  key={index}
                  href="/citizen/report"
                  className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#0A66C2] transition-all group"
                >
                  <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                  <span className="text-[#0F172A]">{category.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-[#E8F1FB] to-white rounded-2xl">
            <div className="text-center">
              <div className="text-[#0A66C2] mb-1">12,847</div>
              <p className="text-gray-600">Reports Filed</p>
            </div>
            <div className="text-center">
              <div className="text-[#0A66C2] mb-1">9,234</div>
              <p className="text-gray-600">Issues Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-[#0A66C2] mb-1">4.2 Days</div>
              <p className="text-gray-600">Avg. Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}