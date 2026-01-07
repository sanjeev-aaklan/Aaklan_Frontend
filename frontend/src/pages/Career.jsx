// components/Career/Career.js
import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

import CareerHero from '../components/Career/CareerHero.jsx';
// import CareerStats from '../components/Career/CareerStats';
import JobOpenings from '../components/Career/JobOpenings';
import PerksBenefits from '../components/Career/PerksBenefits';
import CultureSection from '../components/Career/CultureSection';
import TermsModal from '../components/Career/TermsModal';
import ApplicationForm from '../components/Career/ApplicationForm';
import SuccessMessage from '../components/Career/SuccessMessage';
import Aos from 'aos';

const Career = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const jobOpeningsRef = useRef(null);

  const scrollToJobOpenings = () => {
    jobOpeningsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  // Step 1: Open terms modal
  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowTermsModal(true);
  };

  // Step 2: Agree terms
  const handleTermsAgree = () => {
    if (agreeToTerms) {
      setShowTermsModal(false);
      setShowApplicationForm(true);
    } else {
      toast.error("Please agree to the terms & conditions.");
    }
  };

  // Step 3: Submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      toast.error("Please attach a resume before submitting.");
      return;
    }

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("appliedPosition", selectedJob?.title);
    submissionData.append("resume", formData.resume);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/career/apply`,
        submissionData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setShowApplicationForm(false);
        setShowSuccessMessage(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
        });
        setAgreeToTerms(false);
      } else {
        toast.error(response.data.message || "You have already applied for this position.");
      }

    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(error.response?.data?.message || "Server error, please try again.");
    }
  };

  // Resume upload
  const handleFileChange = (file) => {
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
      toast.success("Resume uploaded successfully!");
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  // Reset UI after success screen
  const resetApplicationFlow = () => {
    setShowSuccessMessage(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <CareerHero scrollToJobOpenings={scrollToJobOpenings} />
      {/* <CareerStats /> */}

      <JobOpenings ref={jobOpeningsRef}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        onApplyClick={handleApplyClick}
      />

      <PerksBenefits />
      <CultureSection />

      {showTermsModal && (
        <TermsModal
          selectedJob={selectedJob}
          agreeToTerms={agreeToTerms}
          setAgreeToTerms={setAgreeToTerms}
          onClose={() => setShowTermsModal(false)}
          onAgree={handleTermsAgree}
        />
      )}

      {showApplicationForm && (
        <ApplicationForm
          selectedJob={selectedJob}
          formData={formData}
          setFormData={setFormData}
          onFileChange={handleFileChange}
          onSubmit={handleFormSubmit}
          onClose={() => setShowApplicationForm(false)}
        />
      )}

      {showSuccessMessage && (
        <SuccessMessage selectedJob={selectedJob} onClose={resetApplicationFlow} />
      )}
    </div>
  );
};

export default Career;
