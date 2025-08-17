'use client';
import GlassButton from '@/utlis/GlassButton';
import ServiceCard from '@/utlis/ServiceCard';
import UHeading from '@/utlis/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const dataAnalyticsServices = [
    {
      title: 'Business Intelligence Dashboards',
      description: 'Interactive dashboards for real-time decision-making.',
      icon: 'BarChart',
      color: '#3B82F6',
    },
    {
      title: 'Big Data Analytics',
      description: 'Process and analyze massive datasets for deeper insights.',
      icon: 'Database',
      color: '#F59E0B',
    },
    {
      title: 'Data Warehousing',
      description:
        'Centralized storage solutions for structured data management.',
      icon: 'Server',
      color: '#10B981',
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage forecasting models to anticipate future trends.',
      icon: 'TrendingUp',
      color: '#8B5CF6',
    },
    {
      title: 'Data Cleaning',
      description: 'Standardize and refine datasets for improved accuracy.',
      icon: 'Sliders',
      color: '#EF4444',
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
            Data & Analytics – Insights that Drive Growth
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Data is power — and Naqvix turns it into your competitive advantage.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Get Data Consultation" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/data1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/data2.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR ANALYTICS SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {dataAnalyticsServices.map((service, idx) => (
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
            Data Driven Decisions
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/jdgfsfzr.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Make smarter business moves backed by accurate insights.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Identify trends and opportunities
              </h1>
              <p className="text-center dark:text-white">
                Spot market shifts early to stay ahead of competition.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/lbcxnxti.json"
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
                Reduce Risks
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/cfoaotmk.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Minimize uncertainty with predictive data models.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Clear visual reports
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/hmpomorl.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Understand complex data through easy-to-read dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
