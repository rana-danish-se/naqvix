'use client';
import GlassButton from '@/utils/GlassButton';
import ServiceCard from '@/utils/ServiceCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@/context/AppContext';

const page = () => {
  const { theme } = useTheme();
  const aiServices = [
    {
      title: 'AI Chatbots',
      description:
        'Smart virtual assistants to automate conversations and support.',
      icon: 'Bot',
      color: '#3B82F6',
    },
    {
      title: 'AI Marketing',
      description:
        'Predictive analytics and recommendations for better campaigns.',
      icon: 'BarChart3',
      color: '#EC4899',
    },
    {
      title: 'ML Models',
      description:
        'Custom machine learning models for smarter decision-making.',
      icon: 'Brain',
      color: '#8B5CF6',
    },
    {
      title: 'AI Support',
      description:
        'Voice bots and sentiment analysis for seamless customer care.',
      icon: 'Headset',
      color: '#10B981',
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition and quality inspection powered by AI.',
      icon: 'Camera',
      color: '#F59E0B',
    },
    {
      title: 'NLP',
      description:
        'Natural Language Processing for text and language solutions.',
      icon: 'MessageSquare',
      color: '#06B6D4',
    },
    {
      title: 'AI Intelligence',
      description: 'Business intelligence driven by AI for smarter insights.',
      icon: 'Lightbulb',
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
            AI Solutions – Smarter, Faster, Better
          </h1>
          <p
            className="w-full  m-auto lg:m-0 text-center lg:text-left md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
          >
            Naqvix leverages Artificial Intelligence to automate processes,
            improve decision-making, and enhance customer experiences.
          </p>
          <div className="w-[250px] m-auto lg:m-0">
            <GlassButton text="Talk AI Now" href="/contact" />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-5 justify-center">
          <Image
            src="/assets/ai1.jpg"
            width={300}
            height={300}
            className="rounded-2xl"
            alt="image"
          />
          <Image
            src="/assets/ai2.jpg"
            width={250}
            height={250}
            className="rounded-2xl"
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 gap-5">
        <UHeading text={'OUR AI SERVICES'} />
        <div className="flex flex-wrap mt-5 justify-center gap-6 p-4">
          {aiServices.map((service, idx) => (
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
            Faster Response Times
          </h1>
          <div className="sm:flex items-center justify-center hidden w-full">
            <lord-icon
              src="https://cdn.lordicon.com/knzzcfyy.json"
              trigger="hover"
              stroke="bold"
              colors={`${
                theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
              }`}
              style={{ width: 200, height: 200 }}
            ></lord-icon>
          </div>
          <p className="text-center dark:text-white">
            Deliver quick, efficient, and reliable support with AI automation.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:flex-row flex-col border rounded-xl  dark:border-white border-neutral-600  gap-10 justify-center p-5 ">
            <div className="flex flex-col items-center justify-center w-full sm:w-[50%] gap-5">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Improved Customer Satisfaction
              </h1>
              <p className="text-center dark:text-white">
                Enhance overall user experience through personalized
                interactions.
              </p>
            </div>
            <div className="sm:flex items-center justify-center hidden w-full">
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
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
                Predictive Insights
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/wjyqkiew.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Make smarter business decisions using powerful AI-driven
                analytics.
              </p>
            </div>
            <div className="flex border dark:border-white border-neutral-600 rounded-xl p-5 flex-col   sm:w-[50%] w-full items-center justify-center">
              <h1 className="dark:text-zinc-500 text-center font-bold text-2xl">
                Reduced Workload
              </h1>
              <div className="sm:flex items-center justify-center hidden w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/fwusljyl.json"
                  trigger="hover"
                  stroke="bold"
                  colors={`${
                    theme === 'dark' ? 'primary:#e4e4e4,secondary:#08a88a' : ''
                  }`}
                  style={{ width: 150, height: 150 }}
                ></lord-icon>
              </div>
              <p className="text-center dark:text-white">
                Automate repetitive tasks and free up valuable team resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
