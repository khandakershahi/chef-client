'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaImage } from 'react-icons/fa';

export default function AddMenuItemPage() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Main Course',
    vegan: false,
    glutenFree: false,
    houseSpecial: false,
    isLarge: false,
    badgeText: "Chef's Special",
    badgeColor: 'bg-secondary',
    tagsInput: 'Seafood',
    imageUrl: '',
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState({ type: '', message: '' });

  const uploadImageToImgbb = async (file) => {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if (!apiKey) {
      throw new Error('Missing NEXT_PUBLIC_IMGBB_API_KEY');
    }

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Image upload failed');
    }

    const data = await res.json();
    return data?.data?.url;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let uploadedImageUrl = formData.imageUrl?.trim() || '';
      if (!uploadedImageUrl && formData.image) {
        uploadedImageUrl = await uploadImageToImgbb(formData.image);
      }

      const parsedTags = formData.tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean);

      if (formData.vegan) parsedTags.push('Vegan');
      if (formData.glutenFree) parsedTags.push('Gluten Free');

      const payload = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image: uploadedImageUrl,
        badge: formData.houseSpecial ? formData.badgeText || "Chef's Special" : null,
        badgeColor: formData.houseSpecial ? formData.badgeColor || 'bg-secondary' : null,
        isLarge: formData.isLarge,
        tags: parsedTags,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const apiResponse = await fetch(`${apiUrl}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!apiResponse.ok) {
        const err = await apiResponse.json();
        throw new Error(err.error || 'Failed to save item');
      }

      const result = await apiResponse.json();
      console.log('Item saved:', result);

      setToast({ type: 'success', message: 'Menu item saved successfully.' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setToast({ type: '', message: '' });
        setFormData({
          name: '',
          price: '',
          description: '',
          category: 'Main Course',
          vegan: false,
          glutenFree: false,
          houseSpecial: false,
          isLarge: false,
          badgeText: "Chef's Special",
          badgeColor: 'bg-secondary',
          tagsInput: 'Seafood',
          imageUrl: '',
          image: null,
        });
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to save menu item');
      setToast({ type: 'error', message: err.message || 'Failed to save menu item' });
      console.error('Error saving item:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast */}
      {toast.message && (
        <div className={`fixed right-4 top-4 z-50 rounded-lg px-4 py-3 shadow-lg text-sm font-semibold ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {toast.message}
        </div>
      )}

      {/* Breadcrumbs & Header */}
      <div className="mb-10">
        <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/dashboard" className="hover:text-amber-700 transition-colors">
            Dashboard
          </Link>
          <FaChevronRight size={12} />
          <Link href="/dashboard/menu" className="hover:text-amber-700 transition-colors">
            Menu Management
          </Link>
          <FaChevronRight size={12} />
          <span className="text-amber-700 dark:text-amber-400">Add New Item</span>
        </nav>
        <div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-3">
            Create New Culinary Offering
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Define a fresh addition to your seasonal premium menu.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 lg:p-12">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 p-8 rounded-lg text-center">
              <h3 className="font-bold mb-2 text-lg">Success!</h3>
              <p>Your menu item has been saved to the database.</p>
              <p className="text-sm mt-2">
                The item is now available in your chef database.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}
              {/* Basic Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Dish Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Dish Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Pan-Seared Scallops"
                    className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                    required
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      step="0.01"
                      className="w-full h-14 pl-10 pr-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                      required
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all"
                    required
                  >
                    <option>Main Course</option>
                    <option>Appetizers</option>
                    <option>Desserts</option>
                    <option>Signature Drinks</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                  Flavor Profile & Ingredients
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the aroma, texture, and key sourced ingredients..."
                  rows="4"
                  className="w-full p-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white resize-none"
                  required
                />
              </div>

              {/* Image Upload or URL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Presentation Image (upload)
                  </label>
                  <div className="group relative mt-2 border-2 border-dashed border-gray-200 dark:border-slate-600 rounded-xl p-10 flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-700/30 hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                    <div className="size-16 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-4">
                      <FaImage size={28} />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      High-resolution JPG or PNG (Max 5MB)
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  {formData.image && (
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                      ✓ {formData.image.name} selected
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Or paste image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    If provided, URL takes priority over file upload.
                  </p>
                </div>
              </div>

              {/* Dietary & Flags */}
              <div className="pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-wrap gap-6">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="vegan"
                    checked={formData.vegan}
                    onChange={handleChange}
                    className="size-5 rounded border-gray-300 dark:border-slate-600 text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-600"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    Vegan Friendly
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="glutenFree"
                    checked={formData.glutenFree}
                    onChange={handleChange}
                    className="size-5 rounded border-gray-300 dark:border-slate-600 text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-600"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    Gluten Free
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="houseSpecial"
                    checked={formData.houseSpecial}
                    onChange={handleChange}
                    className="size-5 rounded border-gray-300 dark:border-slate-600 text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-600"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    House Special
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="isLarge"
                    checked={formData.isLarge}
                    onChange={handleChange}
                    className="size-5 rounded border-gray-300 dark:border-slate-600 text-amber-700 focus:ring-amber-700 dark:focus:ring-amber-600"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    Feature as Large Tile
                  </span>
                </label>
              </div>

              {/* Badge + Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Badge Text (optional)
                  </label>
                  <input
                    type="text"
                    name="badgeText"
                    value={formData.badgeText}
                    onChange={handleChange}
                    placeholder="CHEF'S SPECIAL or New Arrival"
                    className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                    disabled={!formData.houseSpecial}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">Enabled when House Special is checked.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                    Badge Color
                  </label>
                  <select
                    name="badgeColor"
                    value={formData.badgeColor}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all"
                    disabled={!formData.houseSpecial}
                  >
                    <option value="bg-secondary">Secondary</option>
                    <option value="bg-primary">Primary</option>
                    <option value="bg-accent">Accent</option>
                    <option value="bg-neutral">Neutral</option>
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tagsInput"
                  value={formData.tagsInput}
                  onChange={handleChange}
                  placeholder="Seafood, Seasonal, Gluten Free"
                  className="w-full h-14 px-5 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:ring-2 focus:ring-amber-700 focus:border-amber-700 dark:focus:ring-amber-600 text-base transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">Vegan / Gluten Free toggles will be added automatically.</p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Link
                  href="/dashboard/menu"
                  className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg shadow-amber-700/20 transition-all active:scale-95 disabled:cursor-not-allowed"
                >
                  {loading ? 'Saving...' : 'Publish Offering'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer Hint */}
      <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-xs">
        All new menu items will be reviewed by the Executive Chef before appearing on the public website.
      </p>
    </>
  );
}
