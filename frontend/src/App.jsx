import React from 'react'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
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
const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <ToastContainer />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/robotics-ai" element={<RoboticsAI />} />
          <Route path="/vr-ar-lab" element={<VRARLab />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book-demo" element={<BookDemoForm />} />



          {/* footer link */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContectUs />} />
          <Route path="/blog" element={<Blog />} />


          <Route path="/books/elp" element={<EarlyLearningProgram />} />
          <Route path="/books/lte" element={<LittleTechExplorers />} />
          <Route path="/books/cac" element={<ComputerAndCoding />} />
          <Route path="/books/ctf" element={<CreateTheFeature />} />




          <Route path="/kitDetails/:id" element={<KitDetailsPage />} />
          <Route path="/video-submition" element={<VideoUpload />} />

        </Routes>
      </main>
      <Footer />  
    </div>
  )
}

export default App