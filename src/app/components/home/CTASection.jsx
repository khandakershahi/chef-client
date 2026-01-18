import React from 'react';

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-24 text-center text-primary-content relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Ready for an <br /> Unforgettable Meal?
          </h2>
          <p className="text-primary-content/70 text-lg max-w-2xl mx-auto">
            Join us for an evening of culinary storytelling. Our tables fill up fast, so reserve yours today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button className="btn btn-secondary h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em]">
              View Full Menu
            </button>
            <button className="btn btn-outline btn-secondary h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-primary-content border-primary-content hover:bg-primary-content/10">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
