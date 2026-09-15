import React from 'react';
import { Heart, ShoppingBag, User } from 'lucide-react';
import { BRAND_WORDMARK } from '../data/products';
import { WeatherBadge } from './WeatherBadge';

interface HeaderProps {
  activeView: 'home' | 'product-detail' | 'sizing-guide';
  onNavigate: (view: 'home' | 'product-detail' | 'sizing-guide') => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  wishlistCount: number;
  onScrollToSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishlistCount,
  onScrollToSection,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbf9f5]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eae8e4]/60">
      <div className="h-20 max-w-[88rem] mx-auto px-4 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo and Wordmark */}
        <div className="flex items-center gap-4">
          <button
            id="brand-home-link"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <img
              src={BRAND_WORDMARK}
              alt="Snuffers Brand Wordmark"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-serif-editorial text-[22px] tracking-tight text-[#040505] uppercase font-medium">
              SNUFFERS
            </span>
          </button>
          <div className="hidden xl:block h-4 w-px bg-[#e4e2de]"></div>
          <span className="hidden xl:inline text-[11px] font-semibold tracking-[0.12em] text-[#444748] uppercase">
            Chic · Comfortable · Affordable · Inclusive
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#efeeea]/60 rounded-xl border border-[#e4e2de]/50">
          <button
            id="nav-home"
            onClick={() => onNavigate('home')}
            className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-lg transition-all cursor-pointer ${
              activeView === 'home'
                ? 'bg-[#040505] text-white shadow-sm'
                : 'text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a]'
            }`}
          >
            Home
          </button>
          <button
            id="nav-collections"
            onClick={() => {
              if (activeView !== 'home') onNavigate('home');
              setTimeout(() => onScrollToSection?.('catalog-curation'), 50);
            }}
            className="px-3.5 py-1.5 text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a] text-[11px] font-semibold tracking-[0.12em] uppercase transition-all rounded-lg cursor-pointer"
          >
            Collections
          </button>
          <button
            id="nav-fit-breeds"
            onClick={() => {
              if (activeView !== 'home') onNavigate('home');
              setTimeout(() => onScrollToSection?.('fit-concierge'), 50);
            }}
            className="px-3.5 py-1.5 text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a] text-[11px] font-semibold tracking-[0.12em] uppercase transition-all rounded-lg cursor-pointer"
          >
            Fit &amp; Breeds
          </button>
          <button
            id="nav-philosophy"
            onClick={() => {
              if (activeView !== 'home') onNavigate('home');
              setTimeout(() => onScrollToSection?.('inclusive-matrix'), 50);
            }}
            className="px-3.5 py-1.5 text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a] text-[11px] font-semibold tracking-[0.12em] uppercase transition-all rounded-lg cursor-pointer"
          >
            Philosophy
          </button>
          <button
            id="nav-care-guide"
            onClick={() => onNavigate('sizing-guide')}
            className={`px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-lg transition-all cursor-pointer ${
              activeView === 'sizing-guide'
                ? 'bg-[#040505] text-white shadow-sm'
                : 'text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a]'
            }`}
          >
            Care Guide
          </button>
        </nav>

        {/* Right Icon Actions: Live Weather, Wishlist, Bag */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Live Singapore Weather Condition Badge */}
          <WeatherBadge />

          {/* Wishlist Button */}
          <button
            id="header-wishlist-button"
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative p-2 text-[#444748] hover:text-[#1b1c1a] transition-colors flex items-center justify-center rounded-lg hover:bg-[#efeeea] cursor-pointer"
          >
            <Heart className="w-[20px] h-[20px]" />
            <span
              id="header-wishlist-count"
              className="absolute -top-0.5 -right-0.5 min-w-[1.125rem] h-[1.125rem] px-1 bg-[#e4e2de] text-[#1b1c1a] text-[9px] font-semibold tracking-[0.05em] flex items-center justify-center rounded-full"
            >
              {wishlistCount}
            </span>
          </button>

          {/* Shopping Bag Button */}
          <button
            id="header-bag-button"
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="relative p-2 text-[#444748] hover:text-[#1b1c1a] transition-colors flex items-center justify-center rounded-lg hover:bg-[#efeeea] cursor-pointer"
          >
            <ShoppingBag className="w-[20px] h-[20px]" />
            <span
              id="header-bag-count"
              className="absolute -top-0.5 -right-0.5 min-w-[1.125rem] h-[1.125rem] px-1 bg-[#040505] text-white text-[9px] font-semibold tracking-[0.05em] flex items-center justify-center rounded-full"
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
