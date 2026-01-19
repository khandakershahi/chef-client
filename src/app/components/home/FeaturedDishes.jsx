import React from 'react';
import Container from '../Container';

import Link from 'next/link';

const FeaturedDishes = ({ dishes = [] }) => {
  // Default dishes if no data from DB
  const defaultDishes = [
    {
      title: 'Saffron Braised Lamb',
      description: 'Slow-cooked perfection with organic herbs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbuloFcItBYL7D0LOH-4nqiAQyApqux7C3w0bY-dCZhnh0j4xrz_nUef73_Cv-SYD4C6tbK4nZsGsiM6mEdV_16vA4ccl90iB1uKy-xIBuIVeDmkgQiWoEJRb6ojExQ_-o7P3q8pCtcekoRo352K1GdfSN5Tjw5-2kNMpzWe0fY0jS7rtpM4Qb1BaNB3c7fbdAtcwRZmnMBIVVlmq2ci8N2p9SLCeIBZ1w8c1FngKqOOqSV0bb3SFwCaBpHRAZ09juT7954bim_Og',
      offset: false
    },
    {
      title: 'Winter Root Risotto',
      description: 'Creamy arborio with seasonal root vegetables',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtDIuXb5vWXgnHdFvKnde691UmsYlN570pxfIthx9zExDVYcSw49jq-FnyqMMe2ilfztf9swpHAG2YeTL-CEpJ5RWLi_WxXZdZ1cj3dnzRAkEqpmFgksNmfPWHnywbvWooEtCAvYNuvzu7vB380_3_O1kkJwN_FuGnYpu8dw_lNkX8Cm5EXzXbcIEsm2wDj-bGM5NXCtFHKSx5yTma1BTnoWCByaNxB7IV2P7IVZ7zFdtHRLjRudCjOBErbswDEOfFoBqeWLkgLKA',
      offset: true
    },
    {
      title: 'Seared Scallops',
      description: 'Wild-caught Atlantic scallops',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvbdQKvm2pD6u869-dUUSHUGGoNvFLPp6ZAi6fgB0koNWZPWph2Q2JlnDULRWg9c-rIhrIlGDYk_GJs_8luMpqXRuKXLHxp50LHSFrHMEthQXFKa3VFL7kMtxRLH21pU3nV5tvNgKEVuVqnTN2ZbocUZSDzx1DXIqlmjNRdN7VKbUlitN93vY-NEwwu3KFXce8ipXpL5eTijst_TJWLRwNqc8N8mgzqTlhxCmt3p1kLSwlMQ4uzdiz3l94LbkWyF4cG7gJkh3goJY',
      offset: false
    },
    {
      title: 'Truffle Tagliatelle',
      description: 'Hand-rolled pasta with black winter truffles',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx6SgvQjZsZtn8ZCJ4io9cmI7pop4iYym7W6i8Qq77gSdP5v2JDYkZHnLC9Di7hBuTfkLL-KxyxM3fok7jsURoo5BfBUjSdCac5frFPf5_Gm419MSnRk_amT_o1JYEGe8NsPiapKddnE8i8QmBnUaQvdhVtNMs0VJDVrQ8DcSwyqv9hVhJW8wdWnRlXBUd_be_eKglZ4lEQB-ZZGlKdfNT7g_sV47d2HD0vDU_bdk4RCHWoWP7RXAZ6l6kA5eF-0SmibXhfgxpLRc',
      offset: true
    }
  ];
  
  const displayDishes = dishes.length > 0 ? dishes : defaultDishes;

  return (
    <section className="bg-base-100 py-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-base-content">
              Top-Rated Signature Dishes
            </h2>
            <div className="w-20 h-1 bg-secondary"></div>
          </div>
          <p className="text-base-content/60 uppercase tracking-widest text-xs font-bold">
            Updated Seasonally
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayDishes.map((dish, index) => {
            const Wrapper = dish.href ? Link : 'div';
            const wrapperProps = dish.href
              ? { href: dish.href, className: `group block ${dish.offset ? 'lg:translate-y-8' : ''}` }
              : { className: `group cursor-default ${dish.offset ? 'lg:translate-y-8' : ''}` };

            return (
              <Wrapper key={index} {...wrapperProps}>
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-base-content/0 group-hover:bg-base-content/20 transition-all duration-300"></div>
                  <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${dish.image}')` }}
                  ></div>
                </div>
                <h3 className="text-lg font-bold text-base-content">{dish.title}</h3>
                <p className="text-base-content/60 text-sm">{dish.description}</p>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedDishes;
