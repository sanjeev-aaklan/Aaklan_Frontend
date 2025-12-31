import React, { useRef, useEffect } from 'react'
import { VRARLabImage } from '../assets/assets'
import OurBelivers from '../components/Home/OurBelivers.jsx'
import HeroHeading from '../components/PageHeading/HeroHeading'
import BookFreeDemo from '../components/BookFreeDemo'
import {
  ArrowRight,
  Target,
  Glasses,
  Globe,
  Sparkles,
  BookOpen,
  Bot,
  Microscope,
  MapPin,
  Play,
  Users,
  Compass,
  BarChart3,
  MessageSquare,
  Heart,
  Download,
  Apple,
  Smartphone,
  Wifi,
  BatteryCharging,
  Briefcase,
  Shield,
  Zap,
  Check,
  Star,
  Phone,
  Mail,
  Bell,
  Home,
  School,
  User,
  FileText,
  Rocket,
  ClipboardList,
  TrendingUp,
  Package,
  Tablet,
} from 'lucide-react'

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa'

const VRARLab = () => {
  const bookDemoRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <>
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-[#0b234a]/10 to-orange-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating VR/AR Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
              <Glasses className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Globe className="w-10 h-10 opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <Sparkles className="w-8 h-8 opacity-20" />
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

          {/* Holographic Lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-[#E22213]/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-[#0b234a]/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  Next-Gen Learning Experience
                </span>
              </div>

              {/* Main Heading */}
              <HeroHeading colorHeading='VR / AR Lab' NonColorHading='for Schools' />

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Cubicle of knowledge offering AI and Robotics education with comprehensive curriculum,
                interactive robots, hands-on projects and real-life applications!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
                {[
                  { icon: <BookOpen className="w-5 h-5" />, feature: 'Comprehensive Curriculum' },
                  { icon: <Bot className="w-5 h-5" />, feature: 'Interactive Robots' },
                  { icon: <Microscope className="w-5 h-5" />, feature: 'Hands-on Projects' },
                  { icon: <MapPin className="w-5 h-5" />, feature: 'Real-life Applications' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item.feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button onClick={scrollToBookDemo} className="group relative bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white px-6 py-2 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border-2 border-white/20 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Book Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                  className="px-6 py-2 bg-linear-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6" data-aos="fade-up" data-aos-delay="500">
                {[
                  { number: '200+', label: 'VR Experiences' },
                  { number: '50+', label: 'Schools' },
                  { number: '98%', label: 'Engagement' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - VR/AR Visual */}
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              {/* Main VR/AR Visualization */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-3xl transform rotate-6 scale-105 blur-sm"></div>

                {/* VR Headset Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b234a] via-[#E22213]/20 to-orange-500/20 relative">
                    {/* Holographic Display with Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Main VR Image */}
                        <img
                          src={VRARLabImage.VRrightimage}
                          alt="VR Lab Experience - Students using VR headsets in classroom"
                          className="w-full h-full object-cover opacity-90"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0b234a]/40 via-[#E22213]/30 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white p-4 sm:p-6">
                            <div className="flex justify-center mb-3 sm:mb-4">
                              <Glasses className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Virtual Reality Lab</h3>
                            <p className="text-white/80 text-sm sm:text-base">Immersive Learning Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Holograms */}
                    <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#0b234a]/30 rounded-full animate-float flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">VR</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#E22213]/40 rounded-lg rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                      <span className="text-white text-xs">AR</span>
                    </div>
                    <div className="absolute top-1/2 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500/50 rounded-full animate-pulse"></div>

                    {/* Scanning Lines Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b234a]/10 via-[#E22213]/10 to-orange-500/10 rounded-2xl"></div>
                  </div>

                  {/* AR Elements Floating Around */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Tech Cards */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full flex items-center justify-center">
                      <Microscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a]">AR View</div>
                      <div className="text-xs text-gray-600">Interactive</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a]">VR World</div>
                      <div className="text-xs text-gray-600">Immersive</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional AR Elements */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-20 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-16 sm:mt-20" data-aos="fade-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Powered by Cutting-Edge Technology
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Oculus Quest', icon: <Glasses className="w-6 h-6" />, color: 'from-[#E22213] to-[#0b234a]' },
                { name: 'Unity 3D', icon: <Play className="w-6 h-6" />, color: 'from-[#0b234a] to-orange-500' },
                { name: 'AR Core', icon: <Smartphone className="w-6 h-6" />, color: 'from-orange-500 to-[#E22213]' },
                { name: 'WebXR', icon: <Globe className="w-6 h-6" />, color: 'from-[#E22213] to-orange-500' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.05); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
      </section>

      {/* Second Section with AOS */}
      <section className="relative py-10 bg-gradient-to-br from-gray-50 via-[#0b234a]/10 to-orange-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating VR Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
              <Microscope className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Play className="w-10 h-10 opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <Globe className="w-8 h-8 opacity-20" />
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

          {/* Holographic Lines */}
          <div className="absolute top-1/3 left-0 w-32 h-1 bg-gradient-to-r from-[#E22213]/30 via-[#0b234a]/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-gradient-to-b from-orange-500/30 via-[#E22213]/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse mr-2"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                Transformative Learning Experience
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              A new era of education with{" "}
              <span className="bg-gradient-to-r from-[#E22213] via-[rgb(11,35,74)] to-orange-500 bg-clip-text text-transparent">
                Aaklan
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expand your mind beyond the boundaries of the classroom through virtual reality
            </p>
          </div>

          {/* VR Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                ),
                title: "Virtual Lab",
                description: "Understanding different science topics is made easy with VR through a 360-degree virtual science lab.",
                color: "from-[#E22213] to-[#0b234a]"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0b234a] to-orange-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                ),
                title: "Fun with VR",
                description: "The gaming experience in VR enables learners to explore and learn while they play.",
                color: "from-[#0b234a] to-orange-500"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-[#E22213] rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                ),
                title: "Teacher First",
                description: "The teacher will describe and tell a story regarding the topic while students are traveling in the virtual world.",
                color: "from-orange-500 to-[#E22213]"
              },
              {
                icon: (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                ),
                title: "Field Trips",
                description: "Experience amazing educational trips and virtually visit the science lab from the classroom without traveling.",
                color: "from-[#E22213] to-orange-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Feature Icon */}
                {feature.icon}

                {/* Feature Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#0b234a] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>

                {/* Floating Element */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-float`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center" data-aos="fade-up">
            {[
              { number: '500+', label: 'VR Lessons' },
              { number: '100K+', label: 'Students' },
              { number: '200+', label: 'Schools' },
              { number: '98%', label: 'Engagement' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 bg-gradient-to-br from-gray-50 via-[#0b234a]/10 to-orange-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
              <Glasses className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Package className="w-10 h-10 opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <School className="w-8 h-8 opacity-20" />
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

          {/* Connection Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse mr-2"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                Complete VR Classroom Solutions
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                VR Kit for School
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect VR classroom setup for your school with our comprehensive packages.
              Everything you need for immersive learning in one complete kit.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                devices: "5 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "5 VR Devices",
                  "5 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-[#E22213] to-[#0b234a]",
                price: "Starter"
              },
              {
                devices: "10 Devices",
                title: "AaklanVR Classroom",
                popular: true,
                features: [
                  "10 VR Devices",
                  "10 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-[#0b234a] to-orange-500",
                price: "Most Popular"
              },
              {
                devices: "15 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "15 VR Devices",
                  "15 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-orange-500 to-[#E22213]",
                price: "Advanced"
              },
              {
                devices: "20 Devices",
                title: "AaklanVR Classroom",
                popular: false,
                features: [
                  "20 VR Devices",
                  "20 Headsets",
                  "1 Tablet",
                  "1 Router",
                  "1 Multi charger",
                  "1 Storage case",
                  "VR content for 1 year"
                ],
                color: "from-[#E22213] to-orange-500",
                price: "Enterprise"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${plan.popular
                  ? 'border-orange-500 shadow-2xl'
                  : 'border-white/50'
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#E22213] to-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Glasses className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{plan.devices}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent border border-current`}>
                    {plan.price}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 p-2 bg-gray-50/50 rounded-lg group hover:bg-white transition-all duration-300">
                      <div className={`w-6 h-6 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Comparison Features */}
          <div className="mt-16 sm:mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
              All Packages Include
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Tablet className="w-8 h-8" />,
                  title: "Tablet Controller",
                  description: "Easy classroom management"
                },
                {
                  icon: <Wifi className="w-8 h-8" />,
                  title: "WiFi Router",
                  description: "Seamless connectivity"
                },
                {
                  icon: <BatteryCharging className="w-8 h-8" />,
                  title: "Multi Charger",
                  description: "Charge all devices simultaneously"
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: "Storage Case",
                  description: "Safe and organized storage"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center" data-aos="fade-up">
            {[
              { number: '500+', label: 'Schools Equipped' },
              { number: '100K+', label: 'Students Impacted' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
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

      <section className="relative py-10 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
              <BarChart3 className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <School className="w-10 h-10 opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <User className="w-8 h-8 opacity-20" />
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

          {/* Data Flow Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-8" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  School Administration Made Easy
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                  "Bridging the gap
                </span>
                <br />
                <span className="text-gray-900">between student and school"</span>
              </h2>

              {/* Features List */}
              <div className="space-y-6">
                <div
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Admin Dashboard for school</h3>
                    <p className="text-gray-700 leading-relaxed">
                      User-friendly admin dashboard customized for school administrators to monitor the results and outcomes of the VR lab.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0b234a] to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Session Records Management</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Maintain a record of VR lab sessions and the respective teachers who conducted it.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-[#E22213] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Class Attendance Tracking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Track data of classes that attended the lab sessions with detailed participation metrics.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Lesson Details</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Provide details of the lessons, topics taught, and assessments given for every class.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content - Dashboard Visual */}
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              {/* Main Dashboard Container */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-3xl transform rotate-3 lg:rotate-6 scale-105 blur-sm"></div>

                {/* Dashboard Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-lg flex items-center justify-center">
                        <School className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">School Admin Dashboard</h3>
                        <p className="text-gray-600 text-sm">VR Lab Analytics</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Live</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-[#E22213]/10 to-[#0b234a]/10 rounded-xl p-4 border border-[#E22213]/20">
                        <div className="text-2xl font-bold text-[#E22213]">42</div>
                        <div className="text-xs text-gray-600">Active Sessions</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-xl p-4 border border-orange-500/20">
                        <div className="text-2xl font-bold text-orange-500">89%</div>
                        <div className="text-xs text-gray-600">Engagement Rate</div>
                      </div>
                    </div>

                    {/* Session List */}
                    <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Recent VR Lab Sessions</h4>
                      <div className="space-y-2">
                        {[
                          { class: 'Grade 8A', teacher: 'Mr. Sharma', topic: 'Solar System', time: '2h ago' },
                          { class: 'Grade 7B', teacher: 'Ms. Patel', topic: 'Human Anatomy', time: '4h ago' },
                          { class: 'Grade 9C', teacher: 'Dr. Kumar', topic: 'Chemistry Lab', time: '1d ago' }
                        ].map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#0b234a]/10 rounded-lg flex items-center justify-center">
                                <User className="w-4 h-4 text-[#0b234a]" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{session.class}</div>
                                <div className="text-xs text-gray-500">{session.teacher}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">{session.topic}</div>
                              <div className="text-xs text-gray-500">{session.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Chart */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Class Participation</h4>
                        <span className="text-xs text-gray-500">This Month</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { class: 'Grade 6', progress: 85, color: 'bg-[#E22213]' },
                          { class: 'Grade 7', progress: 72, color: 'bg-[#0b234a]' },
                          { class: 'Grade 8', progress: 93, color: 'bg-orange-500' },
                          { class: 'Grade 9', progress: 68, color: 'bg-purple-500' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="text-sm text-gray-600 w-12">{item.class}</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <div className="text-sm font-medium text-gray-900 w-8">{item.progress}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200/50">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Last updated: Just now</span>
                      <span>fotonVR Admin v2.1</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Analytics</div>
                      <div className="text-xs text-gray-600">Real-time Data</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Reports</div>
                      <div className="text-xs text-gray-600">Export Data</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Flow Animation */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-full opacity-20 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="mt-16 sm:mt-20" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  metric: '100%',
                  label: 'Data Accuracy',
                  color: 'from-[#E22213] to-[#0b234a]'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  metric: 'Real-time',
                  label: 'Live Updates',
                  color: 'from-[#0b234a] to-orange-500'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  metric: 'Secure',
                  label: 'Data Protection',
                  color: 'from-orange-500 to-[#E22213]'
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  metric: 'Mobile',
                  label: 'Access Anywhere',
                  color: 'from-[#E22213] to-orange-500'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.05); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
      </section>

      <section className="relative py-10 bg-gradient-to-br from-gray-50 via-[#0b234a]/10 to-orange-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-10 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
              <Users className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <div className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#0b234a]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">
              <Smartphone className="w-10 h-10 opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-20">
              <BarChart3 className="w-8 h-8 opacity-20" />
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

          {/* Connection Lines */}
          <div className="absolute top-1/3 left-1/4 w-32 h-1 bg-gradient-to-r from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative" data-aos="fade-right">
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-3xl transform rotate-3 lg:rotate-6 scale-105 blur-sm"></div>

                {/* Image Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50 overflow-hidden">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 relative">
                    {/* Actual Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={VRARLabImage.parentImage}
                        alt="Parent and child using fotonVR app - Tracking learning progress together"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b234a]/30 via-transparent to-transparent"></div>
                    </div>

                    {/* App Interface Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-xl flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0b234a]">fotonVR Parent App</div>
                          <div className="text-xs text-gray-600">Live Progress Tracking</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#E22213]/20 rounded-full animate-float flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#E22213]" />
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#0b234a]/20 rounded-lg rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                      <BarChart3 className="w-4 h-4 text-[#0b234a]" />
                    </div>

                    {/* Progress Chart Overlay */}
                    <div className="absolute top-1/4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#E22213]">85%</div>
                        <div className="text-xs text-gray-600">Progress</div>
                        <div className="w-16 h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-12 h-1 bg-[#E22213] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Global Access</div>
                      <div className="text-xs text-gray-600">Anywhere, Anytime</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0b234a]">Live Chat</div>
                      <div className="text-xs text-gray-600">Instant Updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-8" data-aos="fade-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  Parent-Child Connection
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                  "Easing the burden
                </span>
                <br />
                <span className="text-gray-900">for parents"</span>
              </h2>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher - Student Pairing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Student performance can be easily tracked using the fotonVR Parent app.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0b234a] to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Progress Tracking</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Progress can be checked from any part of the globe and at any time through chat or question options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm group hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-[#E22213] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strengthened Connection</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Parents and children feel connected as parents are constantly updated about their child's learning curve.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Download CTA */}
              <div className="bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Download fotonVR Parent App</h3>
                    <p className="text-black text-sm">Stay connected with your child's learning journey</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <Apple className="w-4 h-4" />
                      <span>App Store</span>
                    </button>
                    <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Play Store</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '24/7', label: 'Access' },
                  { number: '100%', label: 'Transparency' },
                  { number: '95%', label: 'Parent Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Real-time Analytics',
                description: 'Detailed progress reports and performance metrics'
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: 'Instant Notifications',
                description: 'Get alerts for achievements and areas needing attention'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Family Connection',
                description: 'Bridge the gap between school and home learning'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#E22213] to-[#0b234a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>

      <OurBelivers />
    </>
  )
}

export default VRARLab