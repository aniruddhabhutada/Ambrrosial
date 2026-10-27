import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { useStore } from '../context/StoreContext';
import { MapPin, ExternalLink, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);
  const { navigateTo, setIsBagOpen } = useStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121110] text-[#eeebe6] border-t border-[#2a2624]">
      
      {/* Sahar-Style Footer Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 border-b border-[#2a2624]">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-3 font-medium">
            Ambrrosial Essence Atelier
          </span>
          <h3 className="font-sans text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
            A fragrance that feels unmistakably yours.
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#eeebe6]/75 font-light leading-relaxed">
            Curated in small batches with rare florals, precious saffron, and deep oud wood. Available for boutique visit and direct consultation.
          </p>
        </div>
      </div>

      {/* Main Footer Links Columns (Sahar Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Studio & Location */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_CONFIG.logos.dark}
                alt="Ambrrosial Essence Emblem"
                className="w-10 h-10 rounded-full border border-[#2a2624]"
                width="40"
                height="40"
              />
              <div>
                <span className="font-sans font-semibold text-lg tracking-[0.2em] text-white uppercase block">
                  Ambrrosial
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#9e4318] uppercase block">
                  Essence
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#eeebe6]/70 leading-relaxed max-w-sm">
              Flagship fragrance atelier dedicated to personal distinction, sensory accords, and tailored discovery.
            </p>

            <div className="pt-2">
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#eeebe6] hover:text-[#e7d5b5] transition-colors border-b border-[#2a2624] pb-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#9e4318]" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#6c6760]" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-[#9e4318] block font-semibold mb-4">
              Shop
            </span>
            <ul className="space-y-2.5 text-[#eeebe6]/80">
              <li><a href="#collection" className="hover:text-white transition-colors">All perfumes</a></li>
              <li><a href="#notes-story" className="hover:text-white transition-colors">In three movements</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Raw materials</a></li>
              <li><a href="#scent-matcher" className="hover:text-white transition-colors">Scent finder</a></li>
            </ul>
          </div>

          {/* Column 3: House */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-[#9e4318] block font-semibold mb-4">
              House
            </span>
            <ul className="space-y-2.5 text-[#eeebe6]/80">
              <li><a href="#story" className="hover:text-white transition-colors">Our story</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Boutique sanctuary</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Good to know</a></li>
              <li>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block font-semibold mb-4">
              Concierge
            </span>
            <p className="font-sans text-xs text-[#eeebe6]/75 leading-relaxed">
              Order or ask a question directly. Our team confirms details and advice in chat.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsBagOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#eeebe6] text-[#121110] font-mono text-xs uppercase tracking-widest rounded-full hover:bg-white transition-colors font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-14 pt-8 border-t border-[#2a2624] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6c6760]">
          <div>
            © {currentYear} Ambrrosial Essence. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[#eeebe6] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[#eeebe6] transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal Dialog */}
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 text-[#121110]"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="fixed inset-0"
            onClick={() => setActivePolicy(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#e3dfd8] p-6 sm:p-8 z-10 space-y-4">
            <div className="flex items-center justify-between border-b border-[#e3dfd8] pb-4">
              <h4 className="font-sans font-medium text-xl text-[#121110]">
                {activePolicy === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h4>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1 rounded-full text-[#6c6760] hover:text-[#121110]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="font-sans text-xs sm:text-sm text-[#57534e] space-y-3 leading-relaxed">
              <p>
                At Ambrrosial Essence, we respect your personal privacy. Inquiries made via our concierge, website, or WhatsApp are used solely to fulfill fragrance requests and personalized scent advice.
              </p>
              <p>
                We do not sell or share client information with unverified third parties. All boutique visits and consultations are held with strict confidentiality.
              </p>
            </div>

            <div className="pt-4 border-t border-[#e3dfd8] flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 bg-[#121110] text-white font-mono text-xs uppercase tracking-wider rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
