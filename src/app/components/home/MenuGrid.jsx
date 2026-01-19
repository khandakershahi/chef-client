'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Container from '../Container';

const MenuGrid = ({ menuItems = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('Full Menu');

  const defaultMenuItems = [
    {
      id: 1,
      name: 'Pan-Seared Sea Scallops',
      description: 'Jumbo Atlantic scallops served over a velvet-smooth pea and mint purée, finished with a zesty lemon-infused brown butter and micro-herbs.',
      price: 34,
      category: 'Main Course',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3cw4Ft04sHVirEB2p_6ReCxYSVUvPt-AIokNhUBRX4IVni7w5iB_pf7qifdijC8ad9soTjYoFbQVUkW2O8rCccw3QFdbG2X2MQSmK3dcR5JAdznoSWL95Nbv3gKXtoNLNt60n7zTEWUUBUE7Q7X8woUerQPftFHS7BKRBMknIjVE-U5F6HhWU5oe0xVNLJknrALml2R9b6Yqvzze_GTpSkK_JyTsy6DqyuDKBk3pXOwIzSr4qHMRmdsHeXKQkddSGH9c53LOZ1Ww',
      badge: "CHEF'S SPECIAL",
      badgeColor: 'bg-secondary',
      isLarge: true,
      tags: ['Seafood']
    },
    {
      id: 2,
      name: 'Black Truffle Arancini',
      description: 'Crispy risotto spheres with an earthy truffle heart and aged pecorino center.',
      price: 18,
      category: 'Appetizers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3_RF2PbyrK6jUW3ZloZlIQTS9-p3vmgCV_iJRroG_ozSABEAOoAPoSXuBbUWr1xVqsJRKgq6gf_6VknuxQ5Rw2pNQZSwGfK_i3WJYsGTgMtPEz8PE9p-MBDf7rh1QsJMx9rFk10QeLIS55ZPaVZEzY81WC76eHBClFrApkMM9Dokp5uDYSWSKSFWRvxlSKie5y6-ssWTHOgaYtTKnQlFVveKwIWw1zkoWACKDLwbANEqM2c9AH3Oi5D7fGZQ1YTXR3FMhHwWMxz0',
      isLarge: false,
      tags: []
    },
    {
      id: 3,
      name: '12-Hour Braised Short Rib',
      description: 'Slow-cooked in red wine reduction with heirloom root vegetables and parsnip mash.',
      price: 42,
      category: 'Main Course',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Qg4p6aiPVOtDe-5RlwU0EQzqISEgHBs0Mli99Js9sGoMR9XIPbLPVM2u52JM-ic8S8PI3zOVFQWgKhkxpZB-IK-NXuXUF4eLBkHord9aJbI3aKBfYtLMUUVdK2aADMftTAQmxemOYqoUHSTcuJlUwA4lUxnTBzUx9B8dqNPvxMMeU9R9HCkh0o5cg-vqDQW3V_4DuUOXz9XewAxj-ccPWL99FqgDeq7SdWPGL-eaO5EH3L9nPocTWfJeuR6B9QevltbDFLiVezQ',
      isLarge: false,
      tags: []
    },
    {
      id: 4,
      name: 'The Deconstructed Tiramisu',
      description: 'Artisanal ladyfingers soaked in single-origin espresso, topped with clouds of mascarpone cream and dusting of Venezuelan cocoa.',
      price: 16,
      category: 'Desserts',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDiToU28uwTYkrwpZlnJdZ-tbW0P53Ar_ndUe_LFepkxKL1BqFD5JOn6RwKxY95FbNhIHdjEFgX4ytQUF46vHZaBbLMxg6dYdrJcmU_D2UYImaB-r6BF5o0aaLSWJ78M-z4Vh-IHMyl-3EMzdNYNNGUOv6qbh8Y2d_lztWj6XF4iIyLrMP6UpRbOVgBDP7vcVnzctTCF-mOCY2Wjsyb8SAPRpgrwwQVu9IueS2WoZK3M8f-oq3cqY1tdkb9OATAjk3pNv9az-M8CE',
      badge: 'New Arrival',
      badgeColor: 'bg-primary',
      isLarge: true,
      tags: []
    },
    {
      id: 5,
      name: 'Heirloom Bruschetta',
      description: 'Sun-ripened tomatoes on charred sourdough with hand-torn basil and balsamic pearls.',
      price: 14,
      category: 'Appetizers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf7p66EJ6HWOuODopxBHnajw5Sha158DeJRVy5fgYDzzS1K6x3qZTv6e2iFSuY-h8asrhH2fflFgJ2aXkPFXFPHjWrQPtFKupoytBPdlw8-kGuMPrdYwPA7d_cyI4QfGC0ESHR1EIeJ4-VltvP3qZWXJEXrTni1Fiu4H1x53hJja-iE5C7tFuFYQ53V9XwjxUTeuI3tr7XRIvuMv6-7WQ6OssD3a4D2DKZVJcrVL6q2im9uZJRXHVUJ7_F4jAqsBW05TD7xP0xpOk',
      isLarge: false,
      tags: []
    },
    {
      id: 6,
      name: 'Lavender Panna Cotta',
      description: 'Floral infused cream dessert served with wildflower honey and crystallized violets.',
      price: 12,
      category: 'Desserts',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB06Es-UA42cTWlt7nlRgYFATsAen1MgdCLF9np-z2KXkDrMjMqBRXJpuR6NnezyPL0OXOXESmPOqc_KUvz7Z76Mmw_P-3WuIOkNJiHr5_mJAWPC5deY1bY06haTUUwoORFO9EoGD_esXsIerBvMWRlV99oXsRjswHjTuodfuUf3qp4x7Agv43-V7kZsTy1PNztovjJXpg5xLZfJgiVuRN6xeDXSMbBquXT6NxJtQt1V-wkmVM4lLWVvCaKPlqdsZolh5PfIbN_A30',
      isLarge: false,
      tags: []
    }
  ];

  const displayItems = menuItems.length > 0 ? menuItems : defaultMenuItems;
  const categories = ['Full Menu', 'Appetizers', 'Main Course', 'Desserts', 'Signature Drinks'];
  
  const filteredItems = selectedCategory === 'Full Menu' 
    ? displayItems 
    : displayItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16">
      <Container>
        {/* Category Filters */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full px-8 text-sm font-bold uppercase tracking-widest transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-xl shadow-primary/20'
                  : 'bg-base-200 text-base-content border border-base-300 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => {
            const key = item._id || item.id;
            const href = item._id ? `/dish/${item._id}` : '#';
            return (
            <div
              key={key}
              className={`group relative flex flex-col bg-base-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-200 ${
                item.isLarge ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${item.isLarge ? 'h-80' : 'aspect-[4/3]'}`}>
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                {item.badge && (
                  <div className={`absolute ${item.isLarge ? 'top-4 left-4' : 'top-3 right-3'} ${item.badgeColor} px-3 py-1 rounded-full text-xs font-bold tracking-tighter ${item.badgeColor === 'bg-secondary' ? 'text-base-content' : 'text-white'}`}>
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`font-bold ${item.isLarge ? 'text-2xl' : 'text-lg'}`}>
                    {item.name}
                  </h3>
                  <span className={`font-black text-primary ${item.isLarge ? 'text-xl' : 'text-base'}`}>
                    ${item.price}
                  </span>
                </div>
                <p className="text-base-content/60 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                {item.isLarge ? (
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-primary/40 text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={href} className="flex items-center gap-2 group/btn text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                      <span>View Details</span>
                      <span>→</span>
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="mt-auto w-full text-center border border-primary/20 hover:bg-primary hover:text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    View Details
                  </Link>
                )}
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 border-2 border-primary text-primary font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all rounded-lg">
            Discover Full Collection
          </button>
        </div>
      </Container>
    </section>
  );
};

export default MenuGrid;
