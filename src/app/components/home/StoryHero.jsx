import React from 'react';
import Container from '../../components/Container';

const StoryHero = () => {
  return (
    <section className="py-24 pt-32 bg-base-100">
      <Container>
        <div className="max-w-3xl">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 mb-4 block">
            Our Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
            The Vision Behind <br/> The Golden Apron
          </h1>
          <p className="text-base-content/60 text-lg leading-relaxed">
            More than just a restaurant, we're a celebration of culinary artistry, sustainability, and the joy of gathering around exceptional food.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default StoryHero;
