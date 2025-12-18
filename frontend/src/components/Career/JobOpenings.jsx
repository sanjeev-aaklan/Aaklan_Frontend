// components/Career/JobOpenings.js
import React, { useState, useEffect } from 'react';
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaGraduationCap, FaRocket, FaUsers, FaFilter, FaSync } from 'react-icons/fa';
import axios from 'axios';
import JobCategoryFilter from './JobCategoryFilter';
import JobCard from './JobCard';

const JobOpenings = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  setSearchTerm,
  selectedJob,
  onApplyClick
}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const jobCategories = [
    { id: 'all', name: 'All Roles', icon: FaBriefcase, color: 'from-blue-500 to-cyan-500' },
    { id: 'teaching', name: 'Teaching', icon: FaGraduationCap, color: 'from-emerald-500 to-green-500' },
    { id: 'tech', name: 'Technology', icon: FaRocket, color: 'from-purple-500 to-pink-500' },
    { id: 'operations', name: 'Operations', icon: FaUsers, color: 'from-orange-500 to-red-500' },
    { id: 'marketing', name: 'Marketing', icon: FaUsers, color: 'from-indigo-500 to-blue-500' },
    { id: 'sales', name: 'Sales', icon: FaUsers, color: 'from-amber-500 to-yellow-500' },
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError('');
      setRefreshing(true);
      
      const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await axios.get(`${API_BASE_URL}/api/jobs`);
      
      if (response.data.success) {
        setJobs(response.data.jobs);
      } else {
        setError('Failed to load jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to load jobs. Please try again later.');
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Update categories with actual counts from backend
  const categoriesWithCounts = jobCategories.map(category => {
    if (category.id === 'all') {
      return { ...category, count: jobs.length };
    }
    const count = jobs.filter(job => job.category === category.id).length;
    return { ...category, count };
  });

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.category === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Current Openings
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Exploring opportunities to join our mission-driven team
            </p>
          </div>
          
          {/* Skeleton Loader */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg animate-pulse">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Current Openings
            </h2>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-red-200/50 shadow-lg">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <FaSearch className="text-3xl text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">Failed to Load Jobs</h3>
            <p className="text-red-500/80 mb-6 text-lg">{error}</p>
            <button
              onClick={fetchJobs}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-amber-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#f8fafc 1px, transparent 1px),
                      linear-gradient(90deg, #f8fafc 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-amber-500 to-rose-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Current Openings
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Join our passionate team and help shape the future of education
          </p>
          {jobs.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-slate-700 font-medium">
                {jobs.length} position{jobs.length !== 1 ? 's' : ''} available
              </span>
            </div>
          )}
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
                  <input
                    type="text"
                    placeholder="Search by job title, description, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Refresh Button */}
              <button 
                onClick={fetchJobs}
                disabled={refreshing}
                className="flex items-center gap-3 px-6 py-4 bg-slate-700 text-white rounded-xl hover:bg-slate-800 disabled:opacity-50 transition-all duration-300 font-semibold shadow-lg"
              >
                <FaSync className={`text-sm ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || activeCategory !== 'all') && (
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <span className="text-slate-500 text-sm font-medium">Active filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Search: "{searchTerm}"
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {activeCategory !== 'all' && (
                  <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Category: {jobCategories.find(cat => cat.id === activeCategory)?.name}
                    <button 
                      onClick={() => setActiveCategory('all')}
                      className="hover:text-purple-900"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <JobCategoryFilter
            categories={categoriesWithCounts}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                isSelected={selectedJob?._id === job._id}
                onApplyClick={onApplyClick}
              />
            ))}
          </div>
        ) : jobs.length > 0 ? (
          // No search results
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <FaSearch className="text-3xl text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-3">No matching positions found</h3>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
              We couldn't find any jobs matching your criteria. Try adjusting your search or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-800 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          // No jobs available
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
              <FaBriefcase className="text-3xl text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-3">No Current Openings</h3>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
              We don't have any open positions at the moment, but check back soon for new opportunities!
            </p>
            <button
              onClick={fetchJobs}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Check Again
            </button>
          </div>
        )}

        {/* Call to Action */}
        {jobs.length > 0 && (
          <div className="text-center mt-16 pt-8 border-t border-slate-200/50">
            <p className="text-slate-600 text-lg mb-6">
              Don't see the perfect role? We're always looking for talented people!
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Send General Application
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;