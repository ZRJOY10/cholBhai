import { AcademicCapIcon, BuildingLibraryIcon, PlayIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import ImageVarriables from '../constant/ImageVarriables';
import Button from './ui/Button';
const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-[rgb(var(--color-bg-dark-rgb))] via-[rgb(var(--color-bg-rgb))] to-[rgb(var(--color-bg-light-rgb))] overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-[rgba(var(--color-primary-light-rgb),0.3)] via-[rgba(var(--color-primary-rgb),0.2)] to-[rgba(var(--color-accent-rgb),0.1)] rounded-full blur-3xl animate-blob1 z-0" />
      <div className="absolute top-1/2 right-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-[rgba(var(--color-primary-dark-rgb),0.2)] via-[rgba(var(--color-primary-rgb),0.1)] to-[rgba(255,255,255,0)] rounded-full blur-3xl animate-blob2 z-0" />
      <div className="absolute bottom-0 left-1/2 w-[20rem] h-[20rem] bg-gradient-to-tl from-[rgba(var(--color-primary-light-rgb),0.2)] via-[rgba(var(--color-primary-light-rgb),0.1)] to-[rgba(255,255,255,0)] rounded-full blur-2xl animate-blob3 z-0" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-[rgb(var(--color-text-rgb))] animate-slide-in-left">
            {/* Badge/Tagline */}
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-[rgba(var(--color-primary-dark-rgb),0.1)] border border-[rgba(var(--color-primary-rgb),0.3)] text-[rgb(var(--color-primary-light-rgb))] font-semibold text-xs tracking-widest uppercase shadow-sm backdrop-blur">
              <AcademicCapIcon className="w-4 h-4 mr-2 text-[rgb(var(--color-primary-rgb))]" />
              Campus Ride-Share
            </div>
            {/* Headline with animated underline */}
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              <span className="bg-gradient-to-r from-[rgb(var(--color-text-rgb))] via-[rgb(var(--color-primary-light-rgb))] to-[rgb(var(--color-primary-rgb))] bg-clip-text text-transparent">
                Campus Rides,
              </span>{' '}
              <span className="block text-[rgb(var(--color-primary-rgb))] relative">
                Made Simple
                <span className="absolute left-0 -bottom-2 w-full h-2 bg-gradient-to-r from-[rgba(var(--color-primary-rgb),0.6)] to-[rgba(var(--color-primary-dark-rgb),0.4)] rounded-full blur-md animate-underline" />
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[rgba(var(--color-text-rgb),0.9)] leading-relaxed drop-shadow">
              cholBhai connects university students for safe, affordable rides across campus and beyond. 
              Share rides with fellow students and save money on transportation.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-[rgb(var(--color-primary-rgb))] bg-opacity-90 hover:bg-[rgb(var(--color-primary-dark-rgb))] text-[rgb(var(--color-text-dark-rgb))] shadow-xl border-0 backdrop-blur-md transition-all duration-200 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg"
                onClick={() => window.open('#', '_blank')}
                aria-label="Download cholBhai App"
              >
                <PlayIcon className="w-5 h-5" />
                Download cholBhai App
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="group bg-[rgba(var(--color-accent-rgb),0.1)] hover:bg-[rgba(var(--color-accent-rgb),0.2)] hover:text-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-rgb))] border-0 shadow-xl backdrop-blur-md transition-all duration-200 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg"
                onClick={() => window.open('#', '_blank')}
                aria-label="Join as Rider"
              >
                <UserGroupIcon className="w-5 h-5" />
                Join as Rider
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(var(--color-border-light-rgb),0.1)]">
              <div className="flex flex-col items-center bg-[rgba(var(--color-accent-rgb),0.05)] rounded-xl p-4 shadow backdrop-blur-md">
                <UserGroupIcon className="w-7 h-7 text-[rgb(var(--color-primary-rgb))] mb-1" />
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-xs text-[rgba(var(--color-text-rgb),0.8)]">Users</div>
              </div>
              <div className="flex flex-col items-center bg-[rgba(var(--color-accent-rgb),0.05)] rounded-xl p-4 shadow backdrop-blur-md">
                <PlayIcon className="w-7 h-7 text-[rgb(var(--color-primary-rgb))] mb-1" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-[rgba(var(--color-text-rgb),0.8)]">Riders</div>
              </div>
              <div className="flex flex-col items-center bg-[rgba(var(--color-accent-rgb),0.05)] rounded-xl p-4 shadow backdrop-blur-md">
                <BuildingLibraryIcon className="w-7 h-7 text-[rgb(var(--color-primary-rgb))] mb-1" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs text-[rgba(var(--color-text-rgb),0.8)]">Universities</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right flex justify-center items-center relative">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-[rgba(var(--color-primary-rgb),0.2)] blur-2xl rounded-3xl z-0 group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-[rgba(var(--color-accent-rgb),0.1)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(var(--color-border-light-rgb),0.2)] shadow-2xl z-10">
                <img
                  src={ImageVarriables.MobileImg}
                  alt="cholBhai Student App Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating animation */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-[rgba(var(--color-primary-rgb),0.3)] blur-xl rounded-full animate-float" />
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
