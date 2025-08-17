import Image from 'next/image';
import React from 'react';
import UHeading from '../../../utlis/UHeading';
import GlassmorphismCard from '@/utlis/GlassmorphismCard';
import GlassButton from '@/utlis/GlassButton';

const About = () => {
  return (
    <section className="w-full mt-10 mb-5 flex items-center justify-center  gap-10  ">
      <div className="w-1/3 flex  items-center justify-center">
        <Image src="/assets/about.jpg" width={300} height={300} alt='about' className='rounded-2xl'/>
      </div>
      <div className="flex flex-col gap-5 w-[50%] ">
        <UHeading text={'ABOUT US'} />
        <GlassmorphismCard className="w-full">
          We are a technology-driven agency helping businesses scale smarter
          through tailored solutions. From BPO/KPO services, marketing, finance,
          and consulting to AI, automation, development, and data analytics, we
          deliver end-to-end expertise that drives efficiency and innovation.
          Our mission is to empower organizations with the right mix of
          strategy, intelligence, and technology to achieve sustainable growth.
        </GlassmorphismCard>
        <div className="w-50 m-auto">
          <GlassButton />
        </div>
      </div>
    </section>
  );
};

export default About;
