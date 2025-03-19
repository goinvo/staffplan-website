import React from 'react';

const EarthContainer: React.FC = () => {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center">
      {/* Earth background image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: 'url(/earth.png)',
          backgroundPosition: '50% 50%',
        }}
      />
      
      {/* Speech bubble */}
      <div 
        className="relative w-[60%] bg-white rounded-xl p-6 text-black animate-float-up z-10"
        style={{ 
          opacity: 0.9,
          animationDelay: '0.8s',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="text-center text-3xl italic">
          Did you get the job to fix the crapper?
        </div>
        <div 
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderTop: '16px solid white'
          }}
        />
        
        {/* Dotted line */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: 'calc(100% + 16px)', // Position below the speech bubble pointer
            width: '5px',
            height: '200px', // Extend to bottom
            background: 'linear-gradient(to bottom, white 50%, transparent 50%)',
            backgroundSize: '5px 16px', // Adjusted to create a dotted effect
            opacity: 0.5
          }}
        />
      </div>
    </div>
  );
};

export default EarthContainer; 