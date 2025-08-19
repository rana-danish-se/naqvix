'use client';
import GlassButton from '@/utils/GlassButton';
import ServiceCard from '@/utils/ServiceCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const developmentServices = [
    {
      title: 'Web Development',
      description:
        'Custom websites, web apps, and portals built for performance.',
      icon: 'Globe',
      color: '#3B82F6',
    },
    {
      title: 'Mobile App Development',
      description: 'iOS, Android, and hybrid mobile solutions for all needs.',
      icon: 'Smartphone',
      color: '#10B981',
    },
    {
      title: 'CMS Development',
      description: 'WordPress, Shopify, and Magento tailored to your business.',
      icon: 'FileCode',
      color: '#F59E0B',
    },
    {
      title: 'E-Commerce Development',
      description: 'Scalable online stores with secure payment integrations.',
      icon: 'ShoppingCart',
      color: '#EF4444',
    },
    {
      title: 'Database Integration',
      description: 'Robust database design, integration, and management.',
      icon: 'Database',
      color: '#8B5CF6',
    },
    {
      title: 'Custom Software',
      description: 'Tailored ERP and CRM solutions to fit unique workflows.',
      icon: 'Code2',
      color: '#06B6D4',
    },
    {
      title: 'API Development',
      description:
        'Seamless API design, integration, and third-party connectivity.',
      icon: 'Plug',
      color: '#EC4899',
    },
    {
      title: 'Hosting & Security',
      description: 'Reliable hosting and enterprise-grade security solutions.',
      icon: 'Shield',
      color: '#22C55E',
    },
    {
      title: 'UI/UX Design',
      description: 'Creative design and prototyping for intuitive experiences.',
      icon: 'Palette',
      color: '#A855F7',
    },
  ];

  return (
    <main className="w-full px-10 my-10 flex flex-col">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
        <div className="flex flex-col   w-full lg:w-[60%] gap-5">
          <h1
            className="text-[7vw] md:text-[4.25vw] text-center lg:text-left font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
          >
            Development Services – Building Digital Excellence
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix creates secure, scalable, and user-friendly digital products
            that drive business growth.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Start Developing" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/dev1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/dev2.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR DEVELOPMENT SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {developmentServices.map((service, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-15 mb-10 mx-auto">
        <UHeading text={'The Advantages at a Glance'} />
      </div>
      <div className="flex gap-10 flex-col md:flex-row mt-5 mb-20">
        <div className="flex flex-col border rounded-xl  dark:border-white border-neutral-600 w-full  md:w-[40%] p-4 items-center justify-center">
          <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
            Modern, Responsive Designs
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/ailnzwyn.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Websites and apps crafted to look stunning and work seamlessly
            across all devices.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                High Performance & Security
              </h1>
              <p className="text-center dark:text-white">
                Fast, reliable, and secure solutions to keep your business
                running smoothly.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/urswgamh.json"
                trigger="hover"
                stroke="bold"
                colors={`${
                  theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                }`}
                style={{ width: 200, height: 200 }}
              ></lord-icon>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <div className="flex p-5 border rounded-xl  dark:border-white border-neutral-600 flex-col  sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Scalable Architecture
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/yvjimpju.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Systems built to grow with your business without performance
                trade-offs.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Tailored Solutions for Your Needs
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/ubpgwkmy.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Custom development that fits your unique business goals and
                workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
