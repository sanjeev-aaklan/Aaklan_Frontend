// components/Career/JobCard.js
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

// Helper function to format date in IST
const formatDateInIST = (dateString) => {
  if (!dateString) return 'Recently';
  
  try {
    const date = new Date(dateString);
    // Convert to IST (UTC+5:30)
    const options = {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    
    const formatter = new Intl.DateTimeFormat('en-IN', options);
    const parts = formatter.formatToParts(date);
    
    let day, month, year, hour, minute, dayPeriod;
    parts.forEach(part => {
      switch(part.type) {
        case 'day': day = part.value; break;
        case 'month': month = part.value; break;
        case 'year': year = part.value; break;
        case 'hour': hour = part.value; break;
        case 'minute': minute = part.value; break;
        case 'dayPeriod': dayPeriod = part.value; break;
        default: break;
      }
    });
    
    return `${day} ${month} ${year} at ${hour}:${minute} ${dayPeriod}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// Optional: Check if job is urgent based on IST time
const isJobUrgent = (jobPostedDate) => {
  if (!jobPostedDate) return false;
  
  try {
    const postedDate = new Date(jobPostedDate);
    const now = new Date();
    
    // Convert both to IST
    const istOffset = 5.5 * 60 * 60 * 1000; 
    const postedIST = new Date(postedDate.getTime() + istOffset);
    const nowIST = new Date(now.getTime() + istOffset);
    
    // Calculate difference in hours
    const diffHours = (nowIST - postedIST) / (1000 * 60 * 60);
    
    // Mark as urgent if posted within last 24 hours
    return diffHours <= 24;
  } catch (error) {
    return false;
  }
};

const JobCard = ({ job, isSelected, onApplyClick }) => {
  // Format the posted date in IST
  const formattedPostedDate = formatDateInIST(job.postedDate || job.posted);
  
  // Check if job is urgent (if not already marked)
  const isUrgent = job.urgent || (job.postedDate && isJobUrgent(job.postedDate));

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        isSelected ? 'border-orange-500' : 'border-transparent hover:border-orange-200'
      } ${isUrgent ? 'border-l-4 border-l-[#E22213]' : ''} ${
        job.featured ? 'border-l-4 border-l-orange-500' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#0b234a] group-hover:text-orange-500 transition-colors">
            {job.title}
          </h3>
          <div className="flex gap-2">
            {isUrgent && (
              <span className="bg-[#E22213] text-white px-2 py-1 rounded text-xs font-semibold">
                Urgent
              </span>
            )}
            {job.featured && (
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaBriefcase className="text-xs" />
            {job.type}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaMapMarkerAlt className="text-xs" />
            {job.location}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FaClock className="text-xs" />
            {job.experience}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#0b234a]">{job.salary}</span>
          <span className="text-sm text-gray-500" title="Posted in Indian Standard Time">
            {formattedPostedDate}
          </span>
        </div>

        <button 
          onClick={() => onApplyClick(job)}
          className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
        >
          Apply Now
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;