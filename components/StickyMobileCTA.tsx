import React from 'react';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white px-5 py-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex justify-between items-center z-50 border-t border-slate-100">
      <div className="text-xs font-bold text-navy">
        Invest in D'Cal today
      </div>
      <a 
        href="#form" 
        className="bg-gold text-white px-5 py-2.5 rounded font-bold text-sm shadow-md"
      >
        Check Pricing
      </a>
    </div>
  );
};