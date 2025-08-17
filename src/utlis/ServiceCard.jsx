'use client';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, color, link }) => {
  const [hovered, setHovered] = useState(false);

  const IconComponent = Icons[icon]|| Icons['Circle'];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setTimeout(() => setHovered(false), 5000)} // 5s fade
      className="p-6 rounded-2xl border dark:border-zinc-700 
                 bg-zinc-50 dark:bg-zinc-900 
                 shadow-md transition-all duration-500 hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <div
          className="p-3 rounded-xl transition-all duration-[5000ms] ease-in-out"
          style={{
            background: hovered
              ? `radial-gradient(circle, ${color}66 0%, transparent 90%)`
              : 'transparent',
            transform: hovered ? 'scale(1.15)' : 'scale(1)', // small pulse on hover
          }}
        >
          <IconComponent size={36} color={color} />
        </div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      <p className="text-sm text-gray-600 dark:text-zinc-400 mt-3">
        {description}
      </p>

      {link && (
        <Link
          href={link}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium 
                   text-blue-600 dark:text-blue-400 hover:underline"
        >
          Explore More →
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
