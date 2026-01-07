import React, { useRef, useState } from 'react';
import { CreateTheFeatureBooks } from '../assets/Books/books';
import { motion, AnimatePresence } from 'framer-motion';
import BookFreeDemo from '../components/BookFreeDemo.jsx';
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
  FaBrain,
  FaWhatsapp,
  FaTimes,
  FaInfoCircle,
  FaGraduationCap,
  FaFileAlt,
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaNetworkWired,
  FaPython
} from 'react-icons/fa';

const CreateTheFeature = () => {
  const [hoveredBook, setHoveredBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const bookDemoRef = useRef(null);

  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Function to open book details popup
  const openBookDetails = (book) => {
    setSelectedBook(book);
    setShowPopup(true);
    // Disable body scroll when popup is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedBook(null);
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  const books = [
    {
      id: 1,
      grade: "Grade 6",
      title: "CreateTheFeature - Grade 6",
      image: CreateTheFeatureBooks.CTFgrade6,
      description:
        "Students learn Google tools, internet basics, app development using MIT App Inventor, core programming concepts, and get introduced to AI, robotics, Pictoblox, and Quarky.",
      chapters: 10,
      pages: 124,
      skills: [
        "Google Docs",
        "Google Slides",
        "Google Sheets",
        "Internet",
        "Introduction to MIT App Inventor",
        "Variables & Operators",
        "Functions",
        "AI & Robotics Basics",
        "Introduction to Pictoblox",
        "Introduction to Quarky"
      ],
      color: "#0B234A",
      icon: <FaLightbulb />
    },
    {
      id: 2,
      grade: "Grade 7",
      title: "CreateTheFeature - Grade 7",
      image: CreateTheFeatureBooks.CTFgrade7,
      description:
        "Students explore UX design, wireframing, and prototyping, build advanced apps using MIT App Inventor, and learn AI and machine learning concepts with Pictoblox and Quarky.",
      chapters: 11,
      pages: 136,
      skills: [
        "UX Design",
        "Wireframing",
        "Prototyping",
        "Feature Planning",
        "Introduction to Figma",
        "Advanced MIT App Inventor",
        "Event Handling",
        "Introduction to AI & ML",
        "Intermediate Pictoblox",
        "Intermediate Quarky"
      ],
      color: "#EA8E0A",
      icon: <FaPaintBrush />
    },
    {
      id: 3,
      grade: "Grade 8",
      title: "CreateTheFeature - Grade 8",
      image: CreateTheFeatureBooks.CTFgrade8,
      description:
        "Students learn networking and cybersecurity, web basics, SQL, algorithms, Python programming, and build AI and robotics projects using Pictoblox and Quarky.",
      chapters: 11,
      pages: 138,
      skills: [
        "Networking & Cybersecurity",
        "HTML",
        "Structured Query Language",
        "Algorithms And Flowchart",
        "Introduction to Python",
        "Python Conditional Statements and Loops",
        "Python: Arrays, Lists, Strings, Tuples",
        "Python Function",
        "AI & Robotics",
        "Introduction to Pictoblox",
        "Introduction to Quarky (Projects)"
      ],
      color: "#0B234A",
      icon: <FaProjectDiagram />
    },
    {
      id: 4,
      grade: "Grade 9-12",
      title: "CreateTheFeature - Grade 9-12",
      image: CreateTheFeatureBooks.CTFgrade9,
      description:
        "Students master advanced Python, data structures, web development, API design, and machine learning while building real-world AI-powered features and projects.",
      chapters: 20,
      pages: 168,
      skills: [
        "Advanced Python Programming",
        "Data Structures & Algorithms",
        "Web Development with Flask/Django",
        "RESTful API Design",
        "Machine Learning Basics",
        "AI Integration in Features",
        "Advanced Pictoblox Projects",
        "Advanced Quarky Projects"
      ],
      color: "#EA8E0A",
      icon: <FaBrain />
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

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
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
                    onClick={scrollToBookDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaPlay className="group-hover:scale-110 transition-transform" />
                    <span>Book Demo</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://wa.me/919571677609?text=Hi%20I%20want%20to%20know%20more%20about%20your%20curriculum', '_blank')}
                    className="px-6 py-2 bg-linear-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>
                      Chat on WhatsApp
                    </span>
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  {[
                    { label: "Grades", value: "6-12" },
                    { label: "Books", value: "4" },
                    { label: "Skills", value: "40+" },
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

          {/* Books Grid - MODIFIED FOR LIMITED CONTENT */}
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
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Top Ribbon */}
                  <div
                    className="relative h-2"
                    style={{ backgroundColor: book.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow">
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
                          {/* <FaBookOpen className="text-blue-600" /> */}
                          <span className="font-semibold">{book.chapters} Chapters</span>
                        </div>
                        <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                          {/* <FaFileAlt className="text-green-600" /> */}
                          <span className="font-semibold">{book.pages} Pages</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Info - LIMITED CONTENT */}
                    <div className="mt-8">
                      <h4 className="font-bold text-lg mb-3 text-gray-800 line-clamp-2">
                        {book.title}
                      </h4>
                      
                      {/* Limited Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {book.description}
                      </p>

                      {/* Limited Skills Preview (only first 3) */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <FaInfoCircle className="text-blue-500" />
                          Skills Preview:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {book.skills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full font-medium"
                              style={{
                                backgroundColor: `${book.color}15`,
                                color: book.color,
                                border: `1px solid ${book.color}30`
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                          {book.skills.length > 3 && (
                            <span className="px-2 py-1 text-xs text-gray-500 font-medium">
                              +{book.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* More Details Button at Bottom */}
                  <div className="p-4 pt-0 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openBookDetails(book)}
                      className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all group"
                      style={{
                        backgroundColor: book.color,
                        color: 'white'
                      }}
                    >
                      <span>More Details</span>
                      <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
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

      {/* Book Details Popup */}
      <AnimatePresence>
        {showPopup && selectedBook && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Popup Content */}
              <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              >
                {/* Popup Header */}
                <div
                  className="p-6 relative"
                  style={{ backgroundColor: selectedBook.color }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-white/20 p-2 rounded-lg">
                          {selectedBook.icon}
                        </div>
                        <div>
                          <div className="text-white/80 text-sm">CreateTheFeature</div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {selectedBook.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-white/90 max-w-3xl">
                        {selectedBook.description}
                      </p>
                    </div>
                    <button
                      onClick={closePopup}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                    >
                      <FaTimes className="text-white text-xl" />
                    </button>
                  </div>
                </div>

                {/* Popup Body */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Book Image and Stats */}
                    <div className="space-y-6">
                      {/* Book Cover */}
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={selectedBook.image}
                          alt={selectedBook.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      {/* Quick Stats */}
                      <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6">
                        <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
                          <FaProjectDiagram className="text-blue-600" />
                          Book Overview
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Grade Level:</span>
                            <span className="font-bold" style={{ color: selectedBook.color }}>
                              {selectedBook.grade}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Chapters:</span>
                            <span className="font-bold">{selectedBook.chapters}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Pages:</span>
                            <span className="font-bold">{selectedBook.pages}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Skills Covered:</span>
                            <span className="font-bold">{selectedBook.skills.length}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Focus Area:</span>
                            <span className="font-bold text-right">
                              {selectedBook.grade === "Grade 6" && "Foundations"}
                              {selectedBook.grade === "Grade 7" && "UX & Prototyping"}
                              {selectedBook.grade === "Grade 8" && "Web & Python"}
                              {selectedBook.grade === "Grade 9-12" && "Advanced Development"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                        <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
                          <FaCogs className="text-orange-600" />
                          Tech Stack
                        </h3>
                        <div className="space-y-3">
                          {selectedBook.grade === "Grade 6" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Google Workspace</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>MIT App Inventor</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>Pictoblox & Quarky</span>
                              </div>
                            </>
                          )}
                          {selectedBook.grade === "Grade 7" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Figma</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>MIT App Inventor</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>AI/ML Concepts</span>
                              </div>
                            </>
                          )}
                          {selectedBook.grade === "Grade 8" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>HTML & SQL</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Python</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>Pictoblox & Quarky</span>
                              </div>
                            </>
                          )}
                          {selectedBook.grade === "Grade 9-12" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Flask/Django</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Advanced Python</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>Machine Learning</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Call to Action */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          closePopup();
                          scrollToBookDemo();
                        }}
                        className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                        style={{ backgroundColor: selectedBook.color }}
                      >
                        <FaPlay />
                        Book Demo
                      </motion.button>
                    </div>

                    {/* Right Column - Detailed Content */}
                    <div className="md:col-span-2">
                      {/* Learning Outcomes */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <FaGraduationCap className="text-green-600" />
                          Learning Outcomes
                        </h3>
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                          <p className="text-gray-700 mb-4">
                            By completing this course, students will be able to:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedBook.grade === "Grade 6" && (
                              <>
                                <div className="flex items-center gap-3">
                                  <FaMobileAlt className="text-blue-600" />
                                  <span>Build mobile applications</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaRobot className="text-green-600" />
                                  <span>Understand AI basics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaDatabase className="text-purple-600" />
                                  <span>Work with Google tools</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaLightbulb className="text-yellow-600" />
                                  <span>Develop problem-solving skills</span>
                                </div>
                              </>
                            )}
                            {selectedBook.grade === "Grade 7" && (
                              <>
                                <div className="flex items-center gap-3">
                                  <FaPaintBrush className="text-blue-600" />
                                  <span>Design user interfaces</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaLaptopCode className="text-green-600" />
                                  <span>Create advanced apps</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaBrain className="text-purple-600" />
                                  <span>Implement AI concepts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaProjectDiagram className="text-yellow-600" />
                                  <span>Plan and prototype features</span>
                                </div>
                              </>
                            )}
                            {selectedBook.grade === "Grade 8" && (
                              <>
                                <div className="flex items-center gap-3">
                                  <FaNetworkWired className="text-blue-600" />
                                  <span>Understand networking concepts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaPython className="text-green-600" />
                                  <span>Write Python programs</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaDatabase className="text-purple-600" />
                                  <span>Work with databases</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaCode className="text-yellow-600" />
                                  <span>Develop web applications</span>
                                </div>
                              </>
                            )}
                            {selectedBook.grade === "Grade 9-12" && (
                              <>
                                <div className="flex items-center gap-3">
                                  <FaPython className="text-blue-600" />
                                  <span>Master advanced Python</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaDatabase className="text-green-600" />
                                  <span>Design RESTful APIs</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaBrain className="text-purple-600" />
                                  <span>Build ML models</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <FaLaptopCode className="text-yellow-600" />
                                  <span>Create full-stack applications</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Skills Covered */}
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold flex items-center gap-2">
                            <FaCogs className="text-red-600" />
                            Complete Skills List
                          </h3>
                          <span className="text-sm text-gray-500">
                            {selectedBook.skills.length} skills to master
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedBook.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                            >
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: `${selectedBook.color}20` }}
                              >
                                <span
                                  className="font-bold text-lg"
                                  style={{ color: selectedBook.color }}
                                >
                                  {index + 1}
                                </span>
                              </div>
                              <div className="flex-1">
                                <span className="font-medium text-gray-800">{skill}</span>
                                
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>
    </>
  );
};

export default CreateTheFeature;