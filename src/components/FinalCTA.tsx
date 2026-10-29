import React from 'react';
import { MessageCircle, Cake, ArrowRight } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

interface FinalCTAProps {
  onOpenCustomCakeModal: () => void;
  onOpenMenuModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCustomCakeModal, onOpenMenuModal }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#2C1810] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C27D38]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <p className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold">
          Crumb &amp; Cream · Patisserie Studio
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight text-balance">
          Planning your next celebration?
        </h2>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#EADBCE] font-light">
          Let&apos;s make it a little sweeter.
        </p>

        <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
          From intimate birthday sponges to grand multi-tiered centerpieces, our pastry team is ready to bake for your moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <a
            href={DEMO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#2C1810] bg-[#FAF7F2] hover:bg-white transition-all shadow-md active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Order on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenCustomCakeModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Cake className="w-4 h-4 text-[#D9822B]" />
            <span>Request a Custom Cake</span>
          </button>
        </div>

        <div className="pt-6">
          <button
            type="button"
            onClick={onOpenMenuModal}
            className="text-xs text-stone-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
          >
            Or browse our full bakery menu catalogue &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
