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
    <section className="section-padding bg-indigo-600">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Up to Date on All the Latest News
            </h2>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
              Get the latest updates, tips, and exclusive offers delivered straight to your inbox. 
              Join thousands of satisfied riders and drivers.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isLoading
                      ? 'bg-white/20 text-white cursor-not-allowed'
                      : 'bg-white text-indigo-600 hover:bg-gray-50 hover:scale-105'
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 animate-scale-in">
                <CheckIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Successfully Subscribed!</h3>
                <p className="text-indigo-100">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-indigo-500">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Weekly Updates</h3>
              <p className="text-indigo-100 text-sm">
                Get the latest news and updates every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-indigo-100 text-sm">
                Be the first to know about special discounts
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Tips & Tricks</h3>
              <p className="text-indigo-100 text-sm">
                Learn how to make the most of your rides
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-indigo-200 text-sm mt-8">
            We respect your privacy. Unsubscribe at any time.{' '}
            <a href="#" className="underline hover:text-white">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
