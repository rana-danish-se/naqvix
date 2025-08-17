import GlassButton from "@/utlis/GlassButton";
import GlassmorphismCard from "@/utlis/GlassmorphismCard";
import UHeading from "@/utlis/UHeading";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business transformation and stay ahead of industry trends."
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical practices in all our business relationships."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, partnership, and open communication to achieve extraordinary results together."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering superior quality and exceeding expectations in every project we undertake."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "5+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E]">
      {/* Our Story Section */}
      <section className="w-full pt-20 pb-16 flex items-center justify-center gap-10 px-8">
        <div className="w-1/3 flex items-center justify-center">
          <img 
            src="/assets/about.jpg" 
            width="400" 
            height="400" 
            alt='About Naqvix' 
            className='rounded-2xl shadow-2xl'
          />
        </div>
        <div className="flex flex-col gap-5 w-[50%]">
          <UHeading text={'OUR STORY'} />
          <GlassmorphismCard className="w-full">
            Naqvix was born from a vision to revolutionize how businesses embrace technology. 
            Founded by passionate technologists, we recognized the growing need for businesses 
            to seamlessly integrate cutting-edge solutions while maintaining operational excellence. 
            Our journey began with a simple belief: every business deserves access to world-class 
            IT, AI, and business process solutions that drive meaningful transformation and sustainable growth.
          </GlassmorphismCard>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <UHeading text={'OUR MISSION'} />
              <GlassmorphismCard className="w-full h-full">
                To deliver innovative, reliable, and cost-effective solutions for 
                businesses worldwide. We strive to be the catalyst that transforms 
                challenges into opportunities, enabling our clients to achieve 
                sustainable growth through strategic technology implementation.
              </GlassmorphismCard>
            </div>
            <div>
              <UHeading text={'OUR VISION'} />
              <GlassmorphismCard className="w-full h-full">
                To be a global leader in IT, AI, and business process solutions, 
                recognized for our innovation, integrity, and impact. We envision 
                a future where every business can harness the power of technology 
                to create meaningful value for their stakeholders and communities.
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <UHeading text={'CORE VALUES'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <GlassmorphismCard key={index} className="text-center h-full">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-4">{value.title}</h3>
                <p className="text-sm leading-relaxed">{value.description}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Milestones */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <UHeading text={'ACHIEVEMENTS & MILESTONES'} />
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <GlassmorphismCard key={index} className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-2">{achievement.number}</h3>
                <p className="text-lg">{achievement.label}</p>
              </GlassmorphismCard>
            ))}
          </div>
          
          {/* Milestones Timeline */}
          <GlassmorphismCard className="w-full">
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="font-semibold">2019</span>
                  <span>Company Founded with a Vision</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="font-semibold">2020</span>
                  <span>First Major Client Partnership</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="font-semibold">2021</span>
                  <span>AI Solutions Division Launch</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="font-semibold">2022</span>
                  <span>International Expansion</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="font-semibold">2023</span>
                  <span>100+ Successful Projects Delivered</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">2024</span>
                  <span>Industry Recognition & Awards</span>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-8 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-10">
          <div className="flex flex-col w-1/2 gap-5">
            <UHeading text={'Ready to Transform Your Business?'} />
            <p className="w-full md:w-3/4 text-base md:text-lg text-gray-800/90 dark:text-white/90">
              Join hundreds of satisfied clients who have chosen Naqvix as their trusted 
              technology partner. Let's discuss how we can help you achieve your goals and 
              build something extraordinary together.
            </p>
            <div className="w-[250px]">
              <GlassButton text="Start a Conversation" />
            </div>
          </div>
          <div>
            <img 
              src="/assets/touch.jpg" 
              width="400" 
              height="400" 
              alt='Get in touch' 
              className='rounded-2xl shadow-2xl'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;