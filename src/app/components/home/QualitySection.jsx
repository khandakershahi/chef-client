import React from 'react';

const QualitySection = () => {
  return (
    <section className="py-12 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Uncompromising Quality</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We believe that great food starts with the rawest, purest elements. Our kitchen is a laboratory of flavors, where fresh herbs, heirloom vegetables, and premium proteins take center stage.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-secondary">100%</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Organic</span>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-secondary">Daily</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Harvest</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 translate-x-12">
          <div 
            className="aspect-[3/4] rounded-xl bg-center bg-cover" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCOlHsOI2D3RDhFnKhUC77duSL_w8Tia-27IhvymogfprUXbHnCU81cyawqk9F74W35f-2FeI2XjYslT5eLXy1Lte09BqkM0Eaq4D8qSDt_zHsmy816dR8qyx9B8pS0IoDsr_2xbtb8l9hT69Vr8ClBq1Mhmhv8D6-Kf8nYE_4UGJUf0rLCwg9IzDfYupT3RRfkZm2zZqMZ-Wbe1C4k6yjMcEVG6GJYpu9nDrlmlMe_DugrxDRQVUcrB6OYrUG1JmwppJJi5hlzrM')"}}
          ></div>
          <div 
            className="aspect-[3/4] rounded-xl bg-center bg-cover mt-12" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQH4FrewaAJZIqPZXXr5VQyYBsLiG4QrwZ72EKDnmXpRF3XWq-HnpPuLgEeCNHGe8nvPie8plqI_DJDaLRJkqlUiBdnPLYJYSK7zi28w8Eb0rmx1M9Z_lO3BSx360JMSi7ITi2pG-pY1RYcWWYGTshPuhekXkTD0yaVXBwb45QRwvlIOH8vmyAeY2T3aKtp9kMxgvFpwO1ifL2Va8_3HCWxhpHu9scabp5NxbDQ-OaE1sN47P2xtNufJ_6EW-tWdDJL1KXO80uil4')"}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
