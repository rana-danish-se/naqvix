'use client';
import GlassButton from '@/utlis/GlassButton';
import ServiceCard from '@/utlis/ServiceCard';
import UHeading from '@/utlis/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const strategyServices = [
    {
      title: 'Process Improvement & Optimization',
      description:
        'Identify inefficiencies and streamline workflows to maximize productivity and operational effectiveness.',
      icon: 'Workflow',
      color: '#3B82F6', // blue
    },
    {
      title: 'Change Management',
      description:
        'Guide organizations through transitions by managing cultural, technological, and structural changes smoothly.',
      icon: 'RefreshCw',
      color: '#F59E0B', // amber
    },
    {
      title: 'Technology Adoption Planning',
      description:
        'Develop strategic roadmaps for adopting and integrating new technologies to stay competitive in the market.',
      icon: 'MonitorSmartphone',
      color: '#10B981', // green
    },
    {
      title: 'Startup & Business Growth Consulting',
      description:
        'Provide tailored strategies for startups and enterprises to scale, innovate, and achieve sustainable growth.',
      icon: 'TrendingUp',
      color: '#8B5CF6', // purple
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
            Consulting & Strategy – Guiding Businesses to the Next Level
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix provides expert consulting to help businesses adopt
            technology, improve processes, and scale efficiently.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Book Session" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/stra1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/stra2.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR AUTOMATION SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {strategyServices.map((service, idx) => (
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
            Expert guidance at every step
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/pfvaixkr.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Get seasoned consultants who clarify priorities, de-risk decisions,
            and coach your team through discovery, planning, implementation, and
            post-launch support.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Tailored strategies for your business
              </h1>
              <p className="text-center dark:text-white">
                We analyze your goals, industry, and constraints to design
                pragmatic roadmaps that fit your budget, stack, and growth
                stage—not generic playbooks.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/qukjgmrh.json"
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
                Improved efficiency and productivity
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/rrbmabsx.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Streamlined processes, automation, and clear KPIs remove
                bottlenecks, reduce rework, and help teams deliver more in less
                time with higher quality.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Long-term business growth
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/ecngpoqo.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Sustainable plans align tech investments with revenue drivers,
                building repeatable systems for customer acquisition, retention,
                and scalable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
