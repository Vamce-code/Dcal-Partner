import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <section id="form" className="py-16">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-2">Start Your Dealership</h2>
          <p className="text-slate-600">Fill details to get the Margin Sheet.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 max-w-lg mx-auto border border-slate-100">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter full name" 
                className="w-full p-3.5 border-2 border-slate-200 rounded-lg bg-bgLight focus:outline-none focus:border-techBlue focus:bg-white transition-colors"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-2">Phone Number (WhatsApp)</label>
              <input 
                type="tel" 
                placeholder="+91 XXXXX XXXXX" 
                className="w-full p-3.5 border-2 border-slate-200 rounded-lg bg-bgLight focus:outline-none focus:border-techBlue focus:bg-white transition-colors"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-bold text-navy mb-2">City</label>
              <input 
                type="text" 
                placeholder="e.g. Hyderabad" 
                className="w-full p-3.5 border-2 border-slate-200 rounded-lg bg-bgLight focus:outline-none focus:border-techBlue focus:bg-white transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-navy mb-2">Select Pack</label>
              <select className="w-full p-3.5 border-2 border-slate-200 rounded-lg bg-bgLight focus:outline-none focus:border-techBlue focus:bg-white transition-colors appearance-none">
                <option>Franchise Pack (₹2 Lakhs) - Recommended</option>
                <option>Starter Pack (₹50k)</option>
                <option>Distributor Pack (₹3 Lakhs)</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-navy text-white font-bold py-4 rounded-lg uppercase tracking-wide hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Get Dealership Pricing
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};