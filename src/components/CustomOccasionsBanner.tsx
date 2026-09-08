import React from 'react';
import { Sparkles, CalendarHeart } from 'lucide-react';

export const CustomOccasionsBanner: React.FC = () => {
  return (
    <section className="py-8">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="bg-[#040505] text-white rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#596244]/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1e1e] border border-white/10 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#dee7c0]">
              <CalendarHeart className="w-3.5 h-3.5 text-[#dee7c0]" />
              <span>Special Occasions</span>
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl leading-snug">
              Custom outfits for special occasions from S$150.
            </h3>

            <p className="text-xs sm:text-sm text-[#c4c7c7] leading-relaxed">
              Thoughtfully tailored for memorable moments including birthdays, weddings, family photoshoots, and celebrations. Crafted with breathable fabrics and gentle, non-restrictive cuts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

