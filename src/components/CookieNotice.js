import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookies were already accepted
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const dismissCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-sm bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 animate-slide-in-right">
      {/* Close Button */}
      <button
        onClick={dismissCookies}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="pr-6">
        <h4 className="font-semibold text-gray-900 mb-2">
          This site uses cookies
        </h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          We may utilize cookies when you access our website, including any related 
          media platforms or mobile applications. These technologies are employed to 
          enhance site functionality and optimize your interactions with our services.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View More
          </a>
          <button
            onClick={acceptCookies}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
        <span className="text-lg">🍪</span>
      </div>
    </div>
  );
};

export default CookieNotice;
