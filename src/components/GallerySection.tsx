import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types/bakery';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Celebration Cakes', 'Custom Tiered', 'Pastries', 'Dessert Boxes'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
            Boutique Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal tracking-tight">
            Moments from the bakery studio
          </h2>
          <p className="text-sm sm:text-base text-[#55382D] font-normal leading-relaxed">
            A visual showcase of tiered celebration cakes, morning lamination, and handcrafted gift hampers.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive filter buttons adhering to design guidelines) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2C1810] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FAF7F2] text-[#55382D] hover:bg-[#EADBCE]/60 border border-[#EADBCE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className={`group relative rounded-2xl overflow-hidden border border-[#EADBCE] bg-[#FAF7F2] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-16/9 sm:aspect-21/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-90">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#EADBCE] font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-1 max-w-md font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#2C1810] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 max-h-[70vh] bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#2C1810] text-[#FAF7F2] space-y-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#D9822B] font-semibold">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs text-stone-400">Demo Gallery Showcase</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-medium">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-stone-300 font-light">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
