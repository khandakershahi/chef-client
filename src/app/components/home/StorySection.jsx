import React from 'react';
import Container from '../Container';

const StorySection = () => {
  return (
    <section className="py-24 bg-base-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-primary/10 text-[200px] font-black leading-none select-none">"</div>
            <div 
              className="aspect-square bg-center bg-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUuOXM0hpvQnW74_U1U9cDg5PDzqzadCOahHZbUwKm543LEzWh1nBHoBiFHs1KglFAEEcpye0PQUV51TrwPjkqX4MG1DeiWFR7gLXfnGb8oeaQIX257IZ6rOkSt-hkn9LPOj13dTthB7cv2UAVjYtUhmtSBx5zuEBozGCAOIGvjDLPYMCvE2othkv3sHGIt2G_bQD170VecYBtyWKjKbw0IPAMGkMe1U519P4U4QhGqdR9J7CXoWvVl8LohZQvr2k8sD8PAp-OdkI')"}}
            ></div>
            <div className="absolute bottom-8 right-8 bg-base-100 p-6 rounded-xl shadow-xl border-l-4 border-primary">
              <p className="font-bold text-xl text-base-content">Julian Vance</p>
              <p className="text-base-content/60 text-sm italic">Executive Head Chef</p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2">
              Our Culinary Story
            </span>
            <h2 className="text-5xl font-bold tracking-tight leading-tight text-base-content">
              The Vision Behind <br /> The Golden Apron
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed italic">
              "Cooking is not just about technique; it's about the memory of a flavor, the warmth of the sun on a tomato, and the shared joy of a meal. My goal is to capture those fleeting moments of nature and present them on your plate."
            </p>
            <p className="text-base-content/60 leading-relaxed">
              With over two decades of experience in Michelin-starred kitchens across Europe, Chef Julian returned to his roots to establish a sanctuary for seasonal gastronomy.
            </p>
            <button className="btn bg-base-content text-base-100 px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;
