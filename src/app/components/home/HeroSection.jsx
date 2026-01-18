import React from 'react';
import Container from '../Container';

const HeroSection = () => {
  return (
    <section className="relative px-6 py-12 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">
                Excellence in every bite
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-base-content">
                Artistry on <br />
                <span className="text-primary italic">a Plate</span>
              </h1>
              <p className="text-lg text-base-content/70 max-w-md leading-relaxed">
                Experience farm-to-table excellence crafted with passion and fresh seasonal ingredients from our local partners.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary h-14 px-8 rounded-xl font-bold uppercase tracking-widest">
                Book a Table
              </button>
              <button className="btn btn-outline h-14 px-8 rounded-xl font-bold uppercase tracking-widest">
                View Menu
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl -z-10 group-hover:-inset-2 transition-all duration-500"></div>
              <div
                className="aspect-[4/3] w-full bg-center bg-cover rounded-xl shadow-2xl"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzPYDaKyezHD5lkl3kSTF5uwz-znTsJUaxBqNT5eyLIRPY2JyGSlh6WEJMGHEFpPD-l197vzJLIy3CtwoQSoNpYNE11bkDe_ozFUiaGq29_Q6YCggZRLzILpZz72I_w7r5_SmlvsQydzJLl3EhvzNW3_m8HnnY4B3ye60EZo1k7Q9e5xUCVsNsO3rfV6b65_CT0g4tq0lOu0cuVm_HHHtgR5oezFpE2N_DmmCQ3YbqOKWplUKJzAe5eGQ4eB0-3OLM4j1QIDVuQ2Y')"
                }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
