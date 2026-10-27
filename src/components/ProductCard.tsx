import React, { useState } from 'react';
import type { Product } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Heart, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  editorialAccent?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    addToBag, 
    toggleWishlist, 
    isInWishlist, 
    setActiveProductModal,
    bag
  } = useStore();

  const [isHovered, setIsHovered] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const isInBag = bag.some(item => item.product.id === product.id);

  // Formulate a clean notes preview
  const notesString = product.notesSummary 
    ? [
        ...(product.notesSummary.opening || []),
        ...(product.notesSummary.heart || []),
        ...(product.notesSummary.base || [])
      ].slice(0, 3).join(', ')
    : product.categories.slice(0, 2).join(', ');

  return (
    <article 
      className="group flex flex-col bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#121110]/30 relative"
      aria-labelledby={`product-heading-${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Image Container with Sahar Linen Background */}
      <div onClick={() => setActiveProductModal(product)} className="relative aspect-[4/4.2] w-full bg-[#f4f1eb] overflow-hidden p-3.5 flex items-center justify-center cursor-pointer">
        
        {/* Top Badges Row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 font-mono text-[11px]">
          <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#121110] border border-[#e3dfd8] uppercase tracking-wider text-[10px] font-medium shadow-sm">
            {product.categories[0] || 'Signature'}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={isFavorited ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            className="p-1.5 rounded-full bg-white/90 hover:bg-white text-[#121110] transition-colors border border-[#e3dfd8] shadow-sm"
          >
            <Heart 
              className={`w-3.5 h-3.5 transition-colors ${
                isFavorited ? 'fill-[#9e4318] text-[#9e4318]' : 'text-[#6c6760]'
              }`} 
              aria-hidden="true" 
            />
          </button>
        </div>

        {/* Product Photograph */}
        {product.primaryImage ? (
          <img
            src={product.primaryImage}
            alt={`${product.name} luxury perfume flacon`}
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            width="500"
            height="560"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-white/80 rounded-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] mb-1">
              Atelier Formulation
            </span>
            <p className="font-serif text-xl text-[#121110] italic">
              {product.name}
            </p>
          </div>
        )}

        {/* Desktop Hover Notes Reveal (Sahar Style) */}
        <div 
          className={`hidden sm:flex absolute inset-0 bg-[#121110]/85 text-[#eeebe6] p-6 flex-col justify-between transition-opacity duration-300 ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#e7d5b5] block mb-2">
              Fragrance Architecture
            </span>
            <p className="font-sans text-xs leading-relaxed text-[#eeebe6]/90 line-clamp-3">
              {product.shortDescription}
            </p>

            {product.notesSummary && (
              <div className="mt-4 space-y-1.5 font-mono text-[11px] border-t border-[#e3dfd8]/20 pt-3">
                {product.notesSummary.opening && (
                  <p><span className="text-[#e7d5b5]">Top:</span> {product.notesSummary.opening.join(', ')}</p>
                )}
                {product.notesSummary.heart && (
                  <p><span className="text-[#e7d5b5]">Heart:</span> {product.notesSummary.heart.join(', ')}</p>
                )}
                {product.notesSummary.base && (
                  <p><span className="text-[#e7d5b5]">Base:</span> {product.notesSummary.base.join(', ')}</p>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setActiveProductModal(product)}
            className="w-full py-2 bg-white text-[#121110] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#eeebe6] transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>View Olfactory Notes</span>
          </button>
        </div>

      </div>

      {/* Card Content Footer (Sahar Style) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#eeebe6]">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 
              id={`product-heading-${product.id}`}
              className="font-serif font-normal text-lg sm:text-xl text-[#121110] tracking-normal"
            >
              {product.name}
            </h3>
            <span className="font-mono text-xs text-[#57534e] shrink-0">
              {product.priceDisplay || '100 ml'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[#6c6760] mb-2">
            <span>100 ml — Extrait</span>
            <span className="text-[10px] text-[#9e4318] uppercase tracking-wider">Atelier Reserve</span>
          </div>

          <p className="text-xs text-[#57534e] line-clamp-1 mb-4 font-sans font-light">
            {notesString}
          </p>
        </div>

        {/* Action Button: Sahar-Style Pill */}
        <div className="pt-3 border-t border-[#e3dfd8] flex items-center gap-2">
          <button
            type="button"
            onClick={() => addToBag(product, 1)}
            className={`flex-1 py-3 px-4 min-h-[44px] rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              isInBag
                ? 'bg-[#121110] text-[#e7d5b5]'
                : 'bg-white hover:bg-[#121110] hover:text-white text-[#121110] border border-[#e3dfd8] shadow-sm'
            }`}
          >
            {isInBag ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#e7d5b5]" />
                <span>In Inquiry Bag</span>
              </>
            ) : (
              <span>+ Add to Inquiry</span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => setActiveProductModal(product)}
            aria-label={`Quick view ${product.name}`}
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white hover:bg-[#e3dfd8] text-[#57534e] border border-[#e3dfd8] transition-colors shadow-sm"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

      </div>
    </article>
  );
};
