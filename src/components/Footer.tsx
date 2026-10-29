import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageCircle, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

interface FooterProps {
  onOpenMenuModal: () => void;
  onOpenCustomCakeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenuModal, onOpenCustomCakeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] text-[#2C1810] border-t border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#2C1810]">
              Crumb &amp; Cream
            </span>
            <p className="text-xs sm:text-sm text-[#55382D] leading-relaxed max-w-sm">
              Artisanal patisserie and celebration cake studio in Hyderabad. Handcrafting slow-fermented pastries, layered sponges, and bespoke cakes with pure ingredients.
            </p>

            {/* Social Icons (with demo tooltips) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={DEMO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (Demo)"
                title="Connect on WhatsApp (Demo)"
                className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] text-[#2C1810] hover:text-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#home"
                aria-label="Instagram (Demo)"
                title="Instagram Demo Profile"
                className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] text-[#2C1810] hover:text-[#C27D38] hover:border-[#C27D38] flex items-center justify-center transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="#home"
                aria-label="Facebook (Demo)"
                title="Facebook Demo Page"
                className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] text-[#2C1810] hover:text-[#C27D38] hover:border-[#C27D38] flex items-center justify-center transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#704838]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#55382D]">
              <li>
                <a href="#home" className="hover:text-[#C27D38] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-[#C27D38] transition-colors">
                  Cakes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenMenuModal}
                  className="hover:text-[#C27D38] transition-colors cursor-pointer text-left"
                >
                  Full Menu
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C27D38] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C27D38] transition-colors">
                  About Our Studio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C27D38] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#704838]">
              Offerings
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#55382D]">
              <li>
                <a href="#cakes" className="hover:text-[#C27D38] transition-colors">
                  Celebration Cakes (1 kg)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCustomCakeModal}
                  className="hover:text-[#C27D38] transition-colors cursor-pointer text-left"
                >
                  Custom Tiered Wedding Cakes
                </button>
              </li>
              <li>
                <a href="#cakes" className="hover:text-[#C27D38] transition-colors">
                  French Butter Viennoiserie
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-[#C27D38] transition-colors">
                  Patisserie Gift Boxes
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-[#C27D38] transition-colors">
                  Eggless &amp; Dietary Options
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm text-[#55382D]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#704838]">
              Demo Studio
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C27D38] shrink-0 mt-0.5" />
                <span>Road No. 36, Jubilee Hills, Hyderabad 500034</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C27D38] shrink-0" />
                <a href={`tel:${DEMO_CONFIG.phone}`} className="hover:text-[#C27D38]">
                  {DEMO_CONFIG.phone} (Demo)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C27D38] shrink-0" />
                <a href={`mailto:${DEMO_CONFIG.email}`} className="hover:text-[#C27D38]">
                  {DEMO_CONFIG.email} (Demo)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Demo Notice Banner in Footer */}
        <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#EADBCE] text-xs text-[#704838] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <div>
            <strong className="text-[#2C1810]">DEMO CONCEPT:</strong> Sample website for portfolio demonstration. All products, prices, locations, customer contacts, and orders are purely fictional.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2C1810] hover:text-[#C27D38] cursor-pointer shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-[#EADBCE]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Crumb &amp; Cream · Portfolio Demo Concept by Freelance Web Developer
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C27D38] fill-current" />
            <span>for bakeries &amp; patisseries</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
