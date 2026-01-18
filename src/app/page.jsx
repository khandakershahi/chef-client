import HeroSection from './components/home/HeroSection';
import FeaturedDishes from './components/home/FeaturedDishes';
import CulinaryProcess from './components/home/CulinaryProcess';
import QualitySection from './components/home/QualitySection';
import StorySection from './components/home/StorySection';
import Testimonials from './components/home/Testimonials';
import CTASection from './components/home/CTASection';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

export default function Home() {
  // TODO: Fetch dishes from database
  // const dishes = await getDishesFromDB();
  const dishes = []; // Pass empty array to use default dishes

  // TODO: Fetch testimonials from database
  // const testimonials = await getTestimonialsFromDB();
  const testimonials = []; // Pass empty array to use default testimonials

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <FeaturedDishes dishes={dishes} />
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
