import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GlassButton = ({ text = "Learn More", href = "/about" }) => {
  return (
    <Link href={href}>
      <div
        className={`
          relative px-6 py-3 rounded-xl cursor-pointer select-none
          font-semibold text-sm tracking-wide flex items-center gap-2
          transition-all duration-500
          bg-gradient-to-br from-white/40 via-white/20 to-white/10 
          dark:from-white/10 dark:via-white/5 dark:to-transparent
          backdrop-blur-md border border-white/30 dark:border-white/20
          text-gray-800 dark:text-white
          shadow-md hover:shadow-lg
          hover:scale-105 active:scale-95
          group
        `}
      >
        {/* Glow Layer */}
        <span
          className={`
            absolute -inset-0.5 rounded-xl opacity-0 
            group-hover:opacity-100 blur-lg transition duration-500
            bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
          `}
        ></span>

        {/* Shimmer Effect */}
        <span
          className={`
            absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
            transition duration-1000 overflow-hidden
          `}
        >
          <span
            className={`
              absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/30 to-transparent 
              -skew-x-12 translate-x-[-100%] 
              group-hover:translate-x-[200%] 
              transition-transform duration-1000 ease-out
            `}
          ></span>
        </span>

        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-2">
          {text}
          <ArrowUpRight 
            className="w-4 h-4 transition-transform duration-500 group-hover:animate-bounce" 
          />
        </span>
      </div>
    </Link>
  );
};

export default GlassButton;
