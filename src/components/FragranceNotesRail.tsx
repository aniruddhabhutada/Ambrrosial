import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';

interface NoteData {
  id: string;
  name: string;
  origin: string;
  character: string;
  fragrances: string[];
  description: string;
}

const VERIFIED_NOTES: NoteData[] = [
  {
    id: 'saffron',
    name: 'Saffron',
    origin: 'Kashmir & Persia',
    character: 'Spicy, Golden, Radiant',
    fragrances: ['Mystical Lavendar'],
    description: 'Precious golden stigmas providing a radiant, warm opening burst that announces the fragrance with confidence.'
  },
  {
    id: 'rose',
    name: 'Taif Rose',
    origin: 'Taif Terraces',
    character: 'Velvety, Floral, Romantic',
    fragrances: ['Mystical Lavendar', 'Bloom Mist'],
    description: 'Centuries-old distilled rose petals yielding fresh, green, and powdery elegance across day and evening wear.'
  },
  {
    id: 'oud',
    name: 'Oud Wood',
    origin: 'Assam & Southeast Asia',
    character: 'Deep, Resinous, Smoky',
    fragrances: ['Mystical Lavendar'],
    description: 'Aged wood resin that imparts an unmistakable aura of luxury, sensuality, and enduring nighttime sillage.'
  },
  {
    id: 'citrus',
    name: 'Sparkling Citrus',
    origin: 'Calabria & Mediterranean',
    character: 'Zesty, Dewy, Uplifting',
    fragrances: ['Mystical Lavendar', 'Bloom Mist'],
    description: 'Crisp bergamot and sparkling citrus that awaken the composition with crystalline clarity.'
  },
  {
    id: 'vanilla',
    name: 'Bourbon Vanilla',
    origin: 'Madagascar',
    character: 'Creamy, Sweet, Comforting',
    fragrances: ['Pink Chiffon'],
    description: 'Velvety gourmand vanilla softened by coconut milk, creating whimsical warmth and playful elegance.'
  },
  {
    id: 'jasmine',
    name: 'Jasmine Sambac',
    origin: 'Tamil Nadu & Grasse',
    character: 'Intoxicating, Delicate',
    fragrances: ['Pink Chiffon'],
    description: 'Night-blooming white floral petals radiating sweetness and soft, ultra-feminine grace.'
  },
  {
    id: 'amber',
    name: 'Golden Amber',
    origin: 'Baltic & Andalusia',
    character: 'Warm, Resinous, Seductive',
    fragrances: ['Mystical Lavendar', '1000 Wishes'],
    description: 'Enveloping balsamic accord that wraps the floral heart in an enduring blanket of comfort.'
  },
  {
    id: 'musk',
    name: 'Chiffon Musk',
    origin: 'Botanical Ambrette',
    character: 'Soft, Sensual, Clean',
    fragrances: ['Mystical Lavendar', 'Pink Chiffon', '1000 Wishes'],
    description: 'Second-skin softness reminiscent of spun silk, anchoring the sillage gracefully on fabrics.'
  },
  {
    id: 'peony',
    name: 'Pink Peony',
    origin: 'Lush Botanical Terraces',
    character: 'Lustrous, Crisp, Petal-Soft',
    fragrances: ['Bloom Mist', 'Bombshell'],
    description: 'Dewy spring blossom accord offering airy floral clarity and youthful optimism.'
  }
];

export const FragranceNotesRail: React.FC = () => {
  const { setSearchQuery } = useStore();

  const handleSelectNote = (noteName: string) => {
    setSearchQuery(noteName);
    const collectionElem = document.getElementById('collection');
    if (collectionElem) {
      collectionElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="ingredients"
      aria-labelledby="ingredients-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#e3dfd8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Header: From the region / Raw Materials */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e3dfd8] mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
              Sourced Botanicals
            </span>
            <h2
              id="ingredients-heading"
              className="font-sans text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight"
            >
              From the atelier
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#6c6760] mt-2">
              Scroll to browse the raw materials and accords
            </p>
          </div>

          <div className="font-mono text-xs text-[#57534e] hidden md:block">
            ← Scroll horizontally to explore →
          </div>
        </div>

        {/* Horizontal Scrolling Card Rail (Sahar Style) */}
        <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
          {VERIFIED_NOTES.map((note) => (
            <div
              key={note.id}
              onClick={() => handleSelectNote(note.name)}
              className="cursor-pointer snap-start shrink-0 w-[260px] sm:w-[320px] p-6 bg-[#eeebe6] border border-[#e3dfd8] rounded-xl flex flex-col justify-between hover:border-[#121110] hover:shadow-sm transition-all duration-300 group"
            >
              <div>
                <span className="font-mono text-[11px] text-[#6c6760] block mb-1">
                  {note.origin}
                </span>

                <h3 className="font-sans font-medium text-2xl text-[#121110] mb-2 group-hover:text-[#9e4318] transition-colors">
                  {note.name}
                </h3>

                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#57534e] font-mono text-[10px] mb-4 border border-[#e3dfd8]">
                  {note.character}
                </span>

                <p className="font-sans text-xs sm:text-sm text-[#57534e] leading-relaxed line-clamp-3">
                  {note.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e3dfd8] flex items-center justify-between text-xs font-mono text-[#121110]">
                <span className="text-[11px] text-[#6c6760]">
                  In: {note.fragrances.join(', ')}
                </span>
                <span className="text-[#9e4318] flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform">
                  <span>Filter</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
