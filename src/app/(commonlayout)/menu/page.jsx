'use client';

import { useEffect, useState } from 'react';
import MenuHero from '../../components/home/MenuHero';
import MenuGrid from '../../components/home/MenuGrid';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/items`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        
        const items = await response.json();
        setMenuItems(items);
      } catch (err) {
        console.error('Error fetching menu items:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <main className="pt-20">
      <MenuHero />
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Loading menu items...</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center text-red-600">
            <p>Error: {error}</p>
            <p className="text-sm mt-2">Make sure the backend server is running and reachable at the API URL.</p>
          </div>
        </div>
      ) : (
        <MenuGrid menuItems={menuItems} />
      )}
    </main>
  );
}
