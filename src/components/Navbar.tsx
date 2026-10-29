import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MessageCircle } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

interface NavbarProps {
  onOpenMenuModal: () => void;
  onOpenCustomCakeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuModal, onOpenCustomCakeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Cakes', href: '#cakes' },
    { label: 'Menu', href: '#menu', onClick: onOpenMenuModal },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.onClick) {
      link.onClick();
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-200 bg-[#FAF7F2]/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-[#EADBCE] shadow-xs' : 'border-[#EADBCE]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#home"
          className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#2C1810] hover:text-[#C27D38] transition-colors whitespace-nowrap"
        >
          Crumb &amp; Cream
        </a>

        {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#44281D]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="hover:text-[#C27D38] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C27D38] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href={DEMO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#FAF7F2] bg-[#2C1810] hover:bg-[#44281D] transition-colors shadow-xs active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-[#2C1810] hover:bg-[#EADBCE]/50 transition-colors focus-visible:outline-2 focus-visible:outline-[#C27D38]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EADBCE] bg-[#FAF7F2] px-6 py-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                  }
                  handleNavClick(link);
                }}
                className="text-base font-medium text-[#2C1810] hover:text-[#C27D38] py-2 transition-colors border-b border-[#EADBCE]/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomCakeModal();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg border border-[#C27D38] text-[#C27D38] hover:bg-[#C27D38]/10 text-sm font-medium transition-colors cursor-pointer"
            >
              Request a Custom Cake
            </button>
            <a
              href={DEMO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 flex items-center justify-center gap-2 rounded-lg bg-[#2C1810] text-[#FAF7F2] text-sm font-medium hover:bg-[#44281D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp (Demo)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
