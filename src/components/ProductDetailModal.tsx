import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Heart, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  Info,
  ChevronRight
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { 
    activeProductModal, 
    setActiveProductModal, 
    addToBag, 
    toggleWishlist, 
    isInWishlist,
    bag
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (activeProductModal) {
      setSelectedImage(activeProductModal.primaryImage);
      setQuantity(1);
      // Update browser URL query without reload
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('fragrance', activeProductModal.slug);
      window.history.replaceState({}, '', newUrl.toString());
      document.body.style.overflow = 'hidden';
    } else {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('fragrance');
      window.history.replaceState({}, '', newUrl.toString());
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProductModal]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProductModal) {
        setActiveProductModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProductModal, setActiveProductModal]);

  if (!activeProductModal) return null;

  const isFavorited = isInWishlist(activeProductModal.id);
  const isInBag = bag.some(item => item.product.id === activeProductModal.id);

  // Find related fragrances sharing categories
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== activeProductModal.id &&
         p.categories.some(cat => activeProductModal.categories.includes(cat))
  ).slice(0, 3);

  const handleAddToBag = () => {
    addToBag(activeProductModal, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-espresso/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Background click to close */}
      <div 
        className="fixed inset-0" 
        onClick={() => setActiveProductModal(null)}
        aria-hidden="true" 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#e3dfd8] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Breadcrumb and Close */}
        <div className="px-5 py-3.5 border-b border-[#e3dfd8] bg-[#faf8f5] flex items-center justify-between gap-4 font-mono text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-charcoal/70 overflow-x-auto">
            <button
              onClick={() => setActiveProductModal(null)}
              className="hover:text-espresso transition-colors"
            >
              Atelier
            </button>
            <ChevronRight className="w-3 h-3 text-champagne-dark" aria-hidden="true" />
            <button
              onClick={() => setActiveProductModal(null)}
              className="hover:text-espresso transition-colors"
            >
              Collection
            </button>
            <ChevronRight className="w-3 h-3 text-champagne-dark" aria-hidden="true" />
            <span className="font-medium text-espresso truncate max-w-[140px] sm:max-w-none">
              {activeProductModal.name}
            </span>
          </nav>

          <button
            type="button"
            onClick={() => setActiveProductModal(null)}
            aria-label="Close product details"
            className="p-1.5 text-espresso/70 hover:text-espresso hover:bg-champagne/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Visual Photography Column */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="aspect-[4/3] sm:aspect-[4/5] max-h-[300px] sm:max-h-none bg-[#f4f1eb] border border-[#e3dfd8] rounded-xl overflow-hidden relative shadow-inner">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt={`${activeProductModal.name} perfume flacon`}
                    className="w-full h-full object-cover object-center filter brightness-95"
                    width="600"
                    height="750"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-ivory to-champagne/20">
                    <Sparkles className="w-12 h-12 text-bronze mb-3" aria-hidden="true" />
                    <h3 className="font-serif text-2xl text-espresso mb-1">
                      {activeProductModal.name}
                    </h3>
                    <p className="text-xs text-charcoal/70 uppercase tracking-luxury">
                      Boutique Formulation
                    </p>
                    <p className="text-xs text-charcoal/60 mt-4 max-w-xs leading-relaxed">
                      Studio bottle photograph currently undergoing curation in the boutique catalog.
                    </p>
                  </div>
                )}

                {/* Wishlist Button on Image */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(activeProductModal.id)}
                  aria-label={isFavorited ? `Remove from wishlist` : `Add to wishlist`}
                  className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 shadow-md backdrop-blur-md ${
                    isFavorited
                      ? 'bg-espresso text-champagne'
                      : 'bg-white/85 text-espresso hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-champagne' : ''}`} aria-hidden="true" />
                </button>
              </div>

              {/* Gallery Thumbnails (if multiple available) */}
              {activeProductModal.gallery && activeProductModal.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {activeProductModal.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 h-20 rounded-sm overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImage === img
                          ? 'border-espresso shadow-md'
                          : 'border-champagne/60 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${activeProductModal.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                        width="64"
                        height="80"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Asset Mapping Status Note */}
              <div className="p-3 bg-ivory-light border border-champagne/40 rounded-sm text-[11px] text-charcoal/80 flex items-start gap-2">
                <Info className="w-4 h-4 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                <span>{activeProductModal.assetNote}</span>
              </div>
            </div>

            {/* Product Information & Inquiry Column */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {activeProductModal.categories.map(cat => (
                    <span
                      key={cat}
                      className="text-[10px] uppercase tracking-luxury text-bronze-dark font-medium px-2.5 py-1 bg-champagne/25 border border-champagne/50 rounded-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Product Title */}
                <h2 
                  id="modal-product-title"
                  className="font-serif text-3xl sm:text-4xl text-espresso font-normal tracking-wide mb-3"
                >
                  {activeProductModal.name}
                </h2>

                {/* Spelling Note for Mystical Lavendar */}
                {activeProductModal.spellingNote && (
                  <p className="text-[11px] text-bronze italic bg-ivory border border-champagne/60 p-2.5 rounded-sm mb-4">
                    {activeProductModal.spellingNote}
                  </p>
                )}

                {/* Pricing / Transparent Inquiry Label */}
                <div className="mb-6 pb-4 border-b border-champagne/40">
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal/60 block mb-0.5">
                    Acquisition & Availability
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-espresso font-medium italic">
                    {activeProductModal.priceDisplay}
                  </p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    Direct boutique pricing and bespoke bottling available upon inquiry.
                  </p>
                </div>

                {/* Full Supplied Description */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-luxury text-espresso font-semibold mb-2">
                    Fragrance Profile
                  </h4>
                  <p className="text-sm text-charcoal leading-relaxed font-light">
                    {activeProductModal.fullDescription}
                  </p>
                </div>

                {/* Olfactory Structure (Notes Breakdown) */}
                {activeProductModal.notesSummary && (
                  <div className="mb-8 p-4 bg-ivory-light border border-champagne/40 rounded-sm">
                    <h4 className="text-xs uppercase tracking-luxury text-espresso font-semibold mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                      <span>Olfactory Pyramid</span>
                    </h4>
                    <dl className="space-y-2 text-xs">
                      {activeProductModal.notesSummary.opening && (
                        <div className="flex">
                          <dt className="w-20 font-medium text-espresso uppercase tracking-wider text-[10px]">Opening:</dt>
                          <dd className="text-charcoal font-light">{activeProductModal.notesSummary.opening.join(', ')}</dd>
                        </div>
                      )}
                      {activeProductModal.notesSummary.heart && (
                        <div className="flex">
                          <dt className="w-20 font-medium text-espresso uppercase tracking-wider text-[10px]">Heart:</dt>
                          <dd className="text-charcoal font-light">{activeProductModal.notesSummary.heart.join(', ')}</dd>
                        </div>
                      )}
                      {activeProductModal.notesSummary.base && (
                        <div className="flex">
                          <dt className="w-20 font-medium text-espresso uppercase tracking-wider text-[10px]">Base:</dt>
                          <dd className="text-charcoal font-light">{activeProductModal.notesSummary.base.join(', ')}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}

                {/* Legal disclaimer if applicable */}
                {activeProductModal.disclaimer && (
                  <p className="text-[11px] text-charcoal/60 italic border-l-2 border-champagne pl-3 my-4">
                    {activeProductModal.disclaimer}
                  </p>
                )}

              </div>

              {/* Inquiry & Quantity Action Controls */}
              <div className="pt-6 border-t border-champagne/40">
                <div className="flex items-center gap-4 mb-4">
                  
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-[#e3dfd8] rounded-full bg-[#eeebe6] px-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                      className="p-2 text-[#121110] hover:bg-[#e3dfd8] rounded-full transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    <span className="w-8 text-center font-mono text-sm text-[#121110] font-medium">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="p-2 text-[#121110] hover:bg-[#e3dfd8] rounded-full transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Add to Inquiry Bag Button */}
                  <button
                    type="button"
                    onClick={handleAddToBag}
                    className="flex-1 py-3.5 px-6 bg-[#121110] hover:bg-[#2a2624] text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 rounded-full shadow-sm flex items-center justify-center gap-2 group"
                  >
                    {justAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                        <span>Added to Inquiry</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
                        <span>{isInBag ? 'Update Inquiry Bag' : 'Add to Inquiry Bag'}</span>
                      </>
                    )}
                  </button>

                </div>

                <div className="flex items-center justify-between text-xs text-charcoal/70">
                  <span>Concierge fragrance consultation included</span>
                  <button
                    onClick={() => setActiveProductModal(null)}
                    className="inline-flex items-center gap-1 text-bronze hover:underline font-medium"
                  >
                    <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                    <span>Return to Collection</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Related Fragrance Recommendations */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-champagne/40">
              <h4 className="font-serif text-2xl text-espresso mb-6">
                Complementary Olfactory Explorations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => setActiveProductModal(rel)}
                    className="p-4 bg-ivory rounded-sm border border-champagne/40 hover:border-bronze transition-colors cursor-pointer flex items-center gap-3 group"
                  >
                    {rel.primaryImage ? (
                      <img
                        src={rel.primaryImage}
                        alt={rel.name}
                        className="w-12 h-14 object-cover rounded-sm border border-champagne/40"
                        width="48"
                        height="56"
                      />
                    ) : (
                      <div className="w-12 h-14 bg-white border border-champagne/40 rounded-sm flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-bronze" aria-hidden="true" />
                      </div>
                    )}
                    <div>
                      <p className="font-serif text-base text-espresso group-hover:text-bronze transition-colors">
                        {rel.name}
                      </p>
                      <p className="text-[10px] text-charcoal/60 uppercase tracking-luxury">
                        {rel.priceDisplay}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
