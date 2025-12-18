import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import StatsSection from '../components/Home/StatsSection.jsx'
import Curriculum from '../components/Home/Curriculum.jsx'
import FullServices from '../components/Home/Excellence.jsx'
import DedicatedStaffing from '../components/Home/DedicatedStaffing.jsx'
// import AiRoboticsSection from '../components/AiRoboticsSection.jsx'
import StructuredCurriculum from '../components/Home/StructuredCurriculum.jsx'
// import ImpactSection from '../components/Home/ImpactSection.jsx'
// import VRFeatures from '../components/VRFeatures.jsx'
import VrFeatureSection from '../components/VrFeatureSection.jsx'
import CodingQuiz from '../components/CodingQuiz.jsx'
import WebDevKey from '../components/Home/WebDevelopKeySkills.jsx'
// import OurBelivers from '../components/OurBelivers.jsx'
import RoboticsKit from '../components/RoboticsKit.jsx'
import CertificateSection from '../components/Home/CertificateSection.jsx'
import Excellence from '../components/Home/Excellence.jsx'
import FutureSkills from '../components/Home/FutureSkills.jsx'
// import BenefitsofJoining from '../components/Home/BenefitsofJoining.jsx'
import OurBelivers from '../components/Home/OurBelivers.jsx'

const Home = () => {
  return (
    <div>
        <Hero /> 
        <StatsSection />
        <Curriculum />
        <Excellence />
        <DedicatedStaffing />
        {/* <AiRoboticsSection /> */}
        <RoboticsKit />
        <StructuredCurriculum />
        {/* <ImpactSection /> */}
        {/* <VRFeatures /> */}
        <VrFeatureSection />
        <WebDevKey />
        <CertificateSection />
        <FutureSkills />
        {/* <BenefitsofJoining /> */}
        <OurBelivers />
    </div>
  )
}

export default Home