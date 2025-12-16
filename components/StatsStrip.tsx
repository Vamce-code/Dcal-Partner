import React from 'react';

export const StatsStrip: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-5 -mt-16 md:-mt-20 relative z-20">
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-2xl text-center shadow-2xl shadow-slate-900/10 border-b-4 border-techBlue">
          <span className="block text-3xl md:text-4xl font-black text-techBlue mb-1">7 Years</span>
          <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">In Business</span>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl text-center shadow-2xl shadow-slate-900/10 border-b-4 border-techBlue">
          <span className="block text-3xl md:text-4xl font-black text-techBlue mb-1">₹50K - ₹5L</span>
          <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Investment</span>
        </div>
      </div>
    </div>
  );
};