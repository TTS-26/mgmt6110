import React from 'react';
import { BRAND_WORDMARK } from '../data/products';

interface FooterProps {
  onNavigateHome: () => void;
  onOpenSizingGuide: () => void;
  onSelectCutPreset: (girth: number) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onOpenSizingGuide,
  onSelectCutPreset,
}) => {
  return (
    <footer className="bg-[#f5f3ef] border-t border-[#eae8e4] pt-16 pb-12">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e4e2de]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_WORDMARK}
                alt="Snuffers Brand Wordmark"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif-editorial text-2xl tracking-tight text-[#040505] uppercase font-semibold">
                SNUFFERS
              </span>
            </div>
            <p className="text-xs text-[#444748] leading-relaxed max-w-sm">
              Chic, comfortable, and affordable canine apparel with universal breed ergonomics
              and inclusive sizing. Thoughtfully crafted with hypoallergenic flax, breathable cotton,
              and soft knit blends.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#596244] uppercase tracking-wider">
              Singapore · Canine Living &amp; Apparel
            </div>
            <p className="text-[11px] text-[#747878] leading-normal pt-1">
              Live weather condition powered by Singapore National Environment Agency (NEA) via{' '}
              <a
                href="https://data.gov.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#040505]"
              >
                data.gov.sg
              </a>
            </p>
          </div>

          {/* Col 1: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#040505]">
              Wardrobe Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#444748]">
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Summer
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Winter
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Occasion
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Shoes
                </button>
              </li>
              <li>
                <button onClick={onNavigateHome} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Treats
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Universal Fit */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#040505]">
              Fit Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#444748]">
              <li>
                <button onClick={() => onSelectCutPreset(24)} className="hover:text-[#040505] transition-colors cursor-pointer">
                  01. Petite Cut (20–32 cm)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCutPreset(38)} className="hover:text-[#040505] transition-colors cursor-pointer">
                  02. Standard Cut (33–50 cm)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCutPreset(46)} className="hover:text-[#040505] transition-colors cursor-pointer">
                  03. Long-Body Cut (40–55 cm)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCutPreset(58)} className="hover:text-[#040505] transition-colors cursor-pointer">
                  04. Broad-Chest Cut (52–75+ cm)
                </button>
              </li>
              <li>
                <button onClick={onOpenSizingGuide} className="text-[#596244] font-semibold hover:underline cursor-pointer">
                  Master Measurement Guide →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#040505]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#444748]">
              <li>
                <span className="text-[#1b1c1a] font-medium">Inquiries &amp; Support:</span>
                <br />
                <span className="text-[#747878]">hello@snuffers.com</span>
              </li>
              <li>
                <button onClick={onOpenSizingGuide} className="hover:text-[#040505] transition-colors cursor-pointer">
                  Garment Care &amp; Washing
                </button>
              </li>
              <li>
                <span className="text-[#747878]">Complimentary SG Shipping over S$50</span>
              </li>
              <li>
                <span className="text-[#747878]">Free Size Exchanges within 14 Days</span>
              </li>
            </ul>
          </div>
        </div>

                {/* Privacy notice covering Microsoft Clarity and Disqus */}
        <p className="pt-8 text-[11px] text-[#747878] leading-relaxed max-w-4xl">
          This page uses Microsoft Clarity and Disqus, which use cookies to record how visitors
          use the site and to host comments. By using this page you agree that we and Microsoft
          may collect and use this data. See the{' '}
          
            href="https://www.microsoft.com/privacy/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#040505]"
          >
            Microsoft Privacy Statement
          </a>
          , the{' '}
          
            href="https://disqus.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#040505]"
          >
            Disqus privacy policy
          </a>{' '}
          and the{' '}
          
            href="https://disqus.com/data-sharing-settings/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#040505]"
          >
            Disqus data sharing settings
          </a>
          .
        </p>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#747878]">
          <div>
            © {new Date().getFullYear()} SNUFFERS. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-[#040505] cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-[#040505] cursor-pointer">Terms of Commission</span>
            <span className="hover:text-[#040505] cursor-pointer">Canine Ergonomics Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
