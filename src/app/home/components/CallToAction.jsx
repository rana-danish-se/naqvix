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

      <div className="relative flex flex-col w-full md:w-1/2 gap-5 z-10">
        <UHeading text={'Let’s Build the Future of Your Business'} />
        <p
          className="w-full md:w-3/4 text-base md:text-lg
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          Have an idea, a project, or a challenge? Reach out to us and let’s
          build something extraordinary together.
        </p>
        <div className="w-[250px]">
          <GlassButton text="Start a Conversation" />
        </div>
      </div>

      <div className="relative z-10">
        <Image
          src="/assets/touch.jpg"
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
