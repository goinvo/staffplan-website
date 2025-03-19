import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="pt-20 pb-32 flex flex-col items-start justify-center relative">
        <h1 
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-10 animate-float-up text-left text-teal"
          style={{ animationDelay: '0.4s' }}
        >
          Unf*ck your future.
        </h1>
        
        <div className="animate-float-up">
          <button 
            className="btn-primary text-lg"
            onClick={() => window.location.href = 'https://app.staffplan.com/registrations/new'}
          >
            Try StaffPlan
          </button>
          <p className="text-sm text-gray-600 mt-2">Free for 30 days. No credit card required.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
