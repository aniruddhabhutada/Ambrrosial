import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { Compass, Check, Eye, Plus } from 'lucide-react';

type FragranceFamily = 'Warm' | 'Floral' | 'Fruity' | 'Sweet' | 'Woody';

interface FamilyOption {
  id: FragranceFamily;
  label: string;
  tagline: string;
  description: string;
  matchingProductIds: string[];
}

const FAMILIES: FamilyOption[] = [
  {
    id: 'Warm',
    label: 'Warm & Sensual',
    tagline: 'Oud, amber & exotic spices',
    description: 'Enveloping and magnetic compositions crafted for evening elegance, intimate celebrations, and enduring presence.',
    matchingProductIds: ['mystical-lavendar', '1000-wishes']
  },
  {
    id: 'Floral',
    label: 'Modern Floral',
    tagline: 'Peony, rose, magnolia & jasmine',
    description: 'Lush botanical bouquets with contemporary crispness, celebrating delicate petal notes and feminine grace.',
    matchingProductIds: ['mystical-lavendar', 'bloom-mist', 'pink-chiffon', '1000-wishes', 'bombshell', 'gucci-flora']
  },
  {
    id: 'Fruity',
    label: 'Lustrous Fruity',
    tagline: 'Passionfruit, berries & red pear',
    description: 'Joyful, effervescent fruit notes that burst with vitality and sparkle into soft floral hearts.',
    matchingProductIds: ['pink-chiffon', 'bombshell', '1000-wishes']
  },
  {
    id: 'Sweet',
    label: 'Sweet & Gourmand',
    tagline: 'Vanilla, coconut milk & almond cream',
    description: 'Comforting, whimsical accords that capture playful romance and festive warmth on the skin.',
    matchingProductIds: ['pink-chiffon', '1000-wishes']
  },
  {
    id: 'Woody',
    label: 'Refined Woody',
    tagline: 'Rich oud, blonde & soft woods',
    description: 'Sophisticated architectural foundations that anchor florals and musks with regal longevity.',
    matchingProductIds: ['mystical-lavendar', 'bloom-mist', 'bombshell']
  }
];

export const ScentDiscoverySection: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<FragranceFamily>('Warm');
  const { setActiveProductModal, addToBag, bag } = useStore();

  const currentFamily = FAMILIES.find(f => f.id === selectedFamily) || FAMILIES[0];
  const matchedProducts: Product[] = PRODUCTS.filter(p =>
    currentFamily.matchingProductIds.includes(p.id)
  );

  return (
    <section
      id="scent-matcher"
      aria-labelledby="scent-matcher-heading"
      className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e3dfd8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Header: Try it before you commit */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e3dfd8] mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
              Scent Consultation
            </span>
            <h2
              id="scent-matcher-heading"
              className="font-sans text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight"
            >
              Try it before you commit.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#57534e] font-light mt-2 max-w-xl">
              Perfume is personal. Select your olfactory inclination to discover tailored flacon recommendations from our atelier.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6c6760]">
            <Compass className="w-4 h-4 text-[#9e4318]" />
            <span>Interactive Accord Matcher</span>
          </div>
        </div>

        {/* 5 Family Selection Pills / Cards */}
        <div className="flex overflow-x-auto scrollbar-none gap-2.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:gap-3 mb-8 sm:mb-10">
          {FAMILIES.map((fam) => {
            const isSelected = selectedFamily === fam.id;
            return (
              <button
                key={fam.id}
                type="button"
                onClick={() => setSelectedFamily(fam.id)}
                className={`shrink-0 w-[160px] sm:w-auto p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121110] text-white border-[#121110] shadow-sm'
                    : 'bg-[#eeebe6] hover:bg-[#e3dfd8] text-[#121110] border-[#e3dfd8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${
                      isSelected ? 'text-[#e7d5b5]' : 'text-[#6c6760]'
                    }`}>
                      {fam.id}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    )}
                  </div>
                  <p className="font-sans text-base font-medium leading-snug">
                    {fam.label}
                  </p>
                </div>
                <p className={`text-[11px] mt-2 line-clamp-1 font-mono ${
                  isSelected ? 'text-[#eeebe6]/80' : 'text-[#6c6760]'
                }`}>
                  {fam.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Matched Recommendations Result (Linen Container) */}
        <div className="bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e3dfd8] mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-1">
                Atelier Match For: {currentFamily.label}
              </span>
              <p className="font-sans text-base text-[#57534e]">
                {currentFamily.description}
              </p>
            </div>

            <span className="font-mono text-xs text-[#6c6760] shrink-0">
              {matchedProducts.length} flacons recommended
            </span>
          </div>

          {/* Recommended Product Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedProducts.slice(0, 3).map((prod) => {
              const inBag = bag.some(i => i.product.id === prod.id);
              return (
                <div 
                  key={prod.id}
                  className="bg-white p-4 rounded-xl border border-[#e3dfd8] flex flex-col justify-between shadow-xs hover:border-[#121110] transition-colors"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#eeebe6] shrink-0">
                      {prod.primaryImage ? (
                        <img 
                          src={prod.primaryImage} 
                          alt={prod.name} 
                          className="w-full h-full object-cover" 
                          width="64"
                          height="64"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-mono text-[9px] text-[#6c6760]">
                          Flacon
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-base text-[#121110]">
                        {prod.name}
                      </h4>
                      <p className="font-mono text-xs text-[#6c6760]">
                        100 ml — Extrait
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#e3dfd8] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveProductModal(prod)}
                      className="text-xs font-mono text-[#57534e] hover:text-[#121110] flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => addToBag(prod, 1)}
                      className="px-3.5 py-1.5 bg-[#121110] text-white font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#2a2624] transition-colors flex items-center gap-1"
                    >
                      {inBag ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                      <span>{inBag ? 'In Bag' : 'Inquire'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
