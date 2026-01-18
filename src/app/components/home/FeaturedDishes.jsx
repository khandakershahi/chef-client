import React from 'react';
import Container from '../Container';

const FeaturedDishes = ({ dishes = [] }) => {
  // Default dishes if no data from DB
  const defaultDishes = [
    {
      title: 'Saffron Braised Lamb',
      description: 'Slow-cooked lamb shank with saffron-infused broth, served with heirloom vegetables.',
      image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800',
      offset: false
    },
    {
      title: 'Truffle Risotto',
      description: 'Creamy Arborio rice finished with black truffle shavings and aged Parmesan.',
      image: 'https://images.unsplash.com/photo-1476124369491-c4fcf4e8b934?w=800',
      offset: true
    },
    {
      title: 'Herb-Crusted Salmon',
      description: 'Pan-seared salmon with a delicate herb crust, accompanied by seasonal greens.',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800',
      offset: false
    },
    {
      title: 'Chocolate Soufflé',
      description: 'Decadent dark chocolate soufflé with a molten center, served with vanilla bean ice cream.',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800',
      offset: true
    }
  ];
  
  const displayDishes = dishes.length > 0 ? dishes : defaultDishes;

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
          {displayDishes.map((dish, index) => (
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
