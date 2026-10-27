import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Eye, Plus, Check } from 'lucide-react';

interface NoteStage {
  step: string;
  stageName: string;
  accords: string;
  description: string;
  timing: string;
  quote: string;
  highlightNotes: string[];
}

const STAGES: NoteStage[] = [
  {
    step: '01',
    stageName: 'Top notes',
    accords: 'Saffron & sparkling citrus',
    description: 'Bright and warm for the first twenty minutes. Opens with an intoxicating burst of rare saffron and crisp citrus zest, creating an immediate aura of golden morning luminosity.',
    timing: 'First 20 — 30 minutes',
    quote: 'An immediate burst of vibrancy that introduces the fragrance with confident distinction.',
    highlightNotes: ['Saffron', 'Sparkling Citrus', 'Golden Accords']
  },
  {
    step: '02',
    stageName: 'Heart notes',
    accords: 'Velvety rose & warm spices',
    description: 'The rose arrives slowly, smoky and sweet, softened by rich spices. As the citrus softens, velvety rose petals intertwine with delicate aromatic nuances to form the composition’s emotional center.',
    timing: '2 — 4 hours',
    quote: 'The emotional core of the composition, revealing soft floral petals and intriguing spice.',
    highlightNotes: ['Velvety Rose', 'Warm Spices', 'Soft Florals']
  },
  {
    step: '03',
    stageName: 'Base notes',
    accords: 'Rich oud wood, amber & musk',
    description: 'What stays on skin and clothing into the next day. The composition settles into aged oud wood, wrapped in the quiet sensuality of golden amber and smoky musk.',
    timing: '6 — 10+ hours',
    quote: 'A profound, seductive base that leaves an enduring memory long after you have departed.',
    highlightNotes: ['Rich Oud Wood', 'Golden Amber', 'Smoky Musk']
  }
];

export const ScrollFragranceStory: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const { setActiveProductModal, addToBag, bag } = useStore();

  const featuredProduct = PRODUCTS[0]; // Mystical Lavendar
  const isInBag = bag.some(item => item.product.id === featuredProduct.id);

  const stage = STAGES[activeStage];

  return (
    <section 
      id="notes-story"
      aria-labelledby="notes-story-heading"
      className="py-16 sm:py-24 bg-[#faf8f5] text-[#121110] border-b border-[#e3dfd8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro Tag */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-[#9e4318] uppercase tracking-widest font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9e4318]" />
          <span>The notes, in three movements</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sahar 3 Movements Narrative */}
          <div className="lg:col-span-7">
            <h2
              id="notes-story-heading"
              className="font-serif text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight mb-2"
            >
              Mystical Lavendar, in three movements
            </h2>

            <p className="font-mono text-xs sm:text-sm text-[#6c6760] mb-8">
              Extrait de parfum — 100 ml — Signature Saffron & Oud
            </p>

            {/* Three Movement Clickable Tabs (Sahar Style) */}
            <div className="space-y-4 mb-8">
              {STAGES.map((s, index) => {
                const isActive = activeStage === index;
                return (
                  <div
                    key={s.step}
                    onClick={() => setActiveStage(index)}
                    className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-white border-[#121110] shadow-sm'
                        : 'bg-[#eeebe6]/60 border-[#e3dfd8] hover:bg-[#eeebe6]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-semibold ${
                          isActive ? 'text-[#9e4318]' : 'text-[#6c6760]'
                        }`}>
                          {s.step} — {s.stageName}
                        </span>
                        <span className="font-sans font-medium text-base text-[#121110]">
                          {s.accords}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#6c6760] hidden sm:inline">
                        {s.timing}
                      </span>
                    </div>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed transition-all ${
                      isActive ? 'text-[#57534e] mt-2 block' : 'text-[#6c6760] hidden sm:line-clamp-1'
                    }`}>
                      {s.description}
                    </p>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-[#e3dfd8] flex flex-wrap gap-2">
                        {s.highlightNotes.map(n => (
                          <span key={n} className="px-2.5 py-0.5 rounded-full bg-[#eeebe6] text-[#121110] font-mono text-[10px]">
                            {n}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stage Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => addToBag(featuredProduct, 1)}
                className="px-6 py-3 bg-[#121110] hover:bg-[#2a2624] text-white font-mono text-xs uppercase tracking-widest rounded-full transition-colors flex items-center gap-2"
              >
                {isInBag ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>In Inquiry Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Inquire About Mystical Lavendar</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveProductModal(featuredProduct)}
                className="px-5 py-3 bg-white hover:bg-[#eeebe6] border border-[#e3dfd8] text-[#121110] font-mono text-xs uppercase tracking-widest rounded-full transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#57534e]" />
                <span>Full Pyramid</span>
              </button>
            </div>

          </div>

          {/* Right Column: Flacon on Linen Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl p-6 shadow-sm relative group">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e3dfd8] font-mono text-[11px] text-[#57534e]">
                <span>Stage active: {stage.step}</span>
                <span className="text-[#9e4318]">{stage.timing}</span>
              </div>

              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white relative">
                <img
                  src={featuredProduct.primaryImage || '/assets/products/mystical-lavender-duo.webp'}
                  alt="Mystical Lavendar flacon on marble"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="750"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-[#e3dfd8] text-[#121110]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9e4318] block mb-1">
                    Movement {stage.step} Focus
                  </span>
                  <p className="font-sans font-medium text-sm">
                    {stage.accords}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e3dfd8] flex items-center justify-between font-mono text-xs text-[#6c6760]">
                <span>Handcrafted Extrait</span>
                <span>Numbered flacon</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
