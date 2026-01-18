import React from 'react';
import Container from '../Container';

const MenuHero = () => {
  return (
    <section className="py-12 pt-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
            Autumn 2024 Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-4">
            Our Seasonal <br/>
            <span className="text-primary">Masterpieces</span>
          </h1>
          <p className="text-base-content/60 text-lg">
            Experience a curated selection of farm-to-table creations, where traditional techniques meet contemporary flavor profiles.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MenuHero;
