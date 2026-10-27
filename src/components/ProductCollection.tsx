import React from 'react';
import { PRODUCTS, FRAGRANCE_CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { Search, X, RotateCcw } from 'lucide-react';

export const ProductCollection: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useStore();

  // Filter products based on search query and selected category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.categories.includes(selectedCategory as any);

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.shortDescription.toLowerCase().includes(query) ||
      product.fullDescription.toLowerCase().includes(query) ||
      (product.notesSummary &&
        Object.values(product.notesSummary)
          .flat()
          .some((note) => note.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All';

  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#e3dfd8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sahar-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e3dfd8] mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block mb-2 font-medium">
              06 Curated Compositions
            </span>
            <h2
              id="collection-heading"
              className="font-serif text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight"
            >
              The perfumes
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#57534e] font-light mt-2 max-w-xl">
              Extrait de parfum, floral mists, and sensual accords made for personal distinction.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6c6760] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by note, accord..."
              className="w-full pl-9 pr-8 py-2.5 bg-[#eeebe6] border border-[#e3dfd8] rounded-full text-xs font-mono text-[#121110] placeholder-[#6c6760] focus:outline-none focus:border-[#121110] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6c6760] hover:text-[#121110]"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pill Tabs (Sahar Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {FRAGRANCE_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-[#121110] text-white shadow-sm'
                  : 'bg-[#eeebe6] text-[#57534e] hover:bg-[#e3dfd8] border border-[#e3dfd8]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filter State Clear */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between p-3 mb-8 bg-[#eeebe6] border border-[#e3dfd8] rounded-lg text-xs font-mono text-[#57534e]">
            <span>Showing {filteredProducts.length} matching perfumes</span>
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 text-[#9e4318] hover:underline"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              <span>Reset filters</span>
            </button>
          </div>
        )}

        {/* Product Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#eeebe6] rounded-xl border border-[#e3dfd8]">
            <p className="font-serif text-xl text-[#121110] mb-2">No matching fragrances found</p>
            <p className="font-mono text-xs text-[#57534e] mb-4">Try searching for saffron, rose, oud, or vanilla</p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-[#121110] text-white font-mono text-xs uppercase tracking-wider rounded-full"
            >
              Show all perfumes
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
