import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BookFreeDemo from '../components/BookFreeDemo.jsx';
import {
  FaDownload,
  FaPlay,
  FaBookOpen,
  FaChild,
  FaShapes,
  FaPaintBrush,
  FaArrowRight,
  FaChevronRight,
  FaStar,
  FaPalette,
  FaMusic,
  FaGamepad,
  FaPuzzlePiece,
  FaWhatsapp,
  FaTimes
} from 'react-icons/fa';
import { bookDetails, CreateTheFeatureBooks } from '../assets/Books/books';

const EarlyLearningProgram = () => {
  const [hoveredBook, setHoveredBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showBookDetails, setShowBookDetails] = useState(false);
  
  const bookDemoRef = useRef(null);
  const bookDetailsRef = useRef(null);

  // Function to scroll to BookFreeDemo section
  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Function to scroll to book details
  const scrollToBookDetails = (book) => {
    setSelectedBook(book);
    setShowBookDetails(true);
    
    // Small delay to ensure state is updated before scrolling
    setTimeout(() => {
      bookDetailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  // Function to close book details
  const closeBookDetails = () => {
    setShowBookDetails(false);
    setSelectedBook(null);
  };

  const books = [
    {
      id: 1,
      grade: "Nursery",
      title: "Early Learning Program - Nursery",
      image: bookDetails.ELP_Box_P_N, // यहाँ आपकी वास्तविक image path आएगी // बड़ी image के लिए
      description: "Introduction to basic concepts, colors, shapes, and simple digital interactions",
      detailedDescription: "This nursery program is designed for young learners aged 3-4 years. It introduces children to basic concepts through engaging activities. The curriculum focuses on developing fine motor skills, color recognition, and early cognitive abilities through interactive digital content and hands-on activities.",
      chapters: 10,
      pages: 64,
      skills: ["Color Recognition", "Shape Matching", "Basic Motor Skills", "Number Counting", "Alphabet Introduction"],
      activities: ["Interactive Games", "Color Matching", "Shape Sorting", "Animal Sounds"],
      color: "#0B234A",
      icon: <FaChild />
    },
    {
      id: 2,
      grade: "LKG",
      title: "Early Learning Program - LKG",
      image: bookDetails.ELP_Box_P_N,
      description: "Introduction to numbers, letters, and simple problem-solving activities",
      detailedDescription: "The LKG program builds upon nursery foundations with more structured learning. Children aged 4-5 years learn numbers 1-50, complete alphabet recognition, and engage in simple problem-solving activities. The program includes interactive storytelling and basic math concepts.",
      chapters: 12,
      pages: 80,
      skills: ["Number Recognition", "Alphabet Learning", "Simple Puzzles", "Phonics", "Pattern Recognition"],
      activities: ["Number Games", "Letter Tracing", "Memory Games", "Simple Stories"],
      color: "#EA8E0A",
      icon: <FaShapes />
    },
    {
      id: 3,
      grade: "UKG",
      title: "Early Learning Program - UKG",
      image: bookDetails.ELP_Box_UKG,
      description: "Introduction to basic computing, creative activities, and interactive learning",
      detailedDescription: "For children aged 5-6 years, this UKG program prepares them for formal schooling. It introduces basic computing concepts, enhances creative expression through art activities, and develops logical thinking through structured exercises. The curriculum includes introduction to keyboarding and digital creativity tools.",
      chapters: 15,
      pages: 96,
      skills: ["Basic Computer Skills", "Creative Expression", "Logical Thinking", "Reading Readiness", "Early Writing"],
      activities: ["Digital Drawing", "Simple Coding Games", "Creative Projects", "Interactive Reading"],
      color: "#0B234A",
      icon: <FaPaintBrush />
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50 p-4 md:p-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B234A] via-[#E22213] to-[#0B234A] opacity-90" />

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
                  <FaStar className="text-yellow-300" />
                  <span className="text-white font-semibold">Fun Learning Series</span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-white">Early Learning </span>
                  <span className="text-orange-500">Program</span>
                </h1>

                {/* Description */}
                <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                  Start the learning journey with fun and interactive activities! Our early childhood
                  curriculum introduces young learners to basic concepts through play and exploration.
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
                    className="px-6 py-2 bg-gradient-to-r from-[#25D366] to-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  {[
                    { label: "Levels", value: "3" },
                    { label: "Books", value: "3" },
                    { label: "Activities", value: "100+" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
              Learning Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Progressive early childhood development through fun and interactive activities
            </p>
          </motion.div>

          {/* Books Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
                          <div className="text-sm text-gray-500">Level</div>
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Floating Stats */}
                      <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-2">
                        <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                          <FaBookOpen className="text-purple-600" />
                          <span className="font-semibold">{book.chapters} Lessons</span>
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
                      <div className="space-y-2 mb-6">
                        <div className="text-sm font-semibold text-gray-700">
                          Skills Children Learn:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {book.skills.slice(0, 3).map((skill, index) => (
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

                      {/* Explore Details Button */}
                      <motion.button
                        onClick={() => scrollToBookDetails(book)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                        style={{
                          backgroundColor: book.color,
                          color: 'white'
                        }}
                      >
                        Explore Details
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredBook === book.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end justify-center p-6 rounded-2xl"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Book Details Section - Will appear when a book is selected */}
          <div ref={bookDetailsRef}>
            {showBookDetails && selectedBook && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="mb-16"
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <motion.button
                      onClick={closeBookDetails}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <FaTimes className="text-gray-600" />
                    </motion.button>
                  </div>

                  {/* Book Details Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Book Image */}
                      <div>
                        <div className="sticky top-8">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                              src={selectedBook.image}
                              alt={selectedBook.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-4 flex justify-center">
                            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full shadow-lg"
                              style={{ backgroundColor: `${selectedBook.color}15` }}>
                              <div className="flex items-center gap-2">
                                <FaBookOpen style={{ color: selectedBook.color }} />
                                <span className="font-semibold">{selectedBook.chapters} Chapters</span>
                              </div>
                              <div className="h-6 w-px bg-gray-300"></div>
                              <div className="font-semibold">{selectedBook.pages} Pages</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Book Details */}
                      <div>
                        {/* Grade Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                          style={{ backgroundColor: `${selectedBook.color}20` }}>
                          <div style={{ color: selectedBook.color }}>
                            {selectedBook.icon}
                          </div>
                          <span className="font-bold" style={{ color: selectedBook.color }}>
                            {selectedBook.grade}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                          {selectedBook.title}
                        </h2>

                        {/* Detailed Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {selectedBook.detailedDescription}
                        </p>

                        {/* Skills Section */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4" style={{ color: selectedBook.color }}>
                            Skills Developed
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {selectedBook.skills.map((skill, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-4 py-2 rounded-lg font-medium"
                                style={{
                                  backgroundColor: `${selectedBook.color}10`,
                                  color: selectedBook.color,
                                  border: `1px solid ${selectedBook.color}30`
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Activities Section */}
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4" style={{ color: selectedBook.color }}>
                            Key Activities
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedBook.activities.map((activity, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50"
                              >
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedBook.color }}></div>
                                <span className="text-gray-700">{activity}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <motion.button
                            onClick={scrollToBookDemo}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg"
                            style={{ backgroundColor: selectedBook.color }}
                          >
                            <FaPlay />
                            Book Demo Class
                          </motion.button>
                          
                          <motion.button
                            onClick={closeBookDetails}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-xl font-semibold border-2 hover:bg-gray-50 transition-colors"
                            style={{ 
                              borderColor: selectedBook.color,
                              color: selectedBook.color
                            }}
                          >
                            Back to All Books
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>


          {/* hame yaha par 3 section add karni nursary ka 8 book , lkg ka 9 book and ukg ka 8 book */}

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
                    <FaMusic className="text-3xl text-yellow-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Activities</h3>
                  <p className="text-white/80">Fun learning through games and music</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <FaPalette className="text-3xl text-pink-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Creative Expression</h3>
                  <p className="text-white/80">Art and craft activities for creativity</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <FaPuzzlePiece className="text-3xl text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                  <p className="text-white/80">Simple puzzles for cognitive development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>
    </>
  );
};

export default EarlyLearningProgram;