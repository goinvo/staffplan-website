import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 max-w-5xl pb-8">
      <div>
        <div className="text-gray-500">
          <p>StaffPlan is <a href='https://github.com/goinvo/staffplan-next-app' className="hover:text-gray-600 transition-colors underline">open source</a> and built on Spaceship Earth by <a href="https://goinvo.com/" className="hover:text-gray-600 transition-colors underline">GoInvo</a>.<br />
          <a 
            href="mailto:staffplan@goinvo.com" 
            className="hover:text-gray-600 transition-colors"
          >
            staffplan@goinvo.com
          </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 