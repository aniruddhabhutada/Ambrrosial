import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundView: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  return (
    <div className="py-24 sm:py-36 bg-ivory text-espresso text-center min-h-[60vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-champagne/40 border border-champagne flex items-center justify-center text-espresso mx-auto mb-6 shadow-sm">
          <Compass className="w-7 h-7 text-bronze-dark" aria-hidden="true" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-bronze block mb-2">
          Error 404 — Uncharted Accords
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal tracking-tight mb-4">
          The Fragrance You Seek Has Vanished
        </h1>

        <p className="text-xs sm:text-sm text-charcoal font-light leading-relaxed mb-8">
          The page or accord you requested is not present in our atelier archives. Return to our main collection to explore our signature flacons.
        </p>

        <button
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-espresso hover:bg-espresso-dark text-champagne text-xs font-mono uppercase tracking-widest font-semibold rounded-sm transition-colors shadow-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Return to Collection</span>
        </button>
      </div>
    </div>
  );
};
