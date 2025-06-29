import { PlayIcon } from '@heroicons/react/24/solid';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-primary min-h-screen flex items-center">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ride Your Way,{' '}
              <span className="block">Anytime, Anywhere</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              OvoRide is a complete ride-sharing solution designed to simplify 
              transportation and connect riders with reliable drivers in your city.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
                onClick={() => window.open('#', '_blank')}
              >
                <PlayIcon className="w-5 h-5" />
                Download Rider App
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
                onClick={() => window.open('#', '_blank')}
              >
                <PlayIcon className="w-5 h-5" />
                Download Driver App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Active Riders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-white/80">Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-white/80">Cities</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <img
                  src="https://via.placeholder.com/600x400/E5E7EB/6B7280?text=OvoRide+App+Interface"
                  alt="OvoRide App Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg animate-bounce">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                  <div className="text-xs font-semibold text-gray-800">
                    Ride Confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
