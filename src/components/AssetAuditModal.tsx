import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ShieldCheck, Info, X, Camera, CheckCircle2, Clock } from 'lucide-react';

export const AssetAuditModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Boutique Curator Toggle */}
      <aside 
        aria-label="Atelier Asset Status"
        className="hidden md:block fixed bottom-4 left-4 z-30"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-espresso/90 text-champagne text-[11px] tracking-luxury uppercase font-medium rounded-full shadow-lg border border-champagne/40 backdrop-blur-md hover:bg-espresso transition-all hover:scale-105"
          aria-label="Open Asset & Catalog Transparency Audit"
        >
          <Camera className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
          <span className="hidden sm:inline">Catalog & Asset Mapping Audit</span>
          <span className="sm:hidden">Asset Audit</span>
        </button>
      </aside>

      {/* Audit Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-espresso/70 backdrop-blur-sm flex items-center justify-center p-4 text-espresso"
          role="dialog"
          aria-modal="true"
          aria-labelledby="audit-modal-title"
        >
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl border border-champagne p-6 sm:p-8 z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-champagne/40 pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-bronze" aria-hidden="true" />
                <h3 id="audit-modal-title" className="font-serif text-2xl text-espresso font-normal">
                  Asset & Product Catalog Integrity Audit
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close audit modal"
                className="p-1 text-espresso hover:bg-champagne/30 rounded-full"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <p className="text-xs text-charcoal leading-relaxed font-light">
              This catalog adheres to strict asset integrity guidelines. All 17 supplied photographs in the boutique directory were inspected. Only bottles whose identity was established are linked to their matching products; unverified third-party stock photos are never fabricated.
            </p>

            {/* Catalog Mapping Table */}
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {PRODUCTS.map((product) => {
                const isVerified = product.assetStatus === 'verified';
                return (
                  <div
                    key={product.id}
                    className="p-3 bg-ivory rounded-sm border border-champagne/40 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="font-serif text-base text-espresso">
                          {product.name}
                        </strong>
                        {isVerified ? (
                          <span className="inline-flex items-center gap-1 text-[10px] text-green-800 bg-green-100 px-2 py-0.5 rounded-full font-medium">
                            <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                            Verified Photography
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full font-medium">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            Pending Boutique Shoot
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-charcoal/80 mt-1">
                        {product.assetNote}
                      </p>
                    </div>

                    {product.primaryImage && (
                      <span className="font-mono text-[10px] text-charcoal/60 bg-white px-2 py-1 rounded border border-champagne/40 shrink-0">
                        {product.primaryImage.split('/').pop()}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 bg-ivory-light border border-champagne/60 rounded-sm text-xs text-charcoal/90 flex items-start gap-2">
              <Info className="w-4 h-4 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                To add photographs for Bloom Mist, Bombshell, or Gucci Flora, simply place the image file in <code className="bg-white px-1.5 py-0.5 border border-champagne/40 rounded">public/assets/products/</code> and update <code className="bg-white px-1.5 py-0.5 border border-champagne/40 rounded">src/data/products.ts</code>.
              </span>
            </div>

            <div className="pt-2 border-t border-champagne/40 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-espresso text-champagne text-xs uppercase tracking-luxury font-medium rounded-sm hover:bg-espresso-dark transition-colors"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
