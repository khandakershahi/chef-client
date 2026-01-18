import React from 'react';

const QualitySection = () => {
  return (
    <section className="py-12 bg-base-content text-primary-content overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Uncompromising Quality</h2>
          <p className="text-primary-content/60 text-lg leading-relaxed">
            We believe that great food starts with the rawest, purest elements. Our kitchen is a laboratory of flavors, where fresh herbs, heirloom vegetables, and premium proteins take center stage.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-secondary">100%</span>
              <span className="text-xs uppercase tracking-widest text-primary-content/40">Organic</span>
            </div>
            <div className="w-px h-12 bg-primary-content/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-secondary">Daily</span>
              <span className="text-xs uppercase tracking-widest text-primary-content/40">Harvest</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 translate-x-12">
          <div 
            className="aspect-[3/4] rounded-xl bg-center bg-cover" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600')"}}
          ></div>
          <div 
            className="aspect-[3/4] rounded-xl bg-center bg-cover mt-12" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600')"}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
