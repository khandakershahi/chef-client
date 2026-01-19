'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaTrash, FaStar, FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function MenuManagementPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [reviews, setReviews] = useState({});

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/items`);
      if (!response.ok) throw new Error('Failed to fetch items');
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    const result = await Swal.fire({
      title: 'Delete this item?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it',
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(`${apiUrl}/api/items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete item');
      setItems(items.filter(item => item._id !== id));
      Swal.fire({ icon: 'success', title: 'Deleted', text: 'Menu item removed.' });
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Delete failed', text: err.message || 'Error deleting item.' });
    }
  };

  const handleAddReview = (itemId) => {
    const rating = prompt('Rate this item (1-5 stars):');
    if (!rating) return;

    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      alert('Please enter a valid rating between 1 and 5');
      return;
    }

    const comment = prompt('Add a comment (optional):');

    if (!reviews[itemId]) {
      reviews[itemId] = [];
    }

    reviews[itemId].push({
      rating: ratingNum,
      comment: comment || '',
      date: new Date().toLocaleDateString(),
    });

    setReviews({ ...reviews });
  };

  const getAverageRating = (itemId) => {
    const itemReviews = reviews[itemId] || [];
    if (itemReviews.length === 0) return 0;
    const sum = itemReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / itemReviews.length).toFixed(1);
  };

  return (
    <>
      <div className="mb-10">
        <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/dashboard" className="hover:text-amber-700 transition-colors">
            Dashboard
          </Link>
          <FaChevronRight size={12} />
          <span className="text-amber-700 dark:text-amber-400">Menu Management</span>
        </nav>
        <div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-3">
            Menu Items Management
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            View, edit, and manage all menu items with customer reviews.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 lg:p-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
              <p className="mt-4 text-gray-600">Loading menu items...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">
              <p>Error: {error}</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No menu items found. Add your first item!</p>
              <Link
                href="/dashboard/menu/add"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider transition-colors"
              >
                Add Menu Item
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {items.map((item) => {
                const avgRating = getAverageRating(item._id);
                const itemReviews = reviews[item._id] || [];

                return (
                  <div key={item._id} className="border border-gray-200 dark:border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* Item Image */}
                      <div className="md:col-span-1">
                        {item.image ? (
                          <div
                            className="w-full h-40 rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: `url('${item.image}')` }}
                          />
                        ) : (
                          <div className="w-full h-40 rounded-lg bg-gray-200 dark:bg-slate-600 flex items-center justify-center">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded text-sm font-semibold">
                            ${item.price}
                          </span>
                          {item.category && (
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded text-sm font-semibold">
                              {item.category}
                            </span>
                          )}
                          {item.badge && (
                            <span className={`${item.badgeColor} text-white px-3 py-1 rounded text-sm font-semibold`}>
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Reviews & Actions */}
                      <div className="md:col-span-1 flex flex-col gap-3">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                size={16}
                                className={i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                          <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">
                            {avgRating}/5 ({itemReviews.length} reviews)
                          </p>
                        </div>

                        <button
                          onClick={() => handleAddReview(item._id)}
                          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded font-semibold text-sm transition-colors"
                        >
                          + Add Review
                        </button>

                        <button
                          onClick={() => handleDeleteItem(item._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                        >
                          <FaTrash size={14} />
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Reviews Section */}
                    {itemReviews.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">Customer Reviews</h4>
                        <div className="space-y-3">
                          {itemReviews.map((review, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-slate-700 p-3 rounded">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="flex gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      size={12}
                                      className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                              </div>
                              {review.comment && (
                                <p className="text-sm text-gray-700 dark:text-gray-300">{review.comment}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {items.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/dashboard/menu/add"
            className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider transition-colors"
          >
            Add New Menu Item
          </Link>
        </div>
      )}
    </>
  );
}
