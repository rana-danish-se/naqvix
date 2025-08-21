
import GlassmorphismCard from '@/utils/GlassmorphismCard';
import UHeading from '@/utils/UHeading';
const TeamMemberCard = ({ member }) => {
  return (
    <GlassmorphismCard className="w-full">
      <div className="text-center">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-white/30 dark:border-white/20 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-2">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {member.role}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {member.description}
        </p>

        {/* Skills/Expertise */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full border border-blue-500/20 dark:border-blue-400/30 text-blue-700 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </GlassmorphismCard>
  );
};

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      description:
        "Visionary leader with 15+ years in technology innovation. Sarah drives Naqvix's strategic direction and ensures we deliver transformative solutions to our clients worldwide.",
      skills: ['Strategic Planning', 'Business Development', 'AI Strategy'],
      image: null,
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      description:
        'Technology architect with expertise in AI, cloud computing, and enterprise solutions. Michael leads our technical innovation and ensures cutting-edge delivery.',
      skills: ['AI & ML', 'Cloud Architecture', 'System Design'],
      image: null,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Operations Officer',
      description:
        'Operations expert focused on process optimization and client satisfaction. Emily ensures seamless project delivery and operational excellence across all departments.',
      skills: [
        'Process Optimization',
        'Project Management',
        'Quality Assurance',
      ],
      image: null,
    },
  ];

  const operations = [
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      description:
        'Ensures smooth day-to-day operations and process efficiency across all projects and client engagements.',
      skills: ['Process Management', 'Team Coordination', 'Client Relations'],
      image: null,
    },
    {
      name: 'Lisa Wang',
      role: 'Quality Assurance Lead',
      description:
        'Maintains the highest standards of quality in all deliverables and ensures client satisfaction through rigorous testing.',
      skills: ['Quality Control', 'Testing', 'Documentation'],
      image: null,
    },
    {
      name: 'James Mitchell',
      role: 'Project Coordinator',
      description:
        'Coordinates cross-functional teams and ensures timely delivery of projects while maintaining clear communication.',
      skills: ['Project Coordination', 'Communication', 'Timeline Management'],
      image: null,
    },
  ];

  const development = [
    {
      name: 'Alex Kumar',
      role: 'Senior Full-Stack Developer',
      description:
        'Expert in modern web technologies and cloud solutions. Alex leads the development of scalable applications and AI integrations.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      image: null,
    },
    {
      name: 'Maria Santos',
      role: 'AI/ML Engineer',
      description:
        'Specializes in machine learning models and AI implementation. Maria develops intelligent solutions that drive business automation.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
      image: null,
    },
    {
      name: 'Ryan Foster',
      role: 'DevOps Engineer',
      description:
        'Ensures reliable infrastructure and seamless deployments. Ryan maintains our cloud infrastructure and CI/CD pipelines.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
      image: null,
    },
  ];

  const marketing = [
    {
      name: 'Jessica Brown',
      role: 'Marketing Director',
      description:
        'Creative strategist who builds brand awareness and drives client engagement through innovative marketing campaigns.',
      skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
      image: null,
    },
    {
      name: 'Tom Wilson',
      role: 'Business Development Manager',
      description:
        "Focuses on building strategic partnerships and expanding Naqvix's market presence across different industries.",
      skills: ['Sales', 'Partnership Development', 'Market Analysis'],
      image: null,
    },
    {
      name: 'Anna Lee',
      role: 'Content Strategist',
      description:
        'Creates compelling content that communicates our value proposition and establishes thought leadership in the industry.',
      skills: ['Content Writing', 'SEO', 'Social Media', 'Technical Writing'],
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E]">
      {/* Intro Section */}
      <section className="w-full pt-20 pb-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <UHeading text={'OUR TEAM'} />
          <div className="mt-8 max-w-3xl mx-auto">
            <GlassmorphismCard>
              <p className="text-xl text-gray-800/90 dark:text-white/90 leading-relaxed">
                Meet the people who make Naqvix possible. Our diverse team of
                experts brings together years of experience in technology,
                innovation, and business excellence to deliver transformative
                solutions that drive your success.
              </p>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'LEADERSHIP'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'OPERATIONS'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="w-full py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'DEVELOPMENT'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {development.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section className="w-full py-16 px-8 mb-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <UHeading text={'MARKETING'} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketing.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
