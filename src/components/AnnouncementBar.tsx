import React, { useState } from 'react';
import { X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      role="region" 
      aria-label="Atelier Announcement"
      className="bg-[#eeebe6] border-b border-[#e3dfd8] text-[#121110] text-[11px] sm:text-xs py-2 px-4 transition-all duration-300 font-mono"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-6 hidden sm:block" aria-hidden="true" />
        
        <div className="flex-1 text-center flex items-center justify-center gap-2 tracking-wide font-normal">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9e4318]" />
          <span>Curated Luxury Perfumes · Order & Inquire on WhatsApp for Same-Day Consultation</span>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          className="p-1 text-[#6c6760] hover:text-[#121110] transition-colors rounded-sm"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
