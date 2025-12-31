import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Code2,
  Cpu,
  Smartphone,
  Gamepad2,
  BookOpen,
  Rocket,
  Users,
  Award,
  TrendingUp,
  Zap,
  Lightbulb,
  Target,
  ArrowRight,
  Hash, // Basic Syntax
  Database, // Data Types
  FunctionSquare, // Functions
  RefreshCw, // Loops
  FileCode, // HTML/CSS
  Code, // JavaScript
  Atom, // React
  Link, // APIs
  Library, // Python Libraries
  BarChart3, // Data Science
  Brain, // Neural Networks
  Box, // Projects
  Palette, // App Design
  Layers, // Flutter
  Cloud, // Firebase
  Upload, // Deployment
  Move3d, // Game Physics
  Joystick, // Unity Basics
  GamepadIcon, // 2D/3D Games
  Package, // Publishing
  Cpu as CpuIcon, // Arduino
  Radio, // Sensors
  Settings, // Automation
  Home, // Smart Systems
  Phone, Globe, Monitor, User, Trophy, Briefcase, Star
} from 'lucide-react'

import OurBelivers from '../components/Home/OurBelivers'
import HeroHeading from '../components/PageHeading/HeroHeading'
import BookFreeDemo from '../components/BookFreeDemo'
import { FaWhatsapp } from 'react-icons/fa'

const Coding = () => {

  const bookDemoRef = useRef(null);

  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };


  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <>
      <section className="relative min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">{"</>"}</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">{"{}"}</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">{"<>"}</div>
          </div>

          {/* Binary Code Animation */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 font-mono text-xs sm:text-sm animate-pulse">
              10101010 01010101 11110000 00001111
            </div>
            <div className="absolute top-20 right-20 font-mono text-xs sm:text-sm animate-pulse" style={{ animationDelay: '1s' }}>
              11001100 00110011 10101010 01010101
            </div>
            <div className="absolute bottom-20 left-20 font-mono text-xs sm:text-sm animate-pulse" style={{ animationDelay: '2s' }}>
              11110000 00001111 11001100 00110011
            </div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full py-8 sm:py-12 lg:py-10">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8" data-aos="fade-right">
              {/* Trust Badge */}
              <div
                className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#0b234a]">
                    <Award className="w-4 h-4 inline mr-1" />
                    India's Most Trusted Coding Platform
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <HeroHeading colorHeading='Master Coding' NonColorHading='Build Your Future' />

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="300">
                <span className="font-semibold text-[#0b234a]">India's Most Trusted destination</span> for students to get{" "}
                <span className="font-semibold text-[#E22213]">Practical & Personalized training.</span>
                <br /><br />
                Learn from the expert faculties of Robotics, Arduino, IOT, Coding, Electronics & many more.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
                {[
                  { icon: <Cpu className="w-5 h-5" />, name: 'Robotics', color: 'from-purple-500 to-pink-500' },
                  { icon: <Zap className="w-5 h-5" />, name: 'Arduino', color: 'from-blue-500 to-cyan-500' },
                  { icon: <Globe className="w-5 h-5" />, name: 'IOT', color: 'from-green-500 to-emerald-500' },
                  { icon: <Code2 className="w-5 h-5" />, name: 'Coding', color: 'from-orange-500 to-red-500' },
                  { icon: <Cpu className="w-5 h-5" />, name: 'Electronics', color: 'from-yellow-500 to-orange-500' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm transform hover:scale-110 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay={400 + (index * 100)}
                  >
                    <div className="text-gray-600 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0b234a] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6" data-aos="fade-up" data-aos-delay="600">
                <button onClick={scrollToBookDemo} className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Book Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                  className="px-6 py-3 bg-linear-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
                {[
                  { number: '100K+', label: 'Students Trained', icon: <Users className="w-4 h-4" /> },
                  { number: '100+', label: 'Schools', icon: <BookOpen className="w-4 h-4" /> },
                  { number: '98%', label: 'Success Rate', icon: <TrendingUp className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center hover:scale-110 transition-transform duration-300"
                    data-aos="fade-up"
                    data-aos-delay={800 + (index * 100)}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                      {stat.icon}
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Coding Visual */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              {/* Main Code Visualization */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 scale-105 blur-sm"></div>

                {/* Code Editor Container */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-700/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  {/* Editor Header */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm font-mono">coding_future.py</div>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-xs sm:text-sm space-y-1">
                    <div className="text-green-400"># Welcome to Future Coding</div>
                    <div className="text-gray-400">def <span className="text-yellow-300">build_future</span>():</div>
                    <div className="text-blue-400 ml-4">skills</div>
                    <div className="text-gray-400 ml-8">= [</div>
                    <div className="text-cyan-400 ml-12">"Python"</div>
                    <div className="text-cyan-400 ml-12">"JavaScript"</div>
                    <div className="text-cyan-400 ml-12">"AI & ML"</div>
                    <div className="text-gray-400 ml-8">]</div>
                    <div className="text-blue-400 ml-4">future</div>
                    <div className="text-gray-400 ml-8">= <span className="text-yellow-300">create_amazing_projects</span>(skills)</div>
                    <div className="text-gray-400 ml-4">return <span className="text-green-400">future</span></div>
                    <div className="text-gray-400 mt-4"># Start your journey today! 🚀</div>
                  </div>

                  {/* Animated Cursor */}
                  <div className="absolute bottom-4 right-4 w-2 h-4 bg-green-400 animate-pulse"></div>

                  {/* Floating Code Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-lg animate-float flex items-center justify-center hover:scale-125 transition-transform duration-300">
                    <Code2 className="w-4 h-4 text-blue-300" />
                  </div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-green-500/20 rounded-full animate-float hover:scale-150 transition-transform duration-300" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/50 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 z-10" data-aos="zoom-in" data-aos-delay="800">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full flex items-center justify-center">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Python</div>
                      <div className="text-xs text-gray-600">Beginner Friendly</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/50 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 z-10" data-aos="zoom-in" data-aos-delay="1000">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Web Dev</div>
                      <div className="text-xs text-gray-600">HTML, CSS, JS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1200">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Explore Courses</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-[#E22213] to-orange-500 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.05; transform: scale(1); }
            50% { opacity: 0.1; transform: scale(1.05); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className="relative py-8 bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Platform Icons */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-56 sm:h-56 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🖥️</div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-48 sm:h-48 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">👨‍💻</div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">🚀</div>
          </div>

          {/* Code Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 font-mono text-xs text-[#0b234a]">
              {`function create() {`}
            </div>
            <div className="absolute top-32 right-20 font-mono text-xs text-[#E22213]" style={{ animationDelay: '1s' }}>
              {`if (creative) {`}
            </div>
            <div className="absolute bottom-32 left-20 font-mono text-xs text-[#0b234a]" style={{ animationDelay: '2s' }}>
              {`return amazing;`}
            </div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                <Target className="w-4 h-4 inline mr-1" />
                Industry-Standard Platforms
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="200">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Coding and AI
              </span>
              <br />
              <span className="text-gray-900">Platform</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Platforms like PictoBlox, MIT App Inventor, Scratch, and Code.org make coding accessible and engaging through visual programming.
              They empower students to create interactive projects and applications, fostering creativity and problem-solving skills.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                name: 'PictoBlox',
                icon: <Cpu className="w-8 h-8" />,
                description: 'AI & ML platform for kids',
                color: 'from-purple-500 to-pink-500',
                features: ['AI Programming', 'Game Development', 'Hardware Integration'],
                status: 'Most Popular'
              },
              {
                name: 'MIT App Inventor',
                icon: <Smartphone className="w-8 h-8" />,
                description: 'Build mobile apps visually',
                color: 'from-green-500 to-emerald-500',
                features: ['App Development', 'Drag & Drop', 'Android Apps'],
                status: 'Industry Standard'
              },
              {
                name: 'Scratch',
                icon: <Gamepad2 className="w-8 h-8" />,
                description: 'Creative coding for beginners',
                color: 'from-orange-500 to-red-500',
                features: ['Visual Coding', 'Animations', 'Storytelling'],
                status: 'Beginner Friendly'
              },
              {
                name: 'Code.org',
                icon: <BookOpen className="w-8 h-8" />,
                description: 'Learn computer science',
                color: 'from-blue-500 to-cyan-500',
                features: ['CS Fundamentals', 'Game-Based Learning', 'Curriculum'],
                status: 'Educational'
              }
            ].map((platform, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={400 + (index * 100)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border ${platform.status === 'Most Popular'
                    ? 'bg-[#E22213]/10 text-[#E22213] border-[#E22213]/20'
                    : platform.status === 'Industry Standard'
                      ? 'bg-[#0b234a]/10 text-[#0b234a] border-[#0b234a]/20'
                      : 'bg-orange-500/10 text-orange-600 border-orange-500/20'
                    }`}>
                    {platform.status}
                  </span>
                </div>

                {/* Platform Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <div className="text-white">
                    {platform.icon}
                  </div>
                </div>

                {/* Platform Info */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0b234a] transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {platform.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${platform.color} rounded-full`}></div>
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-x-0 group-hover:scale-x-100 transform origin-left`}></div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Why Visual Programming?
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Visual programming platforms remove the initial complexity of syntax, allowing students to focus on computational thinking and problem-solving fundamentals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Target className="w-5 h-5" />, benefit: 'Engaging Learning' },
                    { icon: <Lightbulb className="w-5 h-5" />, benefit: 'Instant Feedback' },
                    { icon: <Rocket className="w-5 h-5" />, benefit: 'Rapid Prototyping' },
                    { icon: <Award className="w-5 h-5" />, benefit: 'Build Confidence' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <div className="text-white">
                        {item.icon}
                      </div>
                      <span className="font-medium text-white">{item.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '98%', label: 'Faster Learning Curve', icon: <TrendingUp className="w-4 h-4" /> },
                  { number: '100k', label: 'Active Students', icon: <Users className="w-4 h-4" /> },
                  { number: '21+', label: 'Countries', icon: <Globe className="w-4 h-4" /> },
                  { number: '4.8/5', label: 'Student Rating', icon: <Award className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm transform hover:scale-105 hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                      {stat.icon}
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>


      <section className="relative py-8 bg-linear-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Platform Icons */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-56 sm:h-56 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Monitor className="w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-48 sm:h-48 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <User className="w-10 h-10" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <Rocket className="w-10 h-10" />
            </div>
          </div>

          {/* Code Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 font-mono text-xs text-[#0b234a]">
              {`function create() {`}
            </div>
            <div className="absolute top-32 right-20 font-mono text-xs text-[#E22213]" style={{ animationDelay: '1s' }}>
              {`if (creative) {`}
            </div>
            <div className="absolute bottom-32 left-20 font-mono text-xs text-[#0b234a]" style={{ animationDelay: '2s' }}>
              {`return amazing;`}
            </div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
            linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                <BookOpen className="w-4 h-4 inline mr-1" />
                Structured Learning Path
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Text Based Coding Curriculum
              </span>
              <br />
              <span className="text-gray-900">From Beginner to Expert</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our carefully designed curriculum ensures progressive learning with hands-on projects at every stage.
            </p>
          </div>

          {/* Curriculum Tabs */}
          <div className="mb-8 sm:mb-12" data-aos="fade-up">

            {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
          <button
            key={index}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${index === 0
                ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
          >
            {level} Level
          </button>
        ))}
      </div> */}

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Python Fundamentals',
                  duration: '8 Weeks',
                  level: 'Beginner',
                  icon: <Code2 className="w-6 h-6" />,
                  topics: [
                    { name: 'Basic Syntax', icon: <Hash className="w-3 h-3" /> },
                    { name: 'Data Types', icon: <Database className="w-3 h-3" /> },
                    { name: 'Functions', icon: <FunctionSquare className="w-3 h-3" /> },
                    { name: 'Loops', icon: <RefreshCw className="w-3 h-3" /> }
                  ],
                  projects: 5,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Web Development',
                  duration: '12 Weeks',
                  level: 'Intermediate',
                  icon: <Globe className="w-6 h-6" />,
                  topics: [
                    { name: 'HTML', icon: <FileCode className="w-3 h-3" /> },
                    { name: 'CSS', icon: <FileCode className="w-3 h-3" /> },
                    { name: 'JavaScript', icon: <Code className="w-3 h-3" /> },
                    { name: 'React', icon: <Atom className="w-3 h-3" /> },
                  ],
                  projects: 8,
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'AI & Machine Learning',
                  duration: '16 Weeks',
                  level: 'Advanced',
                  icon: <Cpu className="w-6 h-6" />,
                  topics: [
                    { name: 'Python Libraries', icon: <Library className="w-3 h-3" /> },
                    { name: 'Data Science', icon: <BarChart3 className="w-3 h-3" /> },
                    { name: 'Neural Networks', icon: <Brain className="w-3 h-3" /> },
                    { name: 'Projects', icon: <Box className="w-3 h-3" /> }
                  ],
                  projects: 10,
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Mobile App Development',
                  duration: '10 Weeks',
                  level: 'Intermediate',
                  icon: <Smartphone className="w-6 h-6" />,
                  topics: [
                    { name: 'App Design', icon: <Palette className="w-3 h-3" /> },
                    { name: 'Flutter', icon: <Layers className="w-3 h-3" /> },
                    { name: 'React Native Basic', icon: <Cloud className="w-3 h-3" /> },
                    { name: 'Deployment', icon: <Upload className="w-3 h-3" /> }
                  ],
                  projects: 6,
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Game Development',
                  duration: '14 Weeks',
                  level: 'Advanced',
                  icon: <Gamepad2 className="w-6 h-6" />,
                  topics: [
                    { name: 'Game Physics', icon: <Move3d className="w-3 h-3" /> },
                    { name: 'Unity Basics', icon: <Joystick className="w-3 h-3" /> },
                    { name: '2D/3D Games', icon: <GamepadIcon className="w-3 h-3" /> },
                    { name: 'Publishing', icon: <Package className="w-3 h-3" /> }
                  ],
                  projects: 7,
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'IoT & Robotics',
                  duration: '12 Weeks',
                  level: 'Expert',
                  icon: <Zap className="w-6 h-6" />,
                  topics: [
                    { name: 'Arduino', icon: <CpuIcon className="w-3 h-3" /> },
                    { name: 'Sensors', icon: <Radio className="w-3 h-3" /> },
                    { name: 'Automation', icon: <Settings className="w-3 h-3" /> },
                    { name: 'Smart Systems', icon: <Home className="w-3 h-3" /> }
                  ],
                  projects: 9,
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((course, index) => (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {course.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b234a] transition-colors duration-300">
                    {course.title}
                  </h3>

                  <div className="mb-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${course.level === 'Beginner'
                      ? 'bg-blue-100 text-blue-600'
                      : course.level === 'Intermediate'
                        ? 'bg-purple-100 text-purple-600'
                        : course.level === 'Advanced'
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-red-100 text-red-600'
                      }`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-lg border border-gray-200 flex items-center gap-1"
                        >
                          {topic.icon}
                          {topic.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* <section className="relative py-8 bg-linear-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
         
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-56 sm:h-56 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Monitor className="w-12 h-12" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-48 sm:h-48 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <User className="w-10 h-10" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <Rocket className="w-10 h-10" />
            </div>
          </div>

        
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 font-mono text-xs text-[#0b234a]">
              {`function create() {`}
            </div>
            <div className="absolute top-32 right-20 font-mono text-xs text-[#E22213]" style={{ animationDelay: '1s' }}>
              {`if (creative) {`}
            </div>
            <div className="absolute bottom-32 left-20 font-mono text-xs text-[#0b234a]" style={{ animationDelay: '2s' }}>
              {`return amazing;`}
            </div>
          </div>

      
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                  linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                <Award className="w-4 h-4 inline mr-1" />
                Student Success Stories
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Transforming Futures
              </span>
              <br />
              <span className="text-gray-900">Our Students' Achievements</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their careers with our coding programs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { number: '500+', label: 'Projects Built', icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-[#E22213]' },
              { number: '50+', label: 'National Awards', icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-[#0b234a]' },
              { number: '200+', label: 'Internships', icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-orange-500' },
              { number: '100+', label: 'Startups Founded', icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />, color: 'text-green-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {[
              {
                name: 'Rahul Sharma',
                age: 14,
                achievement: 'Built AI Chatbot',
                quote: 'The practical approach helped me understand complex concepts easily.',
                icon: <User className="w-12 h-12" />,
                rating: 5,
                project: 'Smart Home System'
              },
              {
                name: 'Priya Patel',
                age: 15,
                achievement: 'Won National Hackathon',
                quote: 'From zero to hero! The mentorship was exceptional throughout.',
                icon: <User className="w-12 h-12" />,
                rating: 5,
                project: 'Health Monitoring App'
              },
              {
                name: 'Arjun Mehta',
                age: 13,
                achievement: 'Published Mobile App',
                quote: 'The project-based learning made coding fun and engaging.',
                icon: <User className="w-12 h-12" />,
                rating: 5,
                project: 'Educational Game'
              },
              {
                name: 'Sneha Reddy',
                age: 16,
                achievement: 'IoT Project Recognition',
                quote: 'Best decision I made for my career. The curriculum is top-notch.',
                icon: <User className="w-12 h-12" />,
                rating: 5,
                project: 'Smart Agriculture System'
              }
            ].map((student, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0b234a]/10 to-[#E22213]/10 rounded-2xl">
                    {student.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{student.name}, {student.age}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="px-2 py-1 text-xs font-semibold bg-[#E22213]/10 text-[#E22213] rounded-full">
                        {student.achievement}
                      </span>
                      <div className="flex">
                        {[...Array(student.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-600 italic border-l-4 border-[#0b234a] pl-4 py-2 mb-4">
                  "{student.quote}"
                </blockquote>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Project:</div>
                      <div className="font-semibold text-[#0b234a]">{student.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden" data-aos="zoom-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Featured Achievement</h3>
                <p className="text-blue-100 mb-6">
                  Our student team won the National Robotics Championship 2024 with their innovative AI-powered robot.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">1st</div>
                    <div className="text-sm text-blue-100">National Rank</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Teams Competed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white/20 to-transparent rounded-2xl">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Project: AI Rover</div>
                      <div className="text-blue-100">Autonomous Exploration Robot</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Computer Vision Enabled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Real-time Object Detection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Autonomous Navigation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>

      <OurBelivers />
    </>
  )
}

export default Coding