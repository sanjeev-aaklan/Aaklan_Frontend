// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const DedicatedStaffing = () => {
//   const Navigate = useNavigate();

//   const steps = [
//     {
//       id: 1,
//       title: "School signs-up with Aaklan",
//       description: "Begin your journey with a simple registration process",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       title: "Program Manager is assigned",
//       description: "Get a dedicated expert to oversee your program",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//         </svg>
//       )
//     },
//     {
//       id: 3,
//       title: "Teacher is recruited and trained",
//       description: "We carefully select and prepare educators for your needs",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//         </svg>
//       )
//     },
//     {
//       id: 4,
//       title: "Teacher starts classes over tech platform",
//       description: "Seamless integration with our advanced technology",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       )
//     },
//     {
//       id: 5,
//       title: "Regular audits of classes by Program Manager",
//       description: "Continuous quality assurance for optimal results",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       )
//     },
//     {
//       id: 6,
//       title: "School tracks progress over tech-platform",
//       description: "Monitor performance and outcomes with real-time data",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-[#0b234a]/5 via-white to-[#E22213]/5 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs */}
//         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-[#0b234a]/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-[#E22213]/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-[#0b234a]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(to right, #0b234a 1px, transparent 1px),
//                                 linear-gradient(to bottom, #0b234a 1px, transparent 1px)`,
//               backgroundSize: '50px 50px'
//             }}
//           ></div>
//         </div>

//         {/* Animated Dots */}
//         <div className="absolute top-10 right-1/4">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-[#E22213]/30 rounded-full animate-bounce"
//               style={{
//                 left: `${i * 20}px`,
//                 animationDelay: `${i * 0.2}s`,
//                 top: `${i * 15}px`
//               }}
//             ></div>
//           ))}
//         </div>

//         {/* Wave Effect at Bottom */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
//           <svg
//             className="relative block w-full h-20"
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//               className="fill-[#0b234a] opacity-10"
//             ></path>
//           </svg>
//         </div>

//         {/* Decorative Lines */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0b234a] to-transparent opacity-20"></div>
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E22213] to-transparent opacity-20"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-6 leading-tight">
//             Empowering Success with{' '} 
//             <span className="relative inline-block">
//               <span className="bg-gradient-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">
//                 Dedicated Staffing Solutions
//               </span>
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full"></span>
//             </span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed relative">
//             We take full responsibility of impeccable class delivery and student impact.
//             <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full"></span>
//           </p>
//         </div>

//         {/* Process Steps */}
//         <div className="relative">
//           {/* Vertical line for timeline */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0b234a] via-orange-500 to-[#E22213] hidden md:block">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-shimmer"></div>
//           </div>

//           <div className="space-y-8 md:space-y-12">
//             {steps.map((step, index) => (
//               <div
//                 key={step.id}
//                 className="flex flex-col md:flex-row items-start md:items-center relative group"
//               >
//                 {/* Animated Connector Lines */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#0b234a]/30 to-[#E22213]/30 group-hover:from-[#0b234a] group-hover:to-[#E22213] transition-all duration-500"></div>
//                 )}

//                 {/* Left Side Content (for even steps) */}
//                 <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0 order-2 md:order-1`}>
//                   {index % 2 === 0 && (
//                     <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0b234a]/30 group-hover:-translate-y-1">
//                       {/* Glow Effect */}
//                       <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0b234a]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                       <div className="relative">
//                         <div className={`flex md:flex-row-reverse items-start space-x-4 md:space-x-reverse md:space-x-4`}>
//                           <div className="shrink-0">
//                             <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                               {step.icon}
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0b234a] transition-colors">
//                               {step.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                               {step.description}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Center Timeline */}
//                 <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 order-1 md:order-2 z-10 mb-4 md:mb-0">
//                   <div className="relative">
//                     <div className="absolute -ins-2 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
//                     <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#0b234a] group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
//                       <span className="text-lg md:text-xl font-bold text-[#0b234a] group-hover:text-[#E22213] transition-colors">
//                         {step.id}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side Content (for odd steps) */}
//                 <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'} order-3`}>
//                   {index % 2 !== 0 && (
//                     <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30 group-hover:-translate-y-1">
//                       {/* Glow Effect */}
//                       <div className="absolute -inset-0.5 bg-gradient-to-l from-[#E22213]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                       <div className="relative">
//                         <div className="flex items-start space-x-4">
//                           <div className="shrink-0">
//                             <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                               {step.icon}
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E22213] transition-colors">
//                               {step.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                               {step.description}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Mobile connector */}
//                 {index < steps.length - 1 && (
//                   <div className="absolute top-12 md:top-16 left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-8 md:h-12 bg-gradient-to-b from-[#0b234a] to-[#E22213] md:hidden"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20 relative">
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#0b234a] to-transparent opacity-30"></div>
          
//           <button 
//             onClick={() => Navigate('/book-demo')} 
//             className="relative bg-gradient-to-r from-[#0b234a] via-[#0b234a] to-[#E22213] hover:from-[#0b234a] hover:via-[#E22213] hover:to-[#0b234a] text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg group overflow-hidden"
//           >
//             {/* Shine Effect */}
//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
//             <span className="relative flex items-center justify-center">
//               Get Started Today
//               <svg 
//                 className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Add CSS for custom animations */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DedicatedStaffing;





import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dsteps } from '../../assets/DadicatedStuf/stuf';

const DedicatedStaffing = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const getImageUrl = (id, width = 800, height = 600) => {
  
    const imageUrls = [
      Dsteps.A,
      Dsteps.B,
      Dsteps.C,
      Dsteps.D,
      Dsteps.E,
      Dsteps.F,
    ];
    return imageUrls[id % imageUrls.length];
  };

  // Step data with reliable image URLs
  const steps = [
    {
      id: 1,
      title: "School signs-up with Aaklan",
      description: "Begin your journey with a simple registration process",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      image: getImageUrl(0, 600, 400),
      imageAlt: "School registration process"
    },
    {
      id: 2,
      title: "Program Manager is assigned",
      description: "Get a dedicated expert to oversee your program",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      image: getImageUrl(1, 600, 400),
      imageAlt: "Program manager assignment"
    },
    {
      id: 3,
      title: "Teacher is recruited and trained",
      description: "We carefully select and prepare educators for your needs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      image: getImageUrl(2, 600, 400),
      imageAlt: "Teacher recruitment and training"
    },
    {
      id: 4,
      title: "Teacher starts classes over tech platform",
      description: "Seamless integration with our advanced technology",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      image: getImageUrl(3, 600, 400),
      imageAlt: "Technology platform for classes"
    },
    {
      id: 5,
      title: "Regular audits of classes by Program Manager",
      description: "Continuous quality assurance for optimal results",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: getImageUrl(4, 600, 400),
      imageAlt: "Class audits and quality assurance"
    },
    {
      id: 6,
      title: "School tracks progress over tech-platform",
      description: "Monitor performance and outcomes with real-time data",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: getImageUrl(5, 600, 400),
      imageAlt: "Progress tracking and analytics"
    }
  ];

  const backgroundImages = steps.map(step => step.image);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState({});


  const handleImageError = (imageId) => {
    setImageErrors(prev => ({
      ...prev,
      [imageId]: true
    }));
  };


  const getFallbackImage = (id) => {
    
    const fallbackSVGs = [
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#0b234a"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">School Registration</text></svg>`,
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#E22213"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Program Manager</text></svg>`,
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#4CAF50"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Teacher Training</text></svg>`,
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#2196F3"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Tech Platform</text></svg>`,
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#FF9800"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Class Audits</text></svg>`,
      `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="400" fill="#9C27B0"/><text x="300" y="200" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Progress Tracking</text></svg>`
    ];
    return `data:image/svg+xml;base64,${btoa(fallbackSVGs[id])}`;
  };

  const handlePreviousClick = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNextClick = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prevIndex => 
      (prevIndex + 1) % backgroundImages.length
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-slide functionality
  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setTimeout(() => {
        handleNextClick();
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentImageIndex, isAutoPlaying]);

  const handleStepHover = (stepIndex) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(stepIndex);
  };

  const handleStepLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b234a]/5 via-white to-[#E22213]/5 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  filter: 'blur(2px) brightness(0.7)'
                }}
                onError={() => handleImageError(`bg-${index}`)}
              />
            </div>
          ))}
        </div>

        {/* 如果图片加载失败，显示纯色背景 */}
        {Object.keys(imageErrors).length === backgroundImages.length && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b234a] via-[#1a3b6d] to-[#E22213] opacity-20" />
        )}

        {/* Carousel Navigation Controls */}
        <button
          onClick={handlePreviousClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          aria-label="Previous background image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          aria-label="Next background image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentImageIndex(index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImageIndex === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to background image ${index + 1}`}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #0b234a 1px, transparent 1px),
                                linear-gradient(to bottom, #0b234a 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-6 leading-tight">
            Empowering Success with{' '} 
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#E22213] via-orange-500 to-[#0b234a] bg-clip-text text-transparent">
                Dedicated Staffing Solutions
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
            We take full responsibility of impeccable class delivery and student impact.
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full" />
          </p>
        </div>

        {/* Process Steps with Images */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0b234a] via-orange-500 to-[#E22213] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-shimmer" />
          </div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <StepCard 
                key={step.id}
                step={step}
                index={index}
                onHover={() => handleStepHover(index)}
                onLeave={handleStepLeave}
                imageError={imageErrors[`step-${index}`]}
                onImageError={() => handleImageError(`step-${index}`)}
                getFallbackImage={getFallbackImage}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#0b234a] to-transparent opacity-30" />
          
          <button 
            onClick={() => navigate('/book-demo')} 
            className="relative bg-gradient-to-r from-[#0b234a] via-[#0b234a] to-[#E22213] hover:from-[#0b234a] hover:via-[#E22213] hover:to-[#0b234a] text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg group overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <span className="relative flex items-center justify-center">
              Get Started Today
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

// 分离的StepCard组件
const StepCard = ({ step, index, onHover, onLeave, imageError, onImageError, getFallbackImage }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Left Side Content */}
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0 order-2 md:order-1`}>
        {isLeft && (
          <div className={`relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0b234a]/30 group-hover:-translate-y-1 overflow-hidden`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0b234a]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative flex flex-col md:flex-row">
              {/* Step Image */}
              <div className="w-full md:w-1/3 md:order-2">
                <div className="relative h-48 md:h-full overflow-hidden rounded-t-xl md:rounded-l-none md:rounded-r-xl">
                  <img 
                    src={imageError ? getFallbackImage(index) : step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={onImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              
              {/* Step Content */}
              <div className="w-full md:w-2/3 p-6 md:order-1">
                <div className="flex md:flex-row-reverse items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0b234a] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Timeline Indicator */}
      <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 order-1 md:order-2 z-10 mb-4 md:mb-0">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#0b234a] to-[#E22213] rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500" />
          <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#0b234a] group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300">
            <span className="text-lg md:text-xl font-bold text-[#0b234a] group-hover:text-[#E22213] transition-colors">
              {step.id}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className={`md:w-1/2 ${!isLeft ? 'md:pl-12' : 'md:pr-12'} order-3`}>
        {!isLeft && (
          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30 group-hover:-translate-y-1 overflow-hidden">
            <div className="absolute -inset-0.5 bg-gradient-to-l from-[#E22213]/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative flex flex-col md:flex-row">
              {/* Step Image */}
              <div className="w-full md:w-1/3">
                <div className="relative h-48 md:h-full overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-r-none">
                  <img 
                    src={imageError ? getFallbackImage(index) : step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={onImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              
              {/* Step Content */}
              <div className="w-full md:w-2/3 p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-[#E22213] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E22213] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DedicatedStaffing;