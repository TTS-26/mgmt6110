import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';
import { Product } from '../types';

interface HeroSectionProps {
  onSelectProduct: (product: Product) => void;
  featuredProduct: Product;
  onExploreClick: () => void;
  onSizingClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectProduct,
  featuredProduct,
  onExploreClick,
  onSizingClick,
}) => {
  return (
    <section className="relative pt-24 pb-14 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ef] border border-[#e4e2de] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#596244]">
              <Sparkles className="w-3.5 h-3.5 text-[#596244]" />
              <span>Chic · Comfortable · Affordable · Inclusive</span>
            </div>

            <h1 className="font-serif-editorial text-[2.75rem] sm:text-5xl lg:text-[4rem] leading-[1.08] tracking-tight text-[#040505]">
              Style made for <br />
              <em className="italic font-normal">every</em> dog.
            </h1>

            <p className="text-base sm:text-lg text-[#444748] max-w-xl font-normal leading-relaxed">
              Chic, comfortable pieces designed for different shapes, sizes, and everyday adventures.
              Architectural soft-tailoring crafted with uncompromising canine ergonomics.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-button"
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#040505] text-white text-xs font-semibold tracking-[0.12em] uppercase rounded-xl hover:bg-[#1e1e1e] transition-all transform active:scale-95 shadow-sm cursor-pointer"
              >
                Explore Collection
              </button>
              <button
                id="hero-sizing-architecture-button"
                onClick={onSizingClick}
                className="px-6 py-3.5 bg-transparent border border-[#040505] text-[#040505] text-xs font-semibold tracking-[0.12em] uppercase rounded-xl hover:bg-[#eae8e4]/60 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Sizing Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#eae8e4] w-full max-w-lg">
              <div>
                <p className="font-serif-editorial text-2xl text-[#040505] font-semibold">4 Body Types</p>
                <p className="text-xs text-[#444748] tracking-wide mt-0.5">Universal Breed Patterns</p>
              </div>
              <div>
                <p className="font-serif-editorial text-2xl text-[#040505] font-semibold">100% Breathable</p>
                <p className="text-xs text-[#444748] tracking-wide mt-0.5">Natural Linen, Cotton &amp; Knits</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Afghan Hound */}
          <div className="lg:col-span-5">
            <div
              id="hero-featured-card"
              onClick={() => onSelectProduct(featuredProduct)}
              className="group relative bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e4e2de]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#efeeea]">
                <img
                  src={HERO_IMAGE}
                  alt="Afghan Hound in Riviera Summer Linen Shirt"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] bg-white/90 backdrop-blur-md text-[#040505] rounded-full border border-black/5 shadow-xs">
                    Featured Silhouette
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 text-xs font-serif-editorial text-white bg-black/75 backdrop-blur-md rounded-lg">
                    Summer Linen Collection
                  </span>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between border-t border-[#eae8e4]">
                <div>
                  <h3 className="font-serif-editorial text-lg text-[#040505] group-hover:underline">
                    {featuredProduct.title}
                  </h3>
                  <p className="text-xs text-[#596244] font-medium tracking-wide mt-0.5">
                    {featuredProduct.material} · S${featuredProduct.price}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#040505] group-hover:translate-x-1 transition-transform">
                  <span>View Piece</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
