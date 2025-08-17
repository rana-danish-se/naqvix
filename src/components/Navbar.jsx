'use client';
import Switch from '@/utlis/Switch';
import Image from 'next/image';
import React, { useState, useEffect, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/AppContext';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full px-6 py-4 transition-colors duration-1000  dark:bg-[#0F0E0E] flex items-center justify-between">
      <div className="relative">
        {/* Radiant Glow */}
        {theme === 'dark' && (
          <div className="absolute -top-5 -left-5 w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
        )}

        {/* Logo */}
        <Image
          src="/assets/logo.png"
          width={200}
          height={50}
          alt="logo"
          className="relative z-10"
        />
      </div>

      <nav className="flex items-center justify-center gap-10">
        <ul className="flex items-center justify-center gap-5 text-zinc-600 dark:text-neutral-400 text-[14px]">
          <li className="dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900">
            HOME
          </li>
          <li className="dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900">
            ABOUT
          </li>
          <li className="dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900">
            WHY CHOOSE US
          </li>
          <li className="group dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900 flex items-center justify-center">
            SERVICES
            <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
          </li>

          <li className="dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900">
            TEAM
          </li>
          <li className="dark:hover:text-neutral-300 cursor-pointer hover:text-zinc-900">
            CONTACT
          </li>
        </ul>
        <div className="flex items-center justify-center gap-5">
          <lord-icon
            src="https://cdn.lordicon.com/rpviwvwn.json"
            trigger="hover"
            colors={`${
              theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
            }`}
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>

          {/* Pass setTheme down so Switch can toggle */}
          <Switch theme={theme} setTheme={setTheme} size="xs" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
