// import Hero from '@/app/home/components/Hero';
// import About from './components/About';
// import Service from './components/Service';
// import WhyUs from './components/WhyUs';
// import Industry from './components/Industry';
// import ClientMarquee from './components/ClientMarquee';
// import CallToAction from './components/CallToAction';

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <About />
//       <Service />
//       <WhyUs />
//       <Industry/>
//       <ClientMarquee/>
//       <CallToAction/>
//     </div>
//   );
// };

// export default Home;
'use client';

import dynamic from 'next/dynamic';

// Lazy-loaded components
const Hero = dynamic(() => import('@/app/home/components/Hero'), { ssr: false });
const About = dynamic(() => import('./components/About'));
const Service = dynamic(() => import('./components/Service'));
const WhyUs = dynamic(() => import('./components/WhyUs'));
const Industry = dynamic(() => import('./components/Industry'));
const ClientMarquee = dynamic(() => import('./components/ClientMarquee'));
const CallToAction = dynamic(() => import('./components/CallToAction'));

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <WhyUs />
      <Industry />
      <ClientMarquee />
      <CallToAction />
    </div>
  );
};

export default Home;
