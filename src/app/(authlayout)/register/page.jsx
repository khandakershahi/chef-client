'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

const RegisterPage = () => {
  const backgroundImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtu2bQRsfYLVNROFUBQBXRy_LTPH9jJNqw3Fb4dEGiBKlRfQvxaj5gDKXesqy2uFMOAutmGplxdX_xufgi_3w7JvYVGACBvBn0TJewLdkmWEYAsDSGQRWdehEdpNXpLy3RkwOUSGKQeEQKpDAY0JVOhu8UMAwxjUKLm8Pj2jLAD6aETX59FPrwSVlG6bM0ZNw_AFHJFHmb9dovDBjTIg055h5VOGfU489v6tQrYfnIuOBPJkzbCWpKNCkc-6IYy21BpwokmhY8V3k';

  const router = useRouter();
  const { signInWithCredentials, loading: authLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(process.env.NEXT_PUBLIC_DEMO_EMAIL || 'chef@goldenapron.com');
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_DEMO_PASSWORD || 'chef12345');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithCredentials(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Access request failed');
    } finally {
      setLoading(false);
    }
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
        <div className="w-full max-w-[480px] bg-white/85 dark:bg-base-content/85 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10">
          <div className="h-32 bg-primary/10 flex items-center justify-center border-b border-base-300 dark:border-white/10">
            <div className="flex flex-col items-center gap-1">
              <div className="text-4xl">🍽️</div>
              <span className="text-primary font-black tracking-widest uppercase text-xs">The Golden Apron</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-gray-900 dark:text-white text-3xl font-black leading-tight">Access Request</h1>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                Registration is closed. Use the provided staff credentials to sign in.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Demo credentials: {email} / {password}
              </p>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 px-4 rounded-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Password
              </label>
              <div className="flex w-full items-stretch">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading || authLoading}
                className="w-full h-14 rounded-lg bg-secondary hover:bg-secondary/90 disabled:bg-gray-400 text-gray-900 font-black uppercase tracking-widest transition-colors shadow-md disabled:cursor-not-allowed"
              >
                {loading ? 'Signing In...' : 'Sign In with Demo' }
              </button>
            </div>

            <div className="flex justify-center text-center gap-2 pb-4 pt-2">
              <span className="text-gray-700 dark:text-gray-300 text-sm">Prefer the login page?</span>
              <Link href="/login" className="text-primary dark:text-secondary text-sm font-bold hover:underline">
                Go to Login
              </Link>
            </div>
          </form>

          <div className="bg-primary/5 dark:bg-white/5 py-4 px-8 text-center">
            <p className="text-[10px] text-gray-700 dark:text-gray-300 uppercase tracking-widest font-medium">
              Secured by NextAuth.js • v1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
