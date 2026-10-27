import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { MapPin, ExternalLink, Send, Check, ArrowLeft } from 'lucide-react';

export const ContactView: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setIsSubmitted(true);
  };

  const formattedInquiry = `AMBRROSIAL ESSENCE — CONCIERGE INQUIRY\nClient: ${name}\nContact: ${contact}\n\nMessage:\n${message || 'Requesting fragrance consultation and boutique assistance.'}\n\nBoutique Pin: https://maps.app.goo.gl/73XdMpMmq2bEa4np9`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="py-16 sm:py-24 bg-white min-h-[75vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6c6760] hover:text-[#121110] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Return to Homepage</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9e4318] block font-medium">
              Atelier Concierge
            </span>

            <h1 className="font-sans text-3xl sm:text-5xl font-normal text-[#121110] tracking-tight leading-tight">
              Find your scent with us.
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#57534e] font-light leading-relaxed">
              Book a 30-minute scent consultation at our atelier, order on WhatsApp, or send us an inquiry. Our team replies promptly with personalized guidance.
            </p>

            <div className="p-6 bg-[#eeebe6] border border-[#e3dfd8] rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9e4318] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6c6760] block">
                    Boutique Sanctuary
                  </span>
                  <a
                    href={BRAND_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-[#121110] hover:underline inline-flex items-center gap-1 font-medium mt-0.5"
                  >
                    <span>View Flagship on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#6c6760]" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e3dfd8] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-[#57534e]">
                  WhatsApp inquiries & consultations active
                </span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#eeebe6] border border-[#e3dfd8] rounded-2xl p-6 sm:p-10 shadow-xs">
              
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#e3dfd8] flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-2xl text-[#121110]">
                    Inquiry Prepared
                  </h3>
                  <p className="font-sans text-sm text-[#57534e]">
                    Thank you, {name}. Your consultation message is formatted.
                  </p>

                  <div className="p-4 bg-white rounded-xl text-left font-mono text-xs text-[#57534e] border border-[#e3dfd8] whitespace-pre-wrap">
                    {formattedInquiry}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex-1 py-3 bg-[#121110] text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#2a2624]"
                    >
                      {isCopied ? 'Copied to Clipboard' : 'Copy for WhatsApp'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-white text-[#121110] border border-[#e3dfd8] font-mono text-xs uppercase tracking-widest rounded-full"
                    >
                      New Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-sans font-medium text-xl text-[#121110] mb-2">
                    Request a Scent Consultation
                  </h3>

                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-[#6c6760] block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 bg-white border border-[#e3dfd8] rounded-xl text-sm font-sans text-[#121110] focus:outline-none focus:border-[#121110]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-[#6c6760] block mb-1.5">
                      WhatsApp or Email
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="e.g. +91 98765 43210 or your@email.com"
                      className="w-full px-4 py-3 bg-white border border-[#e3dfd8] rounded-xl text-sm font-sans text-[#121110] focus:outline-none focus:border-[#121110]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs uppercase tracking-wider text-[#6c6760] block mb-1.5">
                      Fragrance Preferences or Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the scent profiles you enjoy (e.g. warm oud, rose, citrus, vanilla) or appointment requests..."
                      className="w-full px-4 py-3 bg-white border border-[#e3dfd8] rounded-xl text-sm font-sans text-[#121110] focus:outline-none focus:border-[#121110]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#121110] hover:bg-[#2a2624] text-white font-mono text-xs uppercase tracking-widest rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Submit Consultation Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
