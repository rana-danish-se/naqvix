import Hero from '@/app/home/components/Hero';
import React from 'react';
import About from './components/About';
import Service from './components/Service';
import WhyUs from './components/WhyUs';
import Industry from './components/Industry';
import ClientMarquee from './components/ClientMarquee';
import CallToAction from './components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <WhyUs />
      <Industry/>
      <ClientMarquee/>
      <CallToAction/>
    </div>
  );
};

export default Home;
