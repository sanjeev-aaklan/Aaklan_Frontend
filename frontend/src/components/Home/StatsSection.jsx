import React, { useState, useEffect, useRef } from "react";
import { statsSection } from "../../assets/assets";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    schools: 0,
    students: 0,
    retention: 0,
    trainers: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
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

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      schools: 100,
      students: 100000,
      retention: 98,
      trainers: 200
    };

    const duration = 1000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const counterInterval = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

      setCounters({
        schools: Math.floor(targets.schools * easeOut),
        students: Math.floor(targets.students * easeOut),
        retention: Math.floor(targets.retention * easeOut),
        trainers: Math.floor(targets.trainers * easeOut)
      });

      if (currentStep >= steps) {
        clearInterval(counterInterval);
        // Set final values to ensure accuracy
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(counterInterval);
  }, [isVisible]);

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section
      id="statsSection"
      ref={sectionRef}
      className="relative w-full py-10 bg-linear-to-br from-gray-50 to-blue-50 overflow-hidden"
    >

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 -right-16 w-40 h-40 bg-blue-200 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute -bottom-20 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-25 animate-float delay-500"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-size-[50px_50px] bg-grid-pattern"></div>
      </div>

      {/* NEW LAYOUT - Split Design */}
      <div className="relative max-w-7xl mx-6 lg:mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/60 backdrop-blur-sm">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT COLUMN - Stats */}
          <div className="p-4 sm:p-8 lg:p-12 bg-linear-to-br from-blue-50 to-indigo-50">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0b234a] mb-4">
                Transforming Technical Education
              </h2>
              <p className="text-gray-600 text-sm sm:text-lg">
                Our impact in numbers - empowering schools, students and educators across the nation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {/* Item 1 - Associated Schools */}
              <div className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={statsSection.school1}
                      className="hidden sm:block w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                      alt="Schools"
                    />
                    <div className="absolute -inset-2 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#0B234A] mb-1">
                      {counters.schools}+
                    </p>
                    <p className="text-gray-600 text-sm font-medium">Associated Schools</p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Students Trained */}
              <div className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={statsSection.student}
                      className="hidden sm:block w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                      alt="Students"
                    />
                    <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-1">
                      {formatNumber(counters.students)}+
                    </p>
                    <p className="text-gray-600 text-sm font-medium">Students Trained</p>
                  </div>
                </div>
              </div>

              {/* Item 3 - School Retention */}
              <div className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={statsSection.school2}
                      className="hidden sm:block w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                      alt="Retention"
                    />
                    <div className="absolute -inset-2 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-1">
                      {counters.retention}%
                    </p>
                    <p className="text-gray-600 text-sm font-medium">School Retention</p>
                  </div>
                </div>
              </div>

              {/* Item 4 - Trained Trainers */}
              <div className={`group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={statsSection.teacher}
                      className="hidden sm:block w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                      alt="Trainers"
                    />
                    <div className="absolute -inset-2 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-1">
                      {counters.trainers}+
                    </p>
                    <p className="text-gray-600 text-sm font-medium">Trained Teachers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className={`mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/60 shadow-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Government Recognized</p>
                    <p className="text-xs text-gray-500">EdTech Initiative</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Trusted by <span className="font-bold text-[#0b234a]">95+</span> educational institutions nationwide
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Incubation & Recognition */}
          <div className="p-8 lg:p-12 bg-linear-to-br from-orange-50 to-amber-50 flex flex-col justify-center">
            <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
              <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 mb-8">
                <p className="relative text-gray-600 text-lg font-semibold mb-8 text-center">
                  Backed by
                  <span
                    className="absolute left-1/2 -bottom-2 h-1 w-24 bg-linear-to-r from-[#0b234a] to-[#E22213] rounded-full transform -translate-x-1/2"
                  ></span>
                </p>

                <div className="relative group">
                  <div className="flex items-center justify-center space-x-4 sm:space-x-12">
                    <div className="text-center">
                      <img
                        src={statsSection.iStart}
                        alt="iStart"
                        className="w-40 lg:w-48 mx-auto transition-all duration-300 filter group-hover:brightness-110 group-hover:scale-105"
                      />
                    </div>

                    {/* Vertical Divider with Icon */}
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-0.5 bg-linear-to-b from-[#0b234a] to-[#E22213] rounded-full mb-2"></div>
                      <div className="w-8 h-8 bg-linear-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">+</span>
                      </div>
                      <div className="h-12 w-0.5 bg-linear-to-b from-[#E22213] to-orange-500 rounded-full mt-2"></div>
                    </div>

                    <div className="text-center">
                      <img
                        src='https://d2lk14jtvqry1q.cloudfront.net/media/small_BITS_Pilani_7a058e9309_098a202d47_d55a9cc055_b70d67d1ea.png'
                        alt="Technology Partner"
                        className="w-40 lg:w-48 mx-auto transition-all duration-300 filter group-hover:brightness-110 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                </div>
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-[#0b234a] mb-4">
                  Recognized Excellence in EdTech
                </h3>
                <p className="text-gray-600 mb-6">
                  Our innovative approach to education technology has been recognized and supported by leading incubation programs, helping us scale our impact across the country.
                </p>

                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Fast Growing</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Quality Certified</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Community Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GRADIENT */}
        <div className="h-2 bg-linear-to-r from-[#E22213] via-[#0b234a] to-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default StatsSection;