import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BookOpen,
  Download,
  Calendar,
  Users,
  Rocket,
  Star,
  Code2,
  Brain,
  CircuitBoard,
  Laptop,
  Shield,
  Award,
  Globe,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Baby,
  Sparkles,
  Cpu,
  Zap
} from 'lucide-react';
import { Beaker, Bot, Trophy } from 'lucide-react';
import OurBelivers from '../components/Home/OurBelivers';
import HeroHeading from '../components/PageHeading/HeroHeading';
import BookFreeDemo from '../components/BookFreeDemo';
import { bookDetails, herobook } from '../assets/Books/books.js';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Books = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate()
  const overviewRef = useRef(null);
  const curriculumRef = useRef(null);
  const featuresRef = useRef(null);
  const toolsRef = useRef(null);
  const bookDemoRef = useRef(null);

  // New section refs
  const earlyLearningRef = useRef(null);
  const techExplorersRef = useRef(null);
  const computerCodingRef = useRef(null);
  const createFutureRef = useRef(null);

  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', ref: overviewRef },
        { id: 'curriculum', ref: curriculumRef },
        { id: 'features', ref: featuresRef },
        { id: 'tools', ref: toolsRef },
        { id: 'early-learning', ref: earlyLearningRef },
        { id: 'tech-explorers', ref: techExplorersRef },
        { id: 'computer-coding', ref: computerCodingRef },
        { id: 'create-future', ref: createFutureRef }
      ];

      const current = sections.find(section => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = {
      overview: overviewRef,
      curriculum: curriculumRef,
      features: featuresRef,
      tools: toolsRef,
      'early-learning': earlyLearningRef,
      'tech-explorers': techExplorersRef,
      'computer-coding': computerCodingRef,
      'create-future': createFutureRef
    }[sectionId];

    if (section?.current) {
      window.scrollTo({
        top: section.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Book data for different grades
  const gradeBooks = [
    {
      grade: 1,
      title: 'Grade 1 Book',
      features: ['Windows 10', 'MS Paint', 'Notepad', 'PictoBlox Junior Blocks', 'Quarky Robot']
    },
    {
      grade: 2,
      title: 'Grade 2 Book',
      features: ['Windows 10', 'Tux Paint', 'Wordpad', 'PictoBlox Junior Blocks', 'Quarky Robot']
    },
    {
      grade: 3,
      title: 'Grade 3 Book',
      features: ['Windows 10', 'MS Paint', 'Tux Paint', 'Notepad', 'Wordpad', 'Word', 'Excel', 'PictoBlox Blocks Coding', 'Quarky Robot']
    },
    {
      grade: 4,
      title: 'Grade 4 Book',
      features: ['Windows 10', 'Advanced MS Paint', 'Word & Excel', 'PictoBlox Coding', 'HTML Basics', 'Quarky Robot']
    },
    {
      grade: 5,
      title: 'Grade 5 Book',
      features: ['Windows 10', 'PowerPoint', 'Excel Charts', 'PictoBlox AI', 'Python Basics', 'Quarky Robot IoT']
    },
    {
      grade: 6,
      title: 'Grade 6 Book',
      features: ['Windows 11', 'Office Suite', 'HTML & CSS', 'Python Programming', 'PictoBlox AI', 'Quarky Advanced']
    },
    {
      grade: 7,
      title: 'Grade 7 Book',
      features: ['Advanced Windows', 'Web Development', 'Python OOP', 'AI/ML Basics', 'Robotics', 'IoT Projects']
    },
    {
      grade: 8,
      title: 'Grade 8 Book',
      features: ['System Admin', 'Full Stack Basics', 'Python AI Libraries', 'ML Projects', 'Advanced Robotics', 'Cloud Basics']
    }
  ];

  // New book programs data
  const bookPrograms = [
    {
      id: 'early-learning',
      title: 'Early Learning Program',
      subtitle: 'Nursery to UKG',
      icon: <Baby className="w-8 h-8" />,
      gradient: 'from-pink-500 to-purple-500',
      description: 'Foundational digital literacy program for young learners to develop basic computer skills through fun, interactive activities.',
      features: [
        'Basic Computer Familiarization',
        'Mouse & Keyboard Skills',
        'Colorful Interactive Activities',
        'Simple Puzzle Solving',
        'Digital Art & Creativity',
        'Audio-Visual Learning'
      ],
      ageGroup: '2-5 Years',
      imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop'
    },
    {
      id: 'tech-explorers',
      title: 'Little Tech Explorers',
      subtitle: 'Grade 1 to 5',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Introduce young minds to the world of technology with hands-on activities, basic coding concepts, and creative projects.',
      features: [
        'Intro to Programming Logic',
        'Block-Based Coding',
        'Simple Robotics',
        'Digital Storytelling',
        'Basic AI Concepts',
        'Creative Problem Solving'
      ],
      ageGroup: '6-10 Years',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w-400&h=300&fit=crop'
    },
    {
      id: 'computer-coding',
      title: 'Computer And Coding',
      subtitle: 'Grade 1 to 8',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Comprehensive curriculum covering computer fundamentals to advanced programming, aligned with CBSE coding standards.',
      features: [
        'Computer Fundamentals',
        'Python Programming',
        'Web Development Basics',
        'Database Concepts',
        'Game Development',
        'App Development'
      ],
      ageGroup: '6-13 Years',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
    },
    {
      id: 'create-future',
      title: 'Create The Future',
      subtitle: 'Grade 6 to 12',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      description: 'Advanced program focusing on emerging technologies, AI, machine learning, and robotics for future innovators.',
      features: [
        'Artificial Intelligence',
        'Machine Learning',
        'Advanced Robotics',
        'IoT & Automation',
        'Data Science Basics',
        '3D Design & Printing'
      ],
      ageGroup: '12-17 Years',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop'
    }
  ];

  return (
    <>
      <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
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

          {/* Animated Gradient Orbs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-8 py-4">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl" data-aos="fade-right">
              {/* Badge
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-semibold text-[#0b234a]">
                  Comprehensive Book Series for All Grades
                </span>
              </div> */}

              <HeroHeading
                colorHeading='Skillful Minds Program'
                NonColorHading='for Coding, AI, Robotics, and ICT'
              />

              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
                Transform your school's computer labs from traditional ICT learning to comprehensive AI and Robotics lab,
                with a structured curriculum and practical-based learning for 21st Century Skills.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 pb-4 mb-4">
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { number: '4', label: 'Book Programs' },
                  { number: '12+', label: 'Grade Levels' },
                  { number: '50+', label: 'Activities' },
                  { number: '100%', label: 'CBSE Aligned' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-[#E22213]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Book Showcase */}
            <div className="flex-1 hidden md:block flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-lg">
                {/* Main Image Container */}
                {herobook.herorightImage ? (
                  <div className="relative group">
                    {/* Main Book Image */}
                    <img
                      src={herobook.herorightImage}
                      alt="Skillful Minds Series Books"
                      className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-all duration-500"
                    />
                   
                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                      <Code2 className="w-6 h-6 text-[#E22213]" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                      <Brain className="w-6 h-6 text-[#0b234a]" />
                    </div>
                  </div>
                ) : (
                  /* Fallback Design if image is not available */
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#E22213]/20 to-[#0b234a]/20 rounded-3xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                        <BookOpen className="w-16 h-16 text-[#0b234a] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Skillful Minds Series</h3>
                        <p className="text-gray-600 mb-4">Comprehensive Learning Solution</p>
                        <div className="flex justify-center space-x-2 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">Rated 4.9/5 by Educators</div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                      <Code2 className="w-6 h-6 text-[#E22213]" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 transition-all duration-300">
                      <Brain className="w-6 h-6 text-[#0b234a]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Sticky Navigation */}
          <nav className="hidden md:block sticky top-4 z-50 mb-16 transition-all duration-1000">
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-gray-200 shadow-lg">
                {[
                  { id: 'early-learning', label: 'Early Learning' },
                  { id: 'tech-explorers', label: 'Tech Explorers' },
                  { id: 'computer-coding', label: 'Computer & Coding' },
                  { id: 'create-future', label: 'Create Future' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl font-semibold transition-all duration-300 mx-1 text-sm ${activeSection === tab.id
                      ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-105'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Book Programs Sections */}

          {/* Early Learning Program Section */}
          <section
            ref={earlyLearningRef}
            id="early-learning"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corner */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full -translate-x-32 -translate-y-32"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6" data-aos="fade-right">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center`}>
                        <Baby className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Early Learning Program</h2>
                        <p className="text-lg text-orange-600 font-semibold">Nursery to UKG</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Foundational digital literacy program for young learners aged 2-5 years.
                      Designed to develop basic computer skills through fun, interactive activities
                      that stimulate curiosity and creativity.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookPrograms[0].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => navigate('/books/elp')} className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                    <div className="relative w-full max-w-md">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-2 border border-gray-200 shadow-lg">
                        <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden shadow-inner">
                          {/* Actual Image */}
                          <img
                            src={bookDetails.ELP_Box_UKG}
                            alt="Little Tech Explorers Book Cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="mt-4 text-center">
                          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-sm font-semibold text-gray-700">Age Group: 6-10 Years</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Little Tech Explorers Section */}
          <section
            ref={techExplorersRef}
            id="tech-explorers"
            className="mb-10 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 rounded-full translate-x-32 -translate-y-32"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                    <div className="relative w-full max-w-md">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-2 border border-gray-200 shadow-lg">
                        <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden shadow-inner">
                          {/* Actual Image */}
                          <img
                            src={bookDetails.LTE_Box}
                            alt="Little Tech Explorers Book Cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Little Tech Explorers</h2>
                        <p className="text-lg text-orange-600 font-semibold">Grade 1 to 5</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Introduce young minds to the exciting world of technology with hands-on activities,
                      basic coding concepts, and creative projects that build logical thinking and problem-solving skills.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookPrograms[1].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => navigate('/books/lte')} className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Computer And Coding Section */}
          <section
            ref={computerCodingRef}
            id="computer-coding"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corner */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-full -translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6" data-aos="fade-right">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center`}>
                        <Cpu className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Computer And Coding</h2>
                        <p className="text-lg text-orange-600 font-semibold">Grade 1 to 8</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Comprehensive curriculum covering computer fundamentals to advanced programming concepts.
                      Perfectly aligned with CBSE coding standards, preparing students for the digital future.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookPrograms[2].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => navigate('/books/cac')} className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                    <div className="relative w-full max-w-md">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-2 border border-gray-200 shadow-lg">
                        <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden shadow-inner">
                          {/* Actual Image */}
                          <img
                            src={bookDetails.CAC_Box}
                            alt="Little Tech Explorers Book Cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Create The Future Section */}
          <section
            ref={createFutureRef}
            id="create-future"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corner */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/20 to-red-500/20 rounded-full translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                    <div className="relative w-full max-w-md">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-2 border border-gray-200 shadow-lg">
                        <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl overflow-hidden shadow-inner">
                          {/* Actual Image */}
                          <img
                            src={bookDetails.CTF_Box}
                            alt="Little Tech Explorers Book Cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center`}>
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create The Future</h2>
                        <p className="text-lg text-orange-600 font-semibold">Grade 6 to 12</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Advanced program focusing on emerging technologies, AI, machine learning, and robotics.
                      Designed for future innovators who want to build cutting-edge solutions and shape tomorrow's world.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookPrograms[3].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => navigate('/books/ctf')} className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Transformation Section */}
          <section
            ref={curriculumRef}
            id="curriculum"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                    Transforming Computer Labs into Innovative AI and Robotics Lab
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our program modules upgrade traditional computer labs to innovative AI and Robotics labs.
                    The lab promotes AI and Coding Skill Education for the CBSE curriculum, equipping students with 21st-century skills.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: <Laptop className="w-8 h-8 text-white" />, title: 'Computer Education', color: 'from-blue-500 to-cyan-500' },
                    { icon: <Code2 className="w-8 h-8 text-white" />, title: 'Coding', color: 'from-green-500 to-emerald-500' },
                    { icon: <Brain className="w-8 h-8 text-white" />, title: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
                    { icon: <CircuitBoard className="w-8 h-8 text-white" />, title: 'Robotics', color: 'from-orange-500 to-red-500' }
                  ].map((subject, index) => (
                    <div
                      key={index}
                      className="text-center group cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {subject.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#E22213] transition-colors duration-300">{subject.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            ref={featuresRef}
            id="features"
            className="mb-20 scroll-mt-20"
          >
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
              {/* Gradient Corners */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

              <div className="relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                    Features of the Skillful Minds Books
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Following the guidelines of NEP 2020 and NCF 2023, our books comprehensively cover AI,
                    coding, and robotics syllabus aligned with CBSE subject codes.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Sparkles className="w-8 h-8" />,
                      title: '21st Century Skills',
                      description: 'Engaging chapters and dynamic activities tailored to develop skills crucial for navigating the 21st-century technological landscape.'
                    },
                    {
                      icon: <Target className="w-8 h-8" />,
                      title: 'CBSE Coding and AI Skills',
                      description: 'Build competency in computational thinking, coding and artificial intelligence with hands-on activities.'
                    },
                    {
                      icon: <Beaker className="w-8 h-8" />,
                      title: 'Activity-Based Learning',
                      description: 'Incorporating hands-on activities and theme-based learning that make learning both fun and intellectually stimulating.'
                    },
                    {
                      icon: <Bot className="w-8 h-8" />,
                      title: 'Learn with Quarky Robot',
                      description: 'Interactive sessions with the Quarky robot enhance engagement and maintain a high level of interest.'
                    },
                    {
                      icon: <Code2 className="w-8 h-8" />,
                      title: 'PictoBlox AI Software',
                      description: 'Learn the art of coding through horizontal block coding in PictoBlox with 3000 AI credits included.'
                    },
                    {
                      icon: <Trophy className="w-8 h-8" />,
                      title: 'Codeavour Competition',
                      description: 'Exclusive access to Codeavour AI and Robotics Competition with global opportunities.'
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#E22213] transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>

      <OurBelivers />
    </>
  );
};

export default Books;