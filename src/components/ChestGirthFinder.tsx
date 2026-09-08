import React from 'react';
import { Ruler, CheckCircle2, RotateCcw, ShieldCheck } from 'lucide-react';
import { BodyCut } from '../types';

interface ChestGirthFinderProps {
  currentGirth: number;
  onChangeGirth: (girth: number) => void;
  detectedCut: BodyCut;
}

export const ChestGirthFinder: React.FC<ChestGirthFinderProps> = ({
  currentGirth,
  onChangeGirth,
  detectedCut,
}) => {
  const presets = [
    { label: '24 cm (Petite)', value: 24 },
    { label: '38 cm (Standard)', value: 38 },
    { label: '46 cm (Long-Body)', value: 46 },
    { label: '58 cm (Broad-Chest)', value: 58 },
    { label: '82 cm (Heritage)', value: 82 },
  ];

  return (
    <section id="fit-concierge" className="py-8 scroll-mt-24">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="bg-[#ffffff] rounded-2xl border border-[#e4e2de] p-6 lg:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-2">
              <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase">
                <Ruler className="w-4 h-4" />
                <span>Precision Canine Fit Concierge</span>
              </div>
              <h2 className="font-serif-editorial text-2xl lg:text-3xl text-[#040505]">
                Chest Girth Finder
              </h2>
              <p className="text-sm text-[#444748] leading-relaxed">
                Enter your companion&apos;s widest chest circumference behind the front legs. Our universal tailoring algorithm
                filters curated silhouettes for anatomical freedom.
              </p>

              {/* Real-time calibration badge */}
              <div className="pt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee7c0]/50 text-[#171e06] text-xs font-semibold border border-[#dee7c0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#596244]" />
                  <span>{currentGirth} cm · {detectedCut} Fit Calibrated</span>
                </span>
                <span className="text-xs text-[#747878]">
                  (20 – 95 cm scope)
                </span>
              </div>
            </div>

            {/* Center: Slider, Direct Input & Presets */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="chest-girth-input" className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                  Selected Girth (cm)
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center">
                    <input
                      id="chest-girth-input"
                      type="number"
                      min={20}
                      max={95}
                      value={currentGirth}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val)) {
                          onChangeGirth(Math.min(95, Math.max(20, val)));
                        }
                      }}
                      className="w-20 px-2.5 py-1 text-right text-base font-semibold text-[#040505] bg-[#efeeea] border border-[#e4e2de] rounded-lg focus:outline-none focus:border-[#040505]"
                    />
                    <span className="ml-1 text-xs font-medium text-[#444748]">cm</span>
                  </div>
                  <button
                    id="reset-girth-default"
                    onClick={() => onChangeGirth(38)}
                    className="p-1.5 text-xs text-[#596244] hover:text-[#040505] bg-[#f5f3ef] hover:bg-[#eae8e4] rounded-md transition-colors inline-flex items-center gap-1 cursor-pointer"
                    title="Reset to 38 cm default"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">Default</span>
                  </button>
                </div>
              </div>

              {/* Range slider */}
              <input
                id="chest-girth-slider"
                type="range"
                min={20}
                max={95}
                value={currentGirth}
                onChange={(e) => onChangeGirth(Number(e.target.value))}
                className="w-full h-2 bg-[#eae8e4] rounded-lg appearance-none cursor-pointer accent-[#040505]"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    id={`girth-preset-${preset.value}`}
                    onClick={() => onChangeGirth(preset.value)}
                    className={`px-2.5 py-1 text-[11px] rounded-lg font-medium transition-all cursor-pointer ${
                      currentGirth === preset.value
                        ? 'bg-[#040505] text-white shadow-xs'
                        : 'bg-[#efeeea] text-[#444748] hover:bg-[#eae8e4] hover:text-[#1b1c1a]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Tailored Comfort Guarantee Guarantee Box */}
            <div className="lg:col-span-3 bg-[#f5f3ef] border border-[#e4e2de] rounded-xl p-4 flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2 text-[#596244]">
                <ShieldCheck className="w-5 h-5 text-[#596244]" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1b1c1a]">
                  Tailored Comfort Guarantee
                </h4>
              </div>
              <p className="text-xs text-[#444748] leading-relaxed">
                All garments incorporate stretch underbellies, deep armhole curves, and zero-chafing soft edge bindings.
              </p>
              <div className="pt-1 text-[11px] font-semibold text-[#596244]">
                ✓ Free Exchanges on Fit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
