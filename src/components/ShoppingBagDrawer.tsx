import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Send,
  Info
} from 'lucide-react';

export const ShoppingBagDrawer: React.FC = () => {
  const {
    bag,
    isBagOpen,
    setIsBagOpen,
    removeFromBag,
    updateBagQuantity,
    clearBag,
    totalBagItems
  } = useStore();

  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  if (!isBagOpen) return null;

  // Generate inquiry text summary
  const generateInquirySummary = () => {
    const itemsList = bag
      .map(item => `• ${item.product.name} (Qty: ${item.quantity}) — Price on request`)
      .join('\n');
    return `AMBRROSIAL ESSENCE — BOUTIQUE INQUIRY REQUEST\n\nClient: ${customerName || 'Fragrance Enthusiast'}\nContact: ${contactInfo || 'Not specified'}\n\nSelected Fragrances:\n${itemsList}\n\nNotes / Consultation Request:\n${inquiryNotes || 'Please provide pricing, availability, and consultation details.'}\n\nSubmitted via Ambrrosial Essence Digital Boutique.`;
  };

  const handleCopyInquiry = () => {
    const summary = generateInquirySummary();
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !contactInfo.trim()) {
      setValidationError('Please provide your name and contact details to submit an inquiry.');
      return;
    }
    setValidationError('');
    setFormSubmitted(true);
  };

  const resetInquiryForm = () => {
    setFormSubmitted(false);
    setCustomerName('');
    setContactInfo('');
    setInquiryNotes('');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bag-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsBagOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory-light shadow-luxury-drawer border-l border-champagne flex flex-col">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-champagne/40 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-espresso" aria-hidden="true" />
              <h2 id="bag-drawer-title" className="font-serif text-xl sm:text-2xl text-espresso font-normal">
                Inquiry Bag
              </h2>
              <span className="text-xs uppercase tracking-luxury text-bronze font-medium px-2 py-0.5 bg-champagne/30 rounded-sm">
                {totalBagItems} {totalBagItems === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsBagOpen(false)}
              aria-label="Close inquiry bag drawer"
              className="p-1.5 text-espresso/70 hover:text-espresso hover:bg-champagne/30 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {bag.length === 0 ? (
              /* Empty Bag State */
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white border border-champagne/60 flex items-center justify-center text-charcoal/50 mb-4 shadow-sm">
                  <ShoppingBag className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-espresso mb-2">Your Inquiry Bag is Empty</h3>
                <p className="text-xs sm:text-sm text-charcoal font-light max-w-xs mb-8 leading-relaxed">
                  Explore our six curated fragrance creations and select your preferred scents for concierge pricing and consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setIsBagOpen(false)}
                  className="px-6 py-3 bg-espresso text-champagne text-xs uppercase tracking-luxury font-medium rounded-sm hover:bg-espresso-dark transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : formSubmitted ? (
              /* Inquiry Submitted Confirmation Card */
              <div className="bg-white border border-champagne p-6 rounded-sm shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-full bg-champagne/40 border border-champagne flex items-center justify-center text-espresso mx-auto">
                  <Check className="w-6 h-6 text-bronze-dark" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-espresso">Inquiry Request Prepared</h3>
                  <p className="text-xs text-charcoal font-light mt-1">
                    Thank you, {customerName}. Your fragrance inquiry has been recorded.
                  </p>
                </div>

                <div className="p-3 bg-ivory rounded-sm text-xs font-mono text-charcoal/80 overflow-x-auto max-h-48 border border-champagne/40 whitespace-pre-wrap">
                  {generateInquirySummary()}
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="w-full py-2.5 bg-espresso text-champagne text-xs uppercase tracking-luxury font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-espresso-dark transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-champagne" aria-hidden="true" />
                        <span>Inquiry Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy Summary for Messaging</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetInquiryForm}
                    className="w-full py-2 border border-champagne text-charcoal text-xs uppercase tracking-luxury rounded-sm hover:bg-ivory"
                  >
                    Edit Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Items List */
              <>
                <div className="space-y-4">
                  {bag.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 bg-white border border-champagne/40 rounded-sm flex gap-3 items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {item.product.primaryImage ? (
                          <img
                            src={item.product.primaryImage}
                            alt={item.product.name}
                            className="w-14 h-16 object-cover rounded-sm border border-champagne/40 shrink-0"
                            width="56"
                            height="64"
                          />
                        ) : (
                          <div className="w-14 h-16 bg-ivory border border-champagne/40 rounded-sm flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-bronze" aria-hidden="true" />
                          </div>
                        )}

                        <div>
                          <h4 className="font-serif text-base text-espresso font-medium">
                            {item.product.name}
                          </h4>
                          <span className="text-[11px] text-bronze italic block">
                            {item.product.priceDisplay}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-champagne rounded-sm bg-ivory-light">
                          <button
                            type="button"
                            onClick={() => updateBagQuantity(item.product.id, item.quantity - 1)}
                            aria-label={`Decrease ${item.product.name} quantity`}
                            className="p-1.5 text-espresso hover:bg-champagne/30"
                          >
                            <Minus className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <span className="w-7 text-center font-mono text-xs text-espresso font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateBagQuantity(item.product.id, item.quantity + 1)}
                            aria-label={`Increase ${item.product.name} quantity`}
                            className="p-1.5 text-espresso hover:bg-champagne/30"
                          >
                            <Plus className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeFromBag(item.product.id)}
                          aria-label={`Remove ${item.product.name} from inquiry bag`}
                          className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal & Transparent Pricing Explanation */}
                <div className="p-4 bg-white border border-champagne/50 rounded-sm space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="uppercase tracking-luxury text-charcoal/80">Estimated Total:</span>
                    <span className="font-serif text-base text-espresso font-medium italic">
                      Price on Request
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal/70 flex items-start gap-1.5 leading-relaxed">
                    <Info className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Pricing for artisanal formulations is customized based on flacon selection and bespoke boutique availability. No hidden checkout charges.
                    </span>
                  </p>
                </div>

                {/* Concierge Inquiry Submission Form */}
                <form onSubmit={handleSubmitInquiry} className="bg-white p-4 sm:p-5 border border-champagne/60 rounded-sm space-y-3">
                  <h4 className="text-xs uppercase tracking-luxury text-espresso font-semibold flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                    <span>Concierge Scent Consultation</span>
                  </h4>

                  {validationError && (
                    <p className="text-xs text-red-600 bg-red-50 p-2 rounded-sm border border-red-200">
                      {validationError}
                    </p>
                  )}

                  <div>
                    <label htmlFor="inquiry-name" className="block text-[11px] uppercase tracking-wider text-charcoal/80 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3 py-2 text-xs bg-ivory-light border border-champagne/60 rounded-sm focus:border-bronze focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-contact" className="block text-[11px] uppercase tracking-wider text-charcoal/80 mb-1">
                      Contact Information (Phone, Email, or WhatsApp) *
                    </label>
                    <input
                      id="inquiry-contact"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. +91 98765 43210 or name@domain.com"
                      className="w-full px-3 py-2 text-xs bg-ivory-light border border-champagne/60 rounded-sm focus:border-bronze focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-notes" className="block text-[11px] uppercase tracking-wider text-charcoal/80 mb-1">
                      Consultation Notes / Special Preferences (Optional)
                    </label>
                    <textarea
                      id="inquiry-notes"
                      rows={2}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="e.g., Gifting preference, evening wear recommendation..."
                      className="w-full px-3 py-2 text-xs bg-ivory-light border border-champagne/60 rounded-sm focus:border-bronze focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-espresso hover:bg-espresso-dark text-champagne text-xs uppercase tracking-luxury font-semibold rounded-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      title="Copy inquiry details to clipboard"
                      className="p-3 border border-champagne text-espresso hover:bg-ivory rounded-sm"
                    >
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>

          {/* Footer of Drawer */}
          {bag.length > 0 && !formSubmitted && (
            <div className="p-4 bg-white border-t border-champagne/40 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={clearBag}
                className="text-charcoal/60 hover:text-red-600 underline transition-colors"
              >
                Clear Bag
              </button>
              <button
                type="button"
                onClick={() => setIsBagOpen(false)}
                className="text-bronze hover:text-espresso font-medium"
              >
                Continue Browsing
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
