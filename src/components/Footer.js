import Logo from './ui/Logo';

const Footer = () => {
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Careers', href: '/#careers' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/#privacy' },
    { name: 'Terms of Service', href: '/#terms' },
    { name: 'Cookie Policy', href: '/#cookies' },
    { name: 'Refund Policy', href: '/#refund' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.348 0-4.252-1.904-4.252-4.252 0-2.348 1.904-4.252 4.252-4.252 2.348 0 4.252 1.904 4.252 4.252 0 2.348-1.904 4.252-4.252 4.252zm7.718 0c-2.348 0-4.252-1.904-4.252-4.252 0-2.348 1.904-4.252 4.252-4.252 2.348 0 4.252 1.904 4.252 4.252 0 2.348-1.904 4.252-4.252 4.252z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[rgb(var(--color-bg-dark-rgb))] text-[rgb(var(--color-text-light-rgb))] relative overflow-hidden">
      {/* Amber gradient background texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom relative z-10 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-24 items-start">
          {/* Left: Logo and tagline */}
          <div className="flex flex-col gap-4 items-center lg:items-start flex-shrink-0 w-full lg:w-1/4">
            <Logo />
            <span className="text-2xl font-extrabold tracking-tight text-[rgb(var(--color-primary-rgb))] drop-shadow-sm select-none">
              cholBhai
            </span>
            <span className="text-sm text-[rgb(var(--color-text-muted-rgb))]">
              Campus rides made easy.
            </span>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[rgb(var(--color-primary-rgb))] transition-all duration-200 shadow-sm"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <span className="text-xs text-[rgb(var(--color-text-muted-rgb))] mt-8">cholBhai &copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
          {/* Center: Navigation Links */}
          <div className="grid grid-cols-2 gap-12 w-full lg:w-2/5 mt-12 lg:mt-0">
            <div>
              <h5 className="font-semibold text-[rgb(var(--color-text-light-rgb))] mb-4 uppercase tracking-widest text-base">Company</h5>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[rgb(var(--color-text-muted-rgb))] hover:text-[rgb(var(--color-primary-rgb))] transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[rgb(var(--color-text-light-rgb))] mb-4 uppercase tracking-widest text-base">Legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[rgb(var(--color-text-muted-rgb))] hover:text-[rgb(var(--color-primary-rgb))] transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right: App Download */}
          <div className="flex flex-col gap-4 w-full lg:w-1/5 items-center lg:items-end mt-12 lg:mt-0">
            <h5 className="font-semibold text-[rgb(var(--color-text-light-rgb))] mb-2 uppercase tracking-widest text-base">Get the App</h5>
            <div className="flex flex-col gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[rgba(var(--color-primary-rgb),0.10)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] px-6 py-4 rounded-2xl transition-all duration-200 border-2 border-transparent hover:border-[rgba(var(--color-primary-rgb),0.25)] shadow-lg group focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary-rgb),0.3)]"
                style={{ boxShadow: '0 4px 24px 0 rgba(var(--color-primary-rgb),0.10)' }}
              >
                <svg
                  className="w-8 h-8 text-[rgb(var(--color-primary-rgb))] group-hover:scale-110 transition-transform duration-200"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M325.3 234.3L104.6 24.6C97.7 18.2 88.2 15.7 79.2 18.7c-9 3-15.2 11.2-15.2 20.7v428.9c0 9.5 6.2 17.7 15.2 20.7 2.2.7 4.4 1.1 6.7 1.1 6.1 0 12.1-2.3 16.7-6.7l220.7-209.7-1.8-1.6zM372.6 278.1l-46.2-43.9-36.7 34.8 36.7 34.8 46.2-43.9zm-53.2 50.5l-36.7-34.8-36.7 34.8 36.7 34.8 36.7-34.8zm-36.7-69.6l36.7-34.8-36.7-34.8-36.7 34.8 36.7 34.8zm-53.2-50.5l46.2 43.9 36.7-34.8-36.7-34.8-46.2 43.9zm53.2-50.5l36.7 34.8 36.7-34.8-36.7-34.8-36.7 34.8zm53.2 50.5l-46.2-43.9-36.7 34.8 36.7 34.8 46.2-43.9zm-53.2 50.5l-36.7-34.8-36.7 34.8 36.7 34.8 36.7-34.8zm-36.7 69.6l36.7-34.8-36.7-34.8-36.7 34.8 36.7 34.8zm53.2-50.5l46.2 43.9 36.7-34.8-36.7-34.8-46.2 43.9z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[rgb(var(--color-text-muted-rgb))] font-medium tracking-wide">Get it on</div>
                  <div className="font-bold text-lg text-[rgb(var(--color-primary-rgb))] group-hover:text-[rgb(var(--color-primary-dark-rgb))] transition-colors duration-200">Google Play</div>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-[rgba(var(--color-primary-light-rgb),0.10)] hover:bg-[rgba(var(--color-primary-light-rgb),0.18)] px-6 py-4 rounded-2xl transition-all duration-200 border-2 border-transparent hover:border-[rgba(var(--color-primary-light-rgb),0.25)] shadow-lg group focus:outline-none focus:ring-2 focus:ring-[rgba(var(--color-primary-light-rgb),0.3)] cursor-not-allowed select-none" style={{ boxShadow: '0 4px 24px 0 rgba(var(--color-primary-light-rgb),0.10)' }}>
                <svg
                  className="w-8 h-8 text-[rgb(var(--color-primary-light-rgb))] group-hover:scale-110 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-[rgb(var(--color-text-muted-rgb))] font-medium tracking-wide">Download on the</div>
                  <div className="font-bold text-lg text-[rgb(var(--color-primary-light-rgb))] group-hover:text-[rgb(var(--color-primary-rgb))] transition-colors duration-200">App Store <br /> <span className='text-xs font-normal'>(Coming soon)</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
