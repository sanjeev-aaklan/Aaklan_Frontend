import { useState, useEffect } from "react";
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  BookOpen, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");
  const [openFaq, setOpenFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { number: "5000+", label: "Students Taught", icon: GraduationCap },
    { number: "50+", label: "Expert Instructors", icon: Users },
    { number: "100+", label: "Schools Partnered", icon: BookOpen },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly evolving our curriculum to include latest technologies and teaching methodologies."
    },
    {
      icon: HeartHandshake,
      title: "Collaboration",
      description: "Working together with students, parents, and schools to create the best learning experience."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality coding education and student support."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Preparing the next generation for a technology-driven future through comprehensive education."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/team/sarah.jpg",
      bio: "PhD in Computer Science with 15+ years in education technology."
    },
    {
      name: "Mike Chen",
      role: "Head of Curriculum",
      image: "/team/mike.jpg",
      bio: "Former Google engineer passionate about teaching kids to code."
    },
    {
      name: "Priya Sharma",
      role: "Lead Instructor",
      image: "/team/priya.jpg",
      bio: "Specialized in AI and robotics education for young learners."
    },
    {
      name: "David Brown",
      role: "Operations Head",
      image: "/team/david.jpg",
      bio: "Ensuring smooth operations and excellent student experience."
    }
  ];

  const milestones = [
    { year: "2019", event: "Aaklan Founded", description: "Started with a vision to make coding accessible to all children" },
    { year: "2020", event: "First 1000 Students", description: "Reached milestone of teaching 1000+ students across India" },
    { year: "2021", event: "School Partnerships", description: "Partnered with 50+ schools for integrated coding curriculum" },
    { year: "2022", event: "AI & Robotics Launch", description: "Expanded curriculum to include AI and Robotics programs" },
    { year: "2023", event: "National Recognition", description: "Awarded Best EdTech Startup by Education Ministry" },
    { year: "2024", event: "International Expansion", description: "Started operations in 3 new countries" }
  ];

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "We offer programs for students from Grade 1 to Grade 12, with age-appropriate curriculum for each level."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, all students receive completion certificates. Advanced programs offer industry-recognized certifications."
    },
    {
      question: "What technology requirements are needed?",
      answer: "Basic requirements include a computer with internet connection. Specific software requirements vary by course."
    },
    {
      question: "Can parents track progress?",
      answer: "Yes, we provide regular progress reports and parent portals to monitor student development and achievements."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Absolutely! We offer free demo classes so students can experience our teaching methodology before enrolling."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-orange-400/10 to-[#E22213]/10"
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0b234a 1px, transparent 1px),
              linear-gradient(180deg, #0b234a 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10 animate-pulse" />
          <div className="absolute inset-10 bg-orange-400 rounded-full opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48">
          <div className="absolute inset-0 bg-[#E22213] rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Code Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-xs font-mono opacity-30 animate-float">
              {`<div className="future">`}
            </div>
            <div className="absolute top-20 right-10 text-xs font-mono opacity-30 animate-float" style={{ animationDelay: '2s' }}>
              {`function innovate() {`}
            </div>
            <div className="absolute bottom-20 left-1/4 text-xs font-mono opacity-30 animate-float" style={{ animationDelay: '4s' }}>
              {`return <Code />`}
            </div>
          </div>

          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32">
            <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-ripple" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24">
            <div className="absolute inset-0 bg-[#E22213] rounded-full opacity-20 animate-ripple" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
            Empowering The Next
            <span className="block text-orange-400 mt-2 animate-pulse" style={{ animationDuration: '2s' }}>
              Generation of Innovators
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            At Aaklan, we're revolutionizing how children learn technology. Through our comprehensive 
            coding, robotics, and AI programs, we're preparing young minds for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={() => navigate('/books')} className="bg-orange-500 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 relative overflow-hidden group">
              <span className="relative z-10">Explore Our Programs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#E22213] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden">
              <Play size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span>Watch Our Story</span>
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-16 bg-white/80 backdrop-blur-sm">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0b234a 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-[#E22213] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="bg-orange-50 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300 relative">
                    <stat.icon className="text-orange-500 group-hover:text-white w-6 h-6 md:w-8 md:h-8 transition-colors duration-300" size={24} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2 bg-gradient-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50/80 to-white/80">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shimmer" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + i * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-slide-up">
              Our Core Philosophy
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Guided by strong principles that shape everything we do
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
            {[
              { id: "mission", label: "Our Mission", icon: Target },
              { id: "vision", label: "Our Vision", icon: Eye },
              { id: "values", label: "Our Values", icon: HeartHandshake }
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base relative overflow-hidden group ${
                  activeTab === tab.id
                    ? "bg-[#0b234a] text-white shadow-lg transform scale-105"
                    : "bg-white/90 text-gray-700 hover:bg-orange-50 hover:scale-105 backdrop-blur-sm"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-[#E22213] transition-opacity duration-300 ${
                  activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                <tab.icon size={18} className="flex-shrink-0 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto border border-white/20 animate-fade-in">
            {activeTab === "mission" && (
              <div className="text-center">
                <div className="relative inline-block">
                  <Target className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 relative z-10 animate-pulse" size={40}/>
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                  To democratize coding education and empower every child with the skills to become 
                  creators, innovators, and problem-solvers. We believe that understanding technology 
                  is no longer optional—it's essential for success in the 21st century.
                </p>
                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-[#E22213]/10 rounded-xl sm:rounded-2xl border border-orange-100">
                  <h4 className="font-semibold text-[#0b234a] mb-2 sm:mb-3 text-sm sm:text-base">We achieve this by:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-left text-sm sm:text-base">
                    {[
                      "Making coding accessible and fun for all ages",
                      "Providing industry-relevant curriculum",
                      "Fostering creativity and critical thinking",
                      "Building confidence through hands-on projects"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 animate-slide-right" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CheckCircle2 className="text-[#E22213] flex-shrink-0 animate-bounce" size={18} style={{ animationDelay: `${index * 0.2}s` }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center">
                <div className="relative inline-block">
                  <Eye className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 relative z-10" size={40} />
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Vision</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  We envision a world where every child, regardless of background, has the opportunity 
                  to learn coding and become an active creator in the digital world. A future where 
                  young minds are equipped to solve complex problems and drive technological innovation.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="text-center">
                <div className="relative inline-block">
                  <HeartHandshake className="text-orange-500 mx-auto mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 relative z-10" size={40} />
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-30" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Values</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:from-orange-50 hover:to-[#E22213]/10 transition-all duration-300 border border-white/50 hover:border-orange-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative inline-block">
                        <value.icon className="text-orange-500 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform w-7 h-7 sm:w-8 sm:h-8 relative z-10" size={28} />
                        <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="relative py-16 md:py-20 bg-white/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600">From humble beginnings to national recognition</p>
          </div>

          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1">
              <div className="h-full bg-gradient-to-b from-orange-400 via-[#E22213] to-orange-400 animate-gradient-y" />
            </div>
            
            {/* Milestones */}
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:flex-row animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Content */}
                  <div className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-8 sm:pr-12 sm:text-right' : 'sm:pl-8 sm:pl-12'
                  } mb-4 sm:mb-0`}>
                    <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:scale-105 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="text-orange-500 font-bold text-base sm:text-lg mb-1 sm:mb-2 relative">{milestone.year}</div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2 relative">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm sm:text-base relative">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Animated Dot */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 z-10">
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full border-2 sm:border-4 border-white shadow-lg" />
                  </div>
                  
                  {/* Spacer for mobile */}
                  <div className="sm:hidden w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white/90 to-gray-50/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #0b234a 10px, #0b234a 20px)`
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to know about Aaklan
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:from-orange-50 hover:to-[#E22213]/10 transition-all duration-300 border border-gray-100 hover:border-orange-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center font-semibold text-gray-900 text-sm sm:text-base group"
                  >
                    <span>{faq.question}</span>
                    <div className="flex items-center">
                      {openFaq === index ? 
                        <ChevronUp size={18} className="text-orange-500 transform group-hover:scale-110 transition-transform" /> : 
                        <ChevronDown size={18} className="text-gray-400 group-hover:text-orange-500 transform group-hover:scale-110 transition-transform" />
                      }
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base animate-slide-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#0b234a] animate-gradient-x" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `orbit ${Math.random() * 20 + 20}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white animate-pulse" style={{ animationDuration: '3s' }}>
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of students who have discovered the joy of coding with Aaklan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button onClick={() => navigate('/book-demo')} className="bg-gradient-to-r from-orange-500 to-[#E22213] text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Book a Free Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#c2180b] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')} className="border-2 border-white text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0b234a] transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Contact Our Team</span>
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-down {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-right {
          from { transform: translateX(-10px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient-y {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 2s ease-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.3s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        .animate-gradient-y {
          background-size: 100% 200%;
          animation: gradient-y 3s ease infinite;
        }
      `}</style>
    </div>
  );
}