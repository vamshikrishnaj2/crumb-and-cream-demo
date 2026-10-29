import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { HERO_IMAGE, DEMO_CONFIG } from '../data/bakeryData';

interface HeroProps {
  onExploreCakes: () => void;
  onOpenCustomCakeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCakes, onOpenCustomCakeModal }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#704838] font-semibold">
              <span>Artisanal Patisserie</span>
              <span aria-hidden="true">·</span>
              <span>Hyderabad</span>
              <span aria-hidden="true">·</span>
              <span>Small Batch Bakes</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-[#2C1810] font-normal tracking-tight text-balance">
              Baked fresh. <br className="hidden sm:inline" />
              Made for your moments.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#55382D] leading-relaxed max-w-xl font-normal">
              Fresh cakes, pastries and custom creations prepared for birthdays, celebrations and everyday cravings. Handcrafted daily with pure French butter and honest ingredients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#cakes"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreCakes();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#FAF7F2] bg-[#2C1810] hover:bg-[#44281D] transition-all shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={DEMO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#2C1810] bg-white border border-[#EADBCE] hover:border-[#C27D38] hover:bg-[#FAF7F2] transition-all shadow-xs active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights (clean unboxed text, no pills) */}
            <div className="pt-4 border-t border-[#EADBCE]/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#704838]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27D38]" />
                <span>Fresh morning bake slots</span>
              </div>
              <span aria-hidden="true" className="text-[#C27D38]/40">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27D38]" />
                <span>Custom tier consultation</span>
              </div>
              <span aria-hidden="true" className="text-[#C27D38]/40">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27D38]" />
                <span>Carefully packed for transport</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#EDE4D8] border border-[#EADBCE]">
              <img
                src={HERO_IMAGE}
                alt="Artisanal cakes, fresh flaky croissants, and delicate pastries on a marble bakery counter at Crumb & Cream"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/75 via-transparent to-black/10 pointer-events-none" />

              {/* Quiet overlay caption at bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white pointer-events-auto">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#FAF7F2]/80 font-medium">Boutique Kitchen</p>
                  <p className="font-serif text-lg sm:text-xl font-normal text-white">Daily Fresh Counter &amp; Bespoke Studio</p>
                </div>
                <button
                  onClick={onOpenCustomCakeModal}
                  className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#2C1810] text-xs font-medium backdrop-blur-xs transition-colors shadow-xs shrink-0 cursor-pointer"
                >
                  Custom inquiry
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
