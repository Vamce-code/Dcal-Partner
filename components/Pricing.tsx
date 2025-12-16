import React from 'react';

interface PackItem {
  label: string;
  value: string;
  highlight?: boolean;
  colorClass?: string;
}

interface PackProps {
  name: string;
  price: string;
  items: PackItem[];
  isPopular?: boolean;
  ctaText: string;
  ctaColor: 'navy' | 'gold';
}

const PricingCard: React.FC<PackProps> = ({ name, price, items, isPopular, ctaText, ctaColor }) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl overflow-hidden border flex flex-col relative transition-all duration-300
        ${isPopular 
          ? 'border-gold border-2 shadow-2xl shadow-amber-500/10 scale-100 md:scale-105 z-10 my-4 md:my-0' 
          : 'border-slate-200'
        }
      `}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 text-[10px] font-extrabold uppercase rounded-b-lg tracking-wider">
          Most Popular
        </div>
      )}
      
      <div className={`p-8 text-center border-b border-slate-100 ${isPopular ? 'bg-amber-50' : 'bg-slate-50'}`}>
        <div className={`text-sm font-bold uppercase tracking-widest ${isPopular ? 'text-goldDark' : 'text-slate-500'}`}>
          {name}
        </div>
        <div className="text-3xl font-extrabold text-navy mt-2">{price}</div>
      </div>

      <div className="p-6 flex-grow">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between mb-3 text-sm pb-2 border-b border-dashed border-slate-200 last:border-0">
            <span className={item.colorClass || 'text-slate-600'}>{item.label}</span>
            <span className="font-bold text-navy">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="p-6 pt-0">
        <a 
          href="#form"
          className={`
            w-full block text-center py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors
            ${ctaColor === 'gold' 
              ? 'bg-gradient-to-r from-gold to-goldDark text-white hover:shadow-lg' 
              : 'bg-navy text-white hover:bg-slate-800'
            }
          `}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const starterItems: PackItem[] = [
    { label: 'Softener', value: '10 pcs' },
    { label: 'Tap Filter', value: '5 pcs' },
    { label: 'Shower Filter', value: '5 pcs' },
    { label: 'Washing Ball', value: '5 pcs' },
  ];

  const franchiseItems: PackItem[] = [
    { label: 'Softener', value: '50 pcs' },
    { label: 'Tap Filter', value: '17 pcs' },
    { label: 'Shower Filter', value: '17 pcs' },
    { label: 'Washing Ball', value: '40 pcs' },
    { label: '+ LEADS SUPPORT ✅', value: '', colorClass: 'text-success font-bold' },
  ];

  const distributorItems: PackItem[] = [
    { label: 'Softener', value: '90 pcs' },
    { label: 'Tap Filter', value: '20 pcs' },
    { label: 'Shower Filter', value: '20 pcs' },
    { label: '+ EXCLUSIVE AREA 🌍', value: '', colorClass: 'text-techBlue font-bold' },
  ];

  return (
    <section id="packs" className="py-16 bg-[#eef2f6]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-2">Select Your Pack</h2>
          <p className="text-slate-500 text-sm">Prices exclude 18% GST.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <PricingCard 
            name="Starter Pack" 
            price="₹50,000" 
            items={starterItems} 
            ctaText="Select Starter"
            ctaColor="navy"
          />
          <PricingCard 
            name="Franchise Pack" 
            price="₹2 Lakhs" 
            items={franchiseItems} 
            isPopular={true}
            ctaText="Select Franchise"
            ctaColor="gold"
          />
          <PricingCard 
            name="Distributor Pack" 
            price="₹3 Lakhs" 
            items={distributorItems} 
            ctaText="Select Distributor"
            ctaColor="navy"
          />
        </div>
      </div>
    </section>
  );
};