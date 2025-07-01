import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Logo from './ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-[rgba(var(--color-primary-rgb),0.2)] shadow-lg ${
        isScrolled
          ? 'bg-[rgba(var(--color-bg-rgb),0.8)] dark:bg-[rgba(var(--color-bg-dark-rgb),0.9)]'
          : 'bg-[rgba(var(--color-bg-rgb),0.6)] dark:bg-[rgba(var(--color-bg-dark-rgb),0.7)]'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Logo />
            <span className="ml-2 text-2xl font-extrabold tracking-tight text-[rgb(var(--color-primary-rgb))] drop-shadow-sm select-none hidden sm:inline">
              cholBhai
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[rgb(var(--color-text-light-rgb))] hover:text-[rgb(var(--color-primary-rgb))] font-medium px-3 py-2 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[rgb(var(--color-primary-rgb))] after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Registration Button */}
            <a
              href="#Registration"
              className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary-rgb))] to-[rgb(var(--color-primary-light-rgb))] text-[rgb(var(--color-text-dark-rgb))] font-semibold shadow-md hover:from-[rgb(var(--color-primary-light-rgb))] hover:to-[rgb(var(--color-primary-rgb))] transition-all duration-200 border border-[rgba(var(--color-primary-light-rgb),0.6)]"
            >
              Registration
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black/30 border border-amber-400/30 inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-amber-500 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-all duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-black/90 border-t border-amber-400/20 shadow-lg rounded-b-xl">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-200 hover:text-amber-400 px-3 py-2 text-lg font-medium rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#Registration"
              className="block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-md hover:from-yellow-400 hover:to-amber-500 transition-all duration-200 border border-amber-300/60 text-center"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
