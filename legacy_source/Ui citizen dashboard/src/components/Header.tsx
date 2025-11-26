import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (screen: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', screen: 'landing' },
    { label: 'About', screen: 'about' },
    { label: 'How It Works', screen: 'how-it-works' },
    { label: 'Technology', screen: 'technology' },
    { label: 'Community', screen: 'community' },
    { label: 'Contact', screen: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('landing')}
            className="text-[#0A66C2] hover:text-[#1B76D1] transition-colors"
          >
            <h2>LocalLink</h2>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => onNavigate(item.screen)}
                className="text-gray-700 hover:text-[#0A66C2] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => onNavigate('download')}
              variant="outline"
              className="border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#E8F1FB] rounded-full"
            >
              Download App
            </Button>
            <Button
              onClick={() => onNavigate('admin')}
              className="bg-[#0A66C2] hover:bg-[#1B76D1] text-white rounded-full"
            >
              Admin Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => {
                  onNavigate(item.screen);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E8F1FB] hover:text-[#0A66C2] rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                onClick={() => {
                  onNavigate('download');
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full border-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#E8F1FB] rounded-full"
              >
                Download App
              </Button>
              <Button
                onClick={() => {
                  onNavigate('admin');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#0A66C2] hover:bg-[#1B76D1] text-white rounded-full"
              >
                Admin Portal
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
