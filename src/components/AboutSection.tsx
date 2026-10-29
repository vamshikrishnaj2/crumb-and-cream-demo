import React from 'react';
import { Sparkles, Info } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal leading-tight text-balance">
                Rooted in simple flours, slow mornings, and mindful craft.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#55382D] leading-relaxed">
              <p>
                Crumb &amp; Cream was conceptualized around an appreciation for unhurried patisserie. We believe that true luxury in baking is not found in excessive sugars or artificial stabilizers, but in the slow 48-hour cold fermentation of laminated dough, the fragrance of real Madagascar vanilla beans, and the clean flavor of cultured dairy butter.
              </p>
              <p>
                From celebratory multi-tier cakes layered with tart fruit reductions to crisp morning croissants that shatter delicately at first bite, every creation is designed to bring warmth and quiet delight to your table.
              </p>
            </div>

            {/* Clear Portfolio Demo Transparency Note */}
            <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-xs text-[#704838] space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-[#2C1810]">
                <Info className="w-4 h-4 text-[#C27D38] shrink-0" />
                <span>Freelance Developer Portfolio Demonstration</span>
              </div>
              <p className="leading-relaxed text-stone-600">
                Crumb &amp; Cream is a fictional boutique brand created to demonstrate contemporary web architecture, visual design, responsive layouts, and customer inquiry workflows. No real orders are fulfilled.
              </p>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] bg-[#FAF7F2] shadow-lg aspect-4/3 sm:aspect-5/4">
              <img
                src="/src/assets/images/hero_bakery_pastries_1790709100790.jpg"
                alt="Crumb and cream bakery studio ambiance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[#EADBCE]">Boutique Philosophy</p>
                <p className="font-serif text-lg text-white font-normal">Small batches. Honest ingredients.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
