import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SIGNATURE_PRODUCTS } from '../data/bakeryData';
import { Product } from '../types/bakery';

interface SignatureCollectionProps {
  onSelectProduct: (product: Product) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="cakes" className="py-16 sm:py-24 bg-[#FFFDF9] border-y border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
            Signature Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal tracking-tight">
            Handcrafted for celebrations &amp; cravings
          </h2>
          <p className="text-sm sm:text-base text-[#55382D] font-normal leading-relaxed">
            Every item is baked from scratch with uncompromised attention to crust, crumb, and harmonious flavor pairings.
          </p>
        </div>

        {/* 4 Fictional Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIGNATURE_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2C1810] font-medium group-hover:text-[#C27D38] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#55382D] leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Card Meta & Explore Action */}
                <div className="pt-3 border-t border-[#F2EBE1] flex items-center justify-between gap-2">
                  <div className="text-xs text-[#704838]">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-500">From</span>
                    <span className="font-semibold text-sm text-[#2C1810] tabular-nums">{product.priceStarting}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] bg-[#FAF7F2] border border-[#EADBCE] group-hover:bg-[#2C1810] group-hover:text-white group-hover:border-[#2C1810] transition-colors cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
