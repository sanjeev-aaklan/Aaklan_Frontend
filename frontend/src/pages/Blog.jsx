import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Heart,
  MessageCircle,
  BookOpen,
  Tag,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark
} from 'lucide-react';
import BookFreeDemo from '../components/BookFreeDemo';

const blogImage1 = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage2 = "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage3 = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
const blogImage4 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'education', label: 'Education' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Education",
      excerpt: "Discover how artificial intelligence is revolutionizing the education sector and creating personalized learning paths.",
      image: blogImage1,
      category: 'ai-ml',
      author: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      likes: 124,
      comments: 42,
      tags: ["AI", "Education", "Future Tech"],
      featured: true
    },
    {
      id: 2,
      title: "Getting Started with Robotics",
      excerpt: "Learn the fundamentals of robotics programming and build your first robot.",
      image: blogImage2,
      category: 'robotics',
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      likes: 98,
      comments: 31,
      tags: ["Robotics", "Beginners"],
      featured: true
    },
    {
      id: 3,
      title: "IoT Projects for Smart Classrooms",
      excerpt: "Explore innovative IoT applications that are making classrooms smarter.",
      image: blogImage3,
      category: 'iot',
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      likes: 76,
      comments: 25,
      tags: ["IoT", "Smart Classroom"]
    },
    {
      id: 4,
      title: "Mastering Python for Educational Tools",
      excerpt: "Guide to using Python for creating educational software.",
      image: blogImage4,
      category: 'coding',
      author: "David Wilson",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      likes: 112,
      comments: 38,
      tags: ["Python", "Programming"]
    },
    {
      id: 5,
      title: "Personalizing Education with Machine Learning",
      excerpt: "Deep dive into ML algorithms that adapt content delivery.",
      image: blogImage1,
      category: 'ai-ml',
      author: "Prof. James Miller",
      date: "Dec 5, 2024",
      readTime: "14 min read",
      likes: 89,
      comments: 29,
      tags: ["Machine Learning", "EdTech"]
    },
    {
      id: 6,
      title: "Building Your First Arduino Project",
      excerpt: "Step-by-step tutorial for beginners to create Arduino projects.",
      image: blogImage2,
      category: 'iot',
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      likes: 67,
      comments: 22,
      tags: ["Arduino", "DIY"]
    },
    {
      id: 7,
      title: "Gamification in Modern Education",
      excerpt: "How game elements are boosting student engagement.",
      image: blogImage3,
      category: 'education',
      author: "Robert Taylor",
      date: "Nov 30, 2024",
      readTime: "9 min read",
      likes: 81,
      comments: 27,
      tags: ["Gamification", "Learning"]
    },
    {
      id: 8,
      title: "Interactive STEM Content Development",
      excerpt: "Learn to build interactive STEM educational content.",
      image: blogImage4,
      category: 'coding',
      author: "Alex Turner",
      date: "Nov 28, 2024",
      readTime: "13 min read",
      likes: 72,
      comments: 24,
      tags: ["Web Development", "STEM"]
    },
    {
      id: 9,
      title: "Evolution of Online Learning Platforms",
      excerpt: "A look at how online learning platforms have evolved.",
      image: blogImage1,
      category: 'education',
      author: "Dr. Maria Garcia",
      date: "Nov 25, 2024",
      readTime: "16 min read",
      likes: 105,
      comments: 35,
      tags: ["Online Learning", "Trends"],
      featured: true
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'all' || post.category === activeCategory
  );

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

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
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
          {/* Hero Section */}
          <section className="mb-12 py-8 text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-900">Aaklan</span>
              <span className="text-orange-500"> Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the world of educational technology
            </p>
          </section>

          {/* Categories */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="text-gray-500 text-sm">
                            <Calendar className="inline w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                              {post.author.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-700">{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          <section data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`bg-white/90 p-2 rounded-full hover:scale-110 transition-all duration-300 ${
                          likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-600'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill={likedPosts.has(post.id) ? 'red' : 'none'} />
                      </button>
                      <button
                        onClick={() => handleBookmark(post.id)}
                        className={`bg-white/90 p-2 rounded-full hover:scale-110 transition-all duration-300 ${
                          bookmarkedPosts.has(post.id) ? 'text-yellow-500' : 'text-gray-600'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" fill={bookmarkedPosts.has(post.id) ? 'yellow' : 'none'} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors duration-300">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-900 transition-colors duration-300">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs">{post.comments}</span>
                          </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-blue-900 text-white'
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      <BookFreeDemo />
    </>
  );
};

export default Blog;