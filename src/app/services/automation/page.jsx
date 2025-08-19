'use client';
import GlassButton from '@/utils/GlassButton';
import ServiceCard from '@/utils/ServiceCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const automationServices = [
    {
      title: 'RPA Bots for Data Entry',
      description:
        'Automate repetitive data entry tasks using Robotic Process Automation (RPA) bots to improve accuracy and save time.',
      icon: 'Bot',
      color: '#3B82F6', // blue
    },
    {
      title: 'Automated Document Processing',
      description:
        'Extract, classify, and process information from documents automatically with AI-powered document processing solutions.',
      icon: 'FileText',
      color: '#F59E0B', // amber
    },
    {
      title: 'ERP/CRM Automation',
      description:
        'Integrate and automate workflows within ERP and CRM systems to streamline operations and reduce manual workload.',
      icon: 'Layers',
      color: '#10B981', // green
    },
    {
      title: 'Business Process Optimization',
      description:
        'Analyze and optimize business processes by automating key workflows, enhancing productivity, and reducing costs.',
      icon: 'Settings',
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
            Automation & RPA – Work Smarter, Not Harder
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix automates repetitive tasks so your team can focus on
            high-value work.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Request Automation Demo" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/auto1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/auto2.jpg"
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
          {automationServices.map((service, idx) => (
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
            Reduced manual work
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/zhiiqoue.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Automation eliminates repetitive and tedious tasks, allowing
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Faster Operations
              </h1>
              <p className="text-center dark:text-white">
                Automated workflows streamline processes, reducing delays and
                ensuring tasks are completed in a fraction of the time.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
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
                Lower Operational Costs
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/ysqeagpz.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                By minimizing human effort and errors, automation helps
                organizations cut down on labor expenses and resource wastage.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Increased Accuracy
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/weqkkuwt.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Automated systems execute tasks with precision, significantly
                reducing the chances of mistakes and improving overall data
                reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
