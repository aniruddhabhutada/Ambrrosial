import React from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { useStore } from '../context/StoreContext';
import { MapPin, ExternalLink } from 'lucide-react';

export const StoreLocation: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <section 
      id="location"
      aria-labelledby="location-heading"
      className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e3dfd8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Header: Smell it in person */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e3dfd8] mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
              Boutique Atelier
            </span>
            <h2
              id="location-heading"
              className="font-sans text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight"
            >
              Smell it in person.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#57534e] font-light mt-2 max-w-xl">
              Experience Ambrrosial Essence in our boutique sanctuary. Test our formulations directly on your skin and discover your personal signature note.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121110] hover:bg-[#2a2624] text-white font-mono text-xs uppercase tracking-widest rounded-full transition-colors shrink-0"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Get directions</span>
            <ExternalLink className="w-3 h-3 text-[#e3dfd8]" />
          </a>
        </div>

        {/* Location Details Card (Linen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-white text-[#121110] font-mono text-[10px] uppercase tracking-wider border border-[#e3dfd8]">
                  Flagship Boutique
                </span>
                <span className="font-mono text-xs text-[#9e4318]">
                  Open for consultations
                </span>
              </div>

              <h3 className="font-sans font-medium text-2xl text-[#121110] mb-2">
                Ambrrosial Essence Atelier
              </h3>

              <p className="font-sans text-sm text-[#57534e] leading-relaxed mb-6">
                Our tranquil boutique offers private flacon testing, sensory consultation, and custom gifting. Step inside to explore each movement of our six signature perfumes.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#57534e] border-t border-[#e3dfd8] pt-4">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#9e4318] shrink-0" />
                  <span>Interactive Google Maps Destination Verified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Private scent appointments available</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e3dfd8] flex flex-wrap gap-3">
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#121110] text-white font-mono text-xs uppercase tracking-widest rounded-full text-center hover:bg-[#2a2624] transition-colors"
              >
                Open Google Maps
              </a>

              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="px-5 py-3 bg-white text-[#121110] border border-[#e3dfd8] font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#eeebe6] transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl overflow-hidden min-h-[360px] relative">
            <iframe
              src={BRAND_CONFIG.storeLocation.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ambrrosial Essence Boutique Location on Google Maps"
              className="w-full h-full filter contrast-[0.95] saturate-[0.8]"
            />
            
            <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm border border-[#e3dfd8] rounded-xl shadow-xs font-mono text-xs">
              <span className="text-[#9e4318] font-medium block">Ambrrosial Atelier</span>
              <span className="text-[#6c6760] text-[11px]">Click 'Get directions' for live routing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
