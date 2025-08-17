"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const clients = Array.from({ length: 39 }, (_, i) => `/assets/clients/${i + 1}.png`);

const MarqueeLine = ({ direction = "left", speed = 20 }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos to create seamless loop
  const logos = [...clients, ...clients];

  return (
    <div
      className="relative  overflow-hidden w-full py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Optional gradient overlay on edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/60 via-transparent to-white/60 dark:from-zinc-900/60 dark:to-zinc-900/60"></div>

      <motion.div
        className="flex gap-10 w-max"
        animate={{
          x: isHovered ? 0 : direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear"
          }
        }}
      >
        {logos.map((src, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 p-2 rounded-md transition-all duration-500 ${
              isHovered ? "shadow-[0_0_30px_8px_rgba(59,130,246,0.3)] dark:shadow-[0_0_30px_8px_rgba(14,165,233,0.3)]" : ""
            }`}
          >
            <img src={src} alt={`Client ${idx + 1}`} className="h-16 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientMarquee = () => {
  return (
    <div className="flex my-20 flex-col gap-4">
      {/* Top line */}
      <MarqueeLine direction="left" speed={30} />
      {/* Bottom line moving opposite */}
      <MarqueeLine direction="right" speed={35} />
    </div>
  );
};

export default ClientMarquee;
