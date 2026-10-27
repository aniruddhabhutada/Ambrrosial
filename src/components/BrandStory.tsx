import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#e3dfd8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
            Editorial Philosophy
          </span>
          <h2
            id="story-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight leading-[1.12]"
          >
            A scent for every side of you.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57534e] font-light mt-4 leading-relaxed">
            Fragrance is the most intimate form of memory and personal presence. We compose perfumes not as uniform masks, but as fluid personal extensions—designed to unfold with quiet grace.
          </p>
        </div>

        {/* 3 Editorial Story Pillars (Sahar Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="p-6 bg-[#eeebe6] border border-[#e3dfd8] rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6c6760] block mb-3">
                01 — The vision
              </span>
              <h3 className="font-sans font-medium text-xl text-[#121110] mb-3">
                One nose, curated flacons.
              </h3>
              <p className="font-sans text-sm text-[#57534e] leading-relaxed">
                Every Ambrrosial Essence fragrance is blended to mirror your changing moods—unfolding with confidence in morning meetings and quiet sensuality in evening celebrations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3dfd8] font-mono text-[11px] text-[#9e4318]">
              Handcrafted batches
            </div>
          </div>

          <div className="p-6 bg-[#eeebe6] border border-[#e3dfd8] rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6c6760] block mb-3">
                02 — The botanicals
              </span>
              <h3 className="font-sans font-medium text-xl text-[#121110] mb-3">
                Rare accords, aged woods.
              </h3>
              <p className="font-sans text-sm text-[#57534e] leading-relaxed">
                From velvety Taif rose petals and sparkling citrus to smoky oud and soft amber, our ingredients are allowed to mature slowly so the scent lingers gently on skin and fabric.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3dfd8] font-mono text-[11px] text-[#9e4318]">
              Natural maceration
            </div>
          </div>

          <div className="p-6 bg-[#eeebe6] border border-[#e3dfd8] rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6c6760] block mb-3">
                03 — The flacon
              </span>
              <h3 className="font-sans font-medium text-xl text-[#121110] mb-3">
                Numbered by hand.
              </h3>
              <p className="font-sans text-sm text-[#57534e] leading-relaxed">
                Each flacon is individually filled, inspected, and paired with custom boutique consultation so you receive an essence that feels unmistakably yours.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3dfd8] font-mono text-[11px] text-[#9e4318]">
              Bespoke packaging
            </div>
          </div>

        </div>

        {/* Flacon Composition Showcase on Silk / Marble */}
        <div className="bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden aspect-[4/3] bg-white">
            <img
              src="/assets/products/mystical-lavender-duo.webp"
              alt="Ambrrosial Essence signature flacons"
              className="w-full h-full object-cover"
              loading="lazy"
              width="600"
              height="450"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318]">
              Atelier Philosophy
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#121110] leading-snug">
              “Perfume is the key to our memories, an invisible aura of pure individuality.”
            </blockquote>
            <p className="font-sans text-sm text-[#57534e] leading-relaxed">
              We invite you to discover our atelier in person or connect with our concierge for a bespoke consultation.
            </p>
            <div className="pt-2">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#121110] text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#2a2624] transition-colors"
              >
                <span>Browse the flacons</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
