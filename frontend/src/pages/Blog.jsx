// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import BookFreeDemo from '../components/BookFreeDemo.jsx';

// const Blog = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 py-8 px-4">
//         <div className="max-w-7xl mx-auto">
          // {/* Animated Background Elements */}
          // <div className="absolute inset-0 overflow-hidden">
          //   {/* Floating Circles */}
          //   <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          //   <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          //   <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          //   {/* Grid Pattern */}
          //   <div className="absolute inset-0 opacity-5">
          //     <div className="absolute inset-0" style={{
          //       backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
          //                     linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
          //       backgroundSize: '30px 30px',
          //     }}></div>
          //   </div>

          //   {/* Animated Gradient Orbs */}
          //   <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          //   <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          // </div>
//         </div>
//       </div>

//       <BookFreeDemo />
//     </>
//   );
// };

// export default Blog;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { blogService } from "../services/blogService.js";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import BookFreeDemo from '../components/BookFreeDemo.jsx';
// import { Search, Filter, Calendar, User, Tag, ChevronRight, Loader2 } from 'lucide-react';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");
//   const [types, setTypes] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   const fetchBlogs = async (pageNumber = 1) => {
//     try {
//       setLoading(true);
//       const params = {
//         page: pageNumber,
//         limit: 9,
//         search: searchTerm,
//         type: selectedType,
//         tag: selectedTag
//       };

//       const res = await blogService.getAllBlogs(params);
//       setBlogs(res.data.data);
//       setPages(res.data.pages);
//       setPage(res.data.page);

//       // Extract unique types and tags
//       const uniqueTypes = [...new Set(res.data.data.map(blog => blog.type))];
//       const allTags = res.data.data.flatMap(blog => blog.tags || []);
//       const uniqueTags = [...new Set(allTags)];
      
//       setTypes(uniqueTypes);
//       setTags(uniqueTags);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs(1);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchBlogs(1);
//   };

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedType("");
//     setSelectedTag("");
//     fetchBlogs(1);
//   };

//   return (
//     <>
//       {/* Animated Background */}
//       <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Floating Circles */}
//           <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//           <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

//           {/* Grid Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
//                             linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
//               backgroundSize: '30px 30px',
//             }}></div>
//           </div>

//           {/* Animated Gradient Orbs */}
//           <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
//           <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
//         </div>

//         {/* Main Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Hero Section */}
//           <div className="text-center mb-16" data-aos="fade-up">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0b234a] to-[#E22213]">
//               Insights & Stories
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover expert articles, latest trends, and valuable insights from our team
//             </p>
//           </div>

//           {/* Search and Filters Section */}
//           <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
//               {/* Search Bar */}
//               <form onSubmit={handleSearch} className="mb-6">
//                 <div className="relative">
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search articles, topics, or keywords..."
//                     className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
//                   />
//                   <button
//                     type="submit"
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>

//               {/* Filters */}
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => setIsFilterOpen(!isFilterOpen)}
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
//                   >
//                     <Filter className="w-4 h-4" />
//                     Filters
//                   </button>
                  
//                   {(selectedType || selectedTag || searchTerm) && (
//                     <button
//                       onClick={clearFilters}
//                       className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
//                     >
//                       Clear all
//                     </button>
//                   )}
//                 </div>

//                 {/* Active Filters Display */}
//                 <div className="flex flex-wrap gap-2">
//                   {selectedType && (
//                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
//                       Type: {selectedType}
//                     </span>
//                   )}
//                   {selectedTag && (
//                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
//                       Tag: {selectedTag}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Expanded Filters */}
//               {isFilterOpen && (
//                 <div className="mt-6 pt-6 border-t border-gray-200 animate-slide-up">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Type Filter */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Filter by Type
//                       </label>
//                       <div className="flex flex-wrap gap-2">
//                         <button
//                           onClick={() => setSelectedType("")}
//                           className={`px-4 py-2 rounded-full text-sm transition-all ${!selectedType ? 'bg-[#0b234a] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//                         >
//                           All Types
//                         </button>
//                         {types.map((type) => (
//                           <button
//                             key={type}
//                             onClick={() => setSelectedType(type)}
//                             className={`px-4 py-2 rounded-full text-sm transition-all ${selectedType === type ? 'bg-[#E22213] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Tag Filter */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Filter by Tags
//                       </label>
//                       <div className="flex flex-wrap gap-2">
//                         {tags.slice(0, 8).map((tag) => (
//                           <button
//                             key={tag}
//                             onClick={() => setSelectedTag(tag)}
//                             className={`px-3 py-1 rounded-full text-xs transition-all ${selectedTag === tag ? 'bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//                           >
//                             <Tag className="inline w-3 h-3 mr-1" />
//                             {tag}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Loading Skeleton */}
//           {loading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
//                   <div className="h-48 bg-gray-200 shimmer"></div>
//                   <div className="p-6">
//                     <div className="h-6 bg-gray-200 rounded mb-4 shimmer"></div>
//                     <div className="h-4 bg-gray-200 rounded mb-2 shimmer"></div>
//                     <div className="h-4 bg-gray-200 rounded mb-2 shimmer"></div>
//                     <div className="h-4 bg-gray-200 rounded mb-6 shimmer"></div>
//                     <div className="h-10 bg-gray-200 rounded shimmer"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <>
//               {/* Blog Grid */}
//               {blogs.length === 0 ? (
//                 <div className="text-center py-20" data-aos="fade-up">
//                   <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
//                     <Search className="w-12 h-12 text-gray-400" />
//                   </div>
//                   <h3 className="text-2xl font-semibold text-gray-700 mb-3">No blogs found</h3>
//                   <p className="text-gray-500 mb-8">Try adjusting your search or filters</p>
//                   <button
//                     onClick={clearFilters}
//                     className="px-6 py-3 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     Clear filters
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {blogs.map((blog, index) => (
//                       <div
//                         key={blog._id}
//                         data-aos="fade-up"
//                         data-aos-delay={index * 100}
//                         className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
//                       >
//                         {/* Image Container with Overlay */}
//                         <div className="relative h-56 overflow-hidden">
//                           {blog.coverImage?.url ? (
//                             <img
//                               src={blog.coverImage.url}
//                               alt={blog.coverImage.altText}
//                               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                             />
//                           ) : (
//                             <div className="w-full h-full bg-gradient-to-br from-[#0b234a] to-[#E22213]"></div>
//                           )}
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                           {/* Category Badge */}
//                           <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700">
//                             {blog.type}
//                           </span>
//                         </div>

//                         {/* Content */}
//                         <div className="p-6">
//                           {/* Meta Information */}
//                           <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//                             <span className="flex items-center gap-1">
//                               <Calendar className="w-4 h-4" />
//                               {new Date(blog.publishedAt).toLocaleDateString('en-US', {
//                                 month: 'short',
//                                 day: 'numeric',
//                                 year: 'numeric'
//                               })}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <User className="w-4 h-4" />
//                               {blog.author?.name || 'Admin'}
//                             </span>
//                           </div>

//                           {/* Title */}
//                           <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#E22213] transition-colors">
//                             {blog.title}
//                           </h3>

//                           {/* Short Description */}
//                           <p className="text-gray-600 mb-6 line-clamp-3">
//                             {blog.shortDescription}
//                           </p>

//                           {/* Tags */}
//                           <div className="flex flex-wrap gap-2 mb-6">
//                             {blog.tags?.slice(0, 3).map((tag, idx) => (
//                               <span
//                                 key={idx}
//                                 className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
//                               >
//                                 #{tag}
//                               </span>
//                             ))}
//                           </div>

//                           {/* Read More Button */}
//                           <Link
//                             to={`/blog/${blog.slug}`}
//                             className="inline-flex items-center gap-2 text-[#0b234a] font-semibold group-hover:text-[#E22213] transition-colors"
//                           >
//                             Read Article
//                             <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                           </Link>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Pagination */}
//                   <div className="mt-16" data-aos="fade-up">
//                     <div className="flex items-center justify-between">
//                       <button
//                         disabled={page === 1}
//                         onClick={() => fetchBlogs(page - 1)}
//                         className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:scale-105'}`}
//                       >
//                         <ChevronRight className="w-4 h-4 rotate-180" />
//                         Previous
//                       </button>

//                       <div className="flex items-center gap-2">
//                         {Array.from({ length: Math.min(5, pages) }, (_, i) => {
//                           let pageNum;
//                           if (pages <= 5) {
//                             pageNum = i + 1;
//                           } else if (page <= 3) {
//                             pageNum = i + 1;
//                           } else if (page >= pages - 2) {
//                             pageNum = pages - 4 + i;
//                           } else {
//                             pageNum = page - 2 + i;
//                           }

//                           return (
//                             <button
//                               key={pageNum}
//                               onClick={() => fetchBlogs(pageNum)}
//                               className={`w-10 h-10 rounded-lg transition-all ${page === pageNum ? 'bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white' : 'hover:bg-gray-100'}`}
//                             >
//                               {pageNum}
//                             </button>
//                           );
//                         })}
//                         {pages > 5 && (
//                           <span className="px-2">...</span>
//                         )}
//                       </div>

//                       <button
//                         disabled={page === pages}
//                         onClick={() => fetchBlogs(page + 1)}
//                         className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${page === pages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:scale-105'}`}
//                       >
//                         Next
//                         <ChevronRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </>
//           )}
//         </div>
//       </div>



//       <BookFreeDemo />
//     </>
//   );
// };

// export default Blog;



import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { blogService } from "../services/blogService.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookFreeDemo from '../components/BookFreeDemo.jsx';
import { Search, Filter, Calendar, User, Tag, ChevronRight, X, Clock, Eye, ArrowRight, BookOpen } from 'lucide-react';
import { debounce } from "lodash";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [types, setTypes] = useState([]);
  const [tags, setTags] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const fetchBlogs = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const params = {
        page: pageNumber,
        limit: 6,
        search: searchTerm,
        type: selectedType,
        tag: selectedTag
      };

      const res = await blogService.getAllBlogs(params);
      setBlogs(res.data.data);
      setPages(res.data.pages);
      setPage(res.data.page);

      // Extract unique types and tags
      const uniqueTypes = [...new Set(res.data.data.map(blog => blog.type))];
      const allTags = res.data.data.flatMap(blog => blog.tags || []);
      const uniqueTags = [...new Set(allTags)];
      
      setTypes(uniqueTypes);
      setTags(uniqueTags);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search
  const debouncedSearch = useCallback(
    debounce(() => {
      fetchBlogs(1);
    }, 500),
    [searchTerm, selectedType, selectedTag]
  );

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  useEffect(() => {
    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [searchTerm, selectedType, selectedTag, debouncedSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("");
    setSelectedTag("");
  };


  return (
    <>
      {/* Animated Background */}
      <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/50 overflow-hidden">
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

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0b234a]/10 to-[#E22213]/10 mb-6">
              <BookOpen className="w-4 h-4 text-[#0b234a]" />
              <span className="text-sm font-medium text-[#0b234a]">Latest Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0b234a] via-[#0b234a] to-[#E22213]">
                Explore Our Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive into expert articles, industry insights, and valuable resources curated by our team
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 lg:mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search articles, topics, keywords..."
                      className="block w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      >
                        <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <Filter className="w-4 h-4" />
                    <span className="font-medium">Filters</span>
                  </button>

                  {(selectedType || selectedTag || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white hover:shadow-lg transition-all duration-300"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedType || selectedTag) && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">Active filters:</span>
                    {selectedType && (
                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                        <span className="text-sm text-blue-700">{selectedType}</span>
                        <button onClick={() => setSelectedType("")}>
                          <X className="w-3 h-3 text-blue-500 hover:text-blue-700" />
                        </button>
                      </div>
                    )}
                    {selectedTag && (
                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                        <Tag className="w-3 h-3 text-green-500" />
                        <span className="text-sm text-green-700">{selectedTag}</span>
                        <button onClick={() => setSelectedTag("")}>
                          <X className="w-3 h-3 text-green-500 hover:text-green-700" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Expanded Filters */}
              {isFilterOpen && (
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-6 animate-slide-down">
                  {/* Type Filter */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedType("")}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${!selectedType ? 'bg-gradient-to-r from-[#0b234a] to-[#0b234a] text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        All Categories
                      </button>
                      {types.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${selectedType === type ? 'bg-gradient-to-r from-[#E22213] to-[#E22213]/90 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tag Filter */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 10).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${selectedTag === tag ? 'bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mb-12 lg:mb-16">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-16 lg:py-24 bg-white rounded-2xl shadow-lg border border-gray-100" data-aos="fade-up">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No articles found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {blogs.map((blog, index) => (
                    <article
                      key={blog._id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0b234a] via-[#E22213] to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                      
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden rounded-t-2xl">
                        {blog.coverImage?.url ? (
                          <img
                            src={blog.coverImage.url}
                            alt={blog.coverImage.altText || blog.title}
                            className="w-full h-full object-container group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#0b234a] via-[#0b234a]/80 to-[#E22213]"></div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                       
                      </div>

                      {/* Content */}
                      <div className="relative p-6">
                        {/* Meta Information */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={blog.publishedAt}>
                                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </time>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{blog.author?.name || 'Team'}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0b234a] transition-colors duration-300 leading-tight">
                          {blog.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                          {blog.shortDescription}
                        </p>

                       

                        {/* Read More Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <Link
                            to={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-[#0b234a] font-semibold hover:text-[#E22213] transition-colors duration-300 group/btn"
                          >
                            Read Full Article
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0b234a] to-[#E22213] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {pages > 1 && (
                  <div className="mt-12 lg:mt-16" data-aos="fade-up">
                    <nav className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => fetchBlogs(page - 1)}
                        disabled={page === 1}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${page === 1 ? 'opacity-50 cursor-not-allowed border-gray-200 text-gray-400' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700'}`}
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" />
                        <span className="font-medium">Previous</span>
                      </button>

                      <div className="flex items-center space-x-1">
                        {Array.from({ length: Math.min(5, pages) }, (_, i) => {
                          let pageNum;
                          if (pages <= 5) {
                            pageNum = i + 1;
                          } else if (page <= 3) {
                            pageNum = i + 1;
                          } else if (page >= pages - 2) {
                            pageNum = pages - 4 + i;
                          } else {
                            pageNum = page - 2 + i;
                          }

                          return (
                            <button
                              key={pageNum}
                              onClick={() => fetchBlogs(pageNum)}
                              className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${page === pageNum ? 'bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        
                        {pages > 5 && page < pages - 2 && (
                          <>
                            <span className="px-2 text-gray-400">...</span>
                            <button
                              onClick={() => fetchBlogs(pages)}
                              className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${page === pages ? 'bg-gradient-to-r from-[#0b234a] to-[#E22213] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                              {pages}
                            </button>
                          </>
                        )}
                      </div>

                      <button
                        onClick={() => fetchBlogs(page + 1)}
                        disabled={page === pages}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${page === pages ? 'opacity-50 cursor-not-allowed border-gray-200 text-gray-400' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700'}`}
                      >
                        <span className="font-medium">Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </nav>
                    
                    {/* Page Info */}
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600">
                        Page <span className="font-semibold text-[#0b234a]">{page}</span> of{" "}
                        <span className="font-semibold text-[#0b234a]">{pages}</span>
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </div>

      {/* Add these styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <BookFreeDemo />
    </>
  );
};

export default Blog;
