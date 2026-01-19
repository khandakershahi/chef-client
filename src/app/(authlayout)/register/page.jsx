'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaImage } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

const RegisterPage = () => {
  const backgroundImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtu2bQRsfYLVNROFUBQBXRy_LTPH9jJNqw3Fb4dEGiBKlRfQvxaj5gDKXesqy2uFMOAutmGplxdX_xufgi_3w7JvYVGACBvBn0TJewLdkmWEYAsDSGQRWdehEdpNXpLy3RkwOUSGKQeEQKpDAY0JVOhu8UMAwxjUKLm8Pj2jLAD6aETX59FPrwSVlG6bM0ZNw_AFHJFHmb9dovDBjTIg055h5VOGfU489v6tQrYfnIuOBPJkzbCWpKNCkc-6IYy21BpwokmhY8V3k';

  const router = useRouter();
  const { signUp, loading: authLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');

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

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      if (!formData.agreeTerms) {
        setError('Please agree to the Terms of Service');
        setLoading(false);
        return;
      }

      // Sign up with image
      await signUp(formData.email, formData.password, formData.fullName, photoFile);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to create account');
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
              <h1 className="text-gray-900 dark:text-white text-3xl font-black leading-tight">Create Account</h1>
              <p className="text-gray-600 dark:text-gray-300 text-base">Join our culinary community, Chef.</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Profile Photo Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Profile Photo (Optional)
              </label>
              <div className="flex gap-4 items-start">
                {photoPreview ? (
                  <div className="relative">
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="w-20 h-20 rounded-lg object-cover border-2 border-primary"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoFile(null);
                        setPhotoPreview('');
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-lg bg-gray-200 dark:bg-base-600 flex items-center justify-center">
                    <FaImage size={24} className="text-gray-400" />
                  </div>
                )}
                <div className="flex-1">
                  <label className="block">
                    <span className="sr-only">Choose photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="block w-full text-sm text-gray-500 dark:text-gray-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-primary/90
                        cursor-pointer"
                    />
                  </label>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    JPG, PNG up to 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Full Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                disabled={loading}
                className="w-full h-14 px-4 rounded-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all disabled:opacity-50"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="chef@goldenapron.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full h-14 px-4 rounded-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all disabled:opacity-50"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Password
              </label>
              <div className="flex w-full items-stretch">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  className="flex-1 h-14 px-4 rounded-l-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-r-0 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="px-4 bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-l-0 rounded-r-lg text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wide pb-1">
                Confirm Password
              </label>
              <div className="flex w-full items-stretch">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={loading}
                  className="flex-1 h-14 px-4 rounded-l-lg text-base-content bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-r-0 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-base-content/50 transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={loading}
                  className="px-4 bg-white dark:bg-base-200 border border-base-300 dark:border-base-600 border-l-0 rounded-r-lg text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center disabled:opacity-50"
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
                  disabled={loading}
                  className="w-4 h-4 mt-1 rounded border-2 border-base-300 dark:border-base-600 accent-primary cursor-pointer disabled:opacity-50"
                />
                <span className="text-gray-800 dark:text-white text-sm">
                  I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading || authLoading}
                className="w-full h-14 rounded-lg bg-secondary hover:bg-secondary/90 disabled:bg-gray-400 text-gray-900 font-black uppercase tracking-widest transition-colors shadow-md disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            {/* Login Link */}
            <div className="flex justify-center text-center gap-2 pb-4 pt-2">
              <span className="text-gray-700 dark:text-gray-300 text-sm">Already have an account?</span>
              <Link href="/login" className="text-primary dark:text-secondary text-sm font-bold hover:underline">
                Sign In
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-primary/5 dark:bg-white/5 py-4 px-8 text-center">
            <p className="text-[10px] text-gray-700 dark:text-gray-300 uppercase tracking-widest font-medium">
              Secured by End-to-End Encryption • v1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
