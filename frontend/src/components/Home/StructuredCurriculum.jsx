import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe,
  BookOpen,
  GraduationCap,
  RefreshCw
} from "lucide-react";

export default function StructuredCurriculum() {
  const navigate = useNavigate()

  return (
    <section className="w-full py-16 px-4 bg-white relative overflow-hidden">

      {/* Wave Background */}
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

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#E22213]"
          ></path>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0b234a]/20 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-orange-500/20 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#E22213]/20 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Structured {' '}
            <span className="bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">
              Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI education with specialized books and resources for all age groups
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#0b234a]/5 to-[#E22213]/5 rounded-3xl p-8 shadow-lg border border-[#0b234a]/10">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#E22213] rounded-full opacity-30 animate-ping delay-700"></div>

              <img
                src="https://roboticschools.com/wp-content/uploads/2024/03/RS_2-2.png"
                alt="Structured Curriculum"
                className="w-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">

              {/* Age Groups */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-[#0b234a] shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-[#0b234a]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-[#0b234a] transition-colors">
                  <span className="w-10 h-10 bg-[#0b234a] rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    1
                  </span>
                  Early Learning Program (Nursery to UKG)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Unique foundation program introducing basic AI concepts through interactive activities and games.
                </p>
              </div>

              {/* Grade Levels */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-orange-500/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-orange-600 transition-colors">
                  <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    2
                  </span>
                  Little Tech Explorers (1 to 5)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Comprehensive curriculum building advanced skills in AI, robotics, and coding with progressive complexity.
                </p>
              </div>

              {/* Grade Levels */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-orange-500/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-orange-600 transition-colors">
                  <span className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    3
                  </span>
                  Computer And Coding (1 to 8)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Comprehensive curriculum building advanced skills in AI, robotics, and coding with progressive complexity.
                </p>
              </div>

              {/* Grade Levels */}
              <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-orange-500/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-orange-600 transition-colors">
                  <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white mr-3 text-sm group-hover:scale-110 transition-transform">
                    4
                  </span>
                  Create The Future (6 to 12)
                </h3>
                <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                  Comprehensive curriculum building advanced skills in AI, robotics, and coding with progressive complexity.
                </p>
              </div>
            </div>



            {/* CTA Button */}
            <button onClick={() => navigate('/books')} className="mt-8 w-full bg-gradient-to-r from-[#0b234a] to-[#E22213] hover:from-[#0b234a]/90 hover:to-[#E22213]/90 text-white font-bold text-sm sm:text-lg py-2 px-4 sm:py-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explore AAKLAN Curriculum</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

        {/* Standards */}
<div className="bg-white rounded-2xl p-6 my-5 border-l-4 border-[#E22213] shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:bg-[#E22213]/5">
  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-[#E22213] transition-colors">
    <span className="w-10 h-10 bg-[#E22213] rounded-full flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
      <Globe size={20} />
    </span>
    Global Standards Alignment
  </h3>

  <div className="flex flex-wrap gap-2 mt-3">
    {['CBSE', 'IB', 'IGCSE', 'ICSE', 'CSTA', 'CIE'].map((standard, index) => {
      const colorClasses = [
        'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20',
        'bg-orange-500/10 text-orange-700 border-orange-500/20',
        'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20',
        'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20',
        'bg-orange-500/10 text-orange-700 border-orange-500/20',
        'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20'
      ];

      return (
        <span
          key={standard}
          className={`px-3 py-1 rounded-full text-sm font-medium border hover:scale-105 transition-transform duration-200 ${colorClasses[index]}`}
        >
          {standard}
        </span>
      );
    })}
  </div>
</div>

{/* Additional Features */}
<div className="mt-16 mb-5 grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="text-center p-6 bg-gradient-to-br from-[#0b234a]/5 to-transparent rounded-2xl border border-[#0b234a]/10 hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-[#0b234a] rounded-full flex items-center justify-center text-white mx-auto mb-4">
      <BookOpen size={22} />
    </div>
    <h4 className="font-bold text-gray-900 mb-2">Comprehensive Materials</h4>
    <p className="text-gray-600 text-sm">
      Detailed lesson plans and resources for every grade level
    </p>
  </div>

  <div className="text-center p-6 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl border border-orange-500/10 hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
      <GraduationCap size={22} />
    </div>
    <h4 className="font-bold text-gray-900 mb-2">Expert Designed</h4>
    <p className="text-gray-600 text-sm">
      Created by industry experts and educators
    </p>
  </div>

  <div className="text-center p-6 bg-gradient-to-br from-[#E22213]/5 to-transparent rounded-2xl border border-[#E22213]/10 hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-[#E22213] rounded-full flex items-center justify-center text-white mx-auto mb-4">
      <RefreshCw size={22} />
    </div>
    <h4 className="font-bold text-gray-900 mb-2">Regular Updates</h4>
    <p className="text-gray-600 text-sm">
      Curriculum updated with latest AI advancements
    </p>
  </div>

</div>

      </div>
    </section>
  );
}