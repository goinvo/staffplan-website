import React from 'react';

interface CallToActionButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ 
  className = '', 
  onClick = () => window.location.href = 'https://app.staffplan.com/registrations/new',
  children 
}) => {
  return (
    <div className="animate-float-up">
      <button 
        className={`btn-primary text-lg ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
      <p className="text-sm text-gray-600 mt-2">Free for 30 days. No credit card required.</p>
    </div>
  );
};

export default CallToActionButton; 