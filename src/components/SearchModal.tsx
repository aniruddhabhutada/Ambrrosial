import React, { useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    setActiveProductModal,
  } = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const query = searchQuery.trim().toLowerCase();
  const searchResults = query
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.fullDescription.toLowerCase().includes(query) ||
          (p.notesSummary &&
            Object.values(p.notesSummary)
              .flat()
              .some((n) => n.toLowerCase().includes(query)))
        );
      })
    : [];

  const handleSelectProduct = (product: typeof PRODUCTS[0]) => {
    setActiveProductModal(product);
    setIsSearchOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-espresso/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Search Fragrance Collection"
    >
      {/* Backdrop click */}
      <div
        className="fixed inset-0"
        onClick={() => setIsSearchOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white border border-champagne rounded-sm shadow-2xl overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-champagne/50 flex items-center gap-3 bg-ivory">
          <Search className="w-5 h-5 text-espresso/70 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by fragrance name, accords, or notes (e.g. oud, vanilla, rose)..."
            className="w-full bg-transparent text-sm sm:text-base text-espresso placeholder:text-charcoal/50 focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="p-1 text-charcoal/60 hover:text-espresso"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
            className="p-1.5 text-espresso hover:bg-champagne/30 rounded-full"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Quick Scent Suggestion Tags */}
        <div className="px-5 py-3 bg-ivory-light border-b border-champagne/30 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-charcoal/60 uppercase tracking-luxury text-[10px] whitespace-nowrap">
            Popular Accords:
          </span>
          {['Rose', 'Oud', 'Vanilla', 'Amber', 'Peony', 'Citrus', 'Musk'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-2.5 py-1 bg-white hover:bg-champagne/30 border border-champagne/60 text-espresso text-[11px] rounded-sm transition-colors whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-5 max-h-96 overflow-y-auto space-y-3">
          {query === '' ? (
            <div className="py-8 text-center text-charcoal/60">
              <Sparkles className="w-6 h-6 mx-auto text-champagne mb-2" aria-hidden="true" />
              <p className="text-xs uppercase tracking-luxury">Type a fragrance or note name above</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center">
              <p className="font-serif text-lg text-espresso mb-1">No matching fragrances</p>
              <p className="text-xs text-charcoal/70">
                Try searching for floral, amber, rose, musk, or wood notes.
              </p>
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className="p-3 bg-ivory hover:bg-champagne/20 border border-champagne/40 rounded-sm cursor-pointer transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  {product.primaryImage ? (
                    <img
                      src={product.primaryImage}
                      alt={product.name}
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
                    <h4 className="font-serif text-base text-espresso group-hover:text-bronze transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-charcoal/70 line-clamp-1 font-light">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-bronze">
                  <span className="text-xs font-serif italic hidden sm:inline">
                    {product.priceDisplay}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
