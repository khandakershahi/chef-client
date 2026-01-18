'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Container from '../../components/Container';

const DishDetailsPage = () => {
  const dishImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr7fmo9GsCZHyVlFIr75MUO7NAqfhCLHE-S-ujf60hjKktXnYDEvI7Sb5UyGN9ZCGUrgrg3Wni70arf5kxttzxIw7g0FVX20bs3A3eikfkBvLnmrhcNTMA8SbYlGpMZ7NsZA5Kf_20tf-mpO4Uk-DoP2sIAEaXOWx1eVVB1_O33Rx44o9505POmDT20AsgSF_prXWEfuizbC_-9qAnOLi2d5ceMPpQSBTxZawkzAP9FBAzWBX-hCicu3fEpa-uw0WTANAdofWqxJY';

  const [quantity, setQuantity] = useState(1);

  const dish = {
    name: 'Herb-Crusted Rack of Lamb',
    price: 34.00,
    badges: ['Chef\'s Special', 'Seasonal'],
    calories: 820,
    description: 'Our signature rack of lamb is sourced from local grass-fed pastures, ensuring unparalleled tenderness. Each cut is hand-rubbed with a proprietary blend of fresh rosemary, thyme, and Dijon mustard, then encased in a delicate panko-herb crust that caramelizes to perfection. Served over a bed of slow-roasted seasonal root vegetables and finished with a red wine reduction.',
    ingredients: [
      'Grass-fed Lamb',
      'Fresh Rosemary',
      'Dijon Mustard',
      'Heirloom Carrots',
      'Panko Breadcrumbs',
      'Aged Red Wine'
    ],
    tags: ['Organic Sourced', 'High Protein'],
    prepTime: '25-30 minutes'
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen pt-20 bg-base-100">
      {/* Left Side: Hero Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-20 bg-base-100">
        <div className="w-full h-full p-4 lg:p-12">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url('${dishImageUrl}')` }}
            />
          </div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 bg-base-100 overflow-y-auto">
        <Container>
          <div className="py-12 lg:py-20 flex flex-col gap-10">
          {/* Back Button */}
          <Link href="/menu" className="flex items-center gap-2 group transition-colors hover:text-primary w-fit">
            <span>←</span>
            <span className="text-sm font-semibold uppercase tracking-tight">Back to Menu</span>
          </Link>

          {/* Header */}
          <section className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {dish.badges.map(badge => (
                <span key={badge} className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold tracking-widest uppercase rounded">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-base-content">
              {dish.name}
            </h1>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-light text-primary">${dish.price.toFixed(2)}</span>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-base-200 rounded text-xs">
                🔥 {dish.calories} kcal
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-base-content/40">The Story</h3>
            <p className="text-lg leading-relaxed text-base-content/70">
              {dish.description}
            </p>
          </section>

          {/* Ingredients */}
          <section className="space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-base-content/40">Key Ingredients</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {dish.ingredients.map(ingredient => (
                <div key={ingredient} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-secondary"></div>
                  <span className="text-sm font-medium">{ingredient}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Dietary Info */}
          <section className="flex flex-wrap gap-3">
            {dish.tags.map(tag => (
              <div key={tag} className="flex h-10 items-center gap-2 rounded-lg bg-base-200 px-4 border border-base-300 hover:border-secondary transition-colors">
                <span className="text-sm font-medium">{tag}</span>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="pt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-base-200 rounded-lg p-1 border border-base-300">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-base-100 rounded transition-all"
              >
                −
              </button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-base-100 rounded transition-all"
              >
                +
              </button>
            </div>
            <button className="flex-grow bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 group">
              ADD TO ORDER
              <span>→</span>
            </button>
          </section>

          <p className="text-center text-xs text-base-content/40 italic">
            * Preparation time: Approx. {dish.prepTime}. All meats are cooked to medium unless specified.
          </p>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default DishDetailsPage;
