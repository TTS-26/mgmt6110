import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, BodyCut, ShoeSize, CartItem } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChestGirthFinder } from './components/ChestGirthFinder';
import { CatalogSection } from './components/CatalogSection';
import { InclusivitySection } from './components/InclusivitySection';
import { CustomOccasionsBanner } from './components/CustomOccasionsBanner';
import { DisqusComments } from './components/DisqusComments';
import { ProductDetailView } from './components/ProductDetailView';
import { SizingGuideModal } from './components/SizingGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'product-detail' | 'sizing-guide'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [currentGirth, setCurrentGirth] = useState<number>(38);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['riviera-summer-linen-shirt']);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto-dismiss toast after 3s
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Compute detected cut from current chest girth
  const getDetectedCut = (girth: number): BodyCut => {
    if (girth <= 30) return 'Petite';
    if (girth <= 42) return 'Standard';
    if (girth <= 52) return 'Long-Body';
    return 'Broad-Chest';
  };

  const detectedCut = getDetectedCut(currentGirth);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed piece from saved favorites');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved piece to your companion capsule');
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product: Product, size: BodyCut | ShoeSize | string, colorway: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.colorway === colorway
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            size,
            colorway,
            quantity: 1,
            chestGirth: currentGirth,
          },
        ];
      }
    });
    showToast(`Added ${product.title} (${size} Cut) to bag`);
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart(product, detectedCut, product.colorways?.[0]?.name || 'Natural Linen');
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Removed piece from your bag');
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] flex flex-col font-sans-editorial">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#040505] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-medium border border-white/10 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#dee7c0] text-[#171e06] flex items-center justify-center">
            <Check className="w-3 h-3 text-[#596244]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeView={activeView}
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              featuredProduct={PRODUCTS[0]}
              onSelectProduct={handleSelectProduct}
              onExploreClick={() => handleScrollToSection('catalog-curation')}
              onSizingClick={() => handleScrollToSection('inclusive-matrix')}
            />

            {/* Chest Girth Finder (Interactive Precision Tool) */}
            <ChestGirthFinder
              currentGirth={currentGirth}
              onChangeGirth={setCurrentGirth}
              detectedCut={detectedCut}
            />

            {/* Catalog Silhouettes with Category Pills & Budget Filters */}
            <CatalogSection
              products={PRODUCTS}
              currentGirth={currentGirth}
              onSelectProduct={handleSelectProduct}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onQuickAdd={handleQuickAdd}
            />

            {/* Inclusive Canine Tailoring Architecture (4 Cuts) */}
            <InclusivitySection
              onSelectCutPreset={(girth) => {
                setCurrentGirth(girth);
                handleScrollToSection('fit-concierge');
                showToast(`Calibrated fit for ${girth} cm chest`);
              }}
            />

            {/* Custom Occasions */}
            <CustomOccasionsBanner />
            
            <DisqusComments />
          </>
        )}

        {activeView === 'product-detail' && (
          <ProductDetailView
            product={selectedProduct}
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectProduct={handleSelectProduct}
            relatedProducts={PRODUCTS.filter((p) => p.id !== selectedProduct.id)}
            currentGirth={currentGirth}
            onChangeGirth={setCurrentGirth}
            onAddToCart={handleAddToCart}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeView === 'sizing-guide' && (
          <SizingGuideModal
            onBack={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onApplyGirth={(girth) => {
              setCurrentGirth(girth);
              showToast(`Companion profile set to ${girth} cm chest`);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSizingGuide={() => {
          setActiveView('sizing-guide');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCutPreset={(girth) => {
          setCurrentGirth(girth);
          setActiveView('home');
          setTimeout(() => handleScrollToSection('fit-concierge'), 50);
          showToast(`Calibrated to ${girth} cm chest`);
        }}
      />

      {/* Slide-out Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={PRODUCTS}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onSelectProduct={handleSelectProduct}
        onQuickAdd={handleQuickAdd}
      />
    </div>
  );
}
