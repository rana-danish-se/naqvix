'use client';
import GlassButton from '@/utlis/GlassButton';
import ServiceCard from '@/utlis/ServiceCard';
import UHeading from '@/utlis/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const bpoServices = [
    {
      title: 'Back Office',
      description:
        'Efficient data entry, documentation, and admin support services.',
      icon: 'FileText',
      color: '#3B82F6',
    },
    {
      title: 'Front Desk',
      description: 'Professional virtual reception and front desk management.',
      icon: 'User',
      color: '#EC4899',
    },
    {
      title: 'Medical BPO',
      description: 'Billing, transcription, and claims management solutions.',
      icon: 'Heart',
      color: '#8B5CF6',
    },
    {
      title: 'Live Chat Support',
      description:
        'Real-time messaging support for enhanced customer engagement.',
      icon: 'MessageCircle',
      color: '#10B981',
    },
    {
      title: 'Call Center',
      description:
        'Inbound and outbound call handling with professional agents.',
      icon: 'Headset',
      color: '#F59E0B',
    },
    {
      title: 'Omni-Channel',
      description:
        'Support across phone, email, chat, and social media platforms.',
      icon: 'Globe',
      color: '#06B6D4',
    },
    {
      title: 'Tech Support',
      description: 'Technical helpdesk to resolve customer issues efficiently.',
      icon: 'Cpu',
      color: '#EF4444',
    },
  ];
  const kpoServices = [
    {
      title: 'Market Research',
      description:
        'Gain actionable insights with thorough market research and competitive analysis.',
      icon: 'TrendingUp', // Lucide icon
      color: '#3B82F6',
      link: '/services/market-research',
    },
    {
      title: 'Data Analytics',
      description:
        'Transform data into meaningful business insights for smarter decisions.',
      icon: 'BarChart3', // Lucide icon
      color: '#10B981',
      link: '/services/data-analytics',
    },
    {
      title: 'Legal Outsourcing',
      description: 'Efficient handling of legal processes with expert support.',
      icon: 'FileText', // Lucide icon
      color: '#F59E0B',
      link: '/services/legal-outsourcing',
    },
    {
      title: 'Business Strategy',
      description:
        'Plan and execute strategies for sustainable business growth.',
      icon: 'Lightbulb', // Lucide icon
      color: '#8B5CF6',
      link: '/services/business-strategy',
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
            BPO & KPO Services Smart Outsourcing for Smarter Businesses
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix delivers high-quality Business Process Outsourcing (BPO) and
            Knowledge Process Outsourcing (KPO) solutions that save time, reduce
            costs, and improve customer satisfaction. Our team ensures your
            business runs efficiently while you focus on growth.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Boost Your Business" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/bpo2.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/bpo1.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR BPO SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {bpoServices.map((service, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR KPO SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {kpoServices.map((service, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-15 mb-10 mx-auto'>
        <UHeading text={'The Advantages at a Glance'} />
      </div>
      <div className="flex gap-10 flex-col md:flex-row mt-5 mb-20">
        <div className="flex flex-col border rounded-xl  dark:border-white border-neutral-600 w-full  md:w-[40%] p-4 items-center justify-center">
          <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
            Reduced Operational Costs
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/bsdkzyjd.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Cut expenses while maintaining efficiency through our optimized
            service solutions.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[40%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Access to Skilled Professionals
              </h1>
              <p className="text-center dark:text-white">
                Work with experienced experts who bring knowledge and precision
                to every task.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/srupsmbe.json"
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
                24/7 Availability for Global Clients
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/warimioc.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Enjoy uninterrupted support around the clock, no matter where
                your business operates.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Scalable Solutions
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/glzqezmf.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Easily adjust services to match your growth and changing
                business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
