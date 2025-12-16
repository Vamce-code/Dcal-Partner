import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center text-xl font-black text-navy cursor-pointer">
          <img 
            src="https://www.dcal.co.in/wp-content/uploads/2018/04/cropped-D-Cal-Logo-e1524655651750-300x300.png" 
            alt="D'Cal Logo" 
            className="h-[45px] w-auto mr-3"
          />
          <span className="mt-1">
            PARTNERS
          </span>
        </div>
        <a 
          href="#form" 
          className="hidden md:inline-block text-sm font-semibold text-navy border border-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors"
        >
          Apply for Dealership
        </a>
      </div>
    </header>
  );
};