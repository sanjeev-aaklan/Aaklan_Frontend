import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogService } from "../../services/blogService";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Eye,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Bookmark,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await blogService.getSingleBlog(slug);
        setBlog(res.data.data);

        // Fetch related blogs
        const relatedRes = await blogService.getAllBlogs({
          limit: 3,
          type: res.data.data.type,
          tag: res.data.data.tags?.[0]
        });
        setRelatedBlogs(relatedRes.data.data.filter(b => b.slug !== slug));
      } catch (error) {
        console.error(error);
        navigate('/blogs');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug, navigate]);

  const handleShare = async () => {
    const url = window.location.href;
    const title = blog?.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowShare(!showShare);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  // Lightbox Functions
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedImageIndex(prev =>
      prev === 0 ? blog.images.length - 1 : prev - 1
    );
    setZoomLevel(1);
  };

  const goToNext = () => {
    setSelectedImageIndex(prev =>
      prev === blog.images.length - 1 ? 0 : prev + 1
    );
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleDownload = () => {
    const imageUrl = blog.images[selectedImageIndex].url;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `blog-image-${selectedImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }

    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case '0':
          handleResetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImageIndex, zoomLevel]);

  // Close lightbox on outside click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Blog not found</h2>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Calculate reading time (approx 200 words per minute)
  const words = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  // Lightbox component
  const Lightbox = () => {
    if (!lightboxOpen || !blog.images || blog.images.length === 0) return null;

    const currentImage = blog.images[selectedImageIndex];

    return (
      <div
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        {/* Close button */}
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation buttons */}
        {blog.images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image container */}
        <div
          className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={currentImage.url}
              alt={currentImage.altText || `Gallery image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[70vh] object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? 'grab' : 'default'
              }}
              draggable={false}
            />

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
              <button
                onClick={handleZoomOut}
                className="text-white hover:text-gray-300 p-1"
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="w-5 h-5" />
              </button>

              <button
                onClick={handleResetZoom}
                className="text-white text-sm hover:text-gray-300 px-3 py-1"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                onClick={handleZoomIn}
                className="text-white hover:text-gray-300 p-1"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Image info and download */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white text-sm">
          <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {selectedImageIndex + 1} / {blog.images.length}
          </span>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm hover:bg-black/70 px-3 py-1 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>

        {/* Thumbnail strip */}
        {blog.images.length > 1 && (
          <div className="absolute bottom-20 left-0 right-0 px-4">
            <div className="flex justify-center gap-2 overflow-x-auto py-2">
              {blog.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setZoomLevel(1);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${selectedImageIndex === index ? 'border-white' : 'border-transparent'}`}
                >
                  <img
                    src={img.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Lightbox */}
      <Lightbox />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0b234a]/5 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#E22213]/5 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Navigation */}
          <div className="mb-8" data-aos="fade-right">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0b234a] group transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
          </div>

          {/* Hero Section */}
          <div className="mb-12" data-aos="fade-up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-[#0b234a]/10 to-[#E22213]/10 text-[#0b234a] rounded-full font-semibold">
                  {blog.type}
                </span>
                <span className="text-sm text-gray-500">
                  Published {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">

                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>

                  {showShare && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 p-3 z-10 animate-scale-in">
                      <div className="flex items-center gap-3">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-50 text-blue-400 hover:bg-blue-100 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <button
                          onClick={copyToClipboard}
                          className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
                        >
                          Copy Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0b234a] via-[#1e429f] to-[#E22213]">
              {blog.title}
            </h1>
          </div>

          {/* Cover Image */}
          {blog.coverImage?.url && (
            <div
              className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={blog.coverImage.url}
                alt={blog.coverImage.altText}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <button
                onClick={() => {
                  setSelectedImageIndex(0);
                  setLightboxOpen(true);
                }}
                className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-12">
            <div className="">
              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="mb-8" data-aos="fade-right">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-600">Topics:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm hover:from-[#0b234a]/10 hover:to-[#E22213]/10 transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              <article
                className="prose max-w-none"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div
                  className="
      text-gray-700 leading-relaxed space-y-6

      /* Paragraph */
      prose-p:text-base
      prose-p:leading-7

      /* Headings */
      prose-h1:text-4xl
      prose-h2:text-3xl
      prose-h3:text-2xl
      prose-h4:text-xl
      prose-h1:font-bold
      prose-h2:font-semibold
      prose-h3:font-semibold
    "
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </article>


              {/* Gallery */}
              {blog.images?.length > 0 && (
                <div className="mt-12" data-aos="fade-up">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Gallery</h3>
                    <span className="text-sm text-gray-500">
                      {blog.images.length} images
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blog.images.map((img, index) => (
                      <div
                        key={index}
                        className="relative rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={img.url}
                          alt={img.altText || `Gallery image ${index + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                        {/* Image number badge */}
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gallery hint */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Click on any image to view in full screen
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
        
        /* Smooth image zoom */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        
        /* Hide scrollbar for thumbnail strip */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        
        /* Mobile touch improvements */
        @media (max-width: 640px) {
          .lightbox-image {
            touch-action: pan-x pan-y;
          }
        }
      `}</style>
    </>
  );
};

export default BlogDetail;