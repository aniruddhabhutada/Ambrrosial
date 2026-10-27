import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { useStore } from '../context/StoreContext';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    totalBagItems, 
    wishlist, 
    setIsBagOpen, 
    setIsWishlistOpen, 
    setIsSearchOpen,
    currentView,
    navigateTo
  } = useStore();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#contact') {
      e.preventDefault();
      navigateTo('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    if (href.startsWith('#')) {
      if (currentView !== 'home') {
        e.preventDefault();
        navigateTo('home');
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 ${mobileMenuOpen ? "z-50" : "z-40"} transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e3dfd8] py-3.5'
          : 'bg-white border-b border-[#e3dfd8] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#121110] hover:text-[#9e4318] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e4318]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Brand Logo & Wordmark (Sahar Style) */}
          <div className="flex items-center">
            <a 
              href="#"
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e4318] rounded"
              aria-label="Ambrrosial Essence Home"
            >
              <img
                src={BRAND_CONFIG.logos.dark}
                alt="Ambrrosial Essence Emblem"
                className="w-8 h-8 rounded-full object-cover border border-[#e3dfd8] shadow-sm transition-transform duration-300 group-hover:scale-105"
                width="32"
                height="32"
              />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-base sm:text-lg tracking-[0.25em] text-[#121110] uppercase leading-none">
                  Ambrrosial
                </span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#6c6760] uppercase mt-0.5">
                  Essence
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Center Navigation Links */}
          <nav 
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8"
          >
            {BRAND_CONFIG.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13px] font-sans font-normal tracking-wide text-[#57534e] hover:text-[#121110] transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#121110] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls: Search, Wishlist, Bag & Sahar WhatsApp Pill */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            
            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search fragrances"
              className="p-2 text-[#57534e] hover:text-[#121110] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e4318] rounded-full"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Wishlist Icon */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`View wishlist, ${wishlist.length} saved fragrances`}
              className="p-2 text-[#57534e] hover:text-[#121110] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e4318] rounded-full relative"
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#9e4318] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping / Inquiry Bag */}
            <button
              type="button"
              onClick={() => setIsBagOpen(true)}
              aria-label={`View inquiry bag, ${totalBagItems} items`}
              className="p-2 text-[#57534e] hover:text-[#121110] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e4318] rounded-full relative"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              {totalBagItems > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#121110] text-[#eeebe6] text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                  {totalBagItems}
                </span>
              )}
            </button>

            {/* Signature Sahar Pill Button: Order / Inquire on WhatsApp */}
            <button
              type="button"
              onClick={() => setIsBagOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#121110] hover:bg-[#2a2624] text-white text-xs font-mono tracking-wider rounded-full transition-all duration-300 shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Sahar Style) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content - 100% Solid White / Cream with explicit background */}
          <div 
            style={{ backgroundColor: '#ffffff' }}
            className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 z-20 border-r border-[#e3dfd8]"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#e3dfd8]">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_CONFIG.logos.dark}
                  alt="Ambrrosial Essence"
                  className="w-8 h-8 rounded-full object-cover border border-[#e3dfd8]"
                  width="32"
                  height="32"
                />
                <div>
                  <span className="block font-sans font-semibold text-base tracking-[0.2em] text-[#121110] uppercase">
                    Ambrrosial
                  </span>
                  <span className="block font-mono text-[9px] tracking-[0.3em] text-[#6c6760] uppercase">
                    Essence
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-[#121110] hover:text-[#9e4318] rounded-full"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 py-8 space-y-3">
              {BRAND_CONFIG.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between font-sans text-lg text-[#121110] hover:text-[#9e4318] tracking-wide transition-colors py-2.5 border-b border-[#e3dfd8]/50"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#6c6760]" aria-hidden="true" />
                </a>
              ))}
            </nav>

            {/* Mobile Bottom Action: Inquire on WhatsApp */}
            <div className="pt-6 border-t border-[#e3dfd8] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBagOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#121110] text-white text-xs font-mono uppercase tracking-widest rounded-full font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </button>
              <p className="text-center font-mono text-[11px] text-[#6c6760]">
                Next-day consultation & boutique inquiries
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
