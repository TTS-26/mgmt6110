import React from 'react';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  onQuickAdd,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbf9f5] border-l border-[#e4e2de] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          <div className="p-6 border-b border-[#eae8e4] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#ba1a1a] fill-current" />
              <h2 className="font-serif-editorial text-xl font-semibold text-[#040505]">
                Saved Favorites
              </h2>
              <span className="text-xs bg-[#efeeea] text-[#444748] px-2 py-0.5 rounded-full font-semibold">
                {wishlistedProducts.length}
              </span>
            </div>
            <button
              id="close-wishlist-drawer"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#efeeea] text-[#444748] hover:text-[#040505] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#efeeea] flex items-center justify-center mx-auto text-[#747878]">
                  <Heart className="w-6 h-6" />
                </div>
                <p className="font-serif-editorial text-lg text-[#040505]">
                  No saved silhouettes yet
                </p>
                <p className="text-xs text-[#747878] max-w-xs mx-auto">
                  Click the heart icon on any piece to curate your companion&apos;s personal capsule wardrobe.
                </p>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-[#e4e2de] shadow-xs group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-20 h-24 object-cover rounded-lg bg-[#efeeea] cursor-pointer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="font-serif-editorial text-sm font-semibold text-[#040505] line-clamp-1 hover:text-[#596244] cursor-pointer"
                        >
                          {product.title}
                        </h4>
                        <button
                          onClick={() => onToggleWishlist(product.id)}
                          className="text-[#747878] hover:text-[#ba1a1a] p-1 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#596244] font-medium mt-0.5">
                        {product.material}
                      </div>
                      <div className="font-serif-editorial text-sm font-semibold text-[#040505] mt-1">
                        S${product.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => onQuickAdd(product)}
                        className="flex-1 py-1.5 px-2.5 bg-[#040505] text-white text-[10px] font-semibold tracking-wider uppercase rounded-lg hover:bg-[#1e1e1e] flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="p-1.5 text-xs text-[#040505] hover:bg-[#efeeea] rounded-lg cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-white border-t border-[#eae8e4] text-center">
            <button
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-wider text-[#596244] hover:underline cursor-pointer"
            >
              Continue Exploring Silhouettes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
