import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Calendar,
  User,
  Clock,
  Tag,
  ArrowRight,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Search,
  Filter,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Eye,
  Bookmark,
  TrendingUp,
  Star,
  ChevronLeft
} from 'lucide-react';
import BookFreeDemo from '../components/BookFreeDemo';

const blogImage1 = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage2 = "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage3 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage4 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80";
const blogImage5 = "https://images.unsplash.com/photo-1524178239883-269a632bb546?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80";
const blogImage6 = "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";

const featuredPostImage = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'coding', label: 'Coding' },
    { id: 'iot', label: 'IoT' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'education', label: 'Education' },
    { id: 'tech', label: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Education: Transforming Learning Experiences",
      excerpt: "Discover how artificial intelligence is revolutionizing the education sector and creating personalized learning paths for students worldwide.",
      image: blogImage1,
      category: 'ai-ml',
      author: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "2.4k",
      likes: 124,
      comments: 42,
      tags: ["AI", "Education", "Future Tech"],
      featured: true
    },
    {
      id: 2,
      title: "Getting Started with Robotics: A Complete Beginner's Guide",
      excerpt: "Learn the fundamentals of robotics programming, essential tools, and step-by-step guide to build your first robot.",
      image: blogImage2,
      category: 'robotics',
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      views: "1.8k",
      likes: 98,
      comments: 31,
      tags: ["Robotics", "Beginners", "Tutorial"],
      featured: true
    },
    {
      id: 3,
      title: "IoT Projects for Smart Classrooms: Enhancing Learning Environments",
      excerpt: "Explore innovative IoT applications that are making classrooms smarter, more interactive, and efficient.",
      image: blogImage3,
      category: 'iot',
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      views: "1.5k",
      likes: 76,
      comments: 25,
      tags: ["IoT", "Smart Classroom", "Innovation"]
    },
    {
      id: 4,
      title: "Mastering Python for Educational Tools Development",
      excerpt: "Comprehensive guide to using Python for creating educational software and interactive learning applications.",
      image: blogImage4,
      category: 'coding',
      author: "David Wilson",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      views: "2.1k",
      likes: 112,
      comments: 38,
      tags: ["Python", "Programming", "Education"]
    },
    {
      id: 5,
      title: "How Machine Learning is Personalizing Education",
      excerpt: "Deep dive into ML algorithms that adapt content delivery based on individual student performance and learning styles.",
      image: blogImage5,
      category: 'ai-ml',
      author: "Prof. James Miller",
      date: "Dec 5, 2024",
      readTime: "14 min read",
      views: "1.9k",
      likes: 89,
      comments: 29,
      tags: ["Machine Learning", "Personalization", "EdTech"]
    },
    {
      id: 6,
      title: "Building Your First Arduino Project: From Concept to Reality",
      excerpt: "Step-by-step tutorial for beginners to create their first Arduino-based electronics project.",
      image: blogImage6,
      category: 'iot',
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      views: "1.3k",
      likes: 67,
      comments: 22,
      tags: ["Arduino", "Electronics", "DIY"]
    },
    {
      id: 7,
      title: "The Impact of Gamification in Modern Education",
      excerpt: "How game elements are boosting student engagement and improving learning outcomes in digital classrooms.",
      image: blogImage1,
      category: 'education',
      author: "Robert Taylor",
      date: "Nov 30, 2024",
      readTime: "9 min read",
      views: "1.6k",
      likes: 81,
      comments: 27,
      tags: ["Gamification", "Engagement", "Learning"]
    },
    {
      id: 8,
      title: "Creating Interactive STEM Content with Modern Web Technologies",
      excerpt: "Learn how to use JavaScript frameworks to build interactive STEM educational content for the web.",
      image: blogImage2,
      category: 'coding',
      author: "Alex Turner",
      date: "Nov 28, 2024",
      readTime: "13 min read",
      views: "1.4k",
      likes: 72,
      comments: 24,
      tags: ["Web Development", "STEM", "Interactive"]
    },
    {
      id: 9,
      title: "The Evolution of Online Learning Platforms: Past, Present, Future",
      excerpt: "A comprehensive look at how online learning platforms have evolved and where they're headed next.",
      image: blogImage3,
      category: 'education',
      author: "Dr. Maria Garcia",
      date: "Nov 25, 2024",
      readTime: "16 min read",
      views: "2.3k",
      likes: 105,
      comments: 35,
      tags: ["Online Learning", "Future", "Trends"],
      featured: true
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const handleBookmark = (postId) => {
    const newBookmarkedPosts = new Set(bookmarkedPosts);
    if (newBookmarkedPosts.has(postId)) {
      newBookmarkedPosts.delete(postId);
    } else {
      newBookmarkedPosts.add(postId);
    }
    setBookmarkedPosts(newBookmarkedPosts);
  };

  const popularTags = ["AI", "Robotics", "Education", "Programming", "IoT", "Machine Learning", "STEM", "EdTech"];

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
          <section className="mb-12 py-8" data-aos="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
                  Aaklan
                </span>{" "}
                <span className="text-gray-900">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Insights, tutorials, and updates from the forefront of educational technology, 
                robotics, coding, and AI-powered learning.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, and insights..."
                    className="w-full px-6 py-4 pl-14 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:shadow-lg focus:border-[#E22213] focus:outline-none transition-all duration-300 text-gray-700"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#E22213] to-orange-500 text-white px-6 py-2 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Navigation */}
          <nav className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-md'
                      : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Star className="w-6 h-6 text-orange-500" />
                Featured Stories
                <TrendingUp className="w-5 h-5 text-[#E22213]" />
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                      index === 0 ? 'lg:col-span-2' : ''
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className={`flex flex-col ${index === 0 ? 'lg:flex-row' : ''}`}>
                      <div className={`relative ${index === 0 ? 'lg:w-1/2' : 'h-48'}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-[#0b234a] to-[#E22213] flex items-center justify-center">
                                <div class="text-center p-8">
                                  <BookOpen class="w-12 h-12 text-white mx-auto mb-4" />
                                  <h3 class="text-xl font-bold text-white">${post.title}</h3>
                                </div>
                              </div>
                            `;
                          }}
                        />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#E22213] to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      </div>
                      <div className={`p-6 ${index === 0 ? 'lg:w-1/2 lg:p-8' : ''}`}>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="bg-[#0b234a]/10 text-[#0b234a] px-3 py-1 rounded-full text-sm font-medium">
                            {post.category.toUpperCase()}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-[#E22213] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                              {post.author.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-700">{post.author}</span>
                          </div>
                          <button className="flex items-center gap-2 text-[#0b234a] font-semibold hover:text-[#E22213] transition-colors duration-300">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Grid */}
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`bg-white/90 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-all duration-300 ${
                            likedPosts.has(post.id) ? 'text-[#E22213]' : 'text-gray-600'
                          }`}
                        >
                          <Heart className="w-4 h-4" fill={likedPosts.has(post.id) ? '#E22213' : 'none'} />
                        </button>
                        <button
                          onClick={() => handleBookmark(post.id)}
                          className={`bg-white/90 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-all duration-300 ${
                            bookmarkedPosts.has(post.id) ? 'text-orange-500' : 'text-gray-600'
                          }`}
                        >
                          <Bookmark className="w-4 h-4" fill={bookmarkedPosts.has(post.id) ? 'orange' : 'none'} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gradient-to-r from-[#E22213]/10 to-orange-500/10 text-[#E22213] px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#E22213] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-[#E22213] transition-colors duration-300">
                              <Heart className="w-4 h-4" />
                              <span className="text-xs">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-500 hover:text-[#0b234a] transition-colors duration-300">
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-xs">{post.comments}</span>
                            </button>
                          </div>
                          <button className="text-[#0b234a] hover:text-[#E22213] transition-colors duration-300">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === index + 1
                          ? 'bg-gradient-to-r from-[#E22213] to-orange-500 text-white shadow-md'
                          : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <BookFreeDemo />
    </>
  );
};

export default Blog;