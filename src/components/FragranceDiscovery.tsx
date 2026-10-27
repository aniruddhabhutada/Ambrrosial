import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Compass, Sparkles, Eye, Plus, Check } from 'lucide-react';

interface MoodCard {
  id: 'Floral' | 'Sweet and playful' | 'Warm and sensual' | 'Fresh and uplifting' | 'Bold and vibrant';
  title: string;
  tagline: string;
  description: string;
  notesSample: string[];
}

const MOOD_PROFILES: MoodCard[] = [
  {
    id: 'Warm and sensual',
    title: 'Warm & Sensual',
    tagline: 'Deep, enveloping, and magnetic',
    description: 'Blends of rich oud wood, velvety rose, warm spices, golden amber, and almond cream crafted for intimate evenings and memorable statements.',
    notesSample: ['Oud Wood', 'Amber', 'Velvety Rose', 'Spices']
  },
  {
    id: 'Floral',
    title: 'Floral Elegance',
    tagline: 'Modern, delicate petal compositions',
    description: 'From refined peony and magnolia bouquets to classic rose and night-blooming jasmine, expressing feminine grace with contemporary nuance.',
    notesSample: ['Peony', 'Magnolia', 'Jasmine', 'Rose']
  },
  {
    id: 'Sweet and playful',
    title: 'Sweet & Playful',
    tagline: 'Whimsical, luscious, and romantic',
    description: 'Juicy wild berries, red pear, creamy vanilla, and spun chiffon musk designed to bring joyful lightness to everyday wear.',
    notesSample: ['Red Pear', 'Wild Berries', 'Vanilla', 'Chiffon Musk']
  },
  {
    id: 'Fresh and uplifting',
    title: 'Fresh & Uplifting',
    tagline: 'Effervescent, sparkling, and bright',
    description: 'Opening bursts of champagne effervescence, fresh citrus, star fruit, and dewy botanicals that awaken the senses.',
    notesSample: ['Champagne', 'Citrus', 'Star Fruit', 'Freesia']
  },
  {
    id: 'Bold and vibrant',
    title: 'Bold & Vibrant',
    tagline: 'Glamorous, confident, and unforgettable',
    description: 'Energetic passionfruit, tangy grapefruit, strawberries, and exotic orchid radiating self-assured glamour from day to night.',
    notesSample: ['Passionfruit', 'Grapefruit', 'Orchid', 'Strawberry']
  }
];

export const FragranceDiscovery: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodCard['id'] | null>('Warm and sensual');
  const { setActiveProductModal, addToBag, bag } = useStore();

  const matchingProducts = selectedMood
    ? PRODUCTS.filter(p => p.categories.includes(selectedMood))
    : PRODUCTS;

  const currentProfile = MOOD_PROFILES.find(m => m.id === selectedMood);

  return (
    <section
      id="discovery"
      aria-labelledby="discovery-heading"
      className="py-16 sm:py-24 bg-espresso-dark text-champagne relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20 text-champagne-light text-xs uppercase tracking-luxury font-medium mb-4">
            <Compass className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
            <span>Interactive Olfactory Guide</span>
          </div>

          <h2
            id="discovery-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4"
          >
            Discover Your Scent
          </h2>

          <p className="text-sm sm:text-base text-champagne/80 font-light leading-relaxed">
            Fragrance is an emotional portrait. Select an olfactory mood below to unveil compositions tailored to your mood, presence, and personal expression.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          role="radiogroup"
          aria-label="Fragrance Mood Profiles"
        >
          {MOOD_PROFILES.map((profile) => {
            const isSelected = selectedMood === profile.id;
            return (
              <button
                key={profile.id}
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedMood(profile.id)}
                className={`px-5 py-3 rounded-sm text-xs uppercase tracking-luxury font-medium transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-champagne text-espresso-dark font-semibold shadow-lg scale-105'
                    : 'bg-espresso/60 text-champagne/80 hover:bg-espresso hover:text-white border border-champagne/20'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-espresso-dark' : 'text-champagne/60'}`} aria-hidden="true" />
                <span>{profile.title}</span>
              </button>
            );
          })}

          {selectedMood && (
            <button
              onClick={() => setSelectedMood(null)}
              className="px-4 py-3 text-xs tracking-luxury uppercase text-champagne/60 hover:text-champagne transition-colors underline"
            >
              Show All Moods
            </button>
          )}
        </div>

        {/* Selected Mood Insight Panel */}
        {currentProfile && (
          <div className="max-w-4xl mx-auto bg-espresso/80 border border-champagne/30 rounded-sm p-6 sm:p-8 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <span className="text-[11px] uppercase tracking-wide-luxury text-champagne/60 block mb-1">
                  Olfactory Mood Profile
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                  {currentProfile.title}
                </h3>
                <p className="text-xs sm:text-sm text-champagne-light/90 font-light leading-relaxed mb-4">
                  {currentProfile.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.notesSample.map(note => (
                    <span 
                      key={note}
                      className="text-[10px] tracking-luxury uppercase px-2.5 py-1 bg-champagne/10 border border-champagne/20 text-champagne rounded-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:border-l md:border-champagne/20 md:pl-6 text-left">
                <span className="block text-[11px] uppercase tracking-luxury text-champagne/60 mb-1">
                  Matching Compositions
                </span>
                <p className="font-serif text-3xl text-champagne font-light">
                  {matchingProducts.length} {matchingProducts.length === 1 ? 'Fragrance' : 'Fragrances'}
                </p>
                <p className="text-xs text-champagne/70 mt-1">
                  Selected directly from supplied olfactory descriptions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Matching Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {matchingProducts.map((product) => {
            const isInBag = bag.some(item => item.product.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-espresso/90 border border-champagne/30 rounded-sm overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 hover:border-champagne hover:shadow-2xl group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-luxury text-champagne/60 block mb-1">
                        {product.categories.join(' • ')}
                      </span>
                      <h4 className="font-serif text-2xl text-white group-hover:text-champagne transition-colors">
                        {product.name}
                      </h4>
                    </div>

                    {product.primaryImage ? (
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-16 h-20 object-cover rounded-sm border border-champagne/30 shrink-0"
                        width="64"
                        height="80"
                      />
                    ) : (
                      <div className="w-16 h-20 bg-champagne/10 border border-champagne/30 rounded-sm flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-champagne/60" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-champagne-light/80 font-light leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne/20 flex items-center justify-between gap-3">
                  <span className="font-serif text-xs text-champagne italic">
                    {product.priceDisplay}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveProductModal(product)}
                      className="px-3 py-1.5 bg-champagne/15 hover:bg-champagne/25 text-champagne text-[11px] uppercase tracking-luxury font-medium rounded-sm transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addToBag(product)}
                      className={`px-3 py-1.5 text-[11px] uppercase tracking-luxury font-medium rounded-sm transition-colors flex items-center gap-1 ${
                        isInBag
                          ? 'bg-champagne text-espresso-dark'
                          : 'bg-champagne text-espresso-dark hover:bg-white'
                      }`}
                    >
                      {isInBag ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>In Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Inquire</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
