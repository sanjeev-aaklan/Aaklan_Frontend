// components/Career/ApplicationForm.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { useNavigate  } from 'react-router-dom';
import { 
  FaTimes, 
  FaCheck, 
  FaFileUpload, 
  FaUser, 
  FaEnvelope, 
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaFileInvoiceDollar,
  FaCalendarDay,
  FaFileContract,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ApplicationForm = ({ selectedJob, formData, setFormData, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Reset experience fields if user selects "No" for experience
      if (name === 'hasExperience' && value === 'no') {
        setFormData(prev => ({
          ...prev,
          yearsOfExperience: '',
          lastCompany: '',
          jobProfile: '',
          currentCTC: '',
          expectedCTC: '',
          noticePeriod: '',
          salarySlips: null
        }));
      }
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = ''; // Clear the input
        return;
      }
      
      // Check file type
      if (!file.type.includes('pdf')) {
        alert('Only PDF files are allowed');
        e.target.value = ''; // Clear the input
        return;
      }
      
      setFormData(prev => ({ ...prev, [fieldName]: file }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  // Validate required fields
  if (!formData.resume || !(formData.resume instanceof File)) {
    setError('Please upload your resume (PDF file required)');
    return;
  }
  
  if (formData.hasExperience === 'yes' && (!formData.salarySlips || !(formData.salarySlips instanceof File))) {
    setError('Please upload salary slips for experienced candidates');
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    // Create FormData object
    const submitFormData = new FormData();
    
    // Append files with EXACT field names that multer expects
    submitFormData.append('resume', formData.resume);
    
    if (formData.hasExperience === 'yes' && formData.salarySlips) {
      submitFormData.append('salarySlips', formData.salarySlips);
    }
    
    // Append all text fields as separate entries
    submitFormData.append('name', formData.name);
    submitFormData.append('email', formData.email);
    submitFormData.append('phone', formData.phone);
    submitFormData.append('qualification', formData.qualification);
    submitFormData.append('hasExperience', formData.hasExperience);
    submitFormData.append('companyBond', formData.companyBond);
    submitFormData.append('relocate', formData.relocate);
    submitFormData.append('appliedPosition', selectedJob?.title || '');
    
    // Append experience fields only if hasExperience is 'yes'
    if (formData.hasExperience === 'yes') {
      submitFormData.append('yearsOfExperience', formData.yearsOfExperience);
      submitFormData.append('lastCompany', formData.lastCompany);
      submitFormData.append('jobProfile', formData.jobProfile);
      submitFormData.append('currentCTC', formData.currentCTC);
      submitFormData.append('expectedCTC', formData.expectedCTC);
      submitFormData.append('noticePeriod', formData.noticePeriod);
    }
    
    // Log FormData for debugging
    console.log('Submitting FormData:');
    for (let [key, value] of submitFormData.entries()) {
      console.log(`${key}:`, typeof value === 'object' ? value.name || 'File' : value);
    }
    
    // Send to backend
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/career/apply`, {
      method: 'POST',
      body: submitFormData,
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      toast.success('Application submitted successfully!');
      navigate('/')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        hasExperience: '',
        companyBond: '',
        relocate: '',
        resume: null,
        yearsOfExperience: '',
        lastCompany: '',
        jobProfile: '',
        currentCTC: '',
        expectedCTC: '',
        noticePeriod: '',
        salarySlips: null
      });
      onClose();
    } else {
      setError(result.message || 'Error submitting application');
    }
  } catch (error) {
    console.error('Submission error:', error);
    setError('Failed to submit application. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#0b234a]">Apply for Position</h2>
              <p className="text-orange-500 font-semibold">{selectedJob?.title}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              disabled={isSubmitting}
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          {/* Basic Details Section */}
          <div>
            <h3 className="text-lg font-bold text-[#0b234a] mb-4">Basic Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Highest Qualification *
                </label>
                <div className="relative">
                  <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    name="qualification"
                    required
                    value={formData.qualification || ''}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                    disabled={isSubmitting}
                  >
                    <option value="">Select qualification</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Upload Section */}
          <div>
            <h3 className="text-lg font-bold text-[#0b234a] mb-4">Resume Upload</h3>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Upload Updated Resume (PDF only, max 5MB) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'resume')}
                  className="hidden"
                  id="resume"
                  name="resume"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <FaFileUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                  <p className="text-gray-600 mb-1">
                    {formData.resume?.name || 'Click to upload your resume'}
                  </p>
                  <p className="text-sm text-gray-500">PDF files only (Max: 5MB)</p>
                </label>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-lg font-bold text-[#0b234a] mb-4">Experience Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Do you have work experience? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasExperience"
                      value="yes"
                      required
                      checked={formData.hasExperience === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasExperience"
                      value="no"
                      required
                      checked={formData.hasExperience === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Experience Details Fields (Only show if hasExperience is 'yes') */}
              {formData.hasExperience === 'yes' && (
                <div className="space-y-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Years of Experience *
                      </label>
                      <div className="relative">
                        <FaBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          name="yearsOfExperience"
                          required
                          min="0"
                          max="50"
                          step="0.5"
                          value={formData.yearsOfExperience || ''}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="e.g., 3.5"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Last Company Name *
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="lastCompany"
                          required
                          value={formData.lastCompany || ''}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Enter company name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Job Profile *
                      </label>
                      <input
                        type="text"
                        name="jobProfile"
                        required
                        value={formData.jobProfile || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Enter your job profile"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Current Annual CTC (₹) *
                      </label>
                      <div className="relative">
                        <FaFileInvoiceDollar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          name="currentCTC"
                          required
                          min="0"
                          value={formData.currentCTC || ''}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="e.g., 600000"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Expected Annual CTC (₹) *
                      </label>
                      <input
                        type="number"
                        name="expectedCTC"
                        required
                        min="0"
                        value={formData.expectedCTC || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="e.g., 750000"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Notice Period (in days) *
                      </label>
                      <div className="relative">
                        <FaCalendarDay className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="number"
                          name="noticePeriod"
                          required
                          min="0"
                          max="180"
                          value={formData.noticePeriod || ''}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="e.g., 30"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Upload Any Company Document (PDF only, max 5 MB) *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileChange(e, 'salarySlips')}
                        className="hidden"
                        id="salarySlips"
                        name="salarySlips"
                        required
                        disabled={isSubmitting}
                      />
                      <label htmlFor="salarySlips" className="cursor-pointer">
                        <FaFileUpload className="mx-auto text-3xl text-gray-400 mb-2" />
                        <p className="text-gray-600 mb-1">
                          {formData.salarySlips?.name || 'Click to upload salary slips'}
                        </p>
                        <p className="text-sm text-gray-500">PDF files only (Max: 5MB)</p>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Agreement Section */}
          <div>
            <h3 className="text-lg font-bold text-[#0b234a] mb-4">Agreements</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Are you agree to 1-year company bond? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="companyBond"
                      value="yes"
                      required
                      checked={formData.companyBond === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="companyBond"
                      value="no"
                      required
                      checked={formData.companyBond === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Are you agree to relocate? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="relocate"
                      value="yes"
                      required
                      checked={formData.relocate === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="relocate"
                      value="no"
                      required
                      checked={formData.relocate === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-orange-500 focus:ring-orange-500"
                      disabled={isSubmitting}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <FaCheck className="text-sm" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;



// components/Career/ApplicationForm.js
// import React from 'react';
// import { FaTimes, FaCheck, FaFileUpload, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

// const ApplicationForm = ({ selectedJob, formData, setFormData, onFileChange, onSubmit, onClose }) => {
//   console.log(formData);
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     onFileChange(file);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-[#0b234a]">Apply for Position</h2>
//               <p className="text-orange-500 font-semibold">{selectedJob?.title}</p>
//             </div>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={onSubmit} className="p-6 space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Full Name *
//               </label>
//               <div className="relative">
//                 <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-gray-700">
//                 Email Address *
//               </label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-semibold text-gray-700">
//               Phone Number *
//             </label>
//             <div className="relative">
//               <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="block text-sm font-semibold text-gray-700">
//               Upload Resume (PDF only) *
//             </label>
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handleFileInputChange}
//                 className="hidden"
//                 id="resume"
//                 name='resume'
//                 required
//               />
//               <label htmlFor="resume" className="cursor-pointer">
//                 <FaFileUpload className="mx-auto text-3xl text-gray-400 mb-2" />
//                 <p className="text-gray-600 mb-1">
//                   {formData.resume ? formData.resume.name : 'Click to upload your resume'}
//                 </p>
//                 <p className="text-sm text-gray-500">PDF files only (Max: 5MB)</p>
//               </label>
//             </div>
//           </div>

//           <div className="flex gap-4 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
//             >
//               <FaCheck className="text-sm" />
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplicationForm;