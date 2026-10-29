import React from 'react';
import { Calendar, Cake, Palette, ArrowRight, MessageCircle } from 'lucide-react';
import customCakeImage from '../assets/images/product_custom_cake_1790709126155.jpg';
import { DEMO_CONFIG } from '../data/bakeryData';

interface CustomCakesSectionProps {
  onOpenCustomCakeModal: () => void;
}

export const CustomCakesSection: React.FC<CustomCakesSectionProps> = ({ onOpenCustomCakeModal }) => {
  const steps = [
    {
      icon: Palette,
      title: 'Design Consultation',
      description: 'Share your mood board, color palette, or celebration theme with our cake artisan.',
    },
    {
      icon: Cake,
      title: 'Bespoke Flavors',
      description: 'Choose from single to multi-tier sponge recipes, silky curds, and delicate Swiss buttercreams.',
    },
    {
      icon: Calendar,
      title: 'Crafted for Your Date',
      description: 'Baked freshly 24–48 hours before your event and packaged for secure transit in Hyderabad.',
    },
  ];

  return (
    <section id="custom-cakes-section" className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature Box with Chocolate Background */}
        <div className="rounded-3xl bg-[#2C1810] text-[#FAF7F2] overflow-hidden border border-[#44281D] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[500px]">
              <img
                src={customCakeImage}
                alt="Two-tiered custom celebration cake with botanical flowers and textured buttercream"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/30 to-transparent lg:hidden" />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#2C1810]" />
              
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 text-xs text-[#EADBCE] font-light">
                <p className="font-serif text-lg text-white font-normal">Custom Tiered Cake</p>
                <p>Designed for intimate milestone weddings &amp; anniversaries</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold">
                  Bespoke Studio &amp; Celebration Cakes
                </p>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight text-balance">
                  Have something special in mind?
                </h2>

                <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-xl">
                  Every celebration tells a unique story. Whether it is a whimsical children&apos;s birthday, an elegant two-tier wedding cake with pressed botanical flora, or a themed dessert table, we craft custom cakes tailored exclusively to your vision.
                </p>
              </div>

              {/* Consultation Steps (Anti-slop: clean editorial items, no pill tags) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D9822B]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenCustomCakeModal}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#2C1810] bg-[#D9822B] hover:bg-[#E08E45] transition-all shadow-md active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Request a Custom Cake</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`${DEMO_CONFIG.whatsappUrl}&text=Hi%20Crumb%20%26%20Cream%2C%20I%20have%20an%20idea%20for%20a%20custom%20cake%20and%20would%20like%20to%20consult.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-white hover:text-[#D9822B] transition-colors border border-white/20 hover:border-[#D9822B]/60"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire directly on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
