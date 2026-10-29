import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Celebration Cake Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Celebration Cake Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
            Contact &amp; Inquiries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal tracking-tight">
            Let&apos;s talk cakes &amp; gatherings
          </h2>
          <p className="text-sm sm:text-base text-[#55382D] font-normal leading-relaxed">
            Have a question about lead times, flavors, or custom designs? Connect with us via WhatsApp, phone, or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Demo Notice Callout */}
            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-xs text-[#704838] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C27D38] shrink-0 mt-0.5" />
              <p>
                <strong>Demo notice:</strong> All communication channels below are placeholder details created for portfolio demonstration purposes.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-white border border-[#EADBCE] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center text-[#2C1810]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">Demo Phone</span>
                    <a
                      href={`tel:${DEMO_CONFIG.phone.replace(/\s+/g, '')}`}
                      className="font-medium text-[#2C1810] hover:text-[#C27D38] text-sm tabular-nums"
                    >
                      {DEMO_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <span className="text-[11px] text-stone-400 font-mono">Sample</span>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-2xl bg-white border border-[#EADBCE] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">WhatsApp Orders</span>
                    <a
                      href={DEMO_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#2C1810] hover:text-[#C27D38] text-sm"
                    >
                      Chat on WhatsApp (Demo)
                    </a>
                  </div>
                </div>
                <a
                  href={DEMO_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#2C1810] text-[#FAF7F2] hover:bg-[#44281D] transition-colors"
                >
                  Open
                </a>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-[#EADBCE] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center text-[#2C1810]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">Demo Email</span>
                    <a
                      href={`mailto:${DEMO_CONFIG.email}`}
                      className="font-medium text-[#2C1810] hover:text-[#C27D38] text-sm"
                    >
                      {DEMO_CONFIG.email}
                    </a>
                  </div>
                </div>
                <span className="text-[11px] text-stone-400 font-mono">Sample</span>
              </div>
            </div>

            <div className="text-xs text-[#704838] leading-relaxed">
              <p>
                <strong>Response timeline:</strong> In a real client deployment, inquiries submitted via WhatsApp are answered within 30 minutes during studio operational hours.
              </p>
            </div>

          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-[#EADBCE] shadow-xs">
            <h3 className="font-serif text-2xl text-[#2C1810] font-medium mb-1">
              Send a General Inquiry
            </h3>
            <p className="text-xs text-[#704838] mb-6">
              Fill out this demo contact form to test form response state.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-medium text-emerald-900">
                  Demo Message Received
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you for exploring this demo! In a production deployment, this form triggers an automated notification and syncs with customer CRM.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                      Contact Number (Demo)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38]"
                    >
                      <option value="Celebration Cake Inquiry">Celebration Cake Inquiry</option>
                      <option value="Custom Tiered Cake">Custom Tiered Cake</option>
                      <option value="Bulk Dessert Boxes">Bulk Dessert Boxes / Corporate</option>
                      <option value="Allergen & Dietary Question">Allergen &amp; Dietary Question</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event date, expected guest count, or flavor preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#C27D38] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    No real personal data stored
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#2C1810] hover:bg-[#44281D] transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                  >
                    <span>Submit Demo Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
