import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { X, Heart, Trash2, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToBag,
    setActiveProductModal
  } = useStore();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory-light shadow-luxury-drawer border-l border-champagne flex flex-col">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-champagne/40 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-espresso fill-espresso" aria-hidden="true" />
              <h2 id="wishlist-drawer-title" className="font-serif text-xl sm:text-2xl text-espresso font-normal">
                Saved Fragrances
              </h2>
              <span className="text-xs uppercase tracking-luxury text-bronze font-medium px-2 py-0.5 bg-champagne/30 rounded-sm">
                {wishlist.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close wishlist drawer"
              className="p-1.5 text-espresso/70 hover:text-espresso hover:bg-champagne/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {savedProducts.length === 0 ? (
              /* Empty Wishlist State */
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white border border-champagne/60 flex items-center justify-center text-charcoal/50 mb-4 shadow-sm">
                  <Heart className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-espresso mb-2">No Saved Fragrances</h3>
                <p className="text-xs sm:text-sm text-charcoal font-light max-w-xs mb-8 leading-relaxed">
                  Click the heart icon on any flacon in the collection to curate your personal wish list.
                </p>
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 bg-espresso text-champagne text-xs uppercase tracking-luxury font-medium rounded-sm hover:bg-espresso-dark transition-colors"
                >
                  Discover Fragrances
                </button>
              </div>
            ) : (
              savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 bg-white border border-champagne/50 rounded-sm shadow-sm flex flex-col gap-3"
                >
                  <div className="flex gap-3 items-center">
                    {product.primaryImage ? (
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        className="w-14 h-16 object-cover rounded-sm border border-champagne/40 shrink-0"
                        width="56"
                        height="64"
                      />
                    ) : (
                      <div className="w-14 h-16 bg-ivory border border-champagne/40 rounded-sm flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-bronze" aria-hidden="true" />
                      </div>
                    )}

                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-espresso font-medium">
                        {product.name}
                      </h4>
                      <p className="text-xs text-charcoal/70 line-clamp-1 font-light">
                        {product.shortDescription}
                      </p>
                      <span className="text-xs text-bronze italic font-serif mt-0.5 block">
                        {product.priceDisplay}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={`Remove ${product.name} from wishlist`}
                      className="p-2 text-charcoal/50 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-champagne/30">
                    <button
                      type="button"
                      onClick={() => {
                        addToBag(product);
                        setIsWishlistOpen(false);
                      }}
                      className="flex-1 py-2 px-3 bg-espresso hover:bg-espresso-dark text-champagne text-[11px] uppercase tracking-luxury font-medium rounded-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Move to Inquiry Bag</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveProductModal(product);
                        setIsWishlistOpen(false);
                      }}
                      className="py-2 px-3 border border-champagne/70 text-espresso hover:bg-ivory text-[11px] uppercase tracking-luxury rounded-sm transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedProducts.length > 0 && (
            <div className="p-4 bg-white border-t border-champagne/40 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="text-bronze hover:text-espresso font-medium inline-flex items-center gap-1"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
