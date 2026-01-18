import React from 'react';
import Container from '../../components/Container';

const Timeline = () => {
  const events = [
    {
      year: '2002',
      title: 'The Beginning',
      description: 'Julian Vance completes his culinary education in Lyon, France'
    },
    {
      year: '2008',
      title: 'European Excellence',
      description: 'Earns his first Michelin star in Paris at a renowned establishment'
    },
    {
      year: '2018',
      title: 'Homecoming',
      description: 'Returns home inspired to create his own culinary sanctuary'
    },
    {
      year: '2020',
      title: 'The Golden Apron Opens',
      description: 'Launches The Golden Apron with a commitment to seasonal, sustainable cuisine'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Receives prestigious recognition from national culinary institutions'
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Expands sustainable farming partnerships and launches culinary academy'
    }
  ];

  return (
    <section className="py-24 bg-base-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Our Journey Timeline</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary"></div>
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-black text-4xl">{event.year}</span>
                    <h3 className="text-2xl font-bold text-base-content mt-2">{event.title}</h3>
                    <p className="text-base-content/60 mt-2">{event.description}</p>
                  </div>
                </div>
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-base-100 shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
