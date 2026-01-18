'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const backgroundImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtu2bQRsfYLVNROFUBQBXRy_LTPH9jJNqw3Fb4dEGiBKlRfQvxaj5gDKXesqy2uFMOAutmGplxdX_xufgi_3w7JvYVGACBvBn0TJewLdkmWEYAsDSGQRWdehEdpNXpLy3RkwOUSGKQeEQKpDAY0JVOhu8UMAwxjUKLm8Pj2jLAD6aETX59FPrwSVlG6bM0ZNw_AFHJFHmb9dovDBjTIg055h5VOGfU489v6tQrYfnIuOBPJkzbCWpKNCkc-6IYy21BpwokmhY8V3k';

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // TODO: Implement actual login logic
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
      {/* Login Card */}
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
            <h1 className="text-gray-900 dark:text-gray-900 text-3xl font-black leading-tight">Staff Portal</h1>
            <p className="text-gray-600 dark:text-gray-700 text-base italic">Welcome back to the kitchen, Chef.</p>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-900 dark:text-gray-900 text-sm font-bold uppercase tracking-wide pb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="chef@goldenapron.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between py-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-2 border-base-300 dark:border-base-600 accent-primary cursor-pointer"
              />
              <span className="text-gray-800 dark:text-gray-800 text-sm font-medium">Remember me</span>
            </label>
            <Link href="/register" className="text-primary dark:text-secondary text-sm font-bold hover:underline">
              Create Account
            </Link>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-14 rounded-lg bg-secondary hover:bg-secondary/90 text-gray-900 font-black uppercase tracking-widest transition-colors shadow-md"
            >
              Sign In
            </button>
          </div>

          {/* Back Button */}
          <div className="flex justify-center pb-4 pt-2">
            <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-700 text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">
              <span>←</span>
              <span>Back to Website</span>
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

export default LoginPage;
