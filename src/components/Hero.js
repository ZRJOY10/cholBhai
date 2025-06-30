import { AcademicCapIcon, BuildingLibraryIcon, PlayIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import ImageVarriables from '../constant/ImageVarriables';
import Button from './ui/Button';
const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-neutral-950 via-zinc-900 to-neutral-800 overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-amber-400/30 via-amber-500/20 to-yellow-300/10 rounded-full blur-3xl animate-blob1 z-0" />
      <div className="absolute top-1/2 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-white/0 rounded-full blur-3xl animate-blob2 z-0" />
      <div className="absolute bottom-0 left-1/2 w-[20rem] h-[20rem] bg-gradient-to-tl from-amber-400/20 via-amber-300/10 to-white/0 rounded-full blur-2xl animate-blob3 z-0" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-slide-in-left">
            {/* Badge/Tagline */}
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase shadow-sm backdrop-blur">
              <AcademicCapIcon className="w-4 h-4 mr-2 text-amber-400" />
              Campus Ride-Share
            </div>
            {/* Headline with animated underline */}
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                Campus Rides,
              </span>{' '}
              <span className="block text-amber-400 relative">
                Made Simple
                <span className="absolute left-0 -bottom-2 w-full h-2 bg-gradient-to-r from-amber-400/60 to-amber-600/40 rounded-full blur-md animate-underline" />
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed drop-shadow">
              cholBhai connects university students for safe, affordable rides across campus and beyond. 
              Share rides with fellow students and save money on transportation.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-amber-400/90 hover:bg-amber-500 text-black shadow-xl border-0 backdrop-blur-md bg-opacity-80 transition-all duration-200 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg"
                onClick={() => window.open('#', '_blank')}
                aria-label="Download cholBhai App"
              >
                <PlayIcon className="w-5 h-5" />
                Download cholBhai App
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="group bg-white/10 hover:bg-white/20 hover:text-amber-400 text-white border-0 shadow-xl backdrop-blur-md transition-all duration-200 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg"
                onClick={() => window.open('#', '_blank')}
                aria-label="Join as Rider"
              >
                <UserGroupIcon className="w-5 h-5" />
                Join as Rider
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow backdrop-blur-md">
                <UserGroupIcon className="w-7 h-7 text-amber-400 mb-1" />
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-xs text-white/80">Users</div>
              </div>
              <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow backdrop-blur-md">
                <PlayIcon className="w-7 h-7 text-amber-400 mb-1" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-white/80">Riders</div>
              </div>
              <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow backdrop-blur-md">
                <BuildingLibraryIcon className="w-7 h-7 text-amber-400 mb-1" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs text-white/80">Universities</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right flex justify-center items-center relative">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-amber-400/20 blur-2xl rounded-3xl z-0 group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl z-10">
                <img
                  src={ImageVarriables.MobileImg}
                  alt="cholBhai Student App Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating animation */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-amber-400/30 blur-xl rounded-full animate-float" />
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-30px) scale(1.1);} }
        @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(20px) scale(1.05);} }
        @keyframes blob3 { 0%,100%{transform:translateX(0) scale(1);} 50%{transform:translateX(-20px) scale(1.08);} }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 10s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 14s ease-in-out infinite; }
        @keyframes underline { 0%{width:0;} 100%{width:100%;} }
        .animate-underline { animation: underline 1.2s cubic-bezier(.4,0,.2,1) 0.2s both; }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
