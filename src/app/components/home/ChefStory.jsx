import React from 'react';
import Container from '../../components/Container';

const ChefStory = () => {
  const chefImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUuOXM0hpvQnW74_U1U9cDg5PDzqzadCOahHZbUwKm543LEzWh1nBHoBiFHs1KglFAEEcpye0PQUV51TrwPjkqX4MG1DeiWFR7gLXfnGb8oeaQIX257IZ6rOkSt-hkn9LPOj13dTthB7cv2UAVjYtUhmtSBx5zuEBozGCAOIGvjDLPYMCvE2othkv3sHGIt2G_bQD170VecYBtyWKjKbw0IPAMGkMe1U519P4U4QhGqdR9J7CXoWvVl8LohZQvr2k8sD8PAp-OdkI';

  return (
    <section className="py-24 bg-base-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-primary/10 text-[200px] font-black leading-none select-none">"</div>
            <div 
              className="aspect-square bg-center bg-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000" 
              style={{backgroundImage: `url('${chefImageUrl}')`}}
            />
            <div className="absolute bottom-8 right-8 bg-base-100 p-6 rounded-xl shadow-xl border-l-4 border-primary">
              <p className="font-bold text-xl text-base-content">Julian Vance</p>
              <p className="text-base-content/60 text-sm italic">Executive Head Chef & Founder</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight leading-tight text-base-content">
              A Chef's Calling
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed italic">
              "Cooking is not just about technique; it's about the memory of a flavor, the warmth of the sun on a tomato, and the shared joy of a meal. My goal is to capture those fleeting moments of nature and present them on your plate."
            </p>
            <p className="text-base-content/60 leading-relaxed">
              With over two decades of experience in Michelin-starred kitchens across Europe, Chef Julian returned to his roots to establish a sanctuary for seasonal gastronomy. After working under legendary chefs in Paris, Copenhagen, and Barcelona, he realized his true passion: creating a space where food connects people to nature and to each other.
            </p>
            <p className="text-base-content/60 leading-relaxed">
              Every dish at The Golden Apron reflects Julian's philosophy: respect the ingredient, honor the process, and never compromise on quality. He sources 90% of ingredients from local farms within a 50-mile radius, ensuring peak freshness and supporting our community.
            </p>
            <button className="btn bg-base-content text-base-100 px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90">
              Read Full Biography
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChefStory;
