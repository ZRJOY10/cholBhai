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
    <div className="fixed bottom-6 right-6 max-w-sm bg-[rgb(var(--color-bg-light-rgb))] rounded-xl shadow-2xl border border-[rgb(var(--color-border-rgb))] p-6 z-50 animate-slide-in-right">
      {/* Close Button */}
      <button
        onClick={dismissCookies}
        className="absolute top-4 right-4 text-[rgb(var(--color-text-muted-rgb))] hover:text-[rgb(var(--color-text-rgb))] transition-colors duration-200"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="pr-6">
        <h4 className="font-semibold text-[rgb(var(--color-text-rgb))] mb-2">
          This site uses cookies
        </h4>
        <p className="text-sm text-[rgb(var(--color-text-muted-rgb))] mb-4 leading-relaxed">
          We may utilize cookies when you access our website, including any related 
          media platforms or mobile applications. These technologies are employed to 
          enhance site functionality and optimize your interactions with our services.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-[rgb(var(--color-link-rgb))] hover:text-[rgb(var(--color-link-hover-rgb))] font-medium"
          >
            View More
          </a>
          <button
            onClick={acceptCookies}
            className="bg-[rgb(var(--color-link-rgb))] hover:bg-[rgb(var(--color-link-hover-rgb))] text-[rgb(var(--color-text-dark-rgb))] px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
