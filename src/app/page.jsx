import HeroSection from './components/home/HeroSection';
import FeaturedDishes from './components/home/FeaturedDishes';
import CulinaryProcess from './components/home/CulinaryProcess';
import CTASection from './components/home/CTASection';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FeaturedDishes />
        <CulinaryProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
