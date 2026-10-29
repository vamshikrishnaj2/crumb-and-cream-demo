import React, { useState } from 'react';
import { X, Check, MessageCircle, Copy, Sparkles, Cake } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomCakeModal: React.FC<CustomCakeModalProps> = ({ isOpen, onClose }) => {
  const [occasion, setOccasion] = useState('Birthday');
  const [tierSize, setTierSize] = useState('2-Tier (20–25 servings / 2.5 kg)');
  const [flavor, setFlavor] = useState('Madagascar Bourbon Vanilla & Berry');
  const [filling, setFilling] = useState('Light Swiss Meringue Buttercream');
  const [eventDate, setEventDate] = useState('');
  const [inscription, setInscription] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const occasions = ['Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Corporate / Milestone'];
  const tiers = [
    'Single Tier (8–12 servings / 1.2 kg)',
    '2-Tier (20–25 servings / 2.5 kg)',
    '3-Tier (40–50 servings / 4.5 kg+)',
    'Bento Celebration Box (2–4 servings)',
  ];
  const flavors = [
    'Madagascar Bourbon Vanilla & Berry',
    'Belgian Dark Chocolate Ganache (70%)',
    'Pistachio Rosewater & Cardamom',
    'Salted Caramel & Toasted Pecan',
    'Earl Grey Lavender & Lemon Curd',
  ];
  const fillings = [
    'Light Swiss Meringue Buttercream',
    'Whipped Dark Chocolate Ganache',
    'Mascarpone & Wild Berry Reduction',
    'Roasted Pistachio Mousse',
    'Salted Butter Caramel Cream',
  ];

  const generatedSummary = `Hi Crumb & Cream,
I would like to inquire about a custom cake order (Demo Inquiry):
• Occasion: ${occasion}
• Size/Tier: ${tierSize}
• Sponge Flavor: ${flavor}
• Filling/Frosting: ${filling}
• Date: ${eventDate || 'To be finalized'}
${inscription ? `• Inscription: "${inscription}"\n` : ''}${notes ? `• Special Notes: ${notes}\n` : ''}
Could you please confirm availability and estimate? Thank you!`;

  const encodedWhatsAppUrl = `https://wa.me/${DEMO_CONFIG.whatsappNumber}?text=${encodeURIComponent(generatedSummary)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EADBCE] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 border-b border-[#EADBCE] flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C27D38]">
              Interactive Custom Cake Enquiry
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C1810] font-normal">
              Request a Custom Cake
            </h2>
            <p className="text-xs text-[#704838]">
              Configure your preferences below to generate a pre-formatted inquiry for our Hyderabad bakery studio.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-stone-500 hover:text-[#2C1810] rounded-full hover:bg-stone-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Demo Note */}
          <div className="p-3 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs text-[#704838] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C27D38] shrink-0" />
            <span>
              <strong>Demo notice:</strong> Submitting will open your WhatsApp with this inquiry formatted to demo number {DEMO_CONFIG.phone}.
            </span>
          </div>

          {/* Occasion Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
              Occasion
            </label>
            <div className="flex flex-wrap gap-2">
              {occasions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOccasion(item)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    occasion === item
                      ? 'bg-[#2C1810] text-[#FAF7F2] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#44281D] hover:bg-[#EADBCE]/60 border border-[#EADBCE]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Tier & Servings */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
              Cake Size &amp; Servings
            </label>
            <select
              value={tierSize}
              onChange={(e) => setTierSize(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
            >
              {tiers.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Flavor & Filling Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Sponge Flavor
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
              >
                {flavors.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Filling &amp; Frosting
              </label>
              <select
                value={filling}
                onChange={(e) => setFilling(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
              >
                {fillings.map((fil) => (
                  <option key={fil} value={fil}>
                    {fil}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Inscription */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Target Celebration Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
              />
              <p className="text-[10px] text-stone-500">Notice recommended: 3–5 days</p>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Piped Inscription (Optional)
              </label>
              <input
                type="text"
                value={inscription}
                onChange={(e) => setInscription(e.target.value)}
                placeholder="e.g. Happy 30th Maya"
                maxLength={45}
                className="w-full px-3.5 py-2 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
              Theme, Color Palette, or Dietary Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="e.g. Pastel sage & gold theme, eggless sponge preferred..."
              className="w-full px-3.5 py-2 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-xs sm:text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38] resize-none"
            />
          </div>

          {/* Formatted Message Preview */}
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#704838]">
              <span className="font-semibold uppercase tracking-wider">Inquiry Draft Preview</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] text-[#C27D38] hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy text'}</span>
              </button>
            </div>
            <pre className="text-xs text-[#44281D] font-mono whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto bg-white p-3 rounded-lg border border-[#EADBCE]/60">
              {generatedSummary}
            </pre>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-[#704838] hover:text-[#2C1810] hover:bg-stone-200/50 transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full text-xs font-medium text-[#2C1810] bg-white border border-[#EADBCE] hover:bg-stone-50 transition-colors cursor-pointer"
            >
              {copied ? 'Copied to Clipboard' : 'Copy Inquiry'}
            </button>

            <a
              href={encodedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
