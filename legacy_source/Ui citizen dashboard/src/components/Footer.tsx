import { Mail, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - LocalLink */}
          <div>
            <h3 className="text-white mb-6">LocalLink</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h3 className="text-white mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#admin" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  Dashboard Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-white mb-6">Connect</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#0A66C2] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@locallink.io
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} LocalLink. Built for Smart Cities.
          </p>
        </div>
      </div>
    </footer>
  );
}
