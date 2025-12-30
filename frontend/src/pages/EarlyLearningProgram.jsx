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
  FaTimes,
  FaSearch,
  FaFilter,
  FaGraduationCap,
  FaCalculator,
  FaLanguage,
  FaBook,
  FaMusic as FaMusicNote,
  FaRobot,
  FaLightbulb,
  FaPenFancy,
  FaMicroscope,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { bookDetails, Early_Learning_Program } from '../assets/Books/books';

const EarlyLearningProgram = () => {
  const [hoveredBook, setHoveredBook] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [expandedGrade, setExpandedGrade] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  const bookDemoRef = useRef(null);
  const booksRef = useRef(null);

  // Define all individual books with metadata
  const allBooks = [
    // P & N Books
    {
      id: 1,
      grade: "p&n",
      gradeName: "P & N",
      title: "Math O Mania Part-1",
      image: Early_Learning_Program.P_N_Math_part_1,
      category: "Mathematics",
      description: "Introduction to basic math concepts through fun activities",
      pages: 48,
      color: "#FF6B6B",
      icon: <FaCalculator />,
      ageGroup: "3-4 years",
      skills: ["Counting", "Number Recognition", "Basic Shapes", "Patterns"]
    },
    {
      id: 2,
      grade: "p&n",
      gradeName: "P & N",
      title: "Math O Mania Part-2",
      image: Early_Learning_Program.P_N_Math_part_2,
      category: "Mathematics",
      description: "Advanced math concepts for pre-nursery students",
      pages: 52,
      color: "#FF6B6B",
      icon: <FaCalculator />,
      ageGroup: "3-4 years",
      skills: ["Addition", "Subtraction", "Measurement", "Sorting"]
    },
    {
      id: 3,
      grade: "p&n",
      gradeName: "P & N",
      title: "Alpha O Mania Part-1",
      image: Early_Learning_Program.P_N_Alpha_1,
      category: "Language",
      description: "Introduction to alphabet and phonics",
      pages: 56,
      color: "#4ECDC4",
      icon: <FaLanguage />,
      ageGroup: "3-4 years",
      skills: ["Alphabet Recognition", "Phonics", "Vocabulary", "Letter Formation"]
    },
    {
      id: 4,
      grade: "p&n",
      gradeName: "P & N",
      title: "Alpha O Mania Part-2",
      image: Early_Learning_Program.P_N_Alpha_2,
      category: "Language",
      description: "Advanced alphabet and word formation",
      pages: 60,
      color: "#4ECDC4",
      icon: <FaLanguage />,
      ageGroup: "3-4 years",
      skills: ["Word Formation", "Sentence Building", "Reading Readiness", "Writing"]
    },
    {
      id: 5,
      grade: "p&n",
      gradeName: "P & N",
      title: "Pyare Axar Part-1",
      image: Early_Learning_Program.P_N_Pyare_axar_1,
      category: "Language",
      description: "Hindi alphabet learning with fun activities",
      pages: 44,
      color: "#45B7D1",
      icon: <FaLanguage />,
      ageGroup: "3-4 years",
      skills: ["Hindi Alphabet", "Vocabulary", "Writing", "Pronunciation"]
    },
    {
      id: 6,
      grade: "p&n",
      gradeName: "P & N",
      title: "Pyare Axar Part-2",
      image: Early_Learning_Program.P_N_Pyare_axar_2,
      category: "Language",
      description: "Hindi word formation and sentences",
      pages: 48,
      color: "#45B7D1",
      icon: <FaLanguage />,
      ageGroup: "3-4 years",
      skills: ["Word Formation", "Sentence Making", "Reading", "Writing"]
    },
    {
      id: 7,
      grade: "p&n",
      gradeName: "P & N",
      title: "Pyare Axar Part-3",
      image: Early_Learning_Program.P_N_Pyare_axar_3,
      category: "Language",
      description: "Advanced Hindi language skills",
      pages: 52,
      color: "#45B7D1",
      icon: <FaLanguage />,
      ageGroup: "3-4 years",
      skills: ["Advanced Vocabulary", "Story Reading", "Creative Writing", "Grammar"]
    },
    {
      id: 8,
      grade: "p&n",
      gradeName: "P & N",
      title: "Rhyme Book",
      image: Early_Learning_Program.P_N_Rhyme,
      category: "Music & Rhythm",
      description: "Fun nursery rhymes and musical activities",
      pages: 40,
      color: "#96CEB4",
      icon: <FaMusicNote />,
      ageGroup: "3-4 years",
      skills: ["Rhythm", "Memory", "Language", "Motor Skills"]
    },
    {
      id: 9,
      grade: "p&n",
      gradeName: "P & N",
      title: "Steamheartia",
      image: Early_Learning_Program.P_N_Steamety,
      category: "STEAM",
      description: "Introduction to science and creativity",
      pages: 64,
      color: "#FFEAA7",
      icon: <FaMicroscope />,
      ageGroup: "3-4 years",
      skills: ["Science", "Creativity", "Problem Solving", "Experimentation"]
    },

    // LKG Books
    {
      id: 10,
      grade: "lkg",
      gradeName: "LKG",
      title: "Axar Masti Part-1",
      image: Early_Learning_Program.LKG_Axar_masti_1,
      category: "Language",
      description: "Hindi learning with interactive activities",
      pages: 56,
      color: "#DDA0DD",
      icon: <FaLanguage />,
      ageGroup: "4-5 years",
      skills: ["Hindi Reading", "Writing", "Vocabulary", "Grammar"]
    },
    {
      id: 11,
      grade: "lkg",
      gradeName: "LKG",
      title: "Axar Masti Part-2",
      image: Early_Learning_Program.LKG_Axar_masti_2,
      category: "Language",
      description: "Advanced Hindi language skills",
      pages: 60,
      color: "#DDA0DD",
      icon: <FaLanguage />,
      ageGroup: "4-5 years",
      skills: ["Advanced Writing", "Comprehension", "Story Telling", "Poetry"]
    },
    {
      id: 12,
      grade: "lkg",
      gradeName: "LKG",
      title: "Letter Land Heroes",
      image: Early_Learning_Program.LKG_Letter_Land,
      category: "Language",
      description: "Alphabet adventures and word building",
      pages: 68,
      color: "#98D8C8",
      icon: <FaLanguage />,
      ageGroup: "4-5 years",
      skills: ["Phonics", "Word Building", "Reading", "Spelling"]
    },
    {
      id: 13,
      grade: "lkg",
      gradeName: "LKG",
      title: "Number Nuts Part-1",
      image: Early_Learning_Program.LKG_number_nets_1,
      category: "Mathematics",
      description: "Basic number concepts and counting",
      pages: 52,
      color: "#F7DC6F",
      icon: <FaCalculator />,
      ageGroup: "4-5 years",
      skills: ["Counting", "Number Recognition", "Basic Math", "Sorting"]
    },
    {
      id: 14,
      grade: "lkg",
      gradeName: "LKG",
      title: "Number Nuts Part-2",
      image: Early_Learning_Program.LKG_number_nets_2,
      category: "Mathematics",
      description: "Advanced number operations",
      pages: 56,
      color: "#F7DC6F",
      icon: <FaCalculator />,
      ageGroup: "4-5 years",
      skills: ["Addition", "Subtraction", "Measurement", "Patterns"]
    },
    {
      id: 15,
      grade: "lkg",
      gradeName: "LKG",
      title: "Rhyme Book",
      image: Early_Learning_Program.LKG_Rhyme,
      category: "Music & Rhythm",
      description: "Musical learning and rhythm activities",
      pages: 44,
      color: "#85C1E9",
      icon: <FaMusicNote />,
      ageGroup: "4-5 years",
      skills: ["Rhythm", "Singing", "Memory", "Coordination"]
    },
    {
      id: 16,
      grade: "lkg",
      gradeName: "LKG",
      title: "SoundTopia",
      image: Early_Learning_Program.LKG_Sound_Topies,
      category: "Language",
      description: "Phonics and sound recognition",
      pages: 60,
      color: "#BB8FCE",
      icon: <FaLanguage />,
      ageGroup: "4-5 years",
      skills: ["Phonics", "Sound Recognition", "Pronunciation", "Listening"]
    },
    {
      id: 17,
      grade: "lkg",
      gradeName: "LKG",
      title: "Thinky Tots Lab",
      image: Early_Learning_Program.LKG_Thinky,
      category: "Cognitive Skills",
      description: "Critical thinking and problem solving",
      pages: 64,
      color: "#F1948A",
      icon: <FaLightbulb />,
      ageGroup: "4-5 years",
      skills: ["Problem Solving", "Logic", "Memory", "Attention"]
    },

    // UKG Books
    {
      id: 18,
      grade: "ukg",
      gradeName: "UKG",
      title: "Kahani Kadam Part-1",
      image: Early_Learning_Program.Kahani_Kadam_1,
      category: "Language",
      description: "Story telling and reading comprehension",
      pages: 72,
      color: "#A569BD",
      icon: <FaBook />,
      ageGroup: "5-6 years",
      skills: ["Reading", "Comprehension", "Story Telling", "Vocabulary"]
    },
    {
      id: 19,
      grade: "ukg",
      gradeName: "UKG",
      title: "Kahani Kadam Part-2",
      image: Early_Learning_Program.Kahani_Kadam_2,
      category: "Language",
      description: "Advanced reading and creative writing",
      pages: 76,
      color: "#A569BD",
      icon: <FaBook />,
      ageGroup: "5-6 years",
      skills: ["Creative Writing", "Grammar", "Poetry", "Comprehension"]
    },
    {
      id: 20,
      grade: "ukg",
      gradeName: "UKG",
      title: "Number Bots Part-1",
      image: Early_Learning_Program.Number_Bots_1,
      category: "Mathematics",
      description: "Interactive math learning with robots",
      pages: 64,
      color: "#E74C3C",
      icon: <FaRobot />,
      ageGroup: "5-6 years",
      skills: ["Addition", "Subtraction", "Measurement", "Problem Solving"]
    },
    {
      id: 21,
      grade: "ukg",
      gradeName: "UKG",
      title: "Number Bots Part-2",
      image: Early_Learning_Program.Number_Bots_2,
      category: "Mathematics",
      description: "Advanced mathematical concepts",
      pages: 68,
      color: "#E74C3C",
      icon: <FaRobot />,
      ageGroup: "5-6 years",
      skills: ["Multiplication", "Division", "Geometry", "Data Handling"]
    },
    {
      id: 22,
      grade: "ukg",
      gradeName: "UKG",
      title: "PenPals Paradise Part-1",
      image: Early_Learning_Program.PenPals_1,
      category: "Language",
      description: "Creative writing and communication skills",
      pages: 60,
      color: "#3498DB",
      icon: <FaPenFancy />,
      ageGroup: "5-6 years",
      skills: ["Writing", "Communication", "Creativity", "Expression"]
    },
    {
      id: 24,
      grade: "ukg",
      gradeName: "UKG",
      title: "SoundSpark Part-1",
      image: Early_Learning_Program.Sound_Spark_1,
      category: "Language",
      description: "Advanced phonics and spelling",
      pages: 56,
      color: "#2ECC71",
      icon: <FaLanguage />,
      ageGroup: "5-6 years",
      skills: ["Advanced Phonics", "Spelling", "Vocabulary", "Pronunciation"]
    },
    {
      id: 23,
      grade: "ukg",
      gradeName: "UKG",
      title: "Rhyme Bunny",
      image: Early_Learning_Program.Ryman_1,
      category: "Music & Rhythm",
      description: "Musical learning and performance",
      pages: 48,
      color: "#F1C40F",
      icon: <FaMusicNote />,
      ageGroup: "5-6 years",
      skills: ["Rhythm", "Performance", "Memory", "Expression"]
    },
    {
      id: 25,
      grade: "ukg",
      gradeName: "UKG",
      title: "Tiny Tinker Lab",
      image: Early_Learning_Program.Tiny_1,
      category: "STEAM",
      description: "Science experiments and creative projects",
      pages: 80,
      color: "#E67E22",
      icon: <FaMicroscope />,
      ageGroup: "5-6 years",
      skills: ["Science", "Experimentation", "Creativity", "Innovation"]
    }
  ];

  // Book boxes for grade overview
  const gradeBoxes = [
    {
      id: 'p&n',
      name: 'P & N',
      description: 'Pre-Nursery Program',
      totalBooks: 9,
      image: bookDetails.ELP_Box_P_N,
      color: '#0B234A',
      icon: <FaChild />,
      ageGroup: '3-4 Years',
      subjects: ['Math', 'Language', 'Rhymes', 'STEAM']
    },
    {
      id: 'lkg',
      name: 'LKG',
      description: 'Lower Kindergarten',
      totalBooks: 8,
      image: bookDetails.ELP_Box_LKG,
      color: '#EA8E0A',
      icon: <FaShapes />,
      ageGroup: '4-5 Years',
      subjects: ['Math', 'Hindi', 'English', 'Cognitive Skills']
    },
    {
      id: 'ukg',
      name: 'UKG',
      description: 'Upper Kindergarten',
      totalBooks: 8,
      image: bookDetails.ELP_Box_UKG,
      color: '#0B234A',
      icon: <FaPaintBrush />,
      ageGroup: '5-6 Years',
      subjects: ['Advanced Math', 'Language Arts', 'Science', 'Creative Writing']
    }
  ];

  // Filter books based on selected grade and search query
  const filteredBooks = allBooks.filter(book => {
    const matchesGrade = selectedGrade === 'all' || book.grade === selectedGrade;
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  // Group books by grade for accordion view
  const booksByGrade = {
    'p&n': allBooks.filter(book => book.grade === 'p&n'),
    'lkg': allBooks.filter(book => book.grade === 'lkg'),
    'ukg': allBooks.filter(book => book.grade === 'ukg')
  };

  const scrollToBookDemo = () => {
    bookDemoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToBooks = () => {
    booksRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openBookDetails = (book) => {
    setSelectedBook(book);
    setShowBookDetails(true);
  };

  const closeBookDetails = () => {
    setShowBookDetails(false);
    setSelectedBook(null);
  };

  const toggleGrade = (grade) => {
    setExpandedGrade(expandedGrade === grade ? null : grade);
  };

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

  // Stats calculation
  const totalBooks = allBooks.length;
  const pnBooks = allBooks.filter(b => b.grade === 'p&n').length;
  const lkgBooks = allBooks.filter(b => b.grade === 'lkg').length;
  const ukgBooks = allBooks.filter(b => b.grade === 'ukg').length;
  const categories = [...new Set(allBooks.map(b => b.category))];
  const totalPages = allBooks.reduce((sum, book) => sum + book.pages, 0);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B234A] via-[#E22213] to-[#0B234A] opacity-90" />
            
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <FaStar className="text-yellow-300" />
                  <span className="text-white font-semibold">Complete Learning Series</span>
                </motion.div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-white">Early Learning </span>
                  <span className="text-orange-500">Program</span>
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                  Comprehensive early childhood education with {totalBooks} specialized books 
                  across 3 levels. Designed to develop foundational skills through interactive learning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    onClick={scrollToBooks}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaBookOpen className="group-hover:scale-110 transition-transform" />
                    <span>View All Books</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>

                  <motion.button
                    onClick={scrollToBookDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPlay className="w-5 h-5" />
                    <span>Book Free Demo</span>
                  </motion.button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl">
                  {[
                    { label: "Total Books", value: totalBooks },
                    { label: "Levels", value: "3" },
                    { label: "Subjects", value: categories.length },
                    { label: "Total Pages", value: `${totalPages}+` },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center bg-white/10 backdrop-blur-sm p-3 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grade Boxes Overview */}
        <div ref={booksRef} className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Complete Program Levels
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive early learning programs
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {gradeBoxes.map((grade) => (
              <motion.div
                key={grade.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-3 rounded-xl"
                          style={{ backgroundColor: grade.color + '20' }}
                        >
                          <div style={{ color: grade.color }}>
                            {grade.icon}
                          </div>
                        </div>
                        <div>
                          <h3
                            className="font-bold text-2xl"
                            style={{ color: grade.color }}
                          >
                            {grade.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{grade.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      {/* Fixed Image Container - Pure Image Display */}
                      <div className="aspect-[3/3] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <img
                          src={grade.image}
                          alt={grade.name}
                          className="w-full h-full object-cover p-1 m-3 transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Books:</span>
                        <span className="font-bold" style={{ color: grade.color }}>
                          {grade.totalBooks} Books
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Age Group:</span>
                        <span className="font-semibold">{grade.ageGroup}</span>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Subjects Covered:</div>
                        <div className="flex flex-wrap gap-2">
                          {grade.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-full font-medium bg-gray-100 text-gray-700"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => setSelectedGrade(grade.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                      style={{
                        backgroundColor: grade.color,
                        color: 'white'
                      }}
                    >
                      View {grade.totalBooks} Books
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* All Books Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Complete Book Collection
                </h2>
                <p className="text-gray-600">
                  Browse through all {totalBooks} books in our early learning program
                </p>
              </div>
              
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-xl font-medium ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-xl font-medium ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedGrade('all')}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedGrade === 'all' ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Books ({totalBooks})
              </button>
              {gradeBoxes.map(grade => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${selectedGrade === grade.id ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  style={selectedGrade === grade.id ? { backgroundColor: grade.color } : {}}
                >
                  {grade.name} ({grade.totalBooks})
                </button>
              ))}
            </div>

            {/* Books Grid/List View */}
            {viewMode === 'grid' ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Book Image - Fixed for pure display */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md"
                            style={{ backgroundColor: book.color }}>
                            {book.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-700 shadow-md">
                            {book.gradeName}
                          </span>
                        </div>
                      </div>

                      {/* Book Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {book.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {book.description}
                            </p>
                          </div>
                          <div className="ml-2" style={{ color: book.color }}>
                            {book.icon}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">{book.pages} pages</span>
                            <span className="mx-2">•</span>
                            <span>{book.ageGroup}</span>
                          </div>
                          <button
                            onClick={() => openBookDetails(book)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                          >
                            Details
                            <FaChevronRight className="text-xs" />
                          </button>
                        </div>

                        {/* Skills Tags */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {book.skills.slice(0, 2).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-md font-medium"
                              style={{
                                backgroundColor: `${book.color}15`,
                                color: book.color,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                          {book.skills.length > 2 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                              +{book.skills.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* List View - Fixed for pure image display */
              <div className="space-y-4">
                {filteredBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="flex flex-col md:flex-row">
                        {/* Book Image - Fixed */}
                        <div className="md:w-1/3">
                          <div className="relative h-64 md:h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                            <img
                              src={book.image}
                              alt={book.title}
                              className="w-full h-full object-contain p-2"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md"
                                style={{ backgroundColor: book.color }}>
                                {book.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Book Details */}
                        <div className="md:w-2/3 p-6">
                          <div className="flex flex-col h-full">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <div
                                    className="p-2 rounded-lg"
                                    style={{ backgroundColor: book.color + '20' }}
                                  >
                                    <div style={{ color: book.color }}>
                                      {book.icon}
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {book.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                      <span className="flex items-center gap-1">
                                        <FaBookOpen className="text-xs" />
                                        {book.gradeName}
                                      </span>
                                      <span>•</span>
                                      <span>{book.pages} pages</span>
                                      <span>•</span>
                                      <span>{book.ageGroup}</span>
                                    </div>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                  {book.description}
                                </p>
                              </div>
                            </div>

                            <div className="mt-auto">
                              <div className="flex flex-wrap gap-2 mb-4">
                                {book.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 text-xs rounded-full font-medium"
                                    style={{
                                      backgroundColor: `${book.color}15`,
                                      color: book.color,
                                      border: `1px solid ${book.color}30`
                                    }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                  <button
                                    onClick={() => openBookDetails(book)}
                                    className="px-4 py-2 rounded-lg font-medium text-white hover:shadow-md transition-all"
                                    style={{ backgroundColor: book.color }}
                                  >
                                    View Details
                                  </button>
                                  <button
                                    onClick={scrollToBookDemo}
                                    className="px-4 py-2 rounded-lg font-medium border-2 hover:bg-gray-50 transition-colors"
                                    style={{ 
                                      borderColor: book.color,
                                      color: book.color
                                    }}
                                  >
                                    Book Demo
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-5xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Grade-wise Accordion View */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Browse by Grade Level
            </h2>
            <p className="text-gray-600">Click on each grade to see all books</p>
          </div>

          <div className="space-y-4">
            {gradeBoxes.map((grade) => (
              <div key={grade.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleGrade(grade.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  style={expandedGrade === grade.id ? { backgroundColor: `${grade.color}08` } : {}}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: grade.color + '20' }}
                    >
                      <div style={{ color: grade.color }}>
                        {grade.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">{grade.name}</h3>
                      <p className="text-gray-600">{grade.description} • {grade.totalBooks} books</p>
                    </div>
                  </div>
                  <div style={{ color: grade.color }}>
                    {expandedGrade === grade.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedGrade === grade.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {booksByGrade[grade.id].map((book) => (
                          <div
                            key={book.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={() => openBookDetails(book)}
                          >
                            <div className="w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                              <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-full object-contain p-2"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 truncate">{book.title}</h4>
                              <p className="text-sm text-gray-600 truncate">{book.category}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs px-2 py-1 rounded-full font-medium"
                                  style={{
                                    backgroundColor: `${book.color}15`,
                                    color: book.color,
                                  }}>
                                  {book.pages} pages
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Book Details Modal - Fixed for pure image display */}
        {selectedBook && showBookDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={closeBookDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeBookDetails}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Left Column - Book Image - Fixed */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                    <div className="sticky top-8 w-full">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <img
                          src={selectedBook.image}
                          alt={selectedBook.title}
                          className="w-full h-full object-contain p-8"
                        />
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3 justify-center">
                        <div className="px-4 py-2 rounded-full bg-white shadow-md flex items-center gap-2">
                          <span className="font-semibold" style={{ color: selectedBook.color }}>
                            {selectedBook.pages} pages
                          </span>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white shadow-md flex items-center gap-2">
                          <span className="font-semibold text-gray-700">
                            {selectedBook.ageGroup}
                          </span>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white shadow-md flex items-center gap-2">
                          <span className="font-semibold text-gray-700">
                            {selectedBook.gradeName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Book Details */}
                  <div className="p-8 overflow-y-auto max-h-[90vh]">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: selectedBook.color + '20' }}
                          >
                            <div style={{ color: selectedBook.color }}>
                              {selectedBook.icon}
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full text-sm font-semibold"
                            style={{
                              backgroundColor: selectedBook.color + '20',
                              color: selectedBook.color,
                            }}>
                            {selectedBook.category}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                          {selectedBook.title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {selectedBook.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          Skills Developed
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedBook.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 rounded-lg font-medium"
                              style={{
                                backgroundColor: `${selectedBook.color}15`,
                                color: selectedBook.color,
                                border: `1px solid ${selectedBook.color}30`
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Grade Info */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          Program Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-600">Grade Level</div>
                            <div className="font-semibold text-gray-800">{selectedBook.gradeName}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Age Group</div>
                            <div className="font-semibold text-gray-800">{selectedBook.ageGroup}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Subject</div>
                            <div className="font-semibold text-gray-800">{selectedBook.category}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Book Pages</div>
                            <div className="font-semibold text-gray-800">{selectedBook.pages}</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <button
                          onClick={scrollToBookDemo}
                          className="flex-1 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                          style={{ backgroundColor: selectedBook.color }}
                        >
                          Book Demo Class
                        </button>
                        <button
                          onClick={closeBookDetails}
                          className="px-6 py-3 rounded-xl font-semibold border-2 hover:bg-gray-50 transition-colors"
                          style={{ 
                            borderColor: selectedBook.color,
                            color: selectedBook.color
                          }}
                        >
                          Back to Collection
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#0B234A] to-[#E22213] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{totalBooks}</div>
                <div className="text-white/80">Total Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{pnBooks}</div>
                <div className="text-white/80">P & N Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{lkgBooks}</div>
                <div className="text-white/80">LKG Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{ukgBooks}</div>
                <div className="text-white/80">UKG Books</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-white/90 text-lg">
                Complete early learning solution with books across all development stages
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div ref={bookDemoRef}>
        <BookFreeDemo />
      </div>
    </>
  );
};

export default EarlyLearningProgram;