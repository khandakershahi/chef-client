import React from 'react';
import Container from '../Container';
import { FaShoppingBag, FaUtensils, FaBook } from 'react-icons/fa';

const CulinaryProcess = () => {
  const steps = [
    {
      icon: <FaShoppingBag size={28} />,
      title: '1. Local Bounty',
      description: 'We source 90% of our ingredients from sustainable farms within a 50-mile radius.'
    },
    {
      icon: <FaUtensils size={28} />,
      title: "2. The Chef's Craft",
      description: 'Each dish is a masterpiece, balancing traditional techniques with modern flair.'
    },
    {
      icon: <FaBook size={28} />,
      title: '3. Served with Passion',
      description: 'An immersive dining experience designed to awaken your senses and memory.'
    }
  ];

  return (
    <section className="py-24 bg-base-200">
      <Container>
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
            Our Method
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 text-base-content">
            The Culinary Journey
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-base-100 rounded-full flex items-center justify-center mb-8 border-2 border-secondary group-hover:bg-primary group-hover:text-primary-content transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-base-content">
                {step.title}
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CulinaryProcess;
