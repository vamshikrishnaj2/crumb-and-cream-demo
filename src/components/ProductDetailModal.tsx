import React from 'react';
import { X, MessageCircle, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types/bakery';
import { DEMO_CONFIG } from '../data/bakeryData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenCustomCakeModal: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenCustomCakeModal,
}) => {
  if (!product) return null;

  const inquiryText = `Hi Crumb & Cream, I am interested in exploring ${product.name} (Demo Inquiry). Could you share today's availability?`;
  const whatsappUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber}?text=${encodeURIComponent(inquiryText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EADBCE] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Image Showcase */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FAF7F2]">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-[#2C1810] shadow-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#EADBCE]">
              Artisanal Selection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
          
          {/* Key Specs Bar (Unboxed text with separators, no pills) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#704838] pb-4 border-b border-[#F2EBE1]">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="text-stone-400">Starting at:</span>
              <strong className="text-sm text-[#2C1810] tabular-nums font-semibold">{product.priceStarting}</strong>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C27D38]" />
              <span>{product.servings}</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C27D38]" />
              <span>{product.leadTime}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
              The Craft &amp; Recipe
            </h3>
            <p className="text-sm text-[#55382D] leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Popular Flavors */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
              Featured Flavor Profiles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.popularFlavors.map((flavor) => (
                <div
                  key={flavor}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE]/80 text-xs text-[#44281D]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C27D38] shrink-0 mt-0.5" />
                  <span>{flavor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary & Craft Notes */}
          <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] text-xs text-[#704838] flex items-center justify-between">
            <span>
              {product.dietary.join(' · ')}
            </span>
            <span className="text-[11px] text-stone-500">Demo Pricing &amp; Details</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-[#704838] hover:text-[#2C1810] transition-colors cursor-pointer"
          >
            Close
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            {product.category === 'custom' && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCustomCakeModal();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full text-xs font-medium text-[#2C1810] bg-white border border-[#EADBCE] hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Custom Builder
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
