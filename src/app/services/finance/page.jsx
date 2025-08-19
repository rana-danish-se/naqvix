'use client';
import GlassButton from '@/utils/GlassButton';
import ServiceCard from '@/utils/ServiceCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const financeServices = [
    {
      title: 'Bookkeeping Services',
      description:
        'Accurate bookkeeping to keep your financial records clean and organized.',
      icon: 'Notebook',
      color: '#3B82F6',
    },
    {
      title: 'Underwriting Support',
      description:
        'Reliable support for loan processing, risk assessment, and approvals.',
      icon: 'ShieldCheck',
      color: '#10B981',
    },
    {
      title: 'Excel Expertise & Automation',
      description:
        'Advanced Excel automation to streamline reporting and analysis tasks.',
      icon: 'FileSpreadsheet',
      color: '#F59E0B',
    },
    {
      title: 'Financial Modeling & Forecasting',
      description:
        'Data-driven financial models and forecasts for smarter decision-making.',
      icon: 'TrendingUp',
      color: '#8B5CF6',
    },
    {
      title: 'Accounts Payable/Receivable',
      description:
        'Efficient AP/AR management to improve cash flow and compliance.',
      icon: 'CreditCard',
      color: '#EF4444',
    },
    {
      title: 'Payroll Processing',
      description: 'Hassle-free payroll services with compliance and accuracy.',
      icon: 'Wallet',
      color: '#06B6D4',
    },
    {
      title: 'Tax Preparation & Compliance',
      description: 'End-to-end tax planning, filing, and compliance support.',
      icon: 'FileCheck',
      color: '#EC4899',
    },
    {
      title: 'Audit Support',
      description:
        'Comprehensive audit assistance to ensure transparency and accuracy.',
      icon: 'SearchCheck',
      color: '#22C55E',
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
            Finance & Accounting – Accurate, Reliable, Transparent
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix provides professional financial management and accounting
            support to keep your business running smoothly.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Get Finance Support" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/finance1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/finance2.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR FINANCE SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {financeServices.map((service, idx) => (
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
            Accurate Records
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/fsstjlds.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Maintain precise and up-to-date financial data to eliminate costly
            errors.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Improved Cash Flow Management
              </h1>
              <p className="text-center dark:text-white">
                Optimize inflows and outflows to keep your business running
                smoothly.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/bktacmnd.json"
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
                Compliance with Regulations
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/ytklkgsc.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                tay fully aligned with legal and tax standards to avoid
                penalties.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Better Financial Decision-Making
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/pmjabgka.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Gain clear insights for smarter, future-focused business
                strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
