import React from 'react';
import CallToActionButton from './CallToActionButton';

const ScreenshotsContainer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col items-start justify-center py-16">
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Plan your work future.
        </h2>
        <div className="w-full rounded-lg overflow-hidden shadow-2xl mb-16">
          <img 
            src="/staffplan_my_staffplan.png" 
            alt="StaffPlan Screenshot" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Eyes on the crew. Who's covered (or not).
        </h2>
        <div className="w-full rounded-lg overflow-hidden shadow-2xl mb-16">
          <img 
            src="/staffplan_people.png" 
            alt="StaffPlan Screenshot" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-italic text-teal mb-4">
          Mission control. Active or incoming.
        </h2>
        <div className="w-full rounded-lg overflow-hidden shadow-2xl mb-16">
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