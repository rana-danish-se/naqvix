// Utility Components
const UHeading = ({ text }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4 w-full">
      {/* Line before heading - reduced width on mobile to prevent overflow */}
      <div className="w-4 sm:w-8 md:w-12 lg:w-20 h-[3px] sm:h-[4px] md:h-[6px] bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-purple-700 dark:from-white dark:via-zinc-300 dark:to-zinc-500 flex-shrink-0"></div>

      {/* Heading - added flex-1 and better text wrapping */}
      <h1
        className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-tight 
          bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
          bg-clip-text text-transparent
          dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400
          break-words hyphens-auto"
      >
        {text}
      </h1>
    </div>
  )
}

const GlassmorphismCard = ({
  children,
  className = "",
  textSize = "text-sm",
  glowColors = {
    dark: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    light: "from-blue-400/30 via-purple-400/30 to-pink-400/30",
  },
  secondaryGlow = {
    dark: "from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10",
    light: "from-cyan-300/20 via-violet-300/20 to-fuchsia-300/20",
  },
  borderGlow = {
    dark: "from-blue-500/30 via-purple-500/30 to-pink-500/30",
    light: "from-blue-400/40 via-purple-400/40 to-pink-400/40",
  },
  showParticles = true,
  showCorners = true,
  showShimmer = true,
}) => {
  const getGlowClass = (colorObj, fallback) => {
    if (typeof colorObj === "string") return colorObj
    return `${colorObj.light || fallback} dark:${colorObj.dark || fallback}`
  }

  const primaryGlow = getGlowClass(glowColors, "from-blue-500/20 via-purple-500/20 to-pink-500/20")
  const secondGlow = getGlowClass(secondaryGlow, "from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10")
  const borderGlowClass = getGlowClass(borderGlow, "from-blue-500/30 via-purple-500/30 to-pink-500/30")

  return (
    <div className={`relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl ${className}`}>
      {/* Primary Glow - Enhanced for mobile */}
      <div
        className={`absolute -inset-1 sm:-inset-2 md:-inset-4 bg-gradient-to-r ${primaryGlow} rounded-lg sm:rounded-xl md:rounded-2xl blur-md sm:blur-lg md:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
      ></div>

      {/* Secondary Glow */}
      <div
        className={`absolute -inset-0.5 sm:-inset-1 md:-inset-2 bg-gradient-to-r ${secondGlow} rounded-md sm:rounded-lg md:rounded-xl blur-sm sm:blur-md md:blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100`}
      ></div>

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
        {/* Glass Background - Enhanced opacity for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 dark:from-white/15 dark:via-white/8 dark:to-transparent backdrop-blur-sm sm:backdrop-blur-md border border-white/40 dark:border-white/25 rounded-lg sm:rounded-xl md:rounded-2xl"></div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${borderGlowClass} rounded-lg sm:rounded-xl md:rounded-2xl blur-sm`}
          ></div>
        </div>

        {/* Floating Particles - Adjusted for mobile */}
        {showParticles && (
          <div className="absolute inset-0 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-2 sm:top-3 md:top-4 left-3 sm:left-4 md:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-4 sm:top-6 md:top-12 right-4 sm:right-6 md:right-12 w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-6 sm:left-8 md:left-16 w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-16 right-3 sm:right-4 md:right-8 w-1 h-1 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-2 sm:left-3 md:left-4 w-1 h-1 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/3 right-2 sm:right-3 md:right-6 w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse delay-600"></div>
          </div>
        )}

        {/* Shimmer */}
        {showShimmer && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
          </div>
        )}

        {/* Content - Enhanced mobile padding and text */}
        <div
          className={`relative p-3 sm:p-4 md:p-6 lg:p-8 ${textSize} leading-relaxed text-gray-800/90 dark:text-white/90 font-light tracking-wide transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-[1.01] sm:group-hover:scale-[1.02] transform-gpu`}
        >
          {children}
        </div>

        {/* Corner Accents - Adjusted for mobile */}
        {showCorners && (
          <>
            <div className="absolute top-1 sm:top-1.5 md:top-2 left-1 sm:left-1.5 md:left-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-l-2 border-t-2 border-blue-500/60 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute top-1 sm:top-1.5 md:top-2 right-1 sm:right-1.5 md:right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-r-2 border-t-2 border-purple-500/60 dark:border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1 sm:left-1.5 md:left-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-l-2 border-b-2 border-cyan-500/60 dark:border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
            <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 right-1 sm:right-1.5 md:right-2 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 border-r-2 border-b-2 border-pink-500/60 dark:border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
          </>
        )}
      </div>
    </div>
  )
}

const GlassButton = ({ text = "Learn More", href = "/contact" }) => {
  return (
    <div
      className={`
        relative px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg md:rounded-xl select-none
        font-semibold text-sm tracking-wide flex items-center justify-center gap-2
        transition-all duration-500 min-h-[44px] sm:min-h-[48px]
        bg-gradient-to-br from-white/50 via-white/30 to-white/20 
        dark:from-white/15 dark:via-white/8 dark:to-transparent
        backdrop-blur-sm sm:backdrop-blur-md border border-white/40 dark:border-white/25
        text-gray-800 dark:text-white
        shadow-lg hover:shadow-xl
        hover:scale-105 active:scale-95
        group w-full sm:w-auto
      `}
    >
      {/* Glow Layer - Enhanced for mobile */}
      <span
        className={`
          absolute -inset-0.5 sm:-inset-1 rounded-lg md:rounded-xl opacity-0 
          group-hover:opacity-100 blur-md sm:blur-lg transition duration-500
          bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        `}
      ></span>

      {/* Shimmer Effect */}
      <span
        className={`
          absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100
          transition duration-1000 overflow-hidden
        `}
      >
        <span
          className={`
            absolute inset-0 bg-gradient-to-r 
            from-transparent via-white/40 to-transparent 
            -skew-x-12 translate-x-[-100%] 
            group-hover:translate-x-[200%] 
            transition-transform duration-1000 ease-out
          `}
        ></span>
      </span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </span>
    </div>
  )
}

const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that drive business transformation and stay ahead of industry trends.",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethical practices in all our business relationships.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, partnership, and open communication to achieve extraordinary results together.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering superior quality and exceeding expectations in every project we undertake.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "5+", label: "Years of Excellence" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-x-hidden text-sm">
      {/* Our Story Section - reduced padding and improved mobile layout */}
      <section className="w-full pt-6 sm:pt-8 md:pt-12 lg:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-16 flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="w-full lg:w-1/3 flex items-center justify-center order-1 lg:order-none">
          <img
            src="/assets/about1.png"
            width="300"
            height="300"
            alt="About Naqvix"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[350px] h-auto object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full lg:w-1/2 order-2 lg:order-none">
          <UHeading text={"OUR STORY"} />
          <GlassmorphismCard className="w-full" textSize="text-sm">
            <p className="break-words hyphens-auto">
              Naqvix was born from a vision to revolutionize how businesses embrace technology. Founded by passionate
              technologists, we recognized the growing need for businesses to seamlessly integrate cutting-edge
              solutions while maintaining operational excellence. Our journey began with a simple belief: every business
              deserves access to world-class IT, AI, and business process solutions that drive meaningful transformation
              and sustainable growth.
            </p>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Mission & Vision Section - reduced padding and improved spacing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <UHeading text={"OUR MISSION"} />
              <GlassmorphismCard className="w-full h-full" textSize="text-sm">
                <p className="break-words hyphens-auto">
                  To deliver innovative, reliable, and cost-effective solutions for businesses worldwide. We strive to
                  be the catalyst that transforms challenges into opportunities, enabling our clients to achieve
                  sustainable growth through strategic technology implementation.
                </p>
              </GlassmorphismCard>
            </div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <UHeading text={"OUR VISION"} />
              <GlassmorphismCard className="w-full h-full" textSize="text-sm">
                <p className="break-words hyphens-auto">
                  To be a global leader in IT, AI, and business process solutions, recognized for our innovation,
                  integrity, and impact. We envision a future where every business can harness the power of technology
                  to create meaningful value for their stakeholders and communities.
                </p>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - improved mobile grid and spacing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <UHeading text={"CORE VALUES"} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {coreValues.map((value, index) => (
              <GlassmorphismCard key={index} className="text-center h-full" textSize="text-sm">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-1 sm:mb-2 md:mb-3 break-words">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-sm break-words hyphens-auto">{value.description}</p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Milestones - improved mobile layout and text sizing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <UHeading text={"ACHIEVEMENTS & MILESTONES"} />
          </div>

          {/* Statistics - better mobile grid with proper spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            {achievements.map((achievement, index) => (
              <GlassmorphismCard key={index} className="text-center" textSize="text-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-1 break-words">
                  {achievement.number}
                </h3>
                <p className="text-sm break-words hyphens-auto">{achievement.label}</p>
              </GlassmorphismCard>
            ))}
          </div>

          {/* Milestones Timeline - improved mobile text sizing and spacing */}
          <GlassmorphismCard className="w-full" textSize="text-sm">
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400 mb-3 sm:mb-4 md:mb-6 break-words">
                Key Milestones
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2019</span>
                  <span className="text-sm text-right break-words hyphens-auto">Company Founded with a Vision</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2020</span>
                  <span className="text-sm text-right break-words hyphens-auto">First Major Client Partnership</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2021</span>
                  <span className="text-sm text-right break-words hyphens-auto">AI Solutions Division Launch</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2022</span>
                  <span className="text-sm text-right break-words hyphens-auto">International Expansion</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-1 sm:pb-2 gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2023</span>
                  <span className="text-sm text-right break-words hyphens-auto">
                    100+ Successful Projects Delivered
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
                  <span className="font-semibold text-sm flex-shrink-0">2024</span>
                  <span className="text-sm text-right break-words hyphens-auto">Industry Recognition & Awards</span>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Call to Action - improved mobile layout and image sizing */}
      <section className="w-full py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:px-8 mb-3 sm:mb-4 md:mb-6 lg:mb-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
          <div className="flex flex-col w-full lg:w-1/2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 order-2 lg:order-1">
            <UHeading text={"Ready to Transform Your Business?"} />
            <p className="w-full text-sm text-gray-800/90 dark:text-white/90 leading-relaxed break-words hyphens-auto">
              Join hundreds of satisfied clients who have chosen Naqvix as their trusted technology partner. Let's
              discuss how we can help you achieve your goals and build something extraordinary together.
            </p>
            <div className="w-full sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px]">
              <GlassButton text="Start a Conversation" />
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
            <img
              src="/assets/touch.jpg"
              width="300"
              height="300"
              alt="Get in touch"
              className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[350px] h-auto object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
