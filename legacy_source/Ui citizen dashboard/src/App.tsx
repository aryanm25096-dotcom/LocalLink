import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CameraScreen } from './components/CameraScreen';
import { ClassificationResult } from './components/ClassificationResult';
import { GreenCredits } from './components/GreenCredits';
import { AdminDashboard } from './components/AdminDashboard';
import { WarRoom } from './components/WarRoom';
import { AboutPage } from './components/AboutPage';
import { HowItWorks } from './components/HowItWorks';
import { TechnologyPage } from './components/TechnologyPage';
import { CommunityPage } from './components/CommunityPage';
import { ContactPage } from './components/ContactPage';
import { DownloadPage } from './components/DownloadPage';
import { Header } from './components/Header';
import { Button } from './components/ui/button';
import { Smartphone, Monitor } from 'lucide-react';

type Screen = 'landing' | 'camera' | 'result' | 'credits' | 'admin' | 'warroom' | 'about' | 'how-it-works' | 'technology' | 'community' | 'contact' | 'download';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [capturedImage, setCapturedImage] = useState<string>('');

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleCapture = (image: string) => {
    setCapturedImage(image);
  };

  // Show header on marketing pages
  const showHeader = ['landing', 'about', 'how-it-works', 'technology', 'community', 'contact', 'download'].includes(currentScreen);
  
  // Show view switcher on landing page only
  const showViewSwitcher = currentScreen === 'landing';

  return (
    <div className="relative">
      {/* Header for marketing pages */}
      {showHeader && <Header onNavigate={handleNavigate} />}
      
      {/* Add padding for pages with header */}
      <div className={showHeader ? 'pt-20' : ''}>
        {/* View Switcher - Toggle between Mobile and Desktop views */}
        {showViewSwitcher && (
          <div className="fixed top-24 right-4 z-50 bg-white rounded-full shadow-2xl border border-gray-200 p-2 flex gap-2">
            <Button
              onClick={() => handleNavigate('landing')}
              variant={currentScreen === 'landing' ? 'default' : 'ghost'}
              className={`rounded-full ${
                currentScreen === 'landing' 
                  ? 'bg-[#0A66C2] text-white hover:bg-[#1B76D1]' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Citizen App
            </Button>
            <Button
              onClick={() => handleNavigate('admin')}
              variant={currentScreen === 'admin' || currentScreen === 'warroom' ? 'default' : 'ghost'}
              className={`rounded-full ${
                currentScreen === 'admin' || currentScreen === 'warroom'
                  ? 'bg-[#0A66C2] text-white hover:bg-[#1B76D1]' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </div>
        )}

        {/* Screen Rendering */}
        {currentScreen === 'landing' && <LandingPage onNavigate={handleNavigate} />}
        {currentScreen === 'camera' && (
          <CameraScreen onNavigate={handleNavigate} onCapture={handleCapture} />
        )}
        {currentScreen === 'result' && (
          <ClassificationResult 
            onNavigate={handleNavigate} 
            capturedImage={capturedImage || 'https://images.unsplash.com/photo-1761795084688-e6e7ed9b22ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjQwOTA4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080'} 
          />
        )}
        {currentScreen === 'credits' && <GreenCredits onNavigate={handleNavigate} />}
        {currentScreen === 'admin' && <AdminDashboard onNavigate={handleNavigate} />}
        {currentScreen === 'warroom' && <WarRoom onNavigate={handleNavigate} />}
        {currentScreen === 'about' && <AboutPage />}
        {currentScreen === 'how-it-works' && <HowItWorks />}
        {currentScreen === 'technology' && <TechnologyPage />}
        {currentScreen === 'community' && <CommunityPage />}
        {currentScreen === 'contact' && <ContactPage />}
        {currentScreen === 'download' && <DownloadPage />}
      </div>
    </div>
  );
}