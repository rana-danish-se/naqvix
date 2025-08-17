'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const icons = [
    { Icon: Facebook, color: '#3b5998', label: 'Facebook' },
    { Icon: Instagram, color: '#E1306C', label: 'Instagram' },
    { Icon: Linkedin, color: '#0A66C2', label: 'LinkedIn' },
    { Icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
  ];

  const iconStyle =
    'w-6 h-6 text-blue-500 dark:text-blue-400 transition-all duration-500 group-hover:animate-pulse';

  return (
    <footer className="relative rounded-2xl w-full p-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-xl opacity-30 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-white/20 dark:bg-zinc-900/30 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 pointer-events-none"></div>

      <div className="relative flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <Image
            src="/assets/logo.png"
            width={200}
            height={200}
            alt="Naqvix Logo"
            className="relative z-10"
          />
          <p
            className="w-full text-right md:w-3/4 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500 relative z-10"
          >
            Empowering Businesses with Technology, Intelligence, and Innovation
          </p>
        </div>

        <hr className="w-full border-t border-white/20 dark:border-white/10" />

        <div className="flex justify-between w-full flex-wrap gap-8 relative z-10">
          {/* Links */}
          <div className="flex flex-col gap-2 text-gray-800 dark:text-gray-200">
            <h5 className="text-xl font-bold mb-2 dark:text-white text-purple-400">
              Links
            </h5>
            {['HOME', 'ABOUT', 'SERVICES', 'COMMUNITY','BLOGS', 'CONTACT US'].map(
              (link, i) => (
                <Link
                  key={i}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-200">
            <h5 className="text-xl font-bold mb-2 dark:text-white text-purple-400">
              Contacts
            </h5>
            <div className="flex items-center gap-3 group">
              <Mail className={iconStyle} />
              <span>info@naqvix.com</span>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className={iconStyle} />
              <span>+92 123 4567890</span>
            </div>
            <div className="flex items-center gap-3 group">
              <MapPin className={iconStyle} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 items-center justify-center">
            {icons.map(({ Icon, color, label }, idx) => (
              <div
                key={idx}
                className="relative group w-12 h-12 flex items-center justify-center"
              >
                <span
                  className="absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle, ${color}55 0%, transparent 70%)`,
                  }}
                ></span>
                <Icon
                  size={28}
                  color={color}
                  aria-label={label}
                  className="relative z-10"
                />
              </div>
            ))}
          </div>
        </div>

        <hr className="w-full border-t border-white/20 dark:border-white/10" />

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4 relative z-10">
          © {new Date().getFullYear()} Naqvix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
