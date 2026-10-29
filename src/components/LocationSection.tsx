import React from 'react';
import { MapPin, Clock, Navigation, AlertCircle } from 'lucide-react';
import { DEMO_CONFIG } from '../data/bakeryData';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
            Visit &amp; Pickup
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal tracking-tight">
            Our Studio Location &amp; Hours
          </h2>
          <p className="text-sm sm:text-base text-[#55382D] font-normal leading-relaxed">
            Located in Hyderabad for scheduled pickup slots and daily fresh morning counter bakes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Opening Hours Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-[#EADBCE] shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Demo Location Badge */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C27D38]">
                  <MapPin className="w-4 h-4" />
                  <span>Demo location: Hyderabad</span>
                </div>
                <h3 className="font-serif text-2xl text-[#2C1810] font-medium">
                  Crumb &amp; Cream Patisserie Studio
                </h3>
                <p className="text-sm text-[#55382D] leading-relaxed">
                  Road No. 36, Jubilee Hills / Banjara Hills, Hyderabad, Telangana 500034
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] text-stone-500">
                  <AlertCircle className="w-3.5 h-3.5 text-[#C27D38]" />
                  <span>Fictional sample address used for demonstration only</span>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div className="space-y-3 pt-4 border-t border-[#F2EBE1]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                  <Clock className="w-4 h-4 text-[#C27D38]" />
                  <span>Demo Operating Hours</span>
                </div>

                <div className="divide-y divide-[#F2EBE1] text-xs sm:text-sm">
                  {DEMO_CONFIG.openingHours.map((slot) => (
                    <div key={slot.days} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="font-medium text-[#2C1810]">{slot.days}</span>
                        <span className="block text-[11px] text-stone-500">{slot.note}</span>
                      </div>
                      <span className="font-medium text-[#704838] tabular-nums whitespace-nowrap">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Pickup & Transit Guidance */}
            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-xs text-[#704838] space-y-1">
              <span className="font-semibold text-[#2C1810]">Pickup instructions:</span>
              <p className="leading-relaxed">
                Pre-ordered custom celebration cakes are chilled and boxed with internal stabilizing collars. We recommend car transport with the box placed level on a flat passenger floorboard.
              </p>
            </div>

          </div>

          {/* Interactive Stylized Map Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#EADBCE] overflow-hidden shadow-xs flex flex-col min-h-[380px]">
            {/* Map Canvas Placeholder */}
            <div className="relative flex-1 bg-[#FAF6F0] p-6 flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Subtle map grid texture */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#C27D38 0.75px, transparent 0.75px), radial-gradient(#2C1810 0.75px, #FAF6F0 0.75px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              />

              {/* Decorative Map Roads */}
              <svg className="absolute inset-0 w-full h-full stroke-[#EADBCE] opacity-80" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,120 Q180,90 320,180 T700,160" fill="none" strokeWidth="6" />
                <path d="M80,-20 Q120,180 200,280 T300,500" fill="none" strokeWidth="4" />
                <path d="M220,140 Q380,220 540,240" fill="none" strokeWidth="5" />
              </svg>

              {/* Interactive Bakery Pin */}
              <div className="relative z-10 space-y-3 max-w-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2C1810] text-[#FAF7F2] shadow-xl border-4 border-white animate-bounce">
                  <MapPin className="w-6 h-6 text-[#D9822B]" />
                </div>
                <div className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-md border border-[#EADBCE]">
                  <p className="font-serif text-lg font-medium text-[#2C1810]">
                    Crumb &amp; Cream Studio
                  </p>
                  <p className="text-xs text-[#704838] mt-0.5">
                    Demo Location: Jubilee Hills, Hyderabad
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#EADBCE] flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C27D38]">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Demo Map Card</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Bar */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#EADBCE] flex items-center justify-between text-xs text-[#704838]">
              <span>City: Hyderabad, India</span>
              <span className="font-medium text-[#2C1810]">Pickup slots scheduled hourly</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
