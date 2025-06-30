import { CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="section-padding bg-neutral-950 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              Stay Connected with cholBhai
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Get campus ride updates, safety tips, and special student offers delivered to your inbox. 
              Join thousands of students already using cholBhai.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-4 rounded-lg border border-amber-400/20 bg-neutral-900 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent shadow-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isLoading
                      ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                      : 'bg-amber-400 text-black hover:bg-amber-500 shadow-lg'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="loading-spinner w-5 h-5"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-8 animate-scale-in shadow-lg">
                <CheckIcon className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Successfully Subscribed!</h3>
                <p className="text-zinc-300">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-amber-400/10">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-amber-400">📧</span>
              </div>
              <h3 className="font-semibold mb-2 text-amber-400">Weekly Updates</h3>
              <p className="text-zinc-300 text-sm">
                Get the latest news and updates every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-amber-400">🎁</span>
              </div>
              <h3 className="font-semibold mb-2 text-amber-400">Exclusive Offers</h3>
              <p className="text-zinc-300 text-sm">
                Be the first to know about special discounts
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-amber-400">💡</span>
              </div>
              <h3 className="font-semibold mb-2 text-amber-400">Tips & Tricks</h3>
              <p className="text-zinc-300 text-sm">
                Learn how to make the most of your rides
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-zinc-400 text-sm mt-8">
            We respect your privacy. Unsubscribe at any time.{' '}
            <a href="/" className="underline hover:text-amber-400">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
