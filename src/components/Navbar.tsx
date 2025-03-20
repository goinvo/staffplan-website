import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-6 animate-float-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto flex px-4 justify-between items-center max-w-5xl">
        <div className="text-xl md:text-2xl font-semibold tracking-tight">
          <a href="/" className="text-teal hover:opacity-90 transition-opacity">
            StaffPlan
          </a>
        </div>
        
        <div className="flex space-x-6 md:space-x-8 items-center">
          <a href="https://app.staffplan.com/sign_in" className="nav-link text-sm md:text-base">
            Sign In
          </a>
          <a href="https://app.staffplan.com/registrations/new" className="nav-link text-sm md:text-base">
            Try
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
