import { Smartphone, Camera, Zap, TrendingUp, Award, BarChart3, Download, Star, Apple, PlayCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { Button } from './ui/button';

export function DownloadPage() {
  const features = [
    {
      icon: Camera,
      title: 'Zero-UI Reporting',
      description: 'Take a photo. That\'s it. AI does the rest.'
    },
    {
      icon: Zap,
      title: 'AI Routing',
      description: 'Issues automatically go to the right department.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Tracking',
      description: 'Get instant updates on your reports.'
    },
    {
      icon: Award,
      title: 'Green Credits',
      description: 'Earn rewards for making your city better.'
    },
    {
      icon: BarChart3,
      title: 'Smart Insights',
      description: 'See community impact and progress.'
    }
  ];

  const reviews = [
    { stars: 5, name: 'Sarah M.', text: 'This app made civic reporting so easy! Reported a pothole and it was fixed in 2 days.' },
    { stars: 5, name: 'Marcus J.', text: 'Love the gamification aspect. Makes you want to be more involved in your community.' },
    { stars: 5, name: 'Elena R.', text: 'The AI detection is incredibly accurate. Saves so much time!' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A66C2] via-[#1B76D1] to-[#2E88E5] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-white">
              <div className="mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  Available Now
                </span>
              </div>
              <h1 className="mb-6">
                Download LocalLink & Fix Your City in Seconds
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of citizens making their communities better, one report at a time. 
                Available on iOS and Android.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-2xl">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="text-lg">App Store</p>
                  </div>
                </Button>

                <Button className="bg-white hover:bg-gray-100 text-[#0F172A] px-8 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-2xl">
                  <PlayCircle className="w-6 h-6 text-[#0A66C2]" />
                  <div className="text-left">
                    <p className="text-xs opacity-60">Get it on</p>
                    <p className="text-lg">Google Play</p>
                  </div>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-1">8.4K+</div>
                  <p className="text-blue-100">Downloads</p>
                </div>
                <div>
                  <div className="text-3xl mb-1 flex items-center gap-1">
                    4.8 <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-blue-100">Rating</p>
                </div>
                <div>
                  <div className="text-3xl mb-1">12K+</div>
                  <p className="text-blue-100">Reports</p>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative">
              <div className="relative z-10">
                {/* Phone Frame */}
                <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1609405985534-c7455cde5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjQwNjgxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="LocalLink App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0F9D58] rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0F172A]">+50 Credits</p>
                      <p className="text-gray-500 text-sm">Issue Verified</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl">
                  <p className="text-[#0A66C2] mb-1">Issue Resolved!</p>
                  <p className="text-gray-600 text-sm">Pothole on Market St</p>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to report and track civic issues with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0A66C2] to-[#1B76D1] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Additional Features */}
            <div className="bg-gradient-to-br from-[#0A66C2] to-[#1B76D1] rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3">And More!</h3>
              <p className="text-blue-100 leading-relaxed">
                Offline mode, dark theme, multi-language support, and continuous updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0F172A] mb-4">What Users Are Saying</h2>
            <p className="text-gray-600">
              Join thousands of satisfied citizens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#E8F1FB] to-white rounded-3xl p-8 border border-[#0A66C2]/20"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-[#0A66C2]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#E8F1FB] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 text-[#0A66C2] mx-auto mb-6" />
          </div>
          <h2 className="text-[#0F172A] mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Download LocalLink now and start reporting issues in your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <p className="text-xs opacity-80">Download on the</p>
                <p className="text-lg">App Store</p>
              </div>
            </Button>

            <Button className="bg-[#0A66C2] hover:bg-[#1B76D1] text-white px-8 py-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl">
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <p className="text-xs opacity-80">Get it on</p>
                <p className="text-lg">Google Play</p>
              </div>
            </Button>
          </div>

          <p className="text-gray-500 mt-6">
            Free to download. Available on iOS 14+ and Android 8+
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
