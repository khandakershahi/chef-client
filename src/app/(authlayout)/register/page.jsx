'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
  const backgroundImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtu2bQRsfYLVNROFUBQBXRy_LTPH9jJNqw3Fb4dEGiBKlRfQvxaj5gDKXesqy2uFMOAutmGplxdX_xufgi_3w7JvYVGACBvBn0TJewLdkmWEYAsDSGQRWdehEdpNXpLy3RkwOUSGKQeEQKpDAY0JVOhu8UMAwxjUKLm8Pj2jLAD6aETX59FPrwSVlG6bM0ZNw_AFHJFHmb9dovDBjTIg055h5VOGfU489v6tQrYfnIuOBPJkzbCWpKNCkc-6IYy21BpwokmhY8V3k';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    // TODO: Implement actual registration logic
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${backgroundImageUrl}')`
        }}
      />
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-6 py-12">
        {/* Register Card */}
        <div className="w-full max-w-[480px] bg-white/85 dark:bg-base-content/85 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10">
          
          {/* Header / Brand */}
          <div className="h-32 bg-primary/10 flex items-center justify-center border-b border-base-300 dark:border-white/10">
            <div className="flex flex-col items-center gap-1">
              <div className="text-4xl">🍽️</div>
              <span className="text-primary font-black tracking-widest uppercase text-xs">The Golden Apron</span>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            {/* Heading */}
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-gray-900 dark:text-gray-900 text-3xl font-black leading-tight">Create Account</h1>
              <p className="text-gray-600 dark:text-gray-700 text-base">Join our culinary community, Chef.</p>
            </div>

            {/* Full Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-gray-900 text-sm font-bold uppercase tracking-wide pb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-14 px-4 rounded-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-gray-900 text-sm font-bold uppercase tracking-wide pb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="chef@goldenapron.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-4 rounded-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-gray-900 text-sm font-bold uppercase tracking-wide pb-1">
                Password
              </label>
              <div className="flex w-full items-stretch">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 h-14 px-4 rounded-l-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-r-0 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-4 bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-l-0 rounded-r-lg text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center"
                >
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-gray-900 text-sm font-bold uppercase tracking-wide pb-1">
                Confirm Password
              </label>
              <div className="flex w-full items-stretch">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="flex-1 h-14 px-4 rounded-l-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-r-0 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="px-4 bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-l-0 rounded-r-lg text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center"
                >
                  {showConfirmPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="py-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 rounded border-2 border-base-300 dark:border-base-600 accent-primary cursor-pointer"
                />
                <span className="text-gray-800 dark:text-gray-800 text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-14 rounded-lg bg-secondary hover:bg-secondary/90 text-gray-900 font-black uppercase tracking-widest transition-colors shadow-md"
              >
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div className="flex justify-center text-center gap-2 pb-4 pt-2">
              <span className="text-gray-700 dark:text-gray-700 text-sm">Already have an account?</span>
              <Link href="/login" className="text-primary dark:text-secondary text-sm font-bold hover:underline">
                Sign In
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-primary/5 dark:bg-white/5 py-4 px-8 text-center">
            <p className="text-[10px] text-gray-700 dark:text-gray-700 uppercase tracking-widest font-medium">
              Secured by End-to-End Encryption • v1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
