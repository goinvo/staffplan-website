import React from 'react';
import CallToActionButton from './CallToActionButton';

const SpaceCowboy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
        {/* Left column - Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/space-cowboy.png" 
            alt="Space Cowboy" 
            className="w-1/2 sm:w-full h-auto rounded-lg shadow-2xl mx-auto md:mx-0"
          />
        </div>
        
        {/* Right column - Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-italic text-teal mb-6">
            StaffPlan: <span className="text-brown">Be ready before the sh*t hits the sand.</span>
          </h2>
          <CallToActionButton>
            Try StaffPlan
          </CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default SpaceCowboy; 