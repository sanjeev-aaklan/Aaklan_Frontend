import React from "react";
import { motion } from "framer-motion";
import AaklanKit from "./AaklanKit.jsx";
import { assets } from "../assets/assets.js";

const features = [
  { id: 1, title: ["Trailblazing", "Educators"], desc: "Our trailblazing educators inspire a love for tech.", image: "https://roboticschools.com/wp-content/uploads/2024/03/rsboxes.png" },
  { id: 2, title: ["Tailored Learning", "Experience"], desc: "We tailor each child's learning journey.", image: "https://roboticschools.com/wp-content/uploads/2024/03/rsboxes-2.png" },
  { id: 3, title: ["Curriculum Beyond", "Boundaries"], desc: "Our curriculum goes beyond traditional textbooks.", image: "https://roboticschools.com/wp-content/uploads/2024/03/rsboxes-3.png" },
  { id: 4, title: ["Innovative Progress", "Evaluation"], desc: "We embrace innovation in assessment.", image: "https://roboticschools.com/wp-content/uploads/2024/03/rsboxes-4.png" },
];

export default function RoboticsKit() {
  return (
    <>
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Clip-path Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b234a]/10 via-white to-[#E22213]/10 z-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
          <svg
            className="relative block w-full h-20"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#0b234a]"
            ></path>
          </svg>
        </div>

        {/* Optional: Secondary background for contrast */}
        <div className="absolute inset-0 bg-gray-50 z-0"
          style={{
            clipPath: 'polygon(0 85%, 100% 70%, 100% 100%, 0% 100%)'
          }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Centered Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-6 leading-tight">
              Why Choose Our{' '} <span className="bg-gradient-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">Robotics Program?</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Innovative learning experiences that shape the future innovators
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
              >
                <FeatureCard {...feature} index={index} />
              </div>
            ))}

            {/* Mobile robot */}
            <div className="md:hidden flex justify-center mt-8">
              <FloatingRobot />
            </div>

            {/* Desktop centered robot */}
            <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
              <FloatingRobot />
            </div>
          </div>
        </div>
      </section>
      <AaklanKit />
    </>


  );
}

/* Floating Robot Component */
const FloatingRobot = () => (
  <motion.div
    className="flex justify-center items-center"
    whileHover={{ scale: 1.1 }}
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  >
    <img
      // src={assets.board}
      src={assets.board}
      alt="Robot Animation"
      className="w-64 sm:w-80 md:w-72 lg:w-80 rounded-3xl shadow-lg"
    />
  </motion.div>
);

/* -------- Single Feature Card -------- */
const FeatureCard = ({ title, desc, image, index }) => {
  const colorVariants = [
    {
      hoverBg: "hover:bg-[#0b234a]/5",
      hoverText: "group-hover:text-[#0b234a]",
      hoverBorder: "group-hover:border-[#0b234a]",
      glow: "group-hover:shadow-[0_0_20px_rgba(11,35,74,0.3)]"
    },
    {
      hoverBg: "hover:bg-orange-500/5",
      hoverText: "group-hover:text-orange-500",
      hoverBorder: "group-hover:border-orange-500",
      glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
    },
    {
      hoverBg: "hover:bg-[#E22213]/5",
      hoverText: "group-hover:text-[#E22213]",
      hoverBorder: "group-hover:border-[#E22213]",
      glow: "group-hover:shadow-[0_0_20px_rgba(226,34,19,0.3)]"
    },
    {
      hoverBg: "hover:bg-[#E22213]/5",
      hoverText: "group-hover:text-[#E22913]",
      hoverBorder: "group-hover:border-[#E22213]",
      glow: "group-hover:shadow-[0_0_20px_rgba(226,34,19,0.3)]"
    },

  ];

  const colors = colorVariants[index % colorVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-white p-4 sm:p-6 hover:z-20 rounded-2xl shadow-lg hover:shadow-2xl transition-all w-full max-w-sm sm:max-w-md lg:max-w-lg border border-gray-100 ${colors.hoverBg}`}
    >
      {/* Glow Border on hover */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 ${colors.hoverBorder} ${colors.glow}`}></div>

      <div className="relative space-y-4 text-center">
        <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 transition-colors ${colors.hoverText}`}>
          {title.map((t, i) => (
            <span key={i} className="block leading-tight">{t}</span>
          ))}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{desc}</p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="pt-2"
        >
          <img
            src={image}
            alt={title.join(" ")}
            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto drop-shadow-md transition-transform duration-300 group-hover:rotate-3"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};