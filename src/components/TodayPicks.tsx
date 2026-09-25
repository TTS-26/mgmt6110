import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { X, Thermometer, Wind } from 'lucide-react';

interface TodayPicksProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

interface WeatherAdvice {
  forecast: string;
  tempC: number | null;
  psi: number | null;
  headline: string;
  note: string | null;
  recommend: string[];
}

export const TodayPicks: React.FC<TodayPicksProps> = ({ products, onSelectProduct }) => {
  const [advice, setAdvice] = useState<WeatherAdvice | null>(null);
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    let active = true;
    fetch('/api/weather')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!active || !data || !Array.isArray(data.recommend) || data.recommend.length === 0) {
          return;
        }
        setAdvice(data as WeatherAdvice);
      })
      .catch(() => {
        // Silent: this strip is an extra, never a blocker for the page.
      });
    return () => {
      active = false;
    };
  }, []);

  if (!advice || dismissed) return null;

  const picks = advice.recommend
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  if (picks.length === 0) return null;

  return (
    <section className="pt-6">
      <div className="max-w-[88rem] mx-auto px-4 lg:px-10">
        <div className="relative bg-[#f5f3ef] border border-[#e4e2de] rounded-2xl p-5 lg:p-6">
          <button type="button" onClick={() => setDismissed(true)} aria-label="Hide today's suggestions" className="absolute top-3 right-3 p-1.5 rounded-full text-[#747878] hover:text-[#040505] hover:bg-[#e9e6e0] transition-colors cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            <div className="lg:w-2/5 space-y-1.5">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#596244]">
                <span>{advice.forecast} in the City</span>
                {typeof advice.tempC === 'number' && (
                  <span className="inline-flex items-center gap-1 text-[#747878]">
                    <Thermometer className="w-3 h-3" />
                    {advice.tempC}&deg;C
                  </span>
                )}
                {typeof advice.psi === 'number' && (
                  <span className="inline-flex items-center gap-1 text-[#747878]">
                    <Wind className="w-3 h-3" />
                    PSI {advice.psi}
                  </span>
                )}
              </div>

              <p className="font-serif-editorial text-xl sm:text-2xl leading-snug text-[#040505]">
                {advice.headline}
              </p>

              {advice.note && (
                <p className="text-xs text-[#8a5a2b] font-medium">{advice.note}</p>
              )}
            </div>

            <div className="lg:w-3/5 grid grid-cols-3 gap-3">
              {picks.map((product) => (
                <button key={product.id} type="button" onClick={() => onSelectProduct(product)} className="group text-left bg-white border border-[#e4e2de] rounded-xl overflow-hidden hover:border-[#747878]/60 transition-colors cursor-pointer">
                  <div className="aspect-[4/3] bg-[#efeeea] overflow-hidden">
                    <img src={product.image} alt={product.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-2.5">
                    <p className="text-[11px] font-medium text-[#1b1c1a] leading-snug line-clamp-2">
                      {product.title}
                    </p>
                    <p className="text-[11px] text-[#596244] font-semibold mt-0.5">
                      S${product.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
