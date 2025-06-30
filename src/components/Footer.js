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
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Amber gradient background texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="section-padding">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <Logo />
                <span className="text-2xl font-extrabold text-amber-400 tracking-tight select-none hidden sm:inline">
                  cholBhai
                </span>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                cholBhai connects university students for safe, affordable rides
                across campus and beyond. Share rides with fellow students and save
                money on transportation.
              </p>
              {/* App Download Buttons */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white mb-4">Download Our Apps</h5>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-neutral-800 hover:bg-amber-400/20 px-4 py-3 rounded-lg transition-colors duration-200 group border border-amber-400/10"
                  >
                    <svg
                      className="w-8 h-8 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.523 15.3414c-.4632-.5047-.9408-1.0281-1.4023-1.5352-.5952-.6539-1.1738-1.2891-1.6738-1.8984-.8203-.9961-1.4766-1.8047-1.7266-2.2891-.2422-.4688-.3594-.9688-.3594-1.4844 0-.6016.1875-1.2188.5625-1.8047.375-.5859.8906-1.1406 1.5-.1641.6094-.3047.9609-.4531 1.0547-.4531.3984 0 .7734.1641 1.125.4922.3516.3281.6641.7734.9375 1.3359.2734.5625.4219 1.1641.4219 1.8047 0 .6406-.1406 1.2656-.4219 1.875-.2812.6094-.6562 1.1719-1.125 1.6875z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Get it on</div>
                      <div className="font-semibold text-amber-400">Google Play</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-neutral-800 hover:bg-amber-400/20 px-4 py-3 rounded-lg transition-colors duration-200 group border border-amber-400/10"
                  >
                    <svg
                      className="w-8 h-8 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="font-semibold text-amber-400">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Company Links */}
            <div>
              <h5 className="font-semibold text-white mb-6">Company</h5>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal Links */}
            <div>
              <h5 className="font-semibold text-white mb-6">Legal</h5>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-sm">
                © 2025 cholBhai. All rights reserved.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
