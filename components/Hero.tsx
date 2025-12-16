import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#0f172a] text-white pt-20 pb-28 md:pb-32 text-center rounded-b-[40px] md:rounded-b-[60px] shadow-2xl relative">
      <div className="max-w-[1100px] mx-auto px-5 relative z-10">
        
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Become India’s Most Profitable <br />
          <span className="text-gold">Water Dealer</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-[650px] mx-auto mb-10 font-medium leading-relaxed">
          Join the network of 500+ Dealers serving 7.5 Lakh+ Customers. 40% Margins. Zero Competition.
        </p>
        
        <div className="flex flex-col items-center gap-8">
            <a 
              href="#packs" 
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide bg-gradient-to-r from-gold to-goldDark text-white shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1 transition-all"
            >
              View Dealer Packs
            </a>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['🏆 18+ Awards', '🌍 Exported to 10 Countries', '✅ Patent Product'].map((text, i) => (
                <div 
                  key={i} 
                  className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-slate-300 shadow-sm"
                >
                  {text}
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};