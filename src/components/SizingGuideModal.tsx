import React, { useState } from 'react';
import { ArrowLeft, Ruler, Sparkles, Check, Shirt, Droplets } from 'lucide-react';
import { SIZING_ARCHETYPE_DATA } from '../data/products';

interface SizingGuideModalProps {
  onBack: () => void;
  onApplyGirth: (girth: number) => void;
}

export const SizingGuideModal: React.FC<SizingGuideModalProps> = ({
  onBack,
  onApplyGirth,
}) => {
  const [selectedBreed, setSelectedBreed] = useState<string>('Whippet');

  const breedDatabase: Record<string, { cut: string; girth: number; back: string; tips: string }> = {
    'Toy Poodle': { cut: 'Petite Cut', girth: 26, back: '22 cm', tips: 'Narrow neck with high leg clearance; snap buttons ensure coat does not mat.' },
    Chihuahua: { cut: 'Petite Cut', girth: 24, back: '19 cm', tips: 'Featherweight fabrics prevent shivering without overwhelming small frames.' },
    Whippet: { cut: 'Standard Cut', girth: 38, back: '34 cm', tips: 'Deep thoracic drop requires our contour ribbing along the spine and tuck.' },
    Beagle: { cut: 'Standard Cut', girth: 44, back: '30 cm', tips: 'Balanced barrel chest with athletic front leg rotation.' },
    Dachshund: { cut: 'Long-Body Cut', girth: 42, back: '39 cm', tips: '35% extended back coverage with raised underbelly hem prevents curb drag.' },
    Corgi: { cut: 'Long-Body Cut', girth: 48, back: '36 cm', tips: 'Wide chest with short legs; high armhole scallops eliminate tripping.' },
    'French Bulldog': { cut: 'Broad-Chest Cut', girth: 54, back: '30 cm', tips: 'Wide front yoke and elastic collar ease pressure on thick muscular necks.' },
    'English Bulldog': { cut: 'Broad-Chest Cut', girth: 68, back: '38 cm', tips: 'Expansive front panel with stretch gussets for broad shoulder movement.' },
  };

  const currentBreedInfo = breedDatabase[selectedBreed] || breedDatabase['Whippet'];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between py-4 mb-8 border-b border-[#eae8e4]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#040505] hover:text-[#596244] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
          <div className="text-xs text-[#596244] font-semibold uppercase tracking-wider">
            Canine Ergonomics Handbook
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase">
            <Ruler className="w-4 h-4" />
            <span>Measurement Precision &amp; Fabric Care</span>
          </div>
          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#040505] leading-tight">
            The Science of Canine Fit
          </h1>
          <p className="text-base text-[#444748] leading-relaxed">
            Every Snuffers silhouette is crafted around anatomical biomechanics. Follow our 3-step master
            measurement technique to guarantee uninhibited movement for your dog.
          </p>
        </div>

        {/* 3 Step Measurement Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] border border-[#e4e2de] flex items-center justify-center font-serif-editorial text-lg text-[#040505] font-semibold">
              01
            </div>
            <h3 className="font-serif-editorial text-xl text-[#040505] font-semibold">
              Chest Girth (Primary)
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Wrap a soft tailor&apos;s tape around the widest part of your dog&apos;s ribcage, directly behind the front armpits.
              Allow two flat fingers of breathing room underneath.
            </p>
            <div className="text-[11px] font-semibold text-[#596244] bg-[#dee7c0]/40 px-3 py-1.5 rounded-lg border border-[#dee7c0]">
              Key factor for button and zipper comfort
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] border border-[#e4e2de] flex items-center justify-center font-serif-editorial text-lg text-[#040505] font-semibold">
              02
            </div>
            <h3 className="font-serif-editorial text-xl text-[#040505] font-semibold">
              Back Length
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Measure along the spine from the base of the neck (where the collar naturally settles) to 2 cm
              before the base of the tail while your dog is standing square.
            </p>
            <div className="text-[11px] font-semibold text-[#596244] bg-[#dee7c0]/40 px-3 py-1.5 rounded-lg border border-[#dee7c0]">
              Ensures dorsal protection without tail blockage
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] border border-[#e4e2de] flex items-center justify-center font-serif-editorial text-lg text-[#040505] font-semibold">
              03
            </div>
            <h3 className="font-serif-editorial text-xl text-[#040505] font-semibold">
              Neck Circumference
            </h3>
            <p className="text-xs text-[#444748] leading-relaxed">
              Measure around the lower neckline where coats button up. Our magnetic fasteners and elastic inserts
              provide up to 3 cm of adaptive breathing expansion.
            </p>
            <div className="text-[11px] font-semibold text-[#596244] bg-[#dee7c0]/40 px-3 py-1.5 rounded-lg border border-[#dee7c0]">
              Zero choking or trachea compression
            </div>
          </div>
        </div>

        {/* Interactive Breed Calibration Station */}
        <div className="bg-[#ffffff] rounded-2xl p-8 border border-[#e4e2de] shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#eae8e4]">
            <div>
              <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Archetype Lookup</span>
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#040505]">
                Breed Silhouette Advisor
              </h2>
            </div>

            {/* Breed Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {Object.keys(breedDatabase).map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBreed(b)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    selectedBreed === b
                      ? 'bg-[#040505] text-white shadow-xs'
                      : 'bg-[#efeeea] text-[#444748] hover:bg-[#eae8e4]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Breed Output */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#747878]">
                Master Pattern
              </span>
              <div className="font-serif-editorial text-2xl text-[#040505] font-semibold">
                {currentBreedInfo.cut}
              </div>
              <div className="text-xs text-[#596244] font-medium">
                Standard Chest: ~{currentBreedInfo.girth} cm · Back: {currentBreedInfo.back}
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                <strong className="text-[#040505]">Tailoring Notes for {selectedBreed}: </strong>
                {currentBreedInfo.tips}
              </p>
              <button
                onClick={() => {
                  onApplyGirth(currentBreedInfo.girth);
                  onBack();
                }}
                className="px-4 py-2 bg-[#040505] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#1e1e1e] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-[#dee7c0]" />
                <span>Apply Fit for {selectedBreed} ({currentBreedInfo.girth} cm)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Cut Matrix */}
        <div className="mb-16">
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#040505] mb-6">
            Master Sizing Matrix
          </h2>
          <div className="bg-white rounded-2xl border border-[#e4e2de] overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#f5f3ef] border-b border-[#e4e2de] text-[#747878] text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-4">Pattern Silhouette</th>
                  <th className="p-4">Chest Girth Scope</th>
                  <th className="p-4">Back Length Reach</th>
                  <th className="p-4">Reference Breeds</th>
                  <th className="p-4">Weight Anchor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae8e4] text-[#1b1c1a]">
                {SIZING_ARCHETYPE_DATA.map((arch) => (
                  <tr key={arch.id} className="hover:bg-[#fbf9f5] transition-colors">
                    <td className="p-4 font-serif-editorial font-semibold text-base text-[#040505]">
                      {arch.cutName}
                    </td>
                    <td className="p-4 font-semibold text-[#596244]">{arch.range}</td>
                    <td className="p-4">{arch.backLength}</td>
                    <td className="p-4 text-xs text-[#444748]">{arch.breeds}</td>
                    <td className="p-4 text-xs text-[#747878]">{arch.exampleWeights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fabric Care & Maintenance Section */}
        <div className="bg-[#f5f3ef] rounded-2xl p-8 lg:p-12 border border-[#e4e2de] space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[#596244] text-[11px] font-semibold tracking-[0.14em] uppercase">
              <Shirt className="w-4 h-4" />
              <span>Garment Longevity Protocol</span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#040505]">
              Caring for Snuffers Apparel
            </h2>
            <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
              Because our pieces are worn directly against active canine fur and outdoor paths, we engineer
              them to be both low-maintenance and long-lasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-[#e4e2de] space-y-2">
              <Droplets className="w-5 h-5 text-[#596244]" />
              <h4 className="font-serif-editorial text-base text-[#040505] font-semibold">
                Organic Linen &amp; Cottons
              </h4>
              <p className="text-xs text-[#444748] leading-relaxed">
                Machine wash cold on gentle cycle using hypoallergenic detergent. Shake out damp and lay flat
                or hang in shade. Softens naturally with every wash.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e4e2de] space-y-2">
              <Shirt className="w-5 h-5 text-[#596244]" />
              <h4 className="font-serif-editorial text-base text-[#040505] font-semibold">
                Merino &amp; Alpaca Knits
              </h4>
              <p className="text-xs text-[#444748] leading-relaxed">
                Hand wash in tepid water with wool wash. Never wring or twist. Press flat between clean bath
                towels to remove excess moisture, then reshape on a drying rack.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e4e2de] space-y-2">
              <Sparkles className="w-5 h-5 text-[#596244]" />
              <h4 className="font-serif-editorial text-base text-[#040505] font-semibold">
                Occasion Velvet &amp; Cupro
              </h4>
              <p className="text-xs text-[#444748] leading-relaxed">
                Spot clean or dry clean silk-touch velvets and ceremony capes. Steam lightly on reverse side
                to revive fabric pile without crushing delicate collar trims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
