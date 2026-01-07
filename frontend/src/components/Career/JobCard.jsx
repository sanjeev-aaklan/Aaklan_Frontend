// components/Career/JobCard.js
import React, { useState, memo, useCallback, useEffect } from 'react';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaEye,
  FaMoneyBillWave,
  FaStar,
  FaHeart,
  FaRegHeart,
  FaBuilding,
  FaTag,
  FaFire,
  FaCrown
} from 'react-icons/fa';
import { MdWork, MdLocationOn, MdAccessTime, MdDescription } from 'react-icons/md';

// Lazy load modal for better performance
const JobDetailsModal = React.lazy(() => import('./JobDetailsModal'));

// Custom hook for date formatting
const useFormattedDate = (dateString) => {
  return useCallback(() => {
    if (!dateString) return 'Recently';

    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      // Relative time formatting
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

      // Full date format
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  }, [dateString])();
};

// Custom hook for urgency check
const useIsUrgent = (jobPostedDate, isMarkedUrgent) => {
  const [isUrgent, setIsUrgent] = useState(isMarkedUrgent);

  useEffect(() => {
    if (!isMarkedUrgent && jobPostedDate) {
      try {
        const postedDate = new Date(jobPostedDate);
        const now = new Date();
        const diffHours = (now - postedDate) / (1000 * 60 * 60);
        setIsUrgent(diffHours <= 24);
      } catch (error) {
        setIsUrgent(false);
      }
    }
  }, [jobPostedDate, isMarkedUrgent]);

  return isUrgent;
};

// Skeleton Loader Component
export const JobCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 animate-pulse">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2 flex-1">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-8 bg-gray-200 rounded w-24"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>

      <div className="space-y-2 mb-5">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-gray-200 rounded w-16"></div>
        <div className="h-6 bg-gray-200 rounded w-16"></div>
        <div className="h-6 bg-gray-200 rounded w-16"></div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="h-6 bg-gray-300 rounded w-32"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <div className="flex-1 h-12 bg-gray-300 rounded-xl"></div>
        <div className="w-32 h-12 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  </div>
);

// Main JobCard Component
const JobCard = ({
  job,
  isSelected = false,
  onApplyClick,
  onSaveJob,
  isSaved = false,
  companyLogo,
  showCompanyLogo = true,
  className = '',
  index = 0 // For staggered animation
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formattedPostedDate = useFormattedDate(job.postedDate || job.posted);
  const isUrgent = useIsUrgent(job.postedDate, job.urgent);
  const isFeatured = job.featured;

  // Handle Apply from modal
  const handleApplyFromModal = useCallback(() => {
    setShowModal(false);
    if (onApplyClick) {
      onApplyClick(job);
    }
  }, [job, onApplyClick]);

  // Handle Save Job
  const handleSaveJob = useCallback(async (e) => {
    e.stopPropagation();
    if (isSaving || !onSaveJob) return;

    setIsSaving(true);
    try {
      await onSaveJob(job._id, !isSaved);
    } catch (error) {
      console.error('Error saving job:', error);
    } finally {
      setIsSaving(false);
    }
  }, [job._id, isSaved, isSaving, onSaveJob]);

  // Handle card click
  const handleCardClick = useCallback(() => {
    setShowModal(true);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowModal(true);
    }
  }, []);

  // Handle image error
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Animation delay based on index
  const animationDelay = `${index * 50}ms`;

  // Card classes
  const cardClasses = `
    bg-white rounded-xl shadow-lg border-2 
    transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-red-500
    ${isSelected ? 'border-orange-500 ring-2 ring-orange-200 shadow-xl' : 'border-gray-100'} 
    ${className}
    animate-fade-in-up
    w-full max-w-full overflow-hidden
    mx-0
  `.trim();

  return (
    <>
      <article
        className={cardClasses}
        style={{ animationDelay,maxWidth: '100%' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="article"
        aria-label={`Job opening for ${job.title} at ${job.location}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >

        <div className="p-4 sm:p-6 md:p-6">
          {/* Header with Company Info */}
          <header className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-start gap-3">
                {showCompanyLogo && companyLogo && !imageError && (
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <img
                        src={companyLogo}
                        alt={job.company || 'Company logo'}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* {showCompanyLogo && (!companyLogo || imageError) && (
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <FaBuilding className="text-gray-400 text-xl" />
                  </div>
                )} */}

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 truncate hover:text-orange-600 transition-colors cursor-pointer">
                    {job.title}
                  </h3>
                  {job.company && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">{job.company}</span>
                      {job.verified && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Save button */}
            <div className="flex flex-col items-end gap-2 ml-4">
              {onSaveJob && (
                <button
                  onClick={handleSaveJob}
                  disabled={isSaving}
                  aria-label={isSaved ? 'Remove from saved jobs' : 'Save this job'}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  title={isSaved ? 'Saved' : 'Save job'}
                >
                  {isSaving ? (
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
                  ) : isSaved ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-gray-400 text-lg hover:text-red-500" />
                  )}
                </button>
              )}
            </div>
          </header>

          {/* Job Info Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 whitespace-nowrap">
              <span className="font-semibold">{job.type}</span>
            </span>

            <span className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-100 whitespace-nowrap">
              <span className="font-semibold">{job.location}</span>
            </span>

            <span className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100 whitespace-nowrap">
              <span className="font-semibold">
                {job.experience || "Experience not specified"}
              </span>
            </span>

            <span className="flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100 whitespace-nowrap">
              <span className="font-semibold">{job.salary}</span>
            </span>
          </div>

          {/* Job Description Preview */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <MdDescription className="text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Description</span>
            </div>
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Skills/Tags */}
          {job.skills && job.skills.length > 0 && (
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <FaTag className="text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Skills Required</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 4 && (
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded-lg border border-gray-200">
                    +{job.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Footer with Date and Actions */}
          <footer className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500 flex items-center gap-2">
                <FaClock className="text-gray-400" />
                Posted {formattedPostedDate}
              </span>

              {job.applicationCount !== undefined && (
                <span className="text-sm text-gray-500">
                  {job.applicationCount} applications
                </span>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onApplyClick) onApplyClick(job);
                }}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={`Apply for ${job.title}`}
              >
                Apply Now
                <FaArrowRight className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                className="px-5 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label={`View details for ${job.title}`}
              >
                <FaEye />
                Details
              </button>
            </div>
          </footer>
        </div>
      </article>

      {/* Job Details Modal with Suspense */}
      {showModal && (
        <React.Suspense fallback={<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">Loading...</div>
        </div>}>
          <JobDetailsModal
            job={job}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onApply={handleApplyFromModal}
            companyLogo={companyLogo}
          />
        </React.Suspense>
      )}
    </>
  );
};

// Default props
JobCard.defaultProps = {
  isSelected: false,
  isSaved: false,
  showCompanyLogo: true,
  className: '',
  index: 0
};

// Memoize component
export default memo(JobCard);

// Export skeleton loader
JobCard.Skeleton = JobCardSkeleton;