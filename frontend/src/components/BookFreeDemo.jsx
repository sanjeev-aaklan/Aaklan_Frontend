import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDemoForm = () => {

  const normalizePhoneNumber = (phone) => {
  let cleaned = phone.replace(/\s|-/g, '');

  // If user entered 10-digit Indian number
  if (/^[6-9]\d{9}$/.test(cleaned)) {
    return `+91${cleaned}`;
  }

  // If already in +91 format
  if (/^\+91[6-9]\d{9}$/.test(cleaned)) {
    return cleaned;
  }

  return cleaned; // fallback
};

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    city: '',
    schoolAddress: '',
    scheduleCallFor: '',
    message: ''
  });

  // State for OTP functionality
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // API base URL - using axios base instance
  const API_BASE = `${import.meta.env.VITE_BACKEND_URL}/api`;
  
  // Create axios instance with default config
  const api = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  // Add response interceptor for error handling
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error);
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please try again.');
      }
      if (!error.response) {
        throw new Error('Network error. Please check your connection.');
      }
      throw error;
    }
  );

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: '' }));
    }
  };

  // Send OTP to backend using Axios
  const handleSendOtp = async () => {
    if (!formData.phoneNumber || !formData.email || !formData.name) {
      setErrors({
        phoneNumber: !formData.phoneNumber ? 'Phone number is required' : '',
        email: !formData.email ? 'Email is required' : '',
        name: !formData.name ? 'Name is required' : ''
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    
    try {
      const response = await api.post('/otp/send', {
  email: formData.email,
  phoneNumber: normalizePhoneNumber(formData.phoneNumber),
  name: formData.name
});


      const { data } = response;

      if (data.success) {
        setIsOtpSent(true);
        toast.success('OTP sent successfully! Check your email.');
        setErrors({});
      } else {
        const errorMsg = data.message || 'Failed to send OTP';
        setErrors({ otp: errorMsg });
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Failed to send OTP. Please try again.';
      setErrors({ otp: errorMsg });
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP with backend using Axios
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setErrors({ otp: 'Please enter a valid 6-digit OTP' });
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/otp/verify', {
  email: formData.email,
  otp: otp,
  phoneNumber: normalizePhoneNumber(formData.phoneNumber)
});


      const { data } = response;

      if (data.success) {
        setIsOtpVerified(true);
        toast.success('Phone number verified successfully!');
        setErrors({});
      } else {
        const errorMsg = data.message || 'Invalid OTP';
        setErrors({ otp: errorMsg });
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Failed to verify OTP. Please try again.';
      setErrors({ otp: errorMsg });
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber?.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.schoolName?.trim()) newErrors.schoolName = 'School name is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.schoolAddress?.trim()) newErrors.schoolAddress = 'School address is required';
    if (!formData.scheduleCallFor) newErrors.scheduleCallFor = 'Please select an option';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  // Handle form submission using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      Object.values(formErrors).forEach(error => {
        toast.error(error, { autoClose: 3000 });
      });
      return;
    }

    if (!isOtpVerified) {
      setErrors({ otp: 'Please verify your phone number with OTP first' });
      toast.error('Please verify your phone number with OTP first');
      return;
    }

    setLoading(true);
    
    try {
      const response = await api.post('/book-demo', formData);
      const { data } = response;

      if (data.success) {
        toast.success('Demo request submitted successfully! We will contact you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          schoolName: '',
          city: '',
          schoolAddress: '',
          scheduleCallFor: '',
          message: ''
        });
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setOtp('');
        setErrors({});
      } else {
        const errorMsg = data.message || 'Submission failed';
        toast.error(errorMsg);
        
        if (data.errors) {
          const serverErrors = {};
          data.errors.forEach(error => {
            const field = error.split(' ')[0].toLowerCase();
            serverErrors[field] = error;
          });
          setErrors(serverErrors);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Failed to submit form. Please try again.';
      toast.error(errorMsg);
      
      if (error.response?.data?.errors) {
        const serverErrors = {};
        error.response.data.errors.forEach(error => {
          const field = error.split(' ')[0].toLowerCase();
          serverErrors[field] = error;
        });
        setErrors(serverErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset OTP process
  const handleResetOtp = () => {
    setIsOtpSent(false);
    setIsOtpVerified(false);
    setOtp('');
    setErrors(prev => ({ ...prev, otp: '' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E22213] via-[#0b234a] to-orange-500 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E22213] via-[#0b234a] to-orange-500"></div>
        
        {/* Animated orbs - glass morphism effect */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-[#E22213]/20 via-[#0b234a]/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}>
        </div>
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500 mb-2 animate-fade-in">
            Book Your Free Demo
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
            Experience the future of education. Schedule a personalized demo tailored to your needs.
          </p>
        </div>

        {/* Glass morphism form card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Full Name *
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Email Address *
                  </span>
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number with OTP */}
              <div className="md:col-span-2 space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Phone Number *
                    {isOtpVerified && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    )}
                  </span>
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative group flex-1">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                        errors.phoneNumber ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={!formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading}
                    className={`relative group px-5 py-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                      !formData.phoneNumber || !formData.email || !formData.name || isOtpSent || loading
                        ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5'
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-1">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : isOtpSent ? (
                      <span className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        OTP Sent
                      </span>
                    ) : 'Send OTP'}
                  </button>
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phoneNumber}
                  </p>
                )}

                {/* OTP Verification Section */}
                {isOtpSent && !isOtpVerified && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div className="space-y-0.5">
                        <label className="block text-sm font-medium text-gray-300">
                          Enter 6-digit OTP sent to your Phone
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetOtp}
                        className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 self-start sm:self-center"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        Resend OTP
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative group flex-1">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <input
                          type="text"
                          value={otp}
                          onChange={handleOtpChange}
                          maxLength="6"
                          placeholder="• • • • • •"
                          className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-200 outline-none text-center text-xl font-mono tracking-widest text-white ${
                            errors.otp ? 'border-red-500/50' : 'border-white/10'
                          }`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={!otp || otp.length !== 6 || loading}
                        className={`relative group px-5 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                          !otp || otp.length !== 6 || loading
                            ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5'
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-1">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                            Verifying...
                          </span>
                        ) : 'Verify OTP'}
                      </button>
                    </div>
                    {errors.otp && (
                      <p className="text-red-400 text-xs flex items-center gap-2 mt-2">
                        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.otp}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* School Name */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  School Name *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                      errors.schoolName ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Springfield High School"
                  />
                </div>
                {errors.schoolName && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.schoolName}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  City *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                      errors.city ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="New York"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.city}
                  </p>
                )}
              </div>

              {/* School Address */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  School Address *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <input
                    type="text"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm ${
                      errors.schoolAddress ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="123 Education Street, Suite 100"
                  />
                </div>
                {errors.schoolAddress && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.schoolAddress}
                  </p>
                )}
              </div>

              {/* Schedule Call For */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  Schedule Call For *
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <select
                    name="scheduleCallFor"
                    value={formData.scheduleCallFor}
                    onChange={handleChange}
                    required
                    className={`relative w-full px-4 py-2 bg-gray-900/50 border rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white appearance-none text-sm ${
                      errors.scheduleCallFor ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="bg-gray-900">Select Option</option>
                    <option value="AI and Robotics Lab" className="bg-gray-900">AI and Robotics Lab</option>
                    <option value="Computer & Coding Books for School" className="bg-gray-900">Computer & Coding Books for School</option>
                    <option value="Online Coding & Robotics Classes" className="bg-gray-900">Dedicated Trainer</option>
                    <option value="VR/AR Lab" className="bg-gray-900">VR/AR Lab</option>
                    <option value="Coding, Robotics & AI Workshop in School" className="bg-gray-900">Coding, Robotics & AI Workshop in School</option>
                    <option value="Other" className="bg-gray-900">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.scheduleCallFor && (
                  <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.scheduleCallFor}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="md:col-span-2 space-y-1">
                <label className="block text-sm font-medium text-gray-300">
                  Additional Message (Optional)
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="relative w-full px-4 py-2 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 outline-none text-white placeholder-gray-500 text-sm resize-none"
                    placeholder="Tell us about your specific requirements, preferred demo time, or any questions you have..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!isOtpVerified || loading}
                className={`relative group w-full py-4 px-6 rounded-xl font-semibold transition-all duration-500 overflow-hidden text-sm ${
                  !isOtpVerified || loading
                    ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-0.5'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  !isOtpVerified || loading ? 'hidden' : ''
                }`}></div>
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing Your Request...
                    </>
                  ) : (
                    <>
                      <span>Submit Demo Request</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              {!isOtpVerified && (
                <p className="text-center text-gray-400 mt-2 text-xs">
                  Please verify your phone number with OTP to submit the form
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Add custom animations to Tailwind */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookDemoForm;
