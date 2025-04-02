import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EarthContainer from '../components/EarthContainer';
import MarsContainer from '../components/MarsContainer';
import SpaceCowboy from '../components/SpaceCowboy';
import ScreenshotsContainer from '../components/ScreenshotsContainer';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import { FlyingToilet } from '../components/FlyingToilet';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>StaffPlan - Time tracking for projects</title>
        <meta name="description" content="StaffPlan helps organizations plan and track time on projects." />
        <meta name="keywords" content="time tracking, hour tracking, project time tracking, project scheduling, resource planning" />
        <meta property="og:title" content="StaffPlan - Time tracking for projects" />
        <meta property="og:description" content="StaffPlan helps organizations plan and track time on projects." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StaffPlan - Time tracking for projects" />
        <meta name="twitter:description" content="StaffPlan helps organizations plan and track time on projects." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://staffplan.com" />
      </Helmet>
      <StarsBackground />
      <FlyingToilet className="top-32" />
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
      <section className="py-4">
        <ScreenshotsContainer />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
