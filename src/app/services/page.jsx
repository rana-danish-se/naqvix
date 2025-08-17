import ServiceCard from '@/utlis/ServiceCard';
import Image from 'next/image';


const page = () => {
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
      link: '/services/artificial-intelligence',
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
      link: '/services/strategy',
    },
  ];
  return (
    <main className="w-full px-10 my-10 flex flex-col">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1
          className="text-[7vw] md:text-[4.25vw] text-center font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
          Empowering Your Business with Cutting Edge Solutions
        </h1>
        <p
          className="w-full text-center md:w-2/3 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          From BPO and marketing to AI-driven innovations, we deliver services
          that drive growth, efficiency, and impact. Explore our expertise and
          discover solutions tailored for your success.
        </p>
      </div>
      <div className="flex mt-10 items-center h-[100vh] gap-10 justify-center">
        <div className="flex flex-col w-[30%] h-full items-center justify-end gap-2   ">
          <Image
            src="/assets/service1.jpg"
            width={200}
            height={200}
            alt='image'
            className="w-full rounded-2xl"
          />
          <p className="dark:text-neutral-600 text-center">
            Where innovation and collaboration come together to deliver
            exceptional business solutions.
          </p>
        </div>
        <div className="flex flex-col w-[30%] h-full items-center justify-end gap-2   ">
          <Image
            src="/assets/service2.jpg"
            width={200}
            height={200}
                alt='image'
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-[30%] h-full items-center justify-start gap-2   ">
          <Image
            src="/assets/service3.jpg"
            width={200}
            height={200}
                alt='image'
            className="w-full rounded-2xl"
          />
          <p className="dark:text-neutral-600 text-center">
            Explore our expertise across solutions designed to elevate your
            business.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 justify-center gap-6 p-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
