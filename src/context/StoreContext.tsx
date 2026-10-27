import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';
import { PRODUCTS } from '../data/products';

export interface BagItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  bag: BagItem[];
  wishlist: string[]; // product IDs
  isBagOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  searchQuery: string;
  selectedCategory: string;
  activeProductModal: Product | null;
  isInquirySent: boolean;

  // Actions
  addToBag: (product: Product, quantity?: number) => void;
  removeFromBag: (productId: string) => void;
  updateBagQuantity: (productId: string, quantity: number) => void;
  clearBag: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // UI State toggles
  setIsBagOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (cat: string) => void;
  setActiveProductModal: (product: Product | null) => void;
  setIsInquirySent: (sent: boolean) => void;

  currentView: 'home' | 'collection' | 'story' | 'location' | 'contact' | '404';
  navigateTo: (view: 'home' | 'collection' | 'story' | 'location' | 'contact' | '404') => void;

  // Computed
  totalBagItems: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bag, setBag] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem('ae_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ae_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isInquirySent, setIsInquirySent] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'collection' | 'story' | 'location' | 'contact' | '404'>('home');

  // Handle URL route and popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path === '/contact' || hash === '#/contact' || hash === '#contact') {
        setCurrentView('contact');
      } else if (path === '/404' || hash === '#/404') {
        setCurrentView('404');
      } else {
        setCurrentView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: 'home' | 'collection' | 'story' | 'location' | 'contact' | '404') => {
    setCurrentView(view);
    if (view === 'contact') {
      window.history.pushState({}, '', '#contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === '404') {
      window.history.pushState({}, '', '#404');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'collection') {
      window.history.pushState({}, '', '#collection');
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (view === 'story') {
      window.history.pushState({}, '', '#story');
      const el = document.getElementById('story');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (view === 'location') {
      window.history.pushState({}, '', '#location');
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync Bag to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ae_bag', JSON.stringify(bag));
    } catch (err) {
      console.error('Failed to save bag to localStorage', err);
    }
  }, [bag]);

  // Sync Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ae_wishlist', JSON.stringify(wishlist));
    } catch (err) {
      console.error('Failed to save wishlist to localStorage', err);
    }
  }, [wishlist]);

  // Handle URL query for direct product linking (e.g., ?fragrance=mystical-lavendar)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fragranceParam = params.get('fragrance');
    if (fragranceParam) {
      const found = PRODUCTS.find(p => p.slug === fragranceParam || p.id === fragranceParam);
      if (found) {
        setActiveProductModal(found);
      }
    }
  }, []);

  const addToBag = (product: Product, quantity = 1) => {
    setBag(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsBagOpen(true);
  };

  const removeFromBag = (productId: string) => {
    setBag(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateBagQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBag(productId);
      return;
    }
    setBag(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearBag = () => {
    setBag([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const totalBagItems = bag.reduce((total, item) => total + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        bag,
        wishlist,
        isBagOpen,
        isWishlistOpen,
        isSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        searchQuery,
        selectedCategory,
        activeProductModal,
        isInquirySent,
        addToBag,
        removeFromBag,
        updateBagQuantity,
        clearBag,
        toggleWishlist,
        isInWishlist,
        setIsBagOpen,
        setIsWishlistOpen,
        setIsSearchOpen,
        setSearchQuery,
        setSelectedCategory,
        setActiveProductModal,
        setIsInquirySent,
        totalBagItems,
        currentView,
        navigateTo,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
