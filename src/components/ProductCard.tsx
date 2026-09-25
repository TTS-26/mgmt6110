import React from 'react';
import { Heart, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  currentGirth: number;
  onSelect: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onQuickAdd?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currentGirth,
  onSelect,
  isWishlisted,
  onToggleWishlist,
}) => {
  // Check if product target chest is close to the entered girth (within +/- 6cm)
    const isDirectGirthMatch = product.category !== 'treats' && Math.abs(product.girth - currentGirth) <= 6;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-[#ffffff] rounded-2xl border border-[#e4e2de] overflow-hidden flex flex-col hover:border-[#747878]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] bg-[#efeeea] overflow-hidden cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] bg-white/90 backdrop-blur-md text-[#040505] rounded-full border border-black/5 shadow-xs">
            {product.tag}
          </span>
          {isDirectGirthMatch && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] bg-[#dee7c0] text-[#171e06] rounded-full border border-[#c4d49a] shadow-xs inline-flex items-center gap-1">
              <Check className="w-2.5 h-2.5 text-[#596244]" />
              <span>Matches {currentGirth} cm</span>
            </span>
          )}
        </div>

        {/* Top Right Wishlist Toggle */}
        <button
          type="button"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-[#ba1a1a] text-white shadow-sm'
              : 'bg-white/80 hover:bg-white text-[#444748] hover:text-[#040505]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Material pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[10px] font-medium bg-black/65 backdrop-blur-md text-white rounded-md">
            {product.material}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3
              onClick={() => onSelect(product)}
              className="font-serif-editorial text-lg text-[#040505] font-semibold line-clamp-1 group-hover:text-[#596244] transition-colors cursor-pointer"
            >
              {product.title}
            </h3>
            <div className="text-right whitespace-nowrap">
              <span className="font-serif-editorial text-base font-semibold text-[#040505]">
                S${product.price}
              </span>
              {product.originalPrice && (
                <span className="ml-1.5 text-xs text-[#747878] line-through">
                  S${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <p className="text-xs text-[#444748] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Recommended Cuts Info and Action */}
        <div className="pt-3 border-t border-[#eae8e4] flex items-center justify-between">
          <span className="text-[11px] text-[#596244] font-medium tracking-tight">
            {product.recommendedCuts}
          </span>
          <button
            onClick={() => onSelect(product)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#040505] group-hover:text-[#596244] transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
