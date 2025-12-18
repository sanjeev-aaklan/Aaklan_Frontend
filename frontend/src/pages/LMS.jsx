import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Bot,
  Code2,
  BookOpen,
  GraduationCap,
  User,
  Laptop,
  Brain,
  CircuitBoard,
  Rocket,
  BarChart3,
  Shield,
  Wifi,
  Target,
  Users,
  FileText,
  ClipboardList,
  MessageCircle,
  Library,
  Languages,
  Crown,
  Mic
} from 'lucide-react';
import BookFreeDemo from '../components/BookFreeDemo';

const heroImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";

const LMS = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const studentRef = useRef(null);
  const teacherRef = useRef(null);
  const examRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
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
        { id: 'student', ref: studentRef },
        { id: 'teacher', ref: teacherRef },
        { id: 'exam', ref: examRef }
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
      student: studentRef,
      teacher: teacherRef,
      exam: examRef
    }[sectionId];

    if (section?.current) {
      window.scrollTo({
        top: section.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section with Image */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-8 py-4">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                Aaklan
              </span>{" "}
              <span className="text-gray-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                LMS
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              <span className="font-semibold text-[#0b234a]">
                AI-powered Learning Management System
              </span>{" "}
              enriched with dynamic features to enhance teaching efficiency and{" "}
              <span className="font-semibold text-[#E22213]">student engagement</span>
            </p>

            {/* Subjects Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: <Bot className="w-6 h-6 text-[#E22213]" />, name: "Robotics" },
                { icon: <Laptop className="w-6 h-6 text-[#0b234a]" />, name: "Coding" },
                { icon: <Wifi className="w-6 h-6 text-orange-500" />, name: "IoT" },
                { icon: <CircuitBoard className="w-6 h-6 text-[#E22213]" />, name: "Electronics" },
                { icon: <Brain className="w-6 h-6 text-[#0b234a]" />, name: "AI/ML" },
                { icon: <Code2 className="w-6 h-6 text-orange-500" />, name: "Programming" }
              ].map((subject, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-gray-200 hover:shadow-lg hover:scale-105 hover:border-orange-300 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {subject.icon}
                  <span className="text-gray-700 font-medium text-sm">{subject.name}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 font-semibold">
              Learn from the expert faculties of Robotics, Arduino, IOT, Coding, Electronics & many more.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-lg">
              <div className="bg-gradient-to-br from-[#E22213]/20 to-[#0b234a]/20 rounded-3xl p-4 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={heroImage}
                  alt="Aaklan LMS Platform"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="hidden bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl p-12 text-white text-center">
                  <Rocket className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Aaklan LMS</h3>
                  <p className="text-white/80">AI-Powered Learning Platform</p>
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 hover:shadow-xl transition-all duration-300">
                <User className="w-6 h-6 text-[#E22213]" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200 hover:scale-110 hover:shadow-xl transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-[#0b234a]" />
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav className="hidden md:block sticky top-4 z-50 mb-16 transition-all duration-1000">
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-gray-200 shadow-lg">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'student', label: 'Student Features' },
                { id: 'teacher', label: 'Teacher Features' },
                { id: 'exam', label: 'Exam Software' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 mx-1 ${
                    activeSection === tab.id
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

        {/* Overview Section */}
        <section
          ref={overviewRef}
          id="overview"
          className="mb-20 scroll-mt-20"
        >
          <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            {/* Top Left Gradient Corner */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>

            {/* Bottom Right Gradient Corner */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                  Comprehensive Digital Platform
                </h2>
                <p className="text-sm sm:text-lg text-gray-600 max-w-4xl mx-auto">
                  Aaklan LMS provides schools with class management, curriculum delivery, online/offline assessments,
                  student progress tracking, and teacher support in one integrated platform.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: <BarChart3 className="w-8 h-8 text-[#E22213]" />, title: "Progress Tracking", desc: "Real-time monitoring of student performance" },
                      { icon: <Brain className="w-8 h-8 text-orange-500" />, title: "AI-Powered Tools", desc: "Smart recommendations and automated tasks" },
                      { icon: <BookOpen className="w-8 h-8 text-[#0b234a]" />, title: "Curriculum Management", desc: "Organized and structured learning paths" },
                      { icon: <GraduationCap className="w-8 h-8 text-[#E22213]" />, title: "Collaborative Learning", desc: "Interactive tools for group activities" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-300 group cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#E22213] transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
                  <div className="bg-gradient-to-br from-[#E22213]/50 to-orange-500/10 rounded-2xl p-8 border border-gray-200 w-full max-w-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                      <Rocket className="w-16 h-16 text-[#0b234a] mx-auto mb-6 hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Education</h3>
                      <p className="text-gray-600">Empowering educators and engaging students through innovative technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Features Section */}
        <section
          ref={studentRef}
          id="student"
          className="mb-20 scroll-mt-20"
        >
          <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            {/* Top Right Gradient Corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>

            {/* Bottom Left Gradient Corner */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                  Student Features
                </h2>
                <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Empowering students with personalized learning experiences and cutting-edge educational tools.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Target className="w-4 h-4" />, feature: "Personalized Learning Path" },
                  { icon: <ClipboardList className="w-4 h-4" />, feature: "Interactive Quizzes & Games" },
                  { icon: <MessageCircle className="w-4 h-4" />, feature: "Doubt Solver (AI Chatbot)" },
                  { icon: <FileText className="w-4 h-4" />, feature: "AI Notes & Summaries" },
                  { icon: <Library className="w-4 h-4" />, feature: "Practice Question Bank" },
                  { icon: <BookOpen className="w-4 h-4" />, feature: "Exam Preparation Mode" },
                  { icon: <Calendar className="w-4 h-4" />, feature: "Study Planner & Reminders" },
                  { icon: <BarChart3 className="w-4 h-4" />, feature: "Progress Reports & Report Cards" },
                  { icon: <Brain className="w-4 h-4" />, feature: "Project & Idea Suggestions" },
                  { icon: <Languages className="w-4 h-4" />, feature: "Language Translation & Simplification" },
                  { icon: <Crown className="w-4 h-4" />, feature: "Gamification & Leaderboards" },
                  { icon: <Users className="w-4 h-4" />, feature: "Collaborative Tools" },
                  { icon: <Mic className="w-4 h-4" />, feature: "AI Voice Narration" },
                  { icon: <Target className="w-4 h-4" />, feature: "Adaptive Revision Plans" },
                  { icon: <Library className="w-4 h-4" />, feature: "E-Library Access" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500 group-hover:bg-[#E22213] group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white scale-75">
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-gray-800 group-hover:text-gray-900 font-medium transition-colors duration-300">{item.feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Features Section */}
        <section
          ref={teacherRef}
          id="teacher"
          className="mb-20 scroll-mt-20"
        >
          <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            {/* Top Left Gradient Corner */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-600 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>

            {/* Bottom Right Gradient Corner */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#0b234a] to-transparent rounded-full translate-x-32 translate-y-32"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E22213] to-[#0b234a] bg-clip-text text-transparent mb-4">
                  Teacher Features
                </h2>
                <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Streamlining teaching workflows with AI-powered tools and comprehensive classroom management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "AI Lesson Plan Generator",
                  "Unit Plan Creation",
                  "Exam & Question Paper Generator",
                  "AI Quiz Maker",
                  "Automatic PPT Maker",
                  "Assignment & Worksheet Generator",
                  "Auto-Grading System",
                  "Homework Allocation",
                  "Content Recommendation",
                  "Progress Dashboard",
                  "AI Teaching Assistant (Chatbot)",
                  "Curriculum Mapping",
                  "Plagiarism Check & Report",
                  "Parent Communication Tools",
                  "AI Notes Generator"
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#E22213] hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[#E22213] group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300"></div>
                      <span className="text-gray-800 group-hover:text-gray-900 font-medium transition-colors duration-300">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exam Software Section */}
        <section
          ref={examRef}
          id="exam"
          className="scroll-mt-20"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm overflow-hidden">
            {/* Top Right Gradient Corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E22213] to-transparent rounded-full translate-x-32 -translate-y-32"></div>

            {/* Bottom Left Gradient Corner */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0b234a] to-transparent rounded-full -translate-x-32 translate-y-32"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Main Heading */}
              <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Create & Conduct Any type of Exam with
                </h2>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">
                  ONLINE EXAM SOFTWARE
                </h3>
              </div>

              {/* Function Example Card */}
              <div 
                className="bg-gradient-to-r from-[#E22213]/10 to-orange-500/30 rounded-2xl p-3 md:p-4 mb-12 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
              >
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Is the function</h4>
                  <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-300 font-mono text-gray-800 text-base md:text-lg max-w-md mx-auto hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      <p className="text-gray-700 font-semibold">1x - 2x - 1 at x = 3</p>
                      <div className="border-t border-gray-300 pt-3">
                        <p className="text-orange-600 font-semibold text-sm md:text-base">Evaluate at x = 3:</p>
                        <p className="text-orange-600 font-semibold text-sm md:text-base mt-2">
                          f(3) = 1(3) - 2(3) - 1 = 3 - 6 - 1 = -4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    icon: <BookOpen className="w-6 h-8 md:w-8 md:h-8 text-[#E22213]" />,
                    title: "Multiple Formats",
                    desc: "Support for various question types including MCQs, essays, and coding challenges",
                    features: ["MCQs", "Essays", "Coding", "True/False"]
                  },
                  {
                    icon: <BarChart3 className="w-6 h-8 md:w-8 md:h-8 text-orange-500" />,
                    title: "Auto Evaluation",
                    desc: "Instant grading and detailed feedback with AI-powered analysis",
                    features: ["Instant Grading", "AI Analysis", "Detailed Reports", "Progress Tracking"]
                  },
                  {
                    icon: <Shield className="w-6 h-8 md:w-8 md:h-8 text-[#0b234a]" />,
                    title: "Secure Platform",
                    desc: "Protected exam environment with anti-cheating measures",
                    features: ["Anti-Cheating", "Secure Browser", "Time Limits", "Activity Monitoring"]
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 md:p-4 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-4">
                        {item.icon}
                      </div>
                      <h5 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-[#E22213] transition-colors duration-300">{item.title}</h5>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{item.desc}</p>
                    </div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:scale-105 transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
                <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
                  {[
                    { label: "Real-time Monitoring", value: "100%" },
                    { label: "Auto Grading", value: "Instant" },
                    { label: "Question Types", value: "20+" },
                    { label: "Security Features", value: "15+" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center hover:scale-110 transition-transform duration-300">
                      <div className="text-xl md:text-2xl font-bold text-[#E22213]">{stat.value}</div>
                      <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <BookFreeDemo />
    </>
  );
};

// Add missing icon components
const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default LMS;