import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import faqs from '../data/faq.ts';


const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container-custom max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          {faqs.map((faq, idx) => (
            <li key={faq.question} className="bg-neutral-900 rounded-xl shadow-md p-6 border border-amber-400/10">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="text-lg md:text-xl font-semibold text-amber-400">{faq.question}</span>
                <span className={`ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-90' : ''}`}>
                  <svg width="24" height="24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="mt-4 text-gray-300 text-base md:text-lg animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/faq')}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-semibold shadow-lg transition-all duration-200 text-lg"
          >
            View All FAQs
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 0.3s ease; }
      `}</style>
    </section>
  );
};

export default FAQSection;
