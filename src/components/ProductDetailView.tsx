import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Sparkles,
  Check,
  Ruler,
  Footprints,
  Maximize2,
  X,
} from 'lucide-react';
import { Product, BodyCut, ShoeSize } from '../types';
import { EDITORIAL_STORY_IMAGES } from '../data/products';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  relatedProducts: Product[];
  currentGirth: number;
  onChangeGirth: (girth: number) => void;
  onAddToCart: (product: Product, size: BodyCut | ShoeSize | string, colorway: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBack,
  onSelectProduct,
  relatedProducts,
  currentGirth,
  onChangeGirth,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) => {
  // Determine recommended size based on chest girth
  const getAutoCut = (girth: number): BodyCut => {
    if (girth <= 30) return 'Petite';
    if (girth <= 42) return 'Standard';
    if (girth <= 52) return 'Long-Body';
    return 'Broad-Chest';
  };

  const recommendedCut = getAutoCut(currentGirth);
  const [selectedCut, setSelectedCut] = useState<BodyCut>(recommendedCut);

  // Gallery
  const defaultGallery = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  // Colorway
  const colorways = product.colorways && product.colorways.length > 0
    ? product.colorways
    : [
        { name: 'Warm Linen Cream', hex: '#FAF7F0' },
        { name: 'Muted Sage Green', hex: '#8E9775' },
        { name: 'Terracotta Clay', hex: '#BC7450' },
        { name: 'Soft Charcoal', hex: '#2A2B2A' },
      ];
  const [selectedColor, setSelectedColor] = useState<string>(colorways[0].name);

  // Inline Girth editing
  const [isEditingGirth, setIsEditingGirth] = useState<boolean>(false);
  const [tempGirth, setTempGirth] = useState<number>(currentGirth);

  const handleGirthSave = () => {
    onChangeGirth(tempGirth);
    setSelectedCut(getAutoCut(tempGirth));
    setIsEditingGirth(false);
  };

  const cutOptions: { cut: BodyCut; range: string; backLength: string; fitFor: string }[] = [
    { cut: 'Petite', range: '20 – 32 cm', backLength: '18 – 24 cm', fitFor: 'Toy Poodle, Yorkie, Chihuahua' },
    { cut: 'Standard', range: '33 – 50 cm', backLength: '25 – 35 cm', fitFor: 'Beagle, Whippet, Schnauzer' },
    { cut: 'Long-Body', range: '40 – 55 cm', backLength: '36 – 46 cm', fitFor: 'Dachshund, Corgi, Basset' },
    { cut: 'Broad-Chest', range: '52 – 75 cm', backLength: '32 – 44 cm', fitFor: 'Bulldog, Frenchie, Staffy' },
  ];

  const isShoeProduct = product.category === 'shoes';
  const isTreatProduct = product.category === 'treats';
  const [selectedShoeSize, setSelectedShoeSize] = useState<ShoeSize>('Standard');

  useEffect(() => {
    if (product.category === 'shoes') {
      setSelectedShoeSize('Standard');
    }
  }, [product.id, product.category]);

  const shoeSizeOptions: {
    size: ShoeSize;
    pawWidth: string;
    pawLength: string;
    fitFor: string;
  }[] = [
    { size: 'Petite', pawWidth: '3.0–3.5 cm', pawLength: '3.5–4.5 cm', fitFor: 'Toy Poodle, Yorkie, Chihuahua' },
    { size: 'Standard', pawWidth: '3.6–4.2 cm', pawLength: '4.6–5.5 cm', fitFor: 'Beagle, Frenchie, Cocker Spaniel' },
    { size: 'Wide', pawWidth: '4.3–5.0 cm', pawLength: '5.6–6.5 cm', fitFor: 'Border Collie, Boxer, Corgi' },
    { size: 'XL', pawWidth: '5.1–6.0 cm', pawLength: '6.6–7.5 cm', fitFor: 'Golden Retriever, Labrador, Shepherd' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6 border-b border-[#eae8e4]">
          <button
            id="back-to-shop-button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#040505] hover:text-[#596244] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Discover &amp; Shop</span>
          </button>

          <div className="text-xs text-[#747878] hidden sm:block tracking-wide">
            Home / Canine Apparel / {product.categoryLabel} / <span className="text-[#040505]">{product.title}</span>
          </div>
        </div>

        {/* Two-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Gallery Viewport & Thumbnails */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image Stage */}
            <div className="relative aspect-[4/5] bg-[#efeeea] rounded-2xl overflow-hidden border border-[#e4e2de] shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <img
                src={defaultGallery[activeImageIndex] || product.image}
                alt={`${product.title} View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] bg-white/90 backdrop-blur-md text-[#040505] rounded-full border border-black/5 shadow-xs">
                  2025 Collection
                </span>
                <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] bg-[#dee7c0] text-[#171e06] rounded-full border border-[#c4d49a] shadow-xs">
                  {product.material}
                </span>
              </div>

              {/* Expand / Zoom Button */}
              <button
                id="zoom-image-button"
                onClick={() => setIsZoomOpen(true)}
                aria-label="Inspect fabric close-up"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#040505] shadow-xs transition-colors cursor-pointer"
                title="Inspect fabric weave"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Gallery Buttons */}
            {defaultGallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {defaultGallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    id={`thumb-btn-${idx}`}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#040505] shadow-sm ring-1 ring-[#040505]'
                        : 'border-[#e4e2de] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[8px] font-bold bg-black/60 text-white rounded">
                      0{idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* The Snuffers Promise Banner */}
            <div className="bg-[#f5f3ef] border border-[#e4e2de] rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif-editorial text-sm font-semibold text-[#040505]">
                  The Snuffers Promise
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#596244]">
                  Zero-Waste Tailoring
                </span>
              </div>
              <p className="text-xs text-[#444748] leading-relaxed">
                Chic · Comfortable · Affordable · Inclusive. Designed with soft-binding seams to eliminate
                coat friction, hypoallergenic natural fibers, and reinforced stress points.
              </p>
            </div>
          </div>

          {/* RIGHT: Product Information, Fit Concierge & Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Title, Rating & Price */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#596244]">
                  {product.edition || 'Collection 2025'}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#040505]">
                  <span className="text-amber-500">★</span>
                  <span>{product.rating || 4.9}</span>
                  <span className="text-[#747878]">({product.reviewCount || 84} reviews)</span>
                </div>
              </div>

              <h1 className="font-serif-editorial text-3xl sm:text-4xl text-[#040505] leading-tight">
                {product.title}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="font-serif-editorial text-3xl font-semibold text-[#040505]">
                  S${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#747878] line-through">
                    S${product.originalPrice}
                  </span>
                )}
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#dee7c0] text-[#171e06] rounded-md">
                  New Arrival
                </span>
              </div>
            </div>

            {/* Editorial Long Description */}
            <p className="text-sm text-[#444748] leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {/* Colorway Selector */}
            <div className="space-y-2.5 pt-2 border-t border-[#eae8e4]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#1b1c1a]">
                  Colorway:
                </span>
                <span className="text-[#596244] font-medium">{selectedColor}</span>
              </div>
              <div className="flex items-center gap-3">
                {colorways.map((cw) => (
                  <button
                    key={cw.name}
                    id={`colorway-btn-${cw.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedColor(cw.name)}
                    className={`relative w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                      selectedColor === cw.name
                        ? 'border-[#040505] scale-110 shadow-xs'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: cw.hex }}
                    title={cw.name}
                  >
                    {selectedColor === cw.name && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className={`w-3.5 h-3.5 ${cw.hex === '#FAF7F0' ? 'text-black' : 'text-white'}`} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Inclusive Canine Fit System Box */}
            <div className="bg-[#ffffff] border border-[#e4e2de] rounded-xl p-5 space-y-4 shadow-xs">
              {!isTreatProduct && (
              {isShoeProduct ? (
                <>
                  {/* Profile Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#eae8e4]">
                    <div className="flex items-center gap-2">
                      <Footprints className="w-4 h-4 text-[#596244]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                        Footwear Paw Sizing Guide:
                      </span>
                      <span className="text-xs font-bold text-[#040505] bg-[#efeeea] px-2 py-0.5 rounded">
                        4 Paw Sizes
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold text-[#596244]">
                      Selected: {selectedShoeSize}
                    </span>
                  </div>

                  {/* Recommendation Note */}
                  <div className="text-xs bg-[#f5f3ef] border border-[#e4e2de] rounded-lg p-3 text-[#444748] leading-relaxed">
                    <span className="font-semibold text-[#1b1c1a]">
                      Paw Measurement Guidance:{' '}
                    </span>
                    Measure the widest point of the paw while standing bearing weight, plus heel to claw length. For active movement or between sizes, select the larger size.
                  </div>

                  {/* Shoe Size Selectors */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1b1c1a]">
                      Select Paw Size:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {shoeSizeOptions.map((opt) => {
                        const isSelected = opt.size === selectedShoeSize;
                        return (
                          <button
                            key={opt.size}
                            id={`shoe-size-select-${opt.size.toLowerCase()}`}
                            onClick={() => setSelectedShoeSize(opt.size)}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#040505] text-white border-[#040505] shadow-xs'
                                : 'bg-[#fbf9f5] hover:bg-[#efeeea] border-[#e4e2de] text-[#1b1c1a]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold">{opt.size}</span>
                              {isSelected && (
                                <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-[#dee7c0] text-[#171e06]">
                                  Selected
                                </span>
                              )}
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#747878]'}`}>
                              Paw width {opt.pawWidth} · Paw length {opt.pawLength}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Shoe Sizing Matrix Snapshot Table */}
                  <div className="overflow-x-auto pt-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1b1c1a] mb-2 flex items-center justify-between">
                      <span>Paw Footwear Size Specification Chart:</span>
                      <span className="text-[10px] text-[#596244] font-medium normal-case">Paw Width &amp; Length Guide</span>
                    </div>
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#eae8e4] text-[#747878] text-[11px]">
                          <th className="py-2 px-2 font-medium">Paw Size</th>
                          <th className="py-2 px-2 font-medium">Paw Width</th>
                          <th className="py-2 px-2 font-medium">Paw Length</th>
                          <th className="py-2 px-2 font-medium">Common Breeds</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eae8e4]/50 text-[#1b1c1a]">
                        {shoeSizeOptions.map((opt) => {
                          const isSelectedRow = opt.size === selectedShoeSize;
                          return (
                            <tr
                              key={opt.size}
                              id={`shoe-size-row-${opt.size.toLowerCase()}`}
                              onClick={() => setSelectedShoeSize(opt.size)}
                              className={`cursor-pointer transition-all ${
                                isSelectedRow
                                  ? 'bg-[#dee7c0]/60 font-semibold ring-2 ring-[#596244]/50 border-l-4 border-[#596244]'
                                  : 'hover:bg-[#fbf9f5]'
                              }`}
                            >
                              <td className="py-2.5 px-2">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-semibold text-xs text-[#040505]">{opt.size}</span>
                                  {isSelectedRow && (
                                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#596244] text-white rounded whitespace-nowrap shadow-xs">
                                      Selected
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-2.5 px-2 text-xs">{opt.pawWidth}</td>
                              <td className="py-2.5 px-2 text-xs">{opt.pawLength}</td>
                              <td className="py-2.5 px-2 text-xs text-[#747878]">{opt.fitFor}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <>
                  {/* Profile Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#eae8e4]">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-[#596244]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                        Entered Companion Chest:
                      </span>
                      <span className="text-xs font-bold text-[#040505] bg-[#efeeea] px-2 py-0.5 rounded">
                        {currentGirth} cm
                      </span>
                    </div>

                    <button
                      onClick={() => setIsEditingGirth(!isEditingGirth)}
                      className="text-[11px] font-semibold text-[#596244] hover:underline cursor-pointer"
                    >
                      {isEditingGirth ? 'Cancel' : 'Adjust'}
                    </button>
                  </div>

                  {/* Adjust Girth Inline */}
                  {isEditingGirth && (
                    <div className="p-3 bg-[#f5f3ef] rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span>Chest Circumference: {tempGirth} cm</span>
                        <button
                          onClick={handleGirthSave}
                          className="px-2.5 py-1 bg-[#040505] text-white text-[11px] font-semibold rounded cursor-pointer"
                        >
                          Lock In
                        </button>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={95}
                        value={tempGirth}
                        onChange={(e) => setTempGirth(Number(e.target.value))}
                        className="w-full accent-[#040505]"
                      />
                    </div>
                  )}

                  {/* Recommendation Note */}
                  <div className="text-xs bg-[#f5f3ef] border border-[#e4e2de] rounded-lg p-3 text-[#444748] leading-relaxed">
                    <span className="font-semibold text-[#1b1c1a]">
                      Calibrated Recommendation:{' '}
                    </span>
                    At {currentGirth} cm chest circumference, the{' '}
                    <strong className="text-[#040505]">{recommendedCut} Cut</strong> delivers optimum thoracic expansion without armhole tension.
                  </div>

                  {/* Cut Selectors */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1b1c1a]">
                      Select Cut Silhouette:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {cutOptions.map((opt) => {
                        const isRecommended = opt.cut === recommendedCut;
                        const isSelected = opt.cut === selectedCut;
                        return (
                          <button
                            key={opt.cut}
                            id={`cut-select-${opt.cut.toLowerCase()}`}
                            onClick={() => setSelectedCut(opt.cut)}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#040505] text-white border-[#040505] shadow-xs'
                                : 'bg-[#fbf9f5] hover:bg-[#efeeea] border-[#e4e2de] text-[#1b1c1a]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold">{opt.cut}</span>
                              {isRecommended && (
                                <span
                                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                                    isSelected
                                      ? 'bg-[#dee7c0] text-[#171e06]'
                                      : 'bg-[#dee7c0] text-[#171e06]'
                                  }`}
                                >
                                  Best Fit
                                </span>
                              )}
                            </div>
                            <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/75' : 'text-[#747878]'}`}>
                              {opt.range}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sizing Matrix Snapshot Table */}
                  <div className="overflow-x-auto pt-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1b1c1a] mb-2 flex items-center justify-between">
                      <span>Size Specification Chart:</span>
                      <span className="text-[10px] text-[#596244] font-medium normal-case">Row highlighted for ~{currentGirth} cm chest</span>
                    </div>
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#eae8e4] text-[#747878] text-[11px]">
                          <th className="py-2 px-2 font-medium">Fit Option</th>
                          <th className="py-2 px-2 font-medium">Chest Girth</th>
                          <th className="py-2 px-2 font-medium">Back Length</th>
                          <th className="py-2 px-2 font-medium">Common Breeds</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eae8e4]/50 text-[#1b1c1a]">
                        {cutOptions.map((opt) => {
                          const isMatchingGirthRow = opt.cut === recommendedCut;
                          const isSelectedRow = opt.cut === selectedCut;
                          return (
                            <tr
                              key={opt.cut}
                              id={`size-row-${opt.cut.toLowerCase()}`}
                              onClick={() => setSelectedCut(opt.cut)}
                              className={`cursor-pointer transition-all ${
                                isMatchingGirthRow
                                  ? 'bg-[#dee7c0]/60 font-semibold ring-2 ring-[#596244]/50 border-l-4 border-[#596244]'
                                  : isSelectedRow
                                  ? 'bg-[#efeeea]/70'
                                  : 'hover:bg-[#fbf9f5]'
                              }`}
                            >
                              <td className="py-2.5 px-2">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-semibold text-xs text-[#040505]">{opt.cut}</span>
                                  {isMatchingGirthRow && (
                                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#596244] text-white rounded whitespace-nowrap shadow-xs">
                                      Matches {currentGirth} cm
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-2.5 px-2 text-xs">{opt.range}</td>
                              <td className="py-2.5 px-2 text-xs">{opt.backLength}</td>
                              <td className="py-2.5 px-2 text-xs text-[#747878]">{opt.fitFor}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
              )}

            {/* Action Buttons: Add to Bag & Wishlist */} 
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <button
                  id="product-add-to-bag-button"
                  onClick={() => onAddToCart(product, isTreatProduct ? 'One Size' : isShoeProduct ? selectedShoeSize : selectedCut, selectedColor)}
                  className="flex-1 py-4 px-6 bg-[#040505] text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-xl hover:bg-[#1e1e1e] transition-all transform active:scale-98 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag — S${product.price}</span>
                </button>

                <button
                  id="product-toggle-wishlist-button"
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label="Wishlist"
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#ba1a1a] border-[#ba1a1a] text-white shadow-xs'
                      : 'bg-white border-[#e4e2de] text-[#444748] hover:text-[#040505] hover:border-[#040505]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="text-center text-xs text-[#596244] font-medium">
                Complimentary delivery in Singapore on orders over S$50 · In Stock
              </div>
            </div>

            {/* Tailoring & Ergonomics 4-Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#eae8e4]">
              <div className="p-3 bg-[#ffffff] border border-[#e4e2de] rounded-xl space-y-1">
                <h5 className="text-[11px] font-semibold text-[#040505] uppercase tracking-wider">
                  Freedom Gusset
                </h5>
                <p className="text-[11px] text-[#444748] leading-normal">
                  Deep armhole drop engineered for zero stride resistance during full sprint.
                </p>
              </div>
              <div className="p-3 bg-[#ffffff] border border-[#e4e2de] rounded-xl space-y-1">
                <h5 className="text-[11px] font-semibold text-[#040505] uppercase tracking-wider">
                  Fur-Guard Placket
                </h5>
                <p className="text-[11px] text-[#444748] leading-normal">
                  Smooth under-layer prevents hair snagging in closures or buttons.
                </p>
              </div>
              <div className="p-3 bg-[#ffffff] border border-[#e4e2de] rounded-xl space-y-1">
                <h5 className="text-[11px] font-semibold text-[#040505] uppercase tracking-wider">
                  Collar Leash Eyelet
                </h5>
                <p className="text-[11px] text-[#444748] leading-normal">
                  Reinforced hidden portal for harness or collar ring attachment.
                </p>
              </div>
              <div className="p-3 bg-[#ffffff] border border-[#e4e2de] rounded-xl space-y-1">
                <h5 className="text-[11px] font-semibold text-[#040505] uppercase tracking-wider">
                  Delicate Care
                </h5>
                <p className="text-[11px] text-[#444748] leading-normal">
                  Machine wash cold gentle cycle · Line dry in shade to preserve fibers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Storytelling Banner */}
        <section className="mt-20 pt-12 border-t border-[#eae8e4]">
          <div className="bg-[#f5f3ef] rounded-2xl p-8 lg:p-12 border border-[#e4e2de]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Design &amp; Materials</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#040505]">
                  Thoughtful Comfort for Sensitive Dogs
                </h3>
                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                  Dogs experience tactile stimulation 40% more intensely through their skin and fur.
                  We reject scratchy synthetic knits in favor of pre-washed organic flax, long-staple cotton,
                  and cruelty-free baby alpaca yarns.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-2.5 bg-white rounded-xl border border-[#e4e2de]">
                    <div className="font-serif-editorial text-lg text-[#040505] font-semibold">165 gsm</div>
                    <div className="text-[9px] text-[#747878] uppercase font-semibold">Airy Linen Weave</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#e4e2de]">
                    <div className="font-serif-editorial text-lg text-[#040505] font-semibold">0% Static</div>
                    <div className="text-[9px] text-[#747878] uppercase font-semibold">Coat Friendly</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#e4e2de]">
                    <div className="font-serif-editorial text-lg text-[#040505] font-semibold">OEKO-TEX</div>
                    <div className="text-[9px] text-[#747878] uppercase font-semibold">Certified Clean</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-black/5 border border-[#e4e2de]">
                  <img
                    src={EDITORIAL_STORY_IMAGES.macroTexture}
                    alt="Linen weave close-up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-black/5 border border-[#e4e2de]">
                  <img
                    src={EDITORIAL_STORY_IMAGES.goldenModel}
                    alt="Canine model wearing Snuffers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Capsule Silhouettes */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif-editorial text-2xl text-[#040505]">
                More Designs
              </h3>
              <button
                onClick={onBack}
                className="text-xs font-semibold uppercase tracking-wider text-[#596244] hover:underline cursor-pointer"
              >
                View All Silhouettes →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((rel) => (
                <div
                  key={rel.id}
                  id={`related-product-${rel.id}`}
                  onClick={() => {
                    onSelectProduct(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white rounded-2xl border border-[#e4e2de] overflow-hidden cursor-pointer hover:border-[#040505] transition-all"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#efeeea]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <div className="text-[10px] text-[#596244] font-semibold uppercase tracking-wider">
                      {rel.tag}
                    </div>
                    <h4 className="font-serif-editorial text-base text-[#040505] font-semibold line-clamp-1 group-hover:text-[#596244]">
                      {rel.title}
                    </h4>
                    <div className="font-serif-editorial text-sm font-semibold text-[#040505]">
                      S${rel.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Image Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              id="close-zoom-button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={defaultGallery[activeImageIndex] || product.image}
              alt="Zoomed product inspection"
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-3 text-xs text-white/70 tracking-widest uppercase">
              Snuffers Macro Fabric Inspection · {product.material}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
