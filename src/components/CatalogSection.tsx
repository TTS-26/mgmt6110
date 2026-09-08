import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Sparkles } from 'lucide-react';
import { Category, Product } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  products: Product[];
  currentGirth: number;
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onQuickAdd: (product: Product) => void;
}

type PriceFilter = 'all' | 'under30' | 'under45' | 'under60';

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  currentGirth,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all');
  const [onlyMatchingGirth, setOnlyMatchingGirth] = useState<boolean>(false);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'summer', label: 'Summer' },
    { key: 'winter', label: 'Winter' },
    { key: 'occasion', label: 'Occasion' },
    { key: 'shoes', label: 'Shoes' },
    { key: 'treats', label: 'Treats' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Price match (S$)
      if (priceFilter === 'under30' && item.price > 30) return false;
      if (priceFilter === 'under45' && item.price > 45) return false;
      if (priceFilter === 'under60' && item.price > 60) return false;

      // Girth priority filter
      if (onlyMatchingGirth) {
        if (item.category !== 'treats') {
          if (Math.abs(item.girth - currentGirth) > 12) return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, priceFilter, onlyMatchingGirth, currentGirth]);

  return (
    <section id="catalog-curation" className="py-12 scroll-mt-24">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Canine Wardrobe Capsule</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#040505]">
              Curated Silhouette Gallery
            </h2>
          </div>

          <div className="text-xs text-[#747878] tracking-wide font-medium">
            18 Designs
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  id={`cat-filter-${cat.key}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap rounded-xl transition-all cursor-pointer ${
                    selectedCategory === cat.key
                      ? 'bg-[#040505] text-white shadow-xs'
                      : 'bg-[#efeeea] text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-filters: Budget & Girth Matching */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#eae8e4]/60">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#596244]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#444748]">
                Budget Filter:
              </span>
              <div className="flex items-center gap-1">
                {(
                  [
                    { key: 'all', label: 'All Prices' },
                    { key: 'under30', label: 'Under S$30' },
                    { key: 'under45', label: 'Under S$45' },
                    { key: 'under60', label: 'Under S$60' },
                  ] as const
                ).map((tier) => (
                  <button
                    key={tier.key}
                    id={`price-filter-${tier.key}`}
                    onClick={() => setPriceFilter(tier.key)}
                    className={`px-2.5 py-1 text-[11px] rounded-lg font-medium transition-all cursor-pointer ${
                      priceFilter === tier.key
                        ? 'bg-[#596244] text-white'
                        : 'bg-transparent text-[#444748] hover:bg-[#efeeea]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chest alignment filter */}
            <label className="inline-flex items-center gap-2 text-xs text-[#444748] cursor-pointer">
              <input
                id="filter-only-matching-girth"
                type="checkbox"
                checked={onlyMatchingGirth}
                onChange={(e) => setOnlyMatchingGirth(e.target.checked)}
                className="w-4 h-4 rounded text-[#040505] focus:ring-0 cursor-pointer"
              />
              <span className="text-[11px] font-medium">
                Filter strictly for ~{currentGirth} cm companions
              </span>
            </label>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#e4e2de]">
            <p className="font-serif-editorial text-2xl text-[#040505]">
              No silhouettes match your current criteria.
            </p>
            <p className="text-xs text-[#444748] mt-2">
              Try adjusting your category filter, price filter, or chest girth range.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setPriceFilter('all');
                setOnlyMatchingGirth(false);
              }}
              className="mt-4 px-4 py-2 bg-[#040505] text-white text-xs font-semibold uppercase tracking-wider rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currentGirth={currentGirth}
                onSelect={onSelectProduct}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
