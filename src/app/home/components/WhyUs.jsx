import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';
import * as Icons from 'lucide-react';

const WhyUs = () => {
  const whyChooseUs = [
    {
      heading: 'End-to-End Solutions',
      description:
        'We deliver complete solutions tailored to your business needs.',
      icon: 'Box', // example from lucide-react
    },
    {
      heading: 'Global Expertise',
      description: 'Our team brings worldwide experience to every project.',
      icon: 'Globe',
    },
    {
      heading: 'Customized Approach',
      description:
        'Solutions designed specifically for your unique challenges.',
      icon: 'Settings',
    },
    {
      heading: '24/7 Support',
      description: 'Always available to assist you whenever you need.',
      icon: 'Headphones',
    },
  ];

  return (
    <section className="w-full mt-30 p-4 mb-5 text-center flex lg:flex-row flex-col  items-center justify-center gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left column */}
        <div className="flex justify-center">
          <Image
            src="/assets/handshake.jpg"
            alt="Handshake"
            width={300}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/brain.jpg"
            alt="Brain"
            width={300}
            height={200}
            className="rounded-xl object-cover"
          />
          <Image
            src="/assets/headphone.jpg"
            alt="Headphone"
            width={300}
            height={100}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <div className=" w-full mt-20 lg:mt-0 lg:w-[55%] flex flex-col gap-5 justify-center items-center">
        <UHeading text={'Why We Stand Out'} />

        <div className="flex flex-wrap gap-6 justify-center">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = Icons[item.icon];
            return (
              <GlassmorphismCard
                key={idx}
                className="w-full sm:w-[48%] md:w-[45%] lg:w-[45%]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent
                    size={32}
                    className="text-blue-500 dark:text-cyan-400"
                  />
                  <h1 className="text-lg font-bold dark:text-white">
                    {item.heading}
                  </h1>
                </div>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </GlassmorphismCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
