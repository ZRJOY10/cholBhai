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
    <section className="section-padding bg-[rgb(var(--color-bg-dark-rgb))] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.3)] via-[rgba(var(--color-primary-light-rgb),0.1)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[rgba(var(--color-primary-dark-rgb),0.2)] via-[rgba(var(--color-primary-rgb),0.1)] to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-[rgb(var(--color-text-light-rgb))]">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[rgb(var(--color-primary-rgb))] via-[rgb(var(--color-primary-light-rgb))] to-[rgb(var(--color-primary-dark-rgb))] bg-clip-text text-transparent drop-shadow-lg">
              Stay Connected with cholBhai
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-muted-rgb))] max-w-2xl mx-auto">
              Get campus ride updates, safety tips, and special student offers delivered to your inbox. 
              Join thousands of students already using cholBhai.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[rgb(var(--color-primary-rgb))]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-4 rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] bg-[rgb(var(--color-bg-rgb))] text-[rgb(var(--color-text-light-rgb))] placeholder-[rgb(var(--color-primary-light-rgb))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary-rgb))] focus:border-transparent shadow-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isLoading
                      ? 'bg-[rgb(var(--color-bg-muted-rgb))] text-[rgb(var(--color-text-muted-rgb))] cursor-not-allowed'
                      : 'bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))] hover:bg-[rgb(var(--color-primary-dark-rgb))] shadow-lg'
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
              <div className="bg-[rgba(var(--color-bg-muted-rgb),0.8)] backdrop-blur-sm rounded-lg p-8 animate-scale-in shadow-lg">
                <CheckIcon className="w-16 h-16 text-[rgb(var(--color-primary-rgb))] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Successfully Subscribed!</h3>
                <p className="text-[rgb(var(--color-text-muted-rgb))]">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[rgba(var(--color-primary-rgb),0.1)]">
            <div className="text-center">
              <div className="w-12 h-12 bg-[rgba(var(--color-primary-rgb),0.2)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[rgb(var(--color-primary-rgb))]">📧</span>
              </div>
              <h3 className="font-semibold mb-2 text-[rgb(var(--color-primary-rgb))]">Weekly Updates</h3>
              <p className="text-[rgb(var(--color-text-muted-rgb))] text-sm">
                Get the latest news and updates every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[rgba(var(--color-primary-rgb),0.2)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[rgb(var(--color-primary-rgb))]">🎁</span>
              </div>
              <h3 className="font-semibold mb-2 text-[rgb(var(--color-primary-rgb))]">Exclusive Offers</h3>
              <p className="text-[rgb(var(--color-text-muted-rgb))] text-sm">
                Be the first to know about special discounts
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[rgba(var(--color-primary-rgb),0.2)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-[rgb(var(--color-primary-rgb))]">💡</span>
              </div>
              <h3 className="font-semibold mb-2 text-[rgb(var(--color-primary-rgb))]">Tips & Tricks</h3>
              <p className="text-[rgb(var(--color-text-muted-rgb))] text-sm">
                Learn how to make the most of your rides
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-[rgb(var(--color-text-muted-rgb))] text-sm mt-8">
            We respect your privacy. Unsubscribe at any time.{' '}
            <a href="/" className="underline hover:text-[rgb(var(--color-primary-rgb))]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
