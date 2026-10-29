import React from 'react';
import { Sparkles, HeartHandshake, Send, PackageCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const propositions = [
    {
      icon: Sparkles,
      title: 'Freshly Prepared',
      description:
        'Small-batch morning baking with unbleached grain flours, cultured French churned butter, and seasonal fruits from trusted regional farms.',
    },
    {
      icon: HeartHandshake,
      title: 'Custom Celebration Cakes',
      description:
        'Personalized consultation for weddings, birthdays, and milestones with bespoke flavor profiles, tailored tiers, and aesthetic decoration.',
    },
    {
      icon: Send,
      title: 'Easy Ordering',
      description:
        'Direct consultation via WhatsApp or online enquiry. Transparent communication with no complicated checkouts or hidden surprises.',
    },
    {
      icon: PackageCheck,
      title: 'Convenient Pickup',
      description:
        'Carefully boxed in rigid transit packaging designed to keep your cake chilled and pristine throughout your journey across Hyderabad.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EADBCE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#704838] font-semibold">
            Why Crumb &amp; Cream
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-normal tracking-tight">
            Our approach to honest, everyday baking
          </h2>
          <p className="text-sm sm:text-base text-[#55382D] font-normal leading-relaxed">
            We believe that extraordinary cakes and pastries are born from slow patience, honest ingredients, and genuine care for your celebrations.
          </p>
        </div>

        {/* 4 Generic Genuine Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {propositions.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EADBCE] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#C27D38]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center text-[#C27D38]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-[#2C1810] font-medium">
                      {prop.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55382D] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#704838]/70 font-mono tracking-wider">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
