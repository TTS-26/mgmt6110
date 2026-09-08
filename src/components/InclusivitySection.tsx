import React from 'react';
import { SIZING_ARCHETYPE_DATA } from '../data/products';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface InclusivitySectionProps {
  onSelectCutPreset: (girth: number) => void;
}

export const InclusivitySection: React.FC<InclusivitySectionProps> = ({ onSelectCutPreset }) => {
  const cutPresetGirths: Record<string, number> = {
    petite: 24,
    standard: 38,
    'long-body': 46,
    'broad-chest': 58,
  };

  return (
    <section id="inclusive-matrix" className="py-16 bg-[#efeeea]/50 border-y border-[#eae8e4] scroll-mt-24">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inclusive Canine Tailoring</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#040505]">
            One Size Never Fits All
          </h2>
          <p className="text-sm sm:text-base text-[#444748] mt-2.5 leading-relaxed">
            Breeds differ not just by weight, but by chest depth, shoulder rotation, spine length,
            and skin sensitivity. We engineered four discrete master cuts calibrated with zero fabric bunching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIZING_ARCHETYPE_DATA.map((archetype) => (
            <div
              key={archetype.id}
              id={`cut-card-${archetype.id}`}
              onClick={() => onSelectCutPreset(cutPresetGirths[archetype.id] || 38)}
              className="group bg-[#ffffff] rounded-2xl p-6 border border-[#e4e2de] hover:border-[#040505] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-editorial text-xl font-semibold text-[#040505] group-hover:text-[#596244] transition-colors">
                    {archetype.cutName}
                  </span>
                  <div className="p-1.5 rounded-full bg-[#f5f3ef] group-hover:bg-[#040505] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 text-[11px] font-bold text-[#596244] bg-[#dee7c0]/60 rounded-md mb-3 border border-[#dee7c0]">
                  Chest: {archetype.range}
                </div>

                <p className="text-xs font-semibold text-[#1b1c1a] mb-2 tracking-wide">
                  {archetype.breeds}
                </p>

                <p className="text-xs text-[#444748] leading-relaxed">
                  {archetype.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#eae8e4] flex items-center justify-between text-[11px] text-[#747878]">
                <span>Back: {archetype.backLength}</span>
                <span className="font-semibold text-[#040505] group-hover:underline">
                  Calibrate Fit →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
