'use client'; // Pastikan ini Client Component karena menggunakan localStorage dan event

import React, { useEffect, useState } from 'react';

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42" />
    </g>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    />
  </svg>
);

export default function Footer({ copyrightText = '© 2025 Your Blog Name. All rights reserved.' }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    // Deteksi tema awal saat komponen mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default: ikuti sistem
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme('system');
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <footer className="flex flex-col items-center py-16 mt-20 border-t border-gray-200 dark:border-gray-800">
      <p className="mb-8 text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 opacity-80">
        {copyrightText}
      </p>

      <div className="flex items-center justify-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm">
        <button
          type="button"
          aria-label="Aktifkan mode gelap"
          aria-pressed={!isDark}
          onClick={() => toggleTheme('dark')}
          className={`flex items-center justify-center w-28 h-11 rounded-full transition-all duration-300 ${
            isDark ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {moonIcon}
          <span className="ml-2 text-sm font-medium">Dark</span>
        </button>

        <button
          type="button"
          aria-label="Aktifkan mode terang"
          aria-pressed={isDark}
          onClick={() => toggleTheme('light')}
          className={`flex items-center justify-center w-28 h-11 rounded-full transition-all duration-300 ${
            !isDark ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {sunIcon}
          <span className="ml-2 text-sm font-medium">Light</span>
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-500 dark:text-gray-600">
        Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
