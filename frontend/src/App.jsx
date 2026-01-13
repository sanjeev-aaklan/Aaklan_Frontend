import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route ,Navigate } from 'react-router-dom'
import Coding from './pages/Coding.jsx'
import RoboticsAI from './pages/RoboticsAI.jsx'
import VRARLab from './pages/VRARLab.jsx'
import Books from './pages/Books.jsx'
import ContectUs from './pages/ContectUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ScrollToTop from './Utils/ScrollToTop.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
import Career from './pages/Career.jsx'
import Blog from './pages/Blog.jsx'
import LMS from './pages/LMS.jsx'
import VideoUpload from './pages/VideoUpload.jsx'
import BookDemoForm from './components/BookFreeDemo.jsx'
import { ToastContainer } from 'react-toastify';
import EarlyLearningProgram from './pages/EarlyLearningProgram.jsx'
import LittleTechExplorers from './pages/LittleTechExplorers.jsx'
import ComputerAndCoding from './pages/ComputerAndCoding.jsx'
import CreateTheFeature from './pages/CreateTheFeature.jsx'
import KitDetailsPage from './pages/KitDetailsPage.jsx'
import BlogDetail from './components/Blogs/BlogDetail.jsx'

import Ads from "./pages/Ads.jsx";
import MainLayout from "./pages/MainLayout.jsx";
import AdsLayout from "./pages/AdsLayout.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />

      <Routes>

        {/* MAIN WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/robotics-ai" element={<RoboticsAI />} />
          <Route path="/vr-ar-lab" element={<VRARLab />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book-demo" element={<BookDemoForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContectUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/books/elp" element={<EarlyLearningProgram />} />
          <Route path="/books/lte" element={<LittleTechExplorers />} />
          <Route path="/books/cac" element={<ComputerAndCoding />} />
          <Route path="/books/ctf" element={<CreateTheFeature />} />
          <Route path="/robotics-ai/kitDetails/:id" element={<KitDetailsPage />} />
          <Route path="/video-submition" element={<VideoUpload />} />
        </Route>

        {/* ADS FUNNEL (NO HEADER / FOOTER) */}
        <Route element={<AdsLayout />}>
          <Route path="/demo" element={<Ads />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  );
}

export default App;
