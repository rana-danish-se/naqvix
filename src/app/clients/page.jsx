'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';

import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';
import GlassButton from '@/utils/GlassButton';

const ClientLogo = ({ src, alt, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <GlassmorphismCard className="h-32 w-full flex items-center justify-center group cursor-pointer p-2 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden rounded-2xl">
        {/* Image Wrapper */}
        <div className="w-full h-full">
          <img
            src={src}
            alt={alt}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            className={`
              w-full h-full object-cover object-center
              transition-transform duration-300
              ${imageLoaded ? 'opacity-100' : 'opacity-100'}
              group-hover:scale-110 group-hover:opacity-100
              filter contrast-125 saturate-110
              dark:brightness-110 dark:contrast-125
            `}
            style={{
              transform: 'scale(1.5)',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      </GlassmorphismCard>
    </div>
  );
};
const TestimonialCard = ({ quote, author, company, rating, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 200);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <GlassmorphismCard className="h-full">
        <div className="flex flex-col h-full">
          <Quote className="w-8 h-8 text-blue-500 mb-4" />
          <p className="text-gray-800/90 dark:text-white/90 text-lg leading-relaxed mb-6 flex-grow">
            "{quote}"
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {author}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {company}
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </GlassmorphismCard>
    </div>
  );
};

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return prev + Math.ceil((number - prev) / 10);
          }
          return number;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <GlassmorphismCard className="text-center">
        <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent mb-2">
          {count}+
        </div>
        <div className="text-gray-700 dark:text-gray-300 font-medium">
          {label}
        </div>
      </GlassmorphismCard>
    </div>
  );
};

export default function OurClientsPage() {
  const [isDark, setIsDark] = useState(false);

  // Client data - all 39 clients with correct numbering (1.png to 39.png)
  const clients = [
    { src: '/assets/clients/1.png', alt: 'Client 1' },
    { src: '/assets/clients/2.png', alt: 'Client 2' },
    { src: '/assets/clients/3.png', alt: 'Client 3' },
    { src: '/assets/clients/4.png', alt: 'Client 4' },
    { src: '/assets/clients/5.png', alt: 'Client 5' },
    { src: '/assets/clients/6.png', alt: 'Client 6' },
    { src: '/assets/clients/7.png', alt: 'Client 7' },
    { src: '/assets/clients/8.png', alt: 'Client 8' },
    { src: '/assets/clients/9.png', alt: 'Client 9' },
    { src: '/assets/clients/10.png', alt: 'Client 10' },
    { src: '/assets/clients/11.png', alt: 'Client 11' },
    { src: '/assets/clients/12.png', alt: 'Client 12' },
    { src: '/assets/clients/13.png', alt: 'Client 13' },
    { src: '/assets/clients/14.png', alt: 'Client 14' },
    { src: '/assets/clients/15.png', alt: 'Client 15' },
    { src: '/assets/clients/16.png', alt: 'Client 16' },
    { src: '/assets/clients/17.png', alt: 'Client 17' },
    { src: '/assets/clients/18.png', alt: 'Client 18' },
    { src: '/assets/clients/19.png', alt: 'Client 19' },
    { src: '/assets/clients/20.png', alt: 'Client 20' },
    { src: '/assets/clients/21.png', alt: 'Client 21' },
    { src: '/assets/clients/22.png', alt: 'Client 22' },
    { src: '/assets/clients/23.png', alt: 'Client 23' },
    { src: '/assets/clients/24.png', alt: 'Client 24' },
    { src: '/assets/clients/25.png', alt: 'Client 25' },
    { src: '/assets/clients/26.png', alt: 'Client 26' },
    { src: '/assets/clients/27.png', alt: 'Client 27' },
    { src: '/assets/clients/28.png', alt: 'Client 28' },
    { src: '/assets/clients/29.png', alt: 'Client 29' },
    { src: '/assets/clients/30.png', alt: 'Client 30' },
    { src: '/assets/clients/31.png', alt: 'Client 31' },
    { src: '/assets/clients/32.png', alt: 'Client 32' },
    { src: '/assets/clients/33.png', alt: 'Client 33' },
    { src: '/assets/clients/34.png', alt: 'Client 34' },
    { src: '/assets/clients/35.png', alt: 'Client 35' },
    { src: '/assets/clients/36.png', alt: 'Client 36' },
    { src: '/assets/clients/37.png', alt: 'Client 37' },
    { src: '/assets/clients/38.png', alt: 'Client 38' },
    { src: '/assets/clients/39.png', alt: 'Client 39' },
  ];

  const testimonials = [
    {
      quote:
        'Naqvix transformed our business processes with their innovative AI solutions. The efficiency gains have been remarkable.',
      author: 'Sarah Johnson',
      company: 'ROADSIDER',
      rating: 5,
    },
    {
      quote:
        'Their BPO services are exceptional. Professional, reliable, and they truly understand our business needs.',
      author: 'Ahmed Hassan',
      company: 'REHAISH',
      rating: 5,
    },
    {
      quote:
        'The IT consulting provided by Naqvix helped us modernize our entire infrastructure. Highly recommended!',
      author: 'Maria Rodriguez',
      company: 'DIGITAL LAB',
      rating: 5,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'dark bg-black' : 'bg-white'
      }`}
    >
      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 px-8 dark:bg-[#0F0E0E]">
        <div className="max-w-6xl mx-auto text-center">
          <UHeading text="OUR CLIENTS" />
          <div className="max-w-3xl mx-auto mb-16">
            <GlassmorphismCard>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by businesses worldwide
              </h2>
              <p className="text-lg text-gray-800/90 dark:text-white/90 leading-relaxed">
                We've partnered with industry leaders across the globe to
                deliver cutting-edge technology solutions, AI implementations,
                and business process optimizations that drive real results.
              </p>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-8  dark:bg-[#0F0E0E]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <StatCard
              icon={Users}
              number={150}
              label="Happy Clients"
              delay={0}
            />
            <StatCard
              icon={TrendingUp}
              number={250}
              label="Projects Completed"
              delay={1}
            />
            <StatCard
              icon={Award}
              number={98}
              label="Success Rate %"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="w-full py-16 px-8  dark:bg-[#0F0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent mb-4">
              Brands That Trust Us
            </h2>
            <p className="text-lg text-gray-800/90 dark:text-white/90">
              From startups to Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <ClientLogo
                key={client.alt}
                src={client.src}
                alt={client.alt}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 px-8  dark:bg-[#0F0E0E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-800/90 dark:text-white/90">
              Real feedback from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full py-16 px-8  dark:bg-[#0F0E0E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-800/90 dark:text-white/90 mb-8">
              Transforming businesses through innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphismCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                AI-Powered Process Automation
              </h3>
              <p className="text-gray-800/90 dark:text-white/90 mb-6">
                Helped a leading logistics company reduce processing time by 70%
                through custom AI solutions and automated workflows, resulting
                in $2M+ annual savings.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                  AI Solutions
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                  Process Optimization
                </span>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Digital Transformation Initiative
              </h3>
              <p className="text-gray-800/90 dark:text-white/90 mb-6">
                Modernized IT infrastructure for a manufacturing giant,
                implementing cloud solutions and business intelligence tools
                that improved operational efficiency by 45%.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                  Cloud Migration
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 px-3 py-1 rounded-full">
                  IT Consulting
                </span>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-8  dark:bg-[#0F0E0E]">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphismCard>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-gray-800/90 dark:text-white/90 mb-8">
              Let's discuss how we can help transform your business with our
              proven solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton>Start Your Project</GlassButton>
              <GlassButton>Schedule Consultation</GlassButton>
            </div>
          </GlassmorphismCard>
        </div>
      </section>
    </div>
  );
}
