import React from 'react';

interface UspItemProps {
  title: string;
  description: string;
  borderColor: string;
  icon: string;
}

const UspCard: React.FC<UspItemProps> = ({ title, description, borderColor, icon }) => (
  <div 
    className={`bg-white p-6 rounded-lg shadow-sm border-t-4 transition-transform hover:-translate-y-1`}
    style={{ borderTopColor: borderColor }}
  >
    <div className="font-extrabold text-navy mb-2 text-lg flex items-center gap-2">
      <span>{icon}</span> {title}
    </div>
    <div className="text-sm text-slate-500 leading-relaxed">
      {description}
    </div>
  </div>
);

export const UspGrid: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-5">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-navy mb-10">
        Why Smart Investors Choose D'Cal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <UspCard 
          title="High Demand" 
          description="Every borewell home is a potential customer." 
          borderColor="#0ea5e9" // techBlue
          icon="⚡"
        />
        <UspCard 
          title="Monopoly" 
          description="Patented product. No direct competitors." 
          borderColor="#f59e0b" // gold
          icon="💎"
        />
        <UspCard 
          title="70% Repeat" 
          description="Recurring revenue from filter replacements." 
          borderColor="#0f172a" // navy
          icon="🔄"
        />
        <UspCard 
          title="Zero Service" 
          description="No plumbing. No technician needed. Fit & Forget." 
          borderColor="#10b981" // success
          icon="🛠️"
        />
      </div>
    </div>
  );
};