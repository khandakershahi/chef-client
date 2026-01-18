import React from 'react';
import Container from '../../components/Container';

const OurMission = () => {
  const pillars = [
    {
      title: 'Sustainability',
      description: 'We partner exclusively with local, organic farms and sustainable fisheries to minimize our environmental impact while ensuring the highest quality ingredients.'
    },
    {
      title: 'Seasonality',
      description: 'Our menu changes with the seasons, celebrating what nature offers at its peak. This approach ensures freshness and supports the natural growing cycles.'
    },
    {
      title: 'Community',
      description: 'We believe in giving back. 2% of our profits support local food education programs and sustainable farming initiatives in our region.'
    },
    {
      title: 'Craft',
      description: 'Every plate is a work of art. Our team masters both classical techniques and contemporary methods to create unforgettable culinary experiences.'
    }
  ];

  return (
    <section className="py-24 bg-base-200">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Four Pillars</h2>
          <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
            The foundation of everything we do at The Golden Apron
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-base-100 p-8 rounded-xl border border-base-300 hover:border-primary transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-2xl font-black text-primary group-hover:text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-content">{pillar.title}</h3>
              <p className="text-base-content/60 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
