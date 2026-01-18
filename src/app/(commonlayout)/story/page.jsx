import StoryHero from '../../components/home/StoryHero';
import ChefStory from '../../components/home/ChefStory';
import OurMission from '../../components/home/OurMission';
import Timeline from '../../components/home/Timeline';

export default function StoryPage() {
  return (
    <main className="pt-20">
      <StoryHero />
      <ChefStory />
      <OurMission />
      <Timeline />
    </main>
  );
}
