import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  // Select featured products
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <section 
      id="featured"
      aria-labelledby="featured-heading"
      className="py-16 sm:py-24 bg-ivory-light border-b border-champagne/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/40 border border-champagne/80 text-bronze-dark text-xs uppercase tracking-luxury font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
            <span>Curated Selection</span>
          </div>

          <h2 
            id="featured-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal tracking-tight mb-4"
          >
            Find Your Signature Scent
          </h2>

          <p className="text-sm sm:text-base text-charcoal font-light leading-relaxed">
            Explore fragrances with distinct personalities, from soft florals to warm, captivating compositions.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Explore Full Collection CTA */}
        <div className="mt-14 text-center">
          <a
            href="#collection"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-espresso text-espresso hover:bg-espresso hover:text-champagne text-xs uppercase tracking-luxury font-semibold transition-all duration-300 rounded-sm group shadow-sm"
          >
            <span>View All Six Fragrances</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
