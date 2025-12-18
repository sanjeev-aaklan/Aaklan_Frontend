import React, { useState, useRef, useEffect } from "react";
import { curriculum } from "../../assets/assets";
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Curriculum = () => {
  const skills = [
    {
      title: "Coding",
      icon: curriculum.coding2,
      desc: "Introduce coding skills to young learners, promoting logical thinking and computational skills.",
      color: "from-[#0b234a] to-[#E22213]",
      bgColor: "blue"
    },
    {
      title: "Robotics",
      icon: curriculum.lg,
      desc: "Hands-on robotics courses to spark creativity and innovation in young minds.",
      color: "from-[#E22213] to-orange-500",
      bgColor: "red"
    },
    {
      title: "Artificial Intelligence",
      icon: curriculum.life,
      desc: "Basic AI concepts to spark curiosity and technological understanding for the future.",
      color: "from-[#0b234a] to-orange-500",
      bgColor: "indigo"
    },
    {
      title: "Critical Thinking",
      icon: curriculum.math,
      desc: "Break down problems and foster logical reasoning and algorithmic thinking skills.",
      color: "from-[#E22213] to-[#0b234a]",
      bgColor: "purple"
    },
    {
      title: "Life Skills",
      icon: curriculum.life,
      desc: "Nurture holistic growth with engaging narratives and gamified learning experiences.",
      color: "from-orange-500 to-[#E22213]",
      bgColor: "orange"
    },
    {
      title: "Finance & Entrepreneurship",
      icon: curriculum.finance,
      desc: "Teach financial literacy and entrepreneurial concepts for future innovation leaders.",
      color: "from-[#0b234a] via-[#E22213] to-orange-500",
      bgColor: "blue"
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const Navigate = useNavigate()

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 bg-linear-to-br from-gray-50 to-white overflow-hidden"
    >

      {/* Top Wave */}
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
            className="fill-[#fef3e2]"
          ></path>
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0b234a]/10 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#E22213]/10 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full opacity-20 animate-float delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(11,35,74,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(11,35,74,0.1)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Side by Side Layout */}
        <div className={`flex flex-col lg:flex-row items-start gap-12 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Left Content */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center px-4 py-2 bg-linear-to-r from-[#0b234a]/10 to-[#E22213]/10 rounded-full border border-[#0b234a]/20 mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full mr-2 animate-pulse"></span>
              <span className="w-2 h-2 bg-[#0b234a] rounded-full mr-2 animate-pulse"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-[#0b234a] font-medium text-sm">Our Curriculum</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-6 leading-tight">
              Skilling Curriculum <span className="bg-linear-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">for classrooms</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Comprehensive learning pathways designed to equip students with essential 21st-century skills
              through interactive and engaging methodologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">100K+</div>
                <div className="text-sm text-gray-600 mt-1">Students Enrolled</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold bg-linear-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-gray-600 mt-1">Schools</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="hidden sm:block lg:w-3/5">
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${skills[activeCard].color} p-2 shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <img
                      src={skills[activeCard].icon}
                      alt={skills[activeCard].title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {skills[activeCard].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {skills[activeCard].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Grid - 2x3 Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border-2 border-gray-100 p-6 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${activeCard === index
                  ? 'ring-4 ring-[#E22213]/20 shadow-xl scale-105 border-[#E22213]/30'
                  : 'shadow-lg hover:shadow-xl hover:border-gray-300'
                }`}
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => setActiveCard(index)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${skill.color} p-1.5 shadow-lg transition-all duration-300 group-hover:scale-110 ${activeCard === index ? 'scale-110' : ''
                  }`}>
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <h3 className={`text-lg font-bold transition-colors duration-300 ${activeCard === index
                    ? `bg-linear-to-r ${skill.color} bg-clip-text text-transparent`
                    : 'text-gray-900'
                  }`}>
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-700">
                {skill.desc}
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-linear-to-r from-[#E22213] to-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">Available</span>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:w-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Centered */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="bg-linear-to-r from-[#0b234a]/5 via-[#E22213]/5 to-orange-500/5 rounded-3xl p-4 border border-[#0b234a]/10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b234a] mb-4">Ready to transform education?</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-lg">
              Join hundreds of schools already using our innovative curriculum to prepare students for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                className="px-6 py-3 bg-linear-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </button>
              <button onClick={() => Navigate('/book-demo')} className="px-6 py-3 bg-linear-to-r from-[#0b234a] to-[#E22213] text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Schedule a Demo
              </button>
              <a
                href="/brochure.pdf"
                download="Company-Brochure.pdf"
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Curriculum;