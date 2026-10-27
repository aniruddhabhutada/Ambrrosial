import React, { useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { BRAND_CONFIG } from '../data/brandConfig';
import { X, ArrowRight } from 'lucide-react';

export const MobileMenuDrawer: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    setIsBagOpen,
    currentView,
    navigateTo 
  } = useStore();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#contact') {
      e.preventDefault();
      navigateTo('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] lg:hidden overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Semi-transparent Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 100% Solid Pure White Drawer Panel - Immune to Sticky Header Collapsing */}
      <div
        style={{ 
          backgroundColor: '#ffffff', 
          minHeight: '100vh', 
          height: '100dvh' 
        }}
        className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col p-6 z-[101] border-r border-[#e3dfd8] overflow-y-auto"
      >
        {/* Drawer Header with Logo & Close Button */}
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
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 text-[#121110] hover:text-[#9e4318] rounded-full transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 space-y-2">
          {BRAND_CONFIG.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex items-center justify-between font-sans text-lg text-[#121110] hover:text-[#9e4318] tracking-wide transition-colors py-3 border-b border-[#e3dfd8]/50"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-[#6c6760]" aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* Mobile Bottom Action: Inquire on WhatsApp */}
        <div className="pt-5 border-t border-[#e3dfd8] space-y-3 mt-auto">
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsBagOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#121110] text-white text-xs font-mono uppercase tracking-widest rounded-full font-medium shadow-sm hover:bg-[#2a2624] transition-colors"
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
  );
};
