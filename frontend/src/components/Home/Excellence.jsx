import React, { useState, useRef, useEffect } from "react";
import { card } from "../../assets/assets";
import {
  Lightbulb,
  Film,
  Users,
  Award,
  Rocket,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Excellence = () => {
  const items = [
    {
      title: "21st Century Skill-labs",
      desc: "Choose from Robotics, AR/VR, STEM Labs",
      img: card.one,
      color: "from-[#0b234a] to-[#E22213]",
      icon: <Lightbulb className="w-6 h-6" />,
      features: ["Communication Lab", "STEM Lab", "Financial Literacy"]
    },
    {
      title: "Interactive Content",
      desc: "Audio visual content. Think > Apply > Create Pedagogy",
      img: card.two,
      color: "from-[#0b234a] to-orange-500",
      icon: <Film className="w-6 h-6" />,
      features: ["Audio-Visual", "Think-Apply-Create", "Gamified Learning"]
    },
    {
      title: "Top-rated Trainers",
      desc: "Curriculum delivered by AAKLAN Expert Faculty",
      img: card.three,
      color: "from-orange-500 to-[#E22213]",
      icon: <Users className="w-6 h-6" />,
      features: ["AAKLAN Experts", "Certified Faculty", "Industry Professionals"]
    },
    {
      title: "Impact",
      desc: "Full responsibility to create impact and show results",
      img: card.four,
      color: "from-[#E22213] to-orange-500",
      icon: <Award className="w-6 h-6" />,
      features: ["Verified Impact", "Certifications", "Progress Tracking"]
    },
    {
      title: "AI Based LMS",
      desc: "Teachher's support, Student's support and Management/Adminidtrative support",
      img: card.five,
      color: "from-[#0b234a] to-orange-500",
      icon: <Rocket className="w-6 h-6" />,
      features: ["AI-Powered", "User-Friendly", "Comprehensive Analytics"]
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const Navigate = useNavigate()

  // Auto-rotate featured item
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, items.length]);

  // Intersection Observer
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
      className="relative w-full py-5 bg-white overflow-hidden"
    >
      {/* New Clean Background Structure */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Blobs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#0b234a]/15 to-[#E22213]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-orange-500/15 to-[#E22213]/10 rounded-full blur-3xl"></div>

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_79px,#000_79px,#000_81px,transparent_81px),linear-gradient(transparent_79px,#000_79px,#000_81px,transparent_81px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Floating Abstract Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-[#0b234a]/20 to-transparent rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-tr from-[#E22213]/20 to-transparent rounded-lg -rotate-12 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-lg rotate-45 animate-float delay-1500"></div>

        {/* Subtle Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.03]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 mb-8">
            <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
              Why We Stand Out
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">
              Commitment & Results
            </span>
            <span className="block text-2xl md:text-3xl text-gray-500 font-light mt-2">
              in Technology Education
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming education via learning new technology - expert guidance,
            and proven methodologies that deliver measurable results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Feature Navigation */}
          <div className="lg:col-span-5">
            <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer border-2 ${activeIndex === index
                      ? 'bg-white border-[#0b234a] shadow-2xl scale-[1.02]'
                      : 'bg-gray-50/80 border-transparent hover:bg-white hover:shadow-lg'
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center space-x-2">
                    {/* Icon Badge */}
                    <div className={`shrink-0 w-8 h-8 rounded-xl bg-linear-to-br ${item.color} p-0.5 shadow-lg transition-transform duration-300 ${activeIndex === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                      }`}>
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index
                          ? `bg-linear-to-r ${item.color} bg-clip-text text-transparent`
                          : 'text-gray-800'
                        }`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className={`shrink-0 transition-all duration-300 ${activeIndex === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-2 group-hover:opacity-100'
                      }`}>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${item.color} rounded-full transition-all duration-500 ${activeIndex === index ? 'w-full' : 'w-0'
                    }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Showcase */}
          <div className="lg:col-span-7">
            <div className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Main Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={items[activeIndex].img}
                    alt={items[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-linear-to-br ${items[activeIndex].color} rounded-xl flex items-center justify-center text-white`}>
                        {items[activeIndex].icon}
                      </div>
                      <h3 className="text-2xl font-bold">{items[activeIndex].title}</h3>
                    </div>
                    <p className="text-gray-200 text-lg">{items[activeIndex].desc}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items[activeIndex].features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl bg-gray-50 hover:bg-linear-to-br hover:from-white hover:to-gray-100 transition-all duration-300 border border-gray-200"
                      >
                        <div className={`w-8 h-8 bg-linear-to-br ${items[activeIndex].color} rounded-lg flex items-center justify-center text-white text-sm font-bold mx-auto mb-2`}>
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200">
                  <div className="flex gap-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                            ? `bg-linear-to-r ${items[index].color} scale-125`
                            : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium min-w-[60px]">
                    {activeIndex + 1} of {items.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {[
            { value: "98%", label: "Success Rate" },
            { value: "100K+", label: "Students" },
            { value: "500+", label: "Educators" },
            { value: "98%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="bg-linear-to-r from-[#0b234a] to-[#E22213] rounded-3xl p-5 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Education?
              </h3>
              <p className="text-gray-300 text-lg mb-4 max-w-md mx-auto">
                Join the revolution in learning and teaching excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                  className="px-6 py-3 bg-linear-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
                <button onClick={() => Navigate('/book-demo')} className="px-4 py-2 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;