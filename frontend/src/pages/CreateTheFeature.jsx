import React, { useState } from 'react';
import { CreateTheFeatureBooks } from '../assets/Books/books';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaPlay, 
  FaBookOpen, 
  FaCode, 
  FaRobot, 
  FaPaintBrush,
  FaArrowRight,
  FaChevronRight,
  FaStar,
  FaCogs,
  FaLightbulb,
  FaProjectDiagram,
  FaCloud,
  FaBrain
} from 'react-icons/fa';

const CreateTheFeature = () => {
  const [hoveredBook, setHoveredBook] = useState(null);

  
  const books = [
    {
      id: 1,
      grade: "Grade 6",
      title: "CreateTheFeature - Grade 6",
      image: CreateTheFeatureBooks.CTFgrade6,
      description: "Introduction to feature design, basic prototyping, and user-centered thinking",
      chapters: 14,
      pages: 120,
      skills: ["Design Thinking", "Basic Prototyping", "User Research"],
      color: "#0B234A",
      icon: <FaLightbulb />
    },
    {
      id: 2,
      grade: "Grade 7",
      title: "CreateTheFeature - Grade 7",
      image: CreateTheFeatureBooks.CTFgrade7,
      description: "Advanced prototyping, user experience design, and feature planning",
      chapters: 16,
      pages: 136,
      skills: ["UX Design", "Wireframing", "Feature Specification"],
      color: "#EA8E0A",
      icon: <FaPaintBrush />
    },
    {
      id: 3,
      grade: "Grade 8",
      title: "CreateTheFeature - Grade 8",
      image: CreateTheFeatureBooks.CTFgrade8,
      description: "Feature implementation, API design, and system integration",
      chapters: 18,
      pages: 152,
      skills: ["API Design", "System Integration", "Feature Development"],
      color: "#0B234A",
      icon: <FaProjectDiagram />
    },
    {
      id: 4,
      grade: "Grade 9",
      title: "CreateTheFeature - Grade 9",
      image: CreateTheFeatureBooks.CTFgrade9,
      description: "Advanced feature engineering, AI integration, and machine learning features",
      chapters: 20,
      pages: 168,
      skills: ["AI Integration", "ML Features", "Advanced Algorithms"],
      color: "#EA8E0A",
      icon: <FaBrain />
    },
    {
      id: 5,
      grade: "Grade 10",
      title: "CreateTheFeature - Grade 10",
      image: CreateTheFeatureBooks.CTFgrade8,
      description: "Cloud-based features, microservices architecture, and scalable systems",
      chapters: 22,
      pages: 184,
      skills: ["Cloud Architecture", "Microservices", "Scalable Design"],
      color: "#E22213",
      icon: <FaCloud />
    },
    {
      id: 6,
      grade: "Grade 11",
      title: "CreateTheFeature - Grade 11",
      image: CreateTheFeatureBooks.CTFgrade6,
      description: "Enterprise feature development, DevOps integration, and deployment strategies",
      chapters: 24,
      pages: 200,
      skills: ["Enterprise Features", "DevOps", "Deployment"],
      color: "#0B234A",
      icon: <FaCogs />
    },
    {
      id: 7,
      grade: "Grade 12",
      title: "CreateTheFeature - Grade 12",
      image: CreateTheFeatureBooks.CTFgrade7,
      description: "Innovation methodologies, research-based features, and industry projects",
      chapters: 26,
      pages: 216,
      skills: ["Innovation", "Research", "Industry Projects"],
      color: "#EA8E0A",
      icon: <FaProjectDiagram />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 p-4 md:p-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B234A] via-purple-800 to-orange-400 opacity-90" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full bg-white opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-8 md:p-8 lg:p-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <FaStar className="text-orange-300" />
                <span className="text-white font-semibold">Advanced Feature Development</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">CreateThe</span>
                <span className="text-orange-400">Feature</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                Master the art of feature creation and development! Our advanced curriculum transforms 
                students into feature creators from Grade 6 to Grade 12.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <FaPlay className="group-hover:scale-110 transition-transform" />
                  <span>Book Demo</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex-1 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-4 py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
                >
                  <FaDownload className="group-hover:scale-110 transition-transform" />
                  <span>Download Curriculum</span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {[
                  { label: "Grades", value: "6-12" },
                  { label: "Books", value: "7" },
                  { label: "Skills", value: "30+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Books Section */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#E22213] to-[#0B234A] bg-clip-text text-transparent">
            Feature Development Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Progressive learning path designed to build advanced feature development skills step by step
          </p>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {books.map((book) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundColor: book.color }}
              />

              {/* Book Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Top Ribbon */}
                <div 
                  className="relative h-2"
                  style={{ backgroundColor: book.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Grade Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: book.color + '20' }}
                      >
                        <div style={{ color: book.color }}>
                          {book.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Grade Level</div>
                        <h3 
                          className="font-bold text-xl"
                          style={{ color: book.color }}
                        >
                          {book.grade}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Interactive Button */}
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: book.color }}
                    >
                      <FaChevronRight />
                    </motion.button> */}
                  </div>

                  {/* Book Image */}
                  <div className="relative mb-4">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      />
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-2">
                      <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                        <FaBookOpen className="text-blue-600" />
                        <span className="font-semibold">{book.chapters} Chapters</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="mt-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">
                      {book.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-700">
                        Skills You'll Learn:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {book.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: `${book.color}15`,
                              color: book.color,
                              border: `1px solid ${book.color}30`
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredBook === book.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end justify-center p-6 rounded-2xl"
                  >
                    {/* <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="w-full bg-white text-blue-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
                    >
                      Explore Curriculum
                      <FaArrowRight />
                    </motion.button> */}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-[#0B234A] to-[#E22213] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                  <FaPlay className="text-3xl text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Demos</h3>
                <p className="text-white/80">Interactive sessions with expert instructors</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                  <FaDownload className="text-3xl text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free Resources</h3>
                <p className="text-white/80">Download complete curriculum materials</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                  <FaCogs className="text-3xl text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hands-on Projects</h3>
                <p className="text-white/80">Build real features as you learn</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CreateTheFeature;