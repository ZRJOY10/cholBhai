import { useState } from 'react';

const faqs = [
  {
    question: 'How do I request a ride on cholBhai?',
    answer: 'Simply sign up, enter your pickup and drop-off locations, select your vehicle type, and tap to request a ride. You can also bid or accept offers from drivers.'
  },
  {
    question: 'Is cholBhai only for university students?',
    answer: 'cholBhai is designed primarily for university students, but some campuses may allow staff or faculty to join as well. Check your campus policy.'
  },
  {
    question: 'What payment methods are supported?',
    answer: 'You can pay with cash, bKash, or other digital wallets as available in your area.'
  },
  {
    question: 'How do I become a driver?',
    answer: 'Sign up as a driver, complete the verification process, and start accepting ride requests from students on your campus.'
  },
  {
    question: 'Is my information safe?',
    answer: 'Yes, cholBhai uses secure verification and payment systems to protect your data and privacy.'
  },
  {
    question: 'Can I schedule rides in advance?',
    answer: 'Currently, cholBhai focuses on on-demand rides. Scheduled rides may be added in the future.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact support through the app or website via the Contact page.'
  },
  {
    question: 'What if I have an issue with a ride?',
    answer: 'If you experience any issues, please report them through the app or contact support for assistance.'
  },
];

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="py-24 min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Decorative Amber Gradient */}
      <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-transparent rounded-full blur-2xl z-0"></div>
      <div className="container-custom max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-300 text-center mb-14 max-w-2xl mx-auto">Find answers to the most common questions about cholBhai. If you need more help, please contact our support team.</p>
        <ul className="space-y-6">
          {faqs.map((faq, idx) => (
            <li key={faq.question} className="bg-neutral-900/90 rounded-2xl shadow-lg p-7 border border-amber-400/10 transition-all duration-200 hover:shadow-amber-400/10">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-xl md:text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors duration-200">{faq.question}</span>
                <span className={`ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-90' : ''}`}>
                  <svg width="28" height="28" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="mt-4 text-gray-200 text-lg animate-fade-in border-l-4 border-amber-400/30 pl-5">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 0.3s ease; }
      `}</style>
    </section>
  );
};

export default FAQPage;
