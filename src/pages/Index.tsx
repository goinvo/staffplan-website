import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EarthContainer from '../components/EarthContainer';
import MarsContainer from '../components/MarsContainer';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <Hero />
      <section className="py-16">
        <EarthContainer />
      </section>
      <section className="py-16">
        <MarsContainer />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
