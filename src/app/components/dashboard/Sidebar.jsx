'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaUtensils, 
  FaChartLine, 
  FaClipboardList, 
  FaUsers, 
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return pathname.includes(path);
  };

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: FaChartLine },
    { label: 'Menu Management', href: '/dashboard/menu', icon: FaUtensils },
    { label: 'Orders', href: '/dashboard/orders', icon: FaClipboardList },
    { label: 'Staff', href: '/dashboard/staff', icon: FaUsers },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-72 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 flex flex-col h-full shrink-0 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40 lg:z-0`}
      >
        {/* Logo Section */}
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-amber-700 rounded-xl size-10 flex items-center justify-center text-white">
              <FaUtensils size={20} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                Gourmet Admin
              </h1>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Staff Terminal
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  active
                    ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-l-4 border-amber-700 dark:border-amber-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-700 space-y-4">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
            onClick={() => setIsOpen(false)}
          >
            <FaCog size={18} />
            <span className="text-sm font-medium">Settings</span>
          </Link>

          {/* User Profile */}
          <div className="flex items-center gap-3 px-4">
            <div
              className="size-10 rounded-full bg-cover bg-center border-2 border-gray-200 dark:border-slate-600"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgM2HHHc8IXO7CX4wlAtY-FyQpktJyuYyGMB1p_JxQaImQrnUl5b_Pi-hWCJNKygfUtqRVFrFBYlQdyKyMqghI3Ae4Cc7UIV32E7HPszJFXQkzIk7CmaXXvE11VHR8uiCAbqSKZc8jtREJrVPOhRHwYyIglA9hgCvZ-7uiRbkvRHlJL2sipfRPf2-ByDKdwrk0S2fGCO7eM3FoqU_j1o5tHdPzRSx9uXAoNjfLUX4MBqyFhBEGyvhZGYCjToJKmK0AFmWFb-Hyk6c')`,
              }}
            />
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white">Chef Julian</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Executive Chef</p>
            </div>
          </div>

          {/* Logout Button */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-all">
            <FaSignOutAlt size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
