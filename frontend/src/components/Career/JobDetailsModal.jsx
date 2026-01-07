// components/Career/JobDetailsModal.js
import React, { useEffect } from 'react';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaMoneyBillWave,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaRegEnvelope,
  FaLink
} from 'react-icons/fa';
import { MdDescription, MdContactPage, MdClose } from 'react-icons/md';

const JobDetailsModal = ({ job, isOpen, onClose, onApply }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !job) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md bg-white/10 transition-all duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden animate-modal-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0b234a] to-[#1a3a6e] text-white px-8 py-6 flex justify-between items-center z-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <div className="flex flex-wrap items-center gap-3 text-sm opacity-90">
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaBriefcase className="text-xs" />
                {job.type}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaMapMarkerAlt className="text-xs" />
                {job.location}
              </span>
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <FaMoneyBillWave className="text-xs" />
                {job.salary}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-150px)]">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaBriefcase className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Type</p>
                  <p className="font-semibold text-gray-800">{job.type}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaClock className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-semibold text-gray-800">{job.experience}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FaCalendarAlt className="text-orange-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Posted Date</p>
                  <p className="font-semibold text-gray-800">{formatDate(job.posted)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MdDescription className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Job Description</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="prose max-w-none text-gray-700">
                {job.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph || <br />}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Application Instructions */}
          {job.instruction && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MdContactPage className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">How to Apply</h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                {typeof job.instruction === 'string' ? (
                  <div className="text-gray-700">
                    <p className="mb-4">{job.instruction}</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Email Application */}
                    {job.instruction.email && (
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <FaRegEnvelope className="text-blue-600 text-xl" />
                          <h4 className="font-semibold text-gray-800">Email Application</h4>
                        </div>
                        <p className="text-gray-600 mb-3">Send your resume and cover letter to:</p>
                        <a 
                          href={`mailto:${job.instruction.email}?subject=Application for ${job.title} Position`}
                          className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                          <FaExternalLinkAlt />
                          {job.instruction.email}
                        </a>
                      </div>
                    )}

                    {/* Online Application Link */}
                    {job.instruction.link && (
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <FaLink className="text-green-600 text-xl" />
                          <h4 className="font-semibold text-gray-800">Online Application</h4>
                        </div>
                        <p className="text-gray-600 mb-3">Apply directly through our online portal:</p>
                        <a 
                          href={job.instruction.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                          <FaExternalLinkAlt />
                          Click here to apply online
                        </a>
                      </div>
                    )}

                    {/* Application Deadline */}
                    {job.instruction.deadline && (
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3">
                          <FaCalendarAlt className="text-purple-600 text-xl" />
                          <div>
                            <h4 className="font-semibold text-gray-800">Application Deadline</h4>
                            <p className="text-gray-600">
                              {new Date(job.instruction.deadline).toLocaleDateString('en-IN', {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Important Notes */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-8">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Please ensure you meet the required qualifications before applying. 
              Applications that do not meet the requirements will not be considered.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t px-8 py-6 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Close
          </button>
          <div className="flex gap-4">
            <button
              onClick={onApply}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;