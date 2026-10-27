import React from 'react';

const PUBLICATIONS = [
  'Oud Review',
  'Fragrance Edit',
  'The Nose Journal',
  'Maison Notes',
  'Attar Gazette',
  'Botanical Atlas',
  'Atelier Scent',
  'Artisan Perfumer'
];

export const PressTicker: React.FC = () => {
  return (
    <div className="border-b border-[#e3dfd8] bg-[#faf8f5] py-4 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6c6760]">
        <span className="uppercase tracking-[0.2em] text-[#9e4318] text-[11px] shrink-0 font-medium">
          As featured in
        </span>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-[12px]">
          {PUBLICATIONS.map((pub, idx) => (
            <span key={pub} className="flex items-center gap-6">
              <span className="font-serif italic text-sm text-[#121110] tracking-wide">{pub}</span>
              {idx < PUBLICATIONS.length - 1 && <span className="text-[#e3dfd8]">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
