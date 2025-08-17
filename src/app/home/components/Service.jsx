import UHeading from '@/utlis/UHeading';
import React from 'react';

import ServiceCard from '@/utlis/ServiceCard';

const Service = () => {
  const services = [
    {
      title: 'BPO / KPO Services',
      description:
        'Streamline operations with expert outsourcing and knowledge-driven solutions.',
      icon: 'Headset',
      color: '#3B82F6',
      link: '/services/bpo-kpo',
    },
    {
      title: 'Marketing Solutions',
      description:
        'Boost your brand with data-driven campaigns and creative strategies.',
      icon: 'Megaphone',
      color: '#EC4899',
      link: '/services/marketing',
    },
    {
      title: 'Artificial Intelligence Solutions',
      description: 'Leverage AI to automate, predict, and innovate at scale.',
      icon: 'Brain',
      color: '#8B5CF6',
      link: '/services/ai',
    },
    {
      title: 'Development Services',
      description:
        'Build scalable apps, websites, and systems tailored to your business.',
      icon: 'Code2',
      color: '#10B981',
      link: '/services/development',
    },
    {
      title: 'Finance & Accounting',
      description:
        'Ensure accuracy and efficiency with our smart financial solutions.',
      icon: 'Wallet',
      color: '#F59E0B',
      link: '/services/finance',
    },
    {
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights for growth.',
      icon: 'BarChart3',
      color: '#06B6D4',
      link: '/services/data-analytics',
    },
    {
      title: 'Automation & RPA',
      description:
        'Enhance efficiency with robotic process automation and workflow optimization.',
      icon: 'Bot',
      color: '#EF4444',
      link: '/services/automation',
    },
    {
      title: 'Consulting & Strategy',
      description:
        'Navigate complex challenges with expert consulting and business strategy.',
      icon: 'Lightbulb',
      color: '#A855F7',
      link: '/services/consulting',
    },
  ];

  return (
    <section className="w-full mt-30 mb-5 text-center flex flex-col items-center justify-center  gap-5  ">
      <UHeading text={'OUR SERVICES'} />
      <p
        className="w-full md:w-3/4 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
      >
        Where Strategy, Technology & Execution Unite
      </p>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
