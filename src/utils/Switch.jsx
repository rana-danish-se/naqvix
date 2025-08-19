import  { useEffect, useRef } from 'react';
import { Sun, Moon, Stars } from 'lucide-react';

// Reusable Switch Component
const Switch = ({ theme, setTheme, size = 'md', className = '' }) => {
  const sliderRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const starsRef = useRef(null);

  const isDark = theme === 'dark';

  // Size variants
  const sizes = {
    xs: { width: 'w-12', height: 'h-6', slider: 'w-4 h-4', translate: 'translate-x-6', icon: 'w-2 h-2' },
    sm: { width: 'w-16', height: 'h-8', slider: 'w-6 h-6', translate: 'translate-x-8', icon: 'w-3 h-3' },
    md: { width: 'w-20', height: 'h-10', slider: 'w-8 h-8', translate: 'translate-x-10', icon: 'w-4 h-4' },
    lg: { width: 'w-24', height: 'h-12', slider: 'w-10 h-10', translate: 'translate-x-12', icon: 'w-5 h-5' },
    xl: { width: 'w-32', height: 'h-16', slider: 'w-12 h-12', translate: 'translate-x-16', icon: 'w-6 h-6' }
  };

  const currentSize = sizes[size];

  // GSAP-like animation function
  const animate = (element, properties, duration = 0.3) => {
    if (!element) return;
    
    const startTime = performance.now();
    const startValues = {};
    
    Object.keys(properties).forEach(prop => {
      if (prop === 'scale') {
        startValues[prop] = parseFloat(element.style.transform?.match(/scale\(([^)]+)\)/)?.[1] || '1');
      } else if (prop === 'rotate') {
        startValues[prop] = parseFloat(element.style.transform?.match(/rotate\(([^)]+)deg\)/)?.[1] || '0');
      } else if (prop === 'opacity') {
        startValues[prop] = parseFloat(element.style.opacity || '1');
      }
    });

    const animateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      Object.keys(properties).forEach(prop => {
        const start = startValues[prop];
        const end = properties[prop];
        const current = start + (end - start) * easeProgress;

        if (prop === 'scale') {
          const existingTransform = element.style.transform?.replace(/scale\([^)]+\)/, '') || '';
          element.style.transform = `scale(${current}) ${existingTransform}`.trim();
        } else if (prop === 'rotate') {
          const existingTransform = element.style.transform?.replace(/rotate\([^)]+deg\)/, '') || '';
          element.style.transform = `rotate(${current}deg) ${existingTransform}`.trim();
        } else if (prop === 'opacity') {
          element.style.opacity = current.toString();
        }
      });

      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      }
    };

    requestAnimationFrame(animateFrame);
  };

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);

    // Animate the slider with squeeze effect
    if (sliderRef.current) {
      animate(sliderRef.current, { scale: 0.9 }, 0.1);
      setTimeout(() => {
        animate(sliderRef.current, { scale: 1 }, 0.2);
      }, 100);
    }

    // Animate icons based on new theme
    if (newTheme === 'dark') {
      // Switching to dark mode
      if (sunRef.current) {
        animate(sunRef.current, { scale: 0, rotate: 180, opacity: 0 }, 0.3);
      }
      if (moonRef.current) {
        setTimeout(() => {
          animate(moonRef.current, { scale: 1, rotate: 0, opacity: 1 }, 0.4);
        }, 150);
      }
      if (starsRef.current) {
        setTimeout(() => {
          animate(starsRef.current, { scale: 1, opacity: 0.8 }, 0.5);
        }, 300);
      }
    } else {
      // Switching to light mode
      if (moonRef.current) {
        animate(moonRef.current, { scale: 0, rotate: -180, opacity: 0 }, 0.3);
      }
      if (starsRef.current) {
        animate(starsRef.current, { scale: 0, opacity: 0 }, 0.2);
      }
      if (sunRef.current) {
        setTimeout(() => {
          animate(sunRef.current, { scale: 1, rotate: 0, opacity: 1 }, 0.4);
        }, 150);
      }
    }
  };

  useEffect(() => {
    // Initial setup based on current theme
    if (sunRef.current && moonRef.current && starsRef.current) {
      if (isDark) {
        sunRef.current.style.transform = 'scale(0) rotate(180deg)';
        sunRef.current.style.opacity = '0';
        moonRef.current.style.transform = 'scale(1) rotate(0deg)';
        moonRef.current.style.opacity = '1';
        starsRef.current.style.transform = 'scale(1)';
        starsRef.current.style.opacity = '0.8';
      } else {
        sunRef.current.style.transform = 'scale(1) rotate(0deg)';
        sunRef.current.style.opacity = '1';
        moonRef.current.style.transform = 'scale(0) rotate(-180deg)';
        moonRef.current.style.opacity = '0';
        starsRef.current.style.transform = 'scale(0)';
        starsRef.current.style.opacity = '0';
      }
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-full blur-lg transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-r from-purple-500/20 to-violet-500/20' 
          : 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
      }`} style={{ transform: 'scale(1.2)' }}></div>

      {/* Main Toggle Button */}
      <button
        onClick={handleToggle}
        className={`relative ${currentSize.width} ${currentSize.height} rounded-full p-1 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 ${
          isDark 
            ? 'bg-gradient-to-r from-slate-700 to-slate-800 focus:ring-purple-400/50 shadow-lg shadow-purple-500/10' 
            : 'bg-gradient-to-r from-blue-200 to-cyan-200 focus:ring-blue-400/50 shadow-lg shadow-blue-500/10'
        }`}
      >
        {/* Slider with Translation */}
        <div
          ref={sliderRef}
          className={`${currentSize.slider} rounded-full transition-all duration-500 ease-out flex items-center justify-center transform ${
            isDark 
              ? `${currentSize.translate} bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-slate-900/20` 
              : 'translate-x-0 bg-gradient-to-br from-white to-yellow-50 shadow-lg shadow-yellow-400/20'
          }`}
        >
          {/* Sun Icon */}
          <Sun
            ref={sunRef}
            className={`absolute ${currentSize.icon} transition-all duration-300 ${
              isDark ? 'text-yellow-400' : 'text-orange-500'
            }`}
          />

          {/* Moon Icon */}
          <Moon
            ref={moonRef}
            className={`absolute ${currentSize.icon} text-slate-200 transition-all duration-300`}
          />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {/* Stars for dark mode */}
          <Stars
            ref={starsRef}
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 ${
              size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-4 h-4' : size === 'xl' ? 'w-5 h-5' : 'w-3 h-3'
            } text-purple-300`}
          />
          
          {/* Additional star dots */}
          <div className={`absolute top-1/4 right-3 rounded-full transition-all duration-700 ${
            isDark ? 'bg-purple-300' : 'bg-transparent'
          } ${size === 'sm' ? 'w-0.5 h-0.5' : 'w-1 h-1'}`}></div>
          
          <div className={`absolute top-3/4 right-4 rounded-full transition-all duration-700 delay-100 ${
            isDark ? 'bg-violet-300' : 'bg-transparent'
          } ${size === 'sm' ? 'w-0.5 h-0.5' : 'w-1 h-1'}`}></div>

          {/* Sun rays for light mode */}
          <div className={`absolute top-1/4 left-3 rounded-full transition-all duration-700 ${
            !isDark ? 'bg-yellow-300 animate-pulse' : 'bg-transparent'
          } ${size === 'sm' ? 'w-0.5 h-0.5' : 'w-1 h-1'}`}></div>
          
          <div className={`absolute bottom-1/4 left-4 rounded-full transition-all duration-700 delay-100 ${
            !isDark ? 'bg-orange-300 animate-pulse' : 'bg-transparent'
          } ${size === 'sm' ? 'w-0.5 h-0.5' : 'w-1 h-1'}`}></div>
        </div>
      </button>
    </div>
  );
};

export default Switch