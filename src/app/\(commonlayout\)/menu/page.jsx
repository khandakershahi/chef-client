import MenuHero from '../../components/home/MenuHero';
import MenuGrid from '../../components/home/MenuGrid';

export default function MenuPage() {
  // TODO: Fetch menu items from database
  // const menuItems = await getMenuFromDB();
  const menuItems = []; // Pass empty array to use default items

  return (
    <main className="pt-20">
      <MenuHero />
      <MenuGrid menuItems={menuItems} />
    </main>
  );
}
