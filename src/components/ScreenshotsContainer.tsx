import React, { useState } from 'react';
import CallToActionButton from './CallToActionButton';

interface ScreenshotsContainerProps {
  enableHoverAnimation?: boolean;
}

const ScreenshotsContainer: React.FC<ScreenshotsContainerProps> = ({ enableHoverAnimation = false }) => {
  const [tilts, setTilts] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableHoverAnimation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilts(prev => prev.map((tilt, i) => 
      i === index ? { x: x * 5, y: y * 5 } : tilt
    ));
  };

  const handleMouseLeave = (index: number) => () => {
    if (!enableHoverAnimation) return;
    setTilts(prev => prev.map((tilt, i) => 
      i === index ? { x: 0, y: 0 } : tilt
    ));
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col items-start justify-center py-16">
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Plan your work future.
        </h2>
        <div 
          className="w-full rounded-lg overflow-hidden shadow-2xl mb-16 transition-transform duration-200"
          onMouseMove={handleMouseMove(0)}
          onMouseLeave={handleMouseLeave(0)}
          style={{
            transform: enableHoverAnimation ? `perspective(1000px) rotateX(${tilts[0].y}deg) rotateY(${tilts[0].x}deg)` : 'none'
          }}
        >
          <img 
            src="/staffplan_my_staffplan.png" 
            alt="StaffPlan Screenshot" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Eyes on the crew. Who's covered (or not).
        </h2>
        <div 
          className="w-full rounded-lg overflow-hidden shadow-2xl mb-16 transition-transform duration-200"
          onMouseMove={handleMouseMove(1)}
          onMouseLeave={handleMouseLeave(1)}
          style={{
            transform: enableHoverAnimation ? `perspective(1000px) rotateX(${tilts[1].y}deg) rotateY(${tilts[1].x}deg)` : 'none'
          }}
        >
          <img 
            src="/staffplan_people.png" 
            alt="StaffPlan Screenshot" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Mission control. Active or incoming.
        </h2>
        <div 
          className="w-full rounded-lg overflow-hidden shadow-2xl mb-16 transition-transform duration-200"
          onMouseMove={handleMouseMove(2)}
          onMouseLeave={handleMouseLeave(2)}
          style={{
            transform: enableHoverAnimation ? `perspective(1000px) rotateX(${tilts[2].y}deg) rotateY(${tilts[2].x}deg)` : 'none'
          }}
        >
          <img 
            src="/staffplan_projects.png" 
            alt="StaffPlan Screenshot" 
            className="w-full h-auto"
          />
        </div>
        <div className="mt-8">
          <CallToActionButton>
            Try StaffPlan
          </CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotsContainer; 