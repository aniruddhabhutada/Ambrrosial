import React from 'react';
import { ArrowRight, Compass, Check, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-label="Ambrrosial Essence Hero Campaign"
      className="relative bg-[#eeebe6] text-[#121110] border-b border-[#e3dfd8] overflow-hidden"
    >
      {/* Subtle Desert Atmosphere Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eeebe6] via-[#f4f1eb]/80 to-transparent pointer-events-none z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Sahar-Style Editorial Left Column */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            
            {/* Monospace Origin Tag (Exact Sahar Style) */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 font-mono text-xs text-[#57534e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e4318]" />
              <span>Small batch atelier — Composed in India</span>
            </div>

            {/* Sahar-Style Bold Editorial Headline */}
            <h1 className="font-sans text-3xl sm:text-5xl xl:text-[72px] font-normal text-[#121110] leading-[1.08] sm:leading-[1.04] tracking-[-0.03em] mb-5 sm:mb-8">
              Perfume from the hour <span className="text-[#9e4318]">before dawn.</span>
            </h1>

            {/* Sahar-Style Two-Tone Narrative Statement */}
            <p className="font-sans text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 text-[#57534e] font-light">
              <span className="text-[#121110] font-normal">Ambrrosial Essence composes perfumes for personal distinction.</span> In small batches, from wild saffron, velvety Taif rose, sparkling citrus, and aged Assam oud wood.
            </p>

            {/* Sahar-Style Pill Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#121110] hover:bg-[#2a2624] text-white text-xs font-mono uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-sm group text-center min-h-[44px]"
              >
                <span>Shop the collection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#scent-matcher"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-white hover:bg-[#f4f1eb] border border-[#e3dfd8] text-[#121110] text-xs font-mono uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-sm text-center min-h-[44px]"
              >
                <Compass className="w-3.5 h-3.5 text-[#57534e]" aria-hidden="true" />
                <span>Try the scent finder</span>
              </a>
            </div>

            {/* 3 Value Propositions with Clean Monospace (Sahar Style) */}
            <div className="pt-5 sm:pt-6 border-t border-[#e3dfd8] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-xs text-[#6c6760]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e4318] shrink-0" aria-hidden="true" />
                <span>Small batch blends</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e4318] shrink-0" aria-hidden="true" />
                <span>Rare botanical oils</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9e4318] shrink-0" aria-hidden="true" />
                <span>Free 2ml discovery vial</span>
              </div>
            </div>

          </div>

          {/* Sahar-Style Master Campaign Image (Right Column) */}
          <div className="lg:col-span-5 xl:col-span-6">
            <div className="bg-[#f4f1eb] border border-[#e3dfd8] rounded-2xl p-3 sm:p-4 shadow-xl relative group overflow-hidden">
              
              {/* Card Top Meta Bar */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#e3dfd8] font-mono text-[11px] text-[#57534e]">
                <span>Extrait de parfum</span>
                <span>Signature Flacon — 100 ml</span>
              </div>

              {/* Master Atmospheric Flacon Photograph */}
              <div className="aspect-[4/3.6] rounded-xl overflow-hidden bg-stone-100 relative">
                <img
                  src="/assets/hero/hero-desert-perfume.jpg"
                  alt="Ambrrosial Essence signature perfume flacon on travertine limestone at dawn in the desert"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  width="800"
                  height="720"
                />

                {/* Sahar Pill Bestseller Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#e3dfd8] text-[#121110] text-[10px] font-mono uppercase tracking-wider shadow-sm">
                  Signature Reserve
                </div>
              </div>

              {/* Card Bottom Meta Bar */}
              <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#121110]">
                    Mystical Lavendar
                  </h3>
                  <p className="font-mono text-xs text-[#6c6760]">
                    Saffron, velvety rose, aged oud wood & amber
                  </p>
                </div>

                <a 
                  href="#notes-story" 
                  className="self-start sm:self-auto px-4 py-2 bg-[#121110] hover:bg-[#9e4318] text-white text-[11px] font-mono uppercase tracking-wider rounded-full transition-colors shrink-0 text-center min-h-[36px] flex items-center justify-center"
                >
                  In 3 movements &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Sahar-Style WhatsApp Consultation FAB */}
      <a
        href="https://wa.me/919999999999?text=Hello%20Ambrrosial%20Essence,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20perfume%20collection."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center p-3 sm:px-5 sm:py-3 bg-[#121110] hover:bg-[#2a2624] text-white text-xs font-mono uppercase tracking-wider rounded-full shadow-2xl border border-white/15 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366]"
      >
        <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 text-[#25d366] shrink-0" />
        <span className="hidden sm:inline sm:ml-2.5">Order on WhatsApp</span>
      </a>
    </section>
  );
};
