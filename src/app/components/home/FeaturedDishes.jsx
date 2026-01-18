import React from 'react';
import Container from '../Container';

const FeaturedDishes = () => {
  const dishes = [
    {
      title: 'Saffron Braised Lamb',
      description: 'Slow-cooked perfection with organic herbs',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600',
      offset: false
    },
    {
      title: 'Winter Root Risotto',
      description: 'Creamy arborio with seasonal root vegetables',
      image: 'https://images.unsplash.com/photo-1476124369491-c90d1ef8c8c5?w=600',
      offset: true
    },
    {
      title: 'Seared Scallops',
      description: 'Wild-caught Atlantic scallops',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600',
      offset: false
    },
    {
      title: 'Truffle Tagliatelle',
      description: 'Hand-rolled pasta with black winter truffles',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
      offset: true
    }
  ];

  return (
    <section className="bg-base-100 py-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-base-content">
              Top-Rated Signature Dishes
            </h2>
            <div className="w-20 h-1 bg-secondary"></div>
          </div>
          <p className="text-base-content/60 uppercase tracking-widest text-xs font-bold">
            Updated Seasonally
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${dish.offset ? 'lg:translate-y-8' : ''}`}
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-base-content/0 group-hover:bg-base-content/20 transition-all duration-300"></div>
                <div
                  className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${dish.image}')` }}
                ></div>
              </div>
              <h3 className="text-lg font-bold text-base-content">{dish.title}</h3>
              <p className="text-base-content/60 text-sm">{dish.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedDishes;
