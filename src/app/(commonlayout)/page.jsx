import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDishes from '../components/home/FeaturedDishes';
import CulinaryProcess from '../components/home/CulinaryProcess';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <main className="pt-20">
      <HeroSection />
      <FeaturedDishes />
      <CulinaryProcess />
      <CTASection />
    </main>
  );
};

export default HomePage;
