import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PressTicker } from './components/PressTicker';
import { ProductCollection } from './components/ProductCollection';
import { ScrollFragranceStory } from './components/ScrollFragranceStory';
import { FragranceNotesRail } from './components/FragranceNotesRail';
import { ScentDiscoverySection } from './components/ScentDiscoverySection';
import { BrandStory } from './components/BrandStory';
import { StoreLocation } from './components/StoreLocation';
import { FaqSection } from './components/FaqSection';
import { ContactView } from './components/ContactView';
import { NotFoundView } from './components/NotFoundView';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AssetAuditModal } from './components/AssetAuditModal';

export const AppContent: React.FC = () => {
  const { currentView, navigateTo } = useStore();

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#121110] selection:bg-[#eeebe6] selection:text-[#121110] font-sans antialiased">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navigation Header */}
      <Header />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {currentView === 'contact' ? (
          <ContactView onNavigateHome={() => navigateTo('home')} />
        ) : currentView === '404' ? (
          <NotFoundView onNavigateHome={() => navigateTo('home')} />
        ) : (
          <>
            {/* Sahar-Style Editorial Hero Campaign */}
            <Hero />

            {/* As Featured In / Accords Ticker */}
            <PressTicker />

            {/* Sahar-Style "The perfumes" Editorial Product Grid */}
            <ProductCollection />

            {/* "In three movements" Staged Fragrance Story */}
            <ScrollFragranceStory />

            {/* "From the atelier" Raw Materials & Accords Horizontal Rail */}
            <FragranceNotesRail />

            {/* "Try it before you commit" Scent Discovery & Family Matcher */}
            <ScentDiscoverySection />

            {/* "A scent for every side of you" 3-Pillar Editorial Story */}
            <BrandStory />

            {/* "Smell it in person" Boutique & Google Maps Location */}
            <StoreLocation />

            {/* "Good to know" FAQ Accordion */}
            <FaqSection />
          </>
        )}
      </main>

      {/* Sahar-Style Luxury Editorial Footer */}
      <Footer />

      {/* Interactive Global Modals and Drawers */}
      <ProductDetailModal />
      <ShoppingBagDrawer />
      <WishlistDrawer />
      <SearchModal />
      <AssetAuditModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
};

export default App;
