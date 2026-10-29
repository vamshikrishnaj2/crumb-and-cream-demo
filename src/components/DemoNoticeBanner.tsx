import React, { useState } from 'react';
import { Info, Sparkles, X } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <aside aria-label="Demo notice banner" className="bg-[#2C1810] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#44281D] relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#C27D38] text-white shrink-0">
            <Info className="w-2.5 h-2.5" />
          </span>
          <p className="font-medium tracking-wide">
            <strong className="text-[#D9822B] font-semibold">DEMO CONCEPT</strong>
            <span className="mx-1.5 opacity-60">·</span>
            Sample website for portfolio demonstration by a freelance web developer
          </p>
        </div>

        <div className="flex items-center gap-3 ml-auto text-[11px]">
          <button
            onClick={() => setShowDetail(!showDetail)}
            className="underline underline-offset-2 hover:text-[#D9822B] text-stone-300 transition-colors cursor-pointer"
          >
            {showDetail ? 'Hide Note' : 'About this demo'}
          </button>
        </div>
      </div>

      {showDetail && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#44281D] text-stone-300 text-[11px] leading-relaxed flex items-start justify-between gap-4">
          <p>
            This website is a showcase project highlighting modern web design, responsive layouts, and user interactions for boutique bakeries. All products, prices, locations, customer testimonials, and contact channels are entirely fictional.
          </p>
          <button
            onClick={() => setShowDetail(false)}
            aria-label="Close demo details"
            className="text-stone-400 hover:text-white p-0.5 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </aside>
  );
};
