import UHeading from '@/utils/UHeading';
import * as Icons from 'lucide-react';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

const Industry = () => {
  const industries = [
    {
      heading: 'Healthcare',
      description:
        'AI-driven solutions and analytics to optimize patient care.',
      icon: 'Activity', // Lucide icon example
    },
    {
      heading: 'Retail',
      description: 'Automation and insights to enhance customer experience.',
      icon: 'ShoppingCart',
    },
    {
      heading: 'E-Commerce',
      description:
        'End-to-end solutions to scale online businesses effectively.',
      icon: 'Package',
    },
    {
      heading: 'Real Estate',
      description:
        'Data and automation tools to streamline property management.',
      icon: 'Home',
    },
    {
      heading: 'Education',
      description: 'Smart learning solutions, LMS, and AI-powered tutoring.',
      icon: 'BookOpen',
    },
    {
      heading: 'Finance',
      description:
        'Automation, analytics, and intelligent solutions for banking and accounting.',
      icon: 'CreditCard',
    },
  ];
  return (
    <section className="w-full mt-30 p-4 mb-5 text-center flex flex-col items-center justify-center gap-5">
      <div className="w-full flex flex-col items-center justify-center gap-7">
        <UHeading text="Your Industry, Our Expertise" />
        <p
          className="w-full md:w-3/4 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          From finance to healthcare, retail to technology, Naqvix delivers
          innovative solutions that help businesses thrive in every industry.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {industries.map((industry, idx) => {
          const IconComponent = Icons[industry.icon];
          return (
            <GlassmorphismCard
              key={idx}
              className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]" // responsive
            >
              <div className="flex items-center gap-3 mb-3">
                <IconComponent
                  size={32}
                  className="text-blue-500 dark:text-cyan-400"
                />
                <h1 className="text-lg font-bold dark:text-white">
                  {industry.heading}
                </h1>
              </div>
              <p className="text-sm text-gray-600 dark:text-zinc-400">
                {industry.description}
              </p>
            </GlassmorphismCard>
          );
        })}
      </div>
    </section>
  );
};

export default Industry;
