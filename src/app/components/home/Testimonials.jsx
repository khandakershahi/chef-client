'use client';
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default testimonial if no data from DB
  const defaultTestimonials = [
    {
      id: 1,
      text: "The saffron braised lamb was a revelation. I haven't experienced such a perfect balance of traditional flavors and avant-garde presentation anywhere else in the city.",
      name: "Eleanor Rigby",
      position: "Food Critic, The Daily Gourmet",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfoCIt8CQZu07R_LMLN2mQglFxhBMrAVQP42PDKZ0Um9qjDbQXINT1252VzUvuPMrxhCFVDK1pdh5cKIgGP4AVQYi8QqtTujf2-nHK9ih8512vsxAD1daJ8uVfQ0lzK5mVuOPDvTbUs0mhtWbWKO4xRfXwakgAt-Ou6WPXPaLOnvEJ10V8WUVLO6DjL4i5UHjB-me_8wM7LVcTMsdJztLdYUk2hLZLg3YEV68C_SKOPu4m0MsMyOU0lE0Xci3a3xtgZbYG74QdI7w",
      rating: 5
    },
    {
      id: 2,
      text: "An unforgettable dining experience. The attention to detail, from the locally sourced ingredients to the impeccable service, makes every visit special.",
      name: "Michael Chen",
      position: "Restaurant Reviewer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      rating: 5
    },
    {
      id: 3,
      text: "Chef Julian's creativity knows no bounds. Each dish tells a story and takes you on a journey through flavors you never knew existed.",
      name: "Sarah Williams",
      position: "Food Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const current = displayTestimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === displayTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="flex justify-center gap-1 mb-4 text-secondary">
            {[...Array(current.rating || 5)].map((_, i) => (
              <FaStar key={i} size={20} />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-medium italic leading-relaxed text-base-content/80">
            "{current.text}"
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div 
            className="w-12 h-12 rounded-full bg-center bg-cover" 
            style={{backgroundImage: `url('${current.image}')`}}
          ></div>
          <div className="text-left">
            <p className="font-bold text-base-content">{current.name}</p>
            <p className="text-xs uppercase tracking-widest text-base-content/40">
              {current.position}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-base-content/10 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-base-content/10 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
