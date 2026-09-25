import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 6;
  const total = Math.max(0, subtotal - discount + shippingFee);
  const progressToFree = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SNUFFERS10') {
      setDiscount(Math.round(subtotal * 0.1));
      setPromoApplied(true);
    } else if (promoCode.trim().toUpperCase() === 'CANINE') {
      setDiscount(5);
      setPromoApplied(true);
    } else {
      alert('Try promo code "SNUFFERS10" for 10% off your order.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbf9f5] border-l border-[#e4e2de] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#eae8e4] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#040505]" />
              <h2 className="font-serif-editorial text-xl font-semibold text-[#040505]">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-[#efeeea] text-[#444748] px-2 py-0.5 rounded-full font-semibold">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              id="close-cart-drawer"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#efeeea] text-[#444748] hover:text-[#040505] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#f5f3ef] border-b border-[#e4e2de]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {isFreeShipping ? (
                <span className="font-semibold text-[#596244] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Free Islandwide Singapore Delivery Unlocked
                </span>
              ) : (
                <span className="text-[#444748]">
                  Add <strong className="text-[#040505]">S${(freeShippingThreshold - subtotal).toFixed(2)}</strong> for free delivery
                </span>
              )}
              <span className="text-[10px] text-[#747878] font-bold">Over S$50</span>
            </div>
            <div className="w-full bg-[#eae8e4] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#596244] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressToFree}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#efeeea] flex items-center justify-center mx-auto text-[#747878]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="font-serif-editorial text-lg text-[#040505]">
                  Your bag is currently empty
                </p>
                <p className="text-xs text-[#747878] max-w-xs mx-auto">
                  Explore our seasonal capsules and discover soft-tailored pieces calibrated for canine posture.
                </p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.colorway}-${idx}`}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-[#e4e2de] shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-24 object-cover rounded-lg bg-[#efeeea]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif-editorial text-sm font-semibold text-[#040505] line-clamp-1">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-[#747878] hover:text-[#ba1a1a] p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#596244] font-medium mt-0.5">
                      {item.product.category === 'shoes' ? `Size: ${item.size} Paw` : item.product.category === 'treats' ? item.size : `${item.size} Cut`} · {item.colorway}
                      </div>
                      <div className="text-[10px] text-[#747878]">
                        {item.product.category === 'shoes' ? 'Paw Footwear Sizing' : `Calibrated for ~${item.chestGirth} cm chest`}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 border border-[#e4e2de] rounded-lg px-2 py-0.5 bg-[#efeeea]">
                        <button
                          onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                          className="text-xs text-[#444748] hover:text-[#040505] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="text-xs text-[#444748] hover:text-[#040505] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-serif-editorial text-sm font-semibold text-[#040505]">
                        S${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#eae8e4] space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo (use SNUFFERS10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs bg-[#efeeea] border border-[#e4e2de] rounded-lg focus:outline-none uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoApplied && (
                <div className="text-[11px] text-[#596244] font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" /> Promo code applied: -S${discount}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#444748]">
                  <span>Subtotal</span>
                  <span>S${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#596244]">
                    <span>Promotional Discount</span>
                    <span>-S${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#444748]">
                  <span>Singapore Delivery</span>
                  <span>{isFreeShipping ? 'FREE' : `S$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-serif-editorial font-semibold text-[#040505] pt-2 border-t border-[#eae8e4]">
                  <span>Estimated Total</span>
                  <span>S${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button: Return to Shop */}
              <button
                id="cart-continue-shopping-button"
                onClick={onClose}
                className="w-full py-3.5 bg-[#040505] text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-xl hover:bg-[#1e1e1e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
