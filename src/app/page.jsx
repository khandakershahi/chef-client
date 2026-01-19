import HeroSection from './components/home/HeroSection';
import FeaturedDishes from './components/home/FeaturedDishes';
import CulinaryProcess from './components/home/CulinaryProcess';
import QualitySection from './components/home/QualitySection';
import StorySection from './components/home/StorySection';
import Testimonials from './components/home/Testimonials';
import CTASection from './components/home/CTASection';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import MenuGrid from './components/home/MenuGrid';

async function fetchMenuItems() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  try {
    const res = await fetch(`${apiUrl}/api/items`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch menu items');
    return await res.json();
  } catch (err) {
    console.error('Error fetching menu items for home:', err);
    return [];
  }
}

export default async function Home() {
  const menuItems = await fetchMenuItems();
  const featured = menuItems.slice(0, 4).map((item) => ({
    title: item.name,
    description: item.description,
    image: item.image,
    href: item._id ? `/dish/${item._id}` : undefined,
  }));

  const testimonials = []; // still using defaults

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FeaturedDishes dishes={featured} />
        <CulinaryProcess />
        <QualitySection />
        <StorySection />
        <Testimonials testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
