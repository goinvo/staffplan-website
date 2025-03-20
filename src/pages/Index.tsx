import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EarthContainer from '../components/EarthContainer';
import MarsContainer from '../components/MarsContainer';
import SpaceCowboy from '../components/SpaceCowboy';
import ScreenshotsContainer from '../components/ScreenshotsContainer';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <Hero />
      <section className="py-4">
        <EarthContainer />
      </section>
      <section className="pb-4">
        <MarsContainer />
      </section>
      <section className="py-4">
        <SpaceCowboy />
      </section>
      <section className="py-16">
        <ScreenshotsContainer />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
