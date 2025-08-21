import GlassButton from '@/utils/GlassButton';
import UHeading from '@/utils/UHeading';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className="relative gap-5 w-full mb-10 p-5 flex md:flex-row flex-col items-center justify-center rounded-2xl overflow-hidden">
      {/* Radiant Glow */}
      <div
        className="absolute top-0 left-0 w-94 h-94 rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(66,153,225,0.5) 0%, rgba(139,92,246,0.4) 40%, rgba(236,72,153,0.3) 80%)',
          zIndex: 0,
        }}
      ></div>

      <div className="relative items-start flex flex-col w-full md:w-1/2 gap-5 z-10">
        <h1
          className="text-[7vw] text-center lg:text-left md:text-[3.5vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
         Let's Build the Future of Your Business
        </h1>
        <p
          className="w-full md:w-3/4 text-base md:text-sm
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          Have an idea, a project, or a challenge? Reach out to us and let’s
          build something extraordinary together.
        </p>
        <div className="w-[250px]">
          <GlassButton text="Start a Conversation" href='/contact' />
        </div>
      </div>

      <div className="relative z-10">
        <Image
          src="/assets/callToaction.png"
          width={400}
          height={400}
          alt="touch"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CallToAction;
