

const GlassmorphismCard = ({
  children,
  className = "",
  textSize = "text-lg",
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
    if (typeof colorObj === "string") return colorObj;
    return `${colorObj.light || fallback} dark:${colorObj.dark || fallback}`;
  };

  const primaryGlow = getGlowClass(
    glowColors,
    "from-blue-500/20 via-purple-500/20 to-pink-500/20"
  );
  const secondGlow = getGlowClass(
    secondaryGlow,
    "from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10"
  );
  const borderGlowClass = getGlowClass(
    borderGlow,
    "from-blue-500/30 via-purple-500/30 to-pink-500/30"
  );

  return (
    <div className={`relative group ${className}`}>
      {/* Primary Glow */}
      <div
        className={`absolute -inset-4 bg-gradient-to-r ${primaryGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
      ></div>

      {/* Secondary Glow */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${secondGlow} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100`}
      ></div>

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-2xl">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl"></div>

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${borderGlowClass} rounded-2xl blur-sm`}
          ></div>
        </div>

        {/* Floating Particles */}
        {showParticles && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-4 left-8 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-8 left-16 w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-16 right-8 w-1 h-1 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-violet-500 dark:bg-violet-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/3 right-6 w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse delay-600"></div>
          </div>
        )}

        {/* Shimmer */}
        {showShimmer && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
          </div>
        )}

        {/* Content */}
        <div
          className={`relative p-8 ${textSize} leading-relaxed text-gray-800/90 dark:text-white/90 font-light tracking-wide transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-[1.02] transform-gpu`}
        >
          {children}
        </div>

        {/* Corner Accents */}
        {showCorners && (
          <>
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500/60 dark:border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-500/60 dark:border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-500/60 dark:border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-pink-500/60 dark:border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default GlassmorphismCard;
