'use client';
import Switch from '@/utlis/Switch';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/AppContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Headset,
  Megaphone,
  Brain,
  Code2,
  Wallet,
  BarChart3,
  Bot,
  Lightbulb,
} from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'BLOGS', href: '/blogs' },
    { label: 'SERVICES', href: '/services', hasDropdown: true },
    { label: 'TEAM', href: '/team' },
    { label: 'COMMUNITY', href: '/community' },
    { label: 'CLIENTS', href: '/clients' },
    { label: 'CONTACT', href: '/contact' },
  ];
  const services = [

    {
      title: 'BPO / KPO Services',
      icon: Headset,
      color: '#3B82F6',
      link: '/services/bpo-kpo',
    },
    {
      title: 'Marketing Solutions',
      icon: Megaphone,
      color: '#EC4899',
      link: '/services/marketing',
    },
    {
      title: 'Artificial Intelligence Solutions',
      icon: Brain,
      color: '#8B5CF6',
      link: '/services/artificial-intelligence',
    },
    {
      title: 'Development Services',
      icon: Code2,
      color: '#10B981',
      link: '/services/development',
    },
    {
      title: 'Finance & Accounting',
      icon: Wallet,
      color: '#F59E0B',
      link: '/services/finance',
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: '#06B6D4',
      link: '/services/data-analytics',
    },
    {
      title: 'Automation & RPA',
      icon: Bot,
      color: '#EF4444',
      link: '/services/automation',
    },
    {
      title: 'Consulting & Strategy',
      icon: Lightbulb,
      color: '#A855F7',
      link: '/services/strategy',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

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

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center gap-10">
        <ul className="flex items-center justify-center gap-2 text-zinc-600 dark:text-neutral-400 text-[14px] relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`relative px-2 py-1 rounded-md transition-all cursor-pointer flex items-center justify-center 
                hover:text-zinc-900 dark:hover:text-neutral-300
                ${
                  isActive
                    ? "text-zinc-900 dark:text-neutral-200 before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-yellow-500 before:blur-md before:opacity-40 before:-z-10"
                    : ''
                }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:animate-bounce" />
                  )}
                </Link>

                {/* Dropdown for SERVICES */}
                {link.hasDropdown && (
                  <div className="absolute w-[500px] left-0 top-full mt-3 hidden group-hover:grid grid-cols-2 gap-x-4 gap-y-3 bg-white dark:bg-neutral-900 p-5 rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700 z-50">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.link}
                          href={service.link}
                          className="relative flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:scale-105"
                        >
                          {/* Glow background */}
                          <span
                            className="absolute inset-0 rounded-md blur-md opacity-30 -z-10"
                            style={{ backgroundColor: service.color }}
                          ></span>

                          {/* Icon */}
                          <Icon
                            className="w-5 h-5"
                            style={{ color: service.color }}
                          />

                          {/* Title */}
                          <span className="text-sm font-medium text-zinc-700 dark:text-neutral-300">
                            {service.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
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

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/rpviwvwn.json"
          trigger="hover"
          colors={`${
            theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
          }`}
          style={{ width: '30px', height: '30px' }}
        ></lord-icon>

        <Switch theme={theme} setTheme={setTheme} size="xs" />

        {/* Hamburger/Cross Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-zinc-600 dark:text-neutral-400 hover:text-zinc-900 dark:hover:text-neutral-300 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transform transition-transform duration-300 rotate-180" />
          ) : (
            <Menu className="w-6 h-6 transform transition-transform duration-300 rotate-0" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 text-zinc-600 dark:text-neutral-400 hover:text-zinc-900 dark:hover:text-neutral-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Menu Items */}
          <div className="mt-12 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServices}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all text-left
                          hover:text-zinc-900 dark:hover:text-neutral-300
                          ${
                            isActive
                              ? "text-zinc-900 dark:text-neutral-200 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-opacity-10"
                              : 'text-zinc-600 dark:text-neutral-400'
                          }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : 'rotate-0'
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-4 pt-2 space-y-2">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.link}
                                href={service.link}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:scale-105"
                              >
                                <Icon
                                  className="w-4 h-4"
                                  style={{ color: service.color }}
                                />
                                <span className="text-sm text-zinc-600 dark:text-neutral-400">
                                  {service.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-md transition-all
                        hover:text-zinc-900 dark:hover:text-neutral-300
                        ${
                          isActive
                            ? "text-zinc-900 dark:text-neutral-200 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-opacity-10"
                            : 'text-zinc-600 dark:text-neutral-400'
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;