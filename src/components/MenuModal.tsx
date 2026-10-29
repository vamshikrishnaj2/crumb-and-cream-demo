import React, { useState } from 'react';
import { X, Search, MessageCircle, Sparkles, Check } from 'lucide-react';
import { MENU_ITEMS, DEMO_CONFIG } from '../data/bakeryData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomCakeModal: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onOpenCustomCakeModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'Cakes', 'Pastries', 'Dessert Boxes', 'Beverages'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppItemUrl = (itemName: string) => {
    const msg = `Hi Crumb & Cream, I would like to order/inquire about "${itemName}" from your menu (Demo Inquiry).`;
    return `https://wa.me/${DEMO_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EADBCE] overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 border-b border-[#EADBCE] flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C27D38]">
              Daily Bakes &amp; Patisserie Menu
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1810] font-normal">
              Crumb &amp; Cream Menu
            </h2>
            <p className="text-xs text-[#704838]">
              Fresh morning bakes, signature celebration sponge cakes, and curated hampers.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-stone-500 hover:text-[#2C1810] rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#F2EBE1] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#2C1810] text-[#FAF7F2]'
                    : 'bg-[#FAF7F2] text-[#44281D] hover:bg-[#EADBCE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search bakes, flavors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs text-[#2C1810] focus:outline-hidden focus:ring-1 focus:ring-[#C27D38]"
            />
          </div>
        </div>

        {/* Menu Items List */}
        <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto divide-y divide-[#F2EBE1]">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs text-stone-500">
              No menu items match your search. Try another keyword.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1 pr-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-lg font-medium text-[#2C1810]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#704838]">
                      {item.tags.map((tag, i) => (
                        <span key={tag} className="flex items-center gap-1.5">
                          {i > 0 && <span aria-hidden="true" className="text-stone-300">·</span>}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#55382D] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="font-semibold text-sm text-[#2C1810] tabular-nums">
                    {item.price}
                  </span>

                  <a
                    href={getWhatsAppItemUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#2C1810] bg-[#FAF7F2] hover:bg-[#2C1810] hover:text-white border border-[#EADBCE] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Custom Cake Banner in Menu */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#704838]">
            <strong className="text-[#2C1810]">Looking for a multi-tiered or bespoke cake?</strong>{' '}
            We customize sizing, tiers, and decor for celebrations.
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCustomCakeModal();
            }}
            className="px-4 py-2 rounded-full font-medium text-xs bg-[#2C1810] text-[#FAF7F2] hover:bg-[#44281D] transition-colors cursor-pointer shrink-0"
          >
            Custom Cake Request
          </button>
        </div>

      </div>
    </div>
  );
};
