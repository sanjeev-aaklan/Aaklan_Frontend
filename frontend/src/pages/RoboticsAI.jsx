import React, { useEffect, useRef } from 'react';
import OurBelivers from '../components/Home/OurBelivers';
import { RBLabImage } from '../assets/assets';
import BookFreeDemo from '../components/BookFreeDemo';
import HeroHeading from '../components/PageHeading/HeroHeading';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Lucide icons
import {
  Target,
  Phone,
  ArrowRight,
  BookOpen,
  Settings,
  Lightbulb,
  ShoppingCart,
  Wrench,
  GraduationCap,
  Rocket,
  ChevronDown,
  Laptop,
  Cpu,
  Brain,
  Globe,
  FileText,
  Users,
  CheckCircle,
  Star,
  Award,
  Download,
  PlayCircle
} from 'lucide-react';
import AaklanLabSection from '../components/AaklanLabSection.jsx';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
const RoboticsAI = () => {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const bookDemoRef = useRef(null);
  const navigate = useNavigate()

  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const setupSteps = [
    {
      step: 1,
      title: 'Share Your Requirement',
      description: 'Tell us about your school needs, budget, and goals for the AI & Robotics lab',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'current',
      bgImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      step: 2,
      title: 'Consultation & Planning',
      description: 'Our experts analyze your space and create a customized lab blueprint',
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'upcoming',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      step: 3,
      title: 'Order Customized Lab',
      description: 'We prepare your tailored package with robots, curriculum, and equipment',
      icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'upcoming',
      bgImage: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      step: 4,
      title: 'Setup & Installation',
      description: 'Professional installation of all equipment and software setup',
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'upcoming',
      bgImage: 'https://images.unsplash.com/photo-1581094794329-c6fe63c7e35e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      step: 5,
      title: 'Teacher Training',
      description: 'Comprehensive training program for educators and staff',
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'upcoming',
      bgImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      step: 6,
      title: 'Launch & Support',
      description: 'Grand opening and ongoing technical support for your lab',
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      status: 'upcoming',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !stepRefs.current.includes(el)) {
      stepRefs.current.push(el);
    }
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles - Responsive sizes */}
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs - Responsive sizes */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

          {/* Additional floating elements - Responsive positioning */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="text-xs sm:text-sm font-semibold text-[#0b234a]">
                  <Rocket className="w-4 h-4 inline mr-1" />
                  Transforming Education with AI & Robotics
                </span>
              </div>

              {/* Main Heading */}
              <HeroHeading colorHeading='AI and Robotics' NonColorHading='Lab for Schools' />

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                Cubicle of knowledge offering AI and Robotics education with comprehensive curriculum,
                interactive robots, hands-on projects and real-life applications!
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl">
                {[
                  { icon: <BookOpen className="w-5 h-5" />, text: 'Comprehensive Curriculum' },
                  { icon: <Cpu className="w-5 h-5" />, text: 'Interactive Robots' },
                  { icon: <Settings className="w-5 h-5" />, text: 'Hands-on Projects' },
                  { icon: <Globe className="w-5 h-5" />, text: 'Real-life Applications' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-[#E22213]">{feature.icon}</span>
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{feature.text}</span>
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
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
                {[
                  { number: '50+', label: 'Schools', icon: <Users className="w-4 h-4" /> },
                  { number: '10K+', label: 'Students', icon: <GraduationCap className="w-4 h-4" /> },
                  { number: '99%', label: 'Satisfaction', icon: <Star className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
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

            {/* Right Content - Visual with Image */}
            <div className="relative mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="300">
              {/* Main Hero Image/Illustration */}
              <div className="relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/10 via-[#0b234a]/10 to-orange-500/10 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 scale-105 blur-sm"></div>

                {/* Main Image Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl sm:shadow-2xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b234a] to-[#E22213] relative">
                    {/* Actual Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={RBLabImage.RBRightImage}
                        alt="AI and Robotics Lab for Schools - Students learning robotics and AI technology"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0b234a]/70 via-[#0b234a]/50 to-[#E22213]/60"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                        <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">
                          <Cpu className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto" />
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">AI & Robotics Lab</h3>
                        <p className="text-white/80 text-sm sm:text-base">Future-ready education</p>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full animate-float flex items-center justify-center">
                      <span className="text-white text-xs">
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-orange-500/30 rounded-lg rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                      <span className="text-white text-xs">
                        <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#E22213]/40 rounded-full animate-pulse"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Floating Cards - Responsive positioning */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 max-w-[140px] sm:max-w-none z-10 hover:shadow-2xl cursor-pointer">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a] truncate">Curriculum</div>
                      <div className="text-xs text-gray-600">Grade 6-12</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg sm:shadow-xl border border-white/50 transform hover:scale-105 transition-all duration-300 max-w-[140px] sm:max-w-none z-10 hover:shadow-2xl cursor-pointer">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-[#0b234a] truncate">Setup</div>
                      <div className="text-xs text-gray-600">2-4 Weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="500">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-1 sm:mt-2 animate-bounce" />
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

      <AaklanLabSection />

      <section
        ref={sectionRef}
        className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles - Responsive sizes */}
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                              linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs - Responsive sizes */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

          {/* Additional floating elements - Responsive positioning */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Gradient */}
          <div
            ref={addToRefs}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
              How to Set Up Robotics & AI Lab
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Follow this roadmap to transform your school into a hub of innovation and technology education
            </p>
          </div>

          {/* Roadmap Container */}
          <div className="relative">
            {/* Animated Road Line - Responsive positioning */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1.5 sm:w-2 md:w-3 bg-gradient-to-b from-[#E22213] via-[#0b234a] to-orange-500 rounded-full shadow-xl">
              {/* Animated Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E22213] via-[#0b234a] to-orange-500 rounded-full animate-pulse-slow"></div>

              {/* Moving Light */}
              <div className="absolute top-0 w-1.5 sm:w-2 h-6 sm:h-8 bg-white rounded-full opacity-70 animate-move-light shadow-lg"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E22213] to-orange-500 rounded-full blur-sm opacity-30"></div>
            </div>

            {/* Steps Grid */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
              {setupSteps.map((step, index) => (
                <div
                  key={step.step}
                  ref={addToRefs}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  data-aos-delay={index * 100}
                >
                  {/* Step Content with Background Image */}
                  <div
                    className={`w-full md:w-5/12 lg:w-1/2 ${index % 2 === 0 ? 'md:pr-4 lg:pr-6 xl:pr-8' : 'md:pl-4 lg:pl-6 xl:pl-8'
                      } mb-6 sm:mb-8 md:mb-0`}
                  >
                    <div
                      className={`mx-2 sm:mx-5 relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border-2 overflow-hidden group backdrop-blur-sm bg-white/10 ${step.status === 'current'
                        ? 'border-[#E22213] shadow-[#E22213]/20'
                        : 'border-gray-300/50'
                        } transform hover:scale-105 transition-all duration-500 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] hover:shadow-2xl cursor-pointer`}
                    >
                      {/* Background Image with Parallax Effect */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${step.bgImage})` }}
                      >
                        {/* Animated Gradient Overlay with new colors */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b234a]/80 via-[#0b234a]/70 to-transparent group-hover:from-[#0b234a]/70 transition-all duration-500"></div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-shimmer"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-white h-full flex flex-col justify-center">
                        {/* Step Header */}
                        <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                          <div
                            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl backdrop-blur-md border-2 border-white/30 ${step.status === 'current'
                              ? 'bg-[#E22213] ring-2 sm:ring-4 ring-[#E22213]/30 shadow-lg'
                              : 'bg-gray-600/80'
                              } transform group-hover:scale-110 transition-transform duration-300`}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 lg:space-x-3 space-y-1 sm:space-y-0">
                              <span className="text-xs sm:text-sm font-semibold text-orange-200 bg-[#0b234a]/50 px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block w-fit">
                                STEP {step.step}
                              </span>
                              {step.status === 'current' && (
                                <span className="px-2 py-1 text-xs bg-[#E22213] text-white rounded-full font-medium backdrop-blur-sm border border-orange-300/30 w-fit">
                                  <span className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse inline-block mr-1"></span>
                                  Current Step
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 sm:mt-2 group-hover:text-orange-100 transition-colors duration-300 line-clamp-2">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-blue-100 leading-relaxed text-xs sm:text-sm md:text-base group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        {step.status === 'current' && (
                          <div className="mt-2 sm:mt-4 flex items-center space-x-2 text-xs sm:text-sm text-orange-200">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse shadow-lg"></div>
                            <span className="font-medium">In progress</span>
                          </div>
                        )}
                      </div>

                      {/* Hover Glow Effect with new colors */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/20 via-[#0b234a]/10 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>

                      {/* Border Glow */}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.status === 'current' ? 'bg-[#E22213]/20' : 'bg-[#0b234a]/20'
                        }`}></div>
                    </div>
                  </div>

                  {/* Step Number on Road */}
                  <div className="absolute left-3 sm:left-4 md:left-1/2 md:-translate-x-1/2 transform -translate-y-1/2 z-20">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold border-2 sm:border-3 md:border-4 border-white shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500 backdrop-blur-sm text-xs sm:text-sm md:text-base ${step.status === 'current'
                        ? 'bg-[#E22213] ring-1 sm:ring-2 ring-[#E22213]/50 animate-pulse hover:scale-110 hover:rotate-12'
                        : step.step < setupSteps.find(s => s.status === 'current')?.step
                          ? 'bg-[#0b234a] hover:bg-[#0b234a]/90 hover:scale-110'
                          : 'bg-gray-500 hover:bg-gray-600 hover:scale-110'
                        } cursor-pointer`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Connecting Line for Mobile */}
                  {index < setupSteps.length - 1 && (
                    <div className="md:hidden absolute left-4 sm:left-5 top-12 sm:top-14 w-1 h-8 sm:h-12 bg-gradient-to-b from-[#E22213] to-[#0b234a] rounded-full z-10 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Goal Destination */}
            <div
              ref={addToRefs}
              className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -bottom-20 sm:-bottom-24 transform -translate-y-1/2 z-20"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 border-white/50 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm max-w-[280px] sm:max-w-none cursor-pointer hover:shadow-3xl">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="text-xl sm:text-2xl md:text-3xl animate-bounce">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">Goal Achieved!</div>
                    <div className="text-xs sm:text-sm opacity-90 mt-1">Your AI & Robotics Lab is Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            ref={addToRefs}
            className="text-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 space-y-4 sm:space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
          
          @keyframes move-light {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1200%); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          .animate-move-light {
            animation: move-light 3s linear infinite;
          }
          
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </section>

      <section className="relative py-10 sm:py-15 lg:py-18 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles - Responsive sizes */}
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                              linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs - Responsive sizes */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

          {/* Additional floating elements - Responsive positioning */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-8 lg:mb-10" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-[#0b234a]">
                <BookOpen className="w-4 h-4 inline mr-1" />
                Comprehensive Learning Resources
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Coding, Robotics & AI
              </span>
              <br />
              <span className="text-gray-900">Textbooks</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Structured curriculum designed to build foundational skills and advance to complex AI and robotics concepts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Book Description */}
            <div className="space-y-6 sm:space-y-8">
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
                data-aos="fade-right"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b234a] mb-2">
                      Fundamentals to Advanced Concepts
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      This book introduces the fundamentals of computers, coding, AI, and robotics, equipping students with essential skills in HTML and Python. Through the PictoBlox platform and the Quarky Ultimate Kit, learners engage in hands-on projects that enhance their problem-solving and logical thinking abilities, empowering them to design and program their own intelligent robots.
                    </p>
                  </div>
                </div>

                {/* Platform Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0b234a]/5 to-transparent rounded-xl border border-[#0b234a]/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-[#0b234a] rounded-lg flex items-center justify-center">
                      <Laptop className="text-white text-sm" />
                    </div>
                    <span className="text-sm font-medium text-[#0b234a]">PictoBlox Platform</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#E22213]/5 to-transparent rounded-xl border border-[#E22213]/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 bg-[#E22213] rounded-lg flex items-center justify-center">
                      <Cpu className="text-white text-sm" />
                    </div>
                    <span className="text-sm font-medium text-[#E22213]">Aaklan Wonder Kit</span>
                  </div>
                </div>
              </div>

              {/* Skills Developed */}
              <div
                className="bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-2"></span>
                  Skills Developed
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: <Laptop className="w-4 h-4" />, skill: 'HTML & Python' },
                    { icon: <Settings className="w-4 h-4" />, skill: 'Robotics Design' },
                    { icon: <Target className="w-4 h-4" />, skill: 'Problem Solving' },
                    { icon: <Brain className="w-4 h-4" />, skill: 'Logical Thinking' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-[#E22213]">{item.icon}</span>
                      <span className="text-xs sm:text-sm font-medium">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Grade Levels */}
            <div className="space-y-6 sm:space-y-8">
              {/* Grade Selection */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
                data-aos="fade-left"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b234a] mb-6 flex items-center">
                  <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                  Available for Grades
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    { grade: 'Grade 6', color: 'from-blue-500 to-cyan-500', icon: <Star className="w-5 h-5" /> },
                    { grade: 'Grade 7', color: 'from-green-500 to-emerald-500', icon: <Rocket className="w-5 h-5" /> },
                    { grade: 'Grade 8', color: 'from-purple-500 to-pink-500', icon: <Award className="w-5 h-5" /> },
                    { grade: 'Grade 9-12', color: 'from-orange-500 to-red-500', icon: <Target className="w-5 h-5" /> }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                      data-aos="flip-up"
                      data-aos-delay={index * 100}
                    >
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Animated Border */}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}></div>

                      <div className="relative z-10 text-center">
                        <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300 text-[#E22213]">
                          {item.icon}
                        </div>
                        <div className={`text-sm sm:text-base font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.grade}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                          Curriculum
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-3/4 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-2xl p-4 sm:p-6 border border-orange-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Settings className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hands-on</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl p-4 sm:p-6 border border-blue-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Intelligent</div>
                      <div className="text-sm text-gray-600">Robots</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="group relative w-full bg-gradient-to-r from-[#E22213] to-orange-500 hover:from-[#E22213]/90 hover:to-orange-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm border-2 border-white/20 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span onClick={() => navigate('/books')}>View Sample Chapters</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8 text-[#E22213]" />,
                title: 'Structured Curriculum',
                description: 'Progressive learning path from basics to advanced concepts'
              },
              {
                icon: <Settings className="w-8 h-8 text-[#E22213]" />,
                title: 'Project-Based Learning',
                description: 'Build real projects with PictoBlox and Quarky Kit'
              },
              {
                icon: <Users className="w-8 h-8 text-[#E22213]" />,
                title: 'Teacher Resources',
                description: 'Complete lesson plans and assessment tools'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
      animation: float 8s ease-in-out infinite;
    }
  `}</style>
      </section>
      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>
      <OurBelivers />
    </>
  );
};

export default RoboticsAI;