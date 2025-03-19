import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
