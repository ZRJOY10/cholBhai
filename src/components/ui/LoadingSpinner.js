const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Bike Logo */}
        <div className="mb-8 flex flex-col items-center animate-pulse">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-2">
            {/* Animated Bike SVG */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wheels */}
              <circle cx="18" cy="46" r="10" stroke="#F59E0B" strokeWidth="3" fill="#1a1a1a" className="animate-spin-slow origin-center" />
              <circle cx="46" cy="46" r="10" stroke="#F59E0B" strokeWidth="3" fill="#1a1a1a" className="animate-spin-slow origin-center" style={{animationDirection: 'reverse'}} />
              {/* Frame */}
              <rect x="17" y="36" width="28" height="4" rx="2" fill="#F59E0B" />
              <rect x="30" y="20" width="4" height="20" rx="2" fill="#F59E0B" />
              {/* Handlebars */}
              <rect x="28" y="16" width="8" height="3" rx="1.5" fill="#F59E0B" />
              {/* Seat */}
              <rect x="32" y="28" width="6" height="2" rx="1" fill="#F59E0B" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-amber-400 tracking-tight drop-shadow-sm">cholBhai</h2>
        </div>

        {/* Spinner text */}
        <div className="relative">
          <p className="mt-2 text-amber-200 animate-pulse text-lg font-medium">Finding your ride...</p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
