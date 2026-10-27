import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Can I try before I purchase?',
    answer: 'Yes. Perfume is deeply personal. We invite you to visit our boutique sanctuary or arrange a personalized digital scent consultation with our concierge to explore accord samples before confirming your flacon.'
  },
  {
    question: 'Can I order or inquire on WhatsApp?',
    answer: 'Absolutely. Click "Inquire on WhatsApp" anywhere on the site or use our inquiry drawer. Share the fragrances you are interested in, and our atelier team will confirm details, pricing, and personalized advice directly in the chat.'
  },
  {
    question: 'How are Ambrrosial Essence perfumes formulated?',
    answer: 'Each perfume is blended in small batches using high-concentration fragrance oils—featuring precious saffron, Taif rose, aged oud wood, and soft ambers. Each batch rests to achieve optimal sillage and skin longevity.'
  },
  {
    question: 'Where is the Ambrrosial Essence boutique located?',
    answer: 'Our flagship sanctuary is mapped on Google Maps. You can click "Get directions" in the navigation or boutique section to route directly to our doors.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#e3dfd8]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Header: Good to know */}
        <div className="text-left mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
            Atelier Inquiries
          </span>
          <h2
            id="faq-heading"
            className="font-sans text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight"
          >
            Good to know
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#e3dfd8] border-t border-b border-[#e3dfd8]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-lg sm:text-xl text-[#121110] group-hover:text-[#9e4318] transition-colors">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full text-[#6c6760] group-hover:text-[#121110] transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 pr-6">
                    <p className="font-sans text-sm sm:text-base text-[#57534e] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
