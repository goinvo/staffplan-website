import React from 'react';
import MarsContainer from './MarsContainer';
import CallToActionButton from './CallToActionButton';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 pt-20 pb-32 flex flex-col items-start justify-center relative">
        <h1 
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-10 animate-float-up text-left text-teal"
          style={{ animationDelay: '0.4s' }}
        >
          Unf*ck your future.
        </h1>
        
        <CallToActionButton>
          Try StaffPlan
        </CallToActionButton>
      </div>
    </div>
  );
};

export default Hero;
