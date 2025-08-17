'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [focused, setFocused] = useState(null);

  const services = [
    "BPO / KPO Services",
    "Marketing Solutions",
    "Artificial Intelligence Solutions",
    "Development Services",
    "Finance & Accounting",
    "Data & Analytics",
    "Automation & RPA",
    "Consulting & Strategy",
  ];

  return (
    <div className="relative  flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-none p-6">
      {/* Radiant Glow Top Left */}
      <div className="absolute top-0 left-1/2 w-72 h-72 bg-gradient-to-tr from-blue-400 via-purple-500 to-cyan-400 opacity-40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Form Container */}
      <form className="relative  bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl p-8 md:max-w-lg w-full shadow-xl border border-white/20 dark:border-gray-700/40">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h2>

        {/* Input Fields */}
        {["Name", "Email", "Phone", "Company"].map((field, idx) => (
          <div key={idx} className="mb-4 relative">
            <input
              type={field === "Email" ? "email" : "text"}
              placeholder={field}
              onFocus={() => setFocused(idx)}
              onBlur={() => setFocused(null)}
              className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                focused === idx ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
              }`}
            />
            {/* Left Glow for Focus */}
            {focused === idx && (
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
            )}
          </div>
        ))}

        {/* Service Dropdown */}
        <div className="mb-4 relative">
          <select
            onFocus={() => setFocused("service")}
            onBlur={() => setFocused(null)}
            className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 appearance-none ${
              focused === "service" ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
            }`}
          >
            <option value="">Service Interested In</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>
          {focused === "service" && (
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
          )}
        </div>

        {/* Message */}
        <div className="mb-4 relative">
          <textarea
            placeholder="Message"
            rows={4}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
              focused === "message" ? 'shadow-[0_0_10px_2px_rgba(0,255,255,0.5)] dark:shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]' : ''
            }`}
          />
          {focused === "message" && (
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-l-xl"></span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
