/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCollection } from './components/SignatureCollection';
import { CustomCakesSection } from './components/CustomCakesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCakeModal } from './components/CustomCakeModal';
import { MenuModal } from './components/MenuModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product } from './types/bakery';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCustomCakeOpen, setIsCustomCakeOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleExploreCakes = () => {
    const el = document.getElementById('cakes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1810] selection:bg-[#EADBCE]">
      {/* 1. DEMO NOTICE (Top subtle visible banner) */}
      <DemoNoticeBanner />

      {/* 2. NAVBAR (Logo, Links, CTA: Order on WhatsApp) */}
      <Navbar
        onOpenMenuModal={() => setIsMenuOpen(true)}
        onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
      />

      <main className="flex-1">
        {/* 3. HERO (Headline, Supporting text, CTAs, Hero image) */}
        <Hero
          onExploreCakes={handleExploreCakes}
          onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
        />

        {/* 4. SIGNATURE COLLECTION (4 products: Celebration Cakes, Custom Cakes, Fresh Pastries, Dessert Boxes) */}
        <SignatureCollection
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 5. CUSTOM CAKES ("Have something special in mind?", Request Custom Cake) */}
        <CustomCakesSection
          onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
        />

        {/* 6. GALLERY (Masonry/grid gallery with bakery imagery & category filtering) */}
        <GallerySection />

        {/* 7. WHY CRUMB & CREAM (Freshly prepared, Custom celebration cakes, Easy ordering, Convenient pickup) */}
        <WhyChooseUs />

        {/* 8. ABOUT (Short fictional brand story, clearly fictional/demo) */}
        <AboutSection />

        {/* 9. LOCATION (Demo location: Hyderabad, map placeholder card, opening hours) */}
        <LocationSection />

        {/* 10. CONTACT (Phone: +91 90000 00000, WhatsApp, Email: hello@example.com) */}
        <ContactSection />

        {/* 11. FINAL CTA ("Planning your next celebration? Let's make it a little sweeter.") */}
        <FinalCTA
          onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
          onOpenMenuModal={() => setIsMenuOpen(true)}
        />
      </main>

      {/* 12. FOOTER (Logo, Navigation, Demo notice, Social icons, Contact) */}
      <Footer
        onOpenMenuModal={() => setIsMenuOpen(true)}
        onOpenCustomCakeModal={() => setIsCustomCakeOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <CustomCakeModal
        isOpen={isCustomCakeOpen}
        onClose={() => setIsCustomCakeOpen(false)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenCustomCakeModal={() => {
          setIsMenuOpen(false);
          setIsCustomCakeOpen(true);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenCustomCakeModal={() => {
          setSelectedProduct(null);
          setIsCustomCakeOpen(true);
        }}
      />
    </div>
  );
}
