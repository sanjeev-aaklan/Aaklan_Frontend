// import { useState } from 'react';
// import {
//   Rocket,
//   Target,
//   BookOpen,
//   Settings,
//   Cpu,
//   Zap,
//   Award,
//   Users,
//   Star,
//   CheckCircle,
//   Wifi,
//   Bluetooth,
//   Smartphone,
//   Home,
//   CircuitBoard,
//   BookText,
//   Printer,
//   Wrench,
//   ChevronRight,
//   Sparkles
// } from 'lucide-react';
// import { assets, card } from '../assets/assets';

// // Assets - adjust these paths according to your Vite project structure
// const assetss = {
//   labSetup: assets.labSetup,
//   microcontroller:  assets.microcontroller,
//   project1: card.one,
//   project2: card.two,
//   project3: card.three,
//   project4: card.two,
//   project5: card.two,
// };

// const AaklanLabSection = () => {
//   const [activeProject, setActiveProject] = useState(null);
//   const [hoveredFeature, setHoveredFeature] = useState(null);

//   const features = [
//     {
//       icon: <BookOpen className="w-6 h-6" />,
//       title: "Curriculum for Robotics & AI",
//       description: "Comprehensive learning materials aligned with NEP & global STEM standards"
//     },
//     {
//       icon: <Cpu className="w-6 h-6" />,
//       title: "Robotics Kits and Tools",
//       description: "Complete kits with microcontrollers, sensors, and accessories"
//     },
//     {
//       icon: <Settings className="w-6 h-6" />,
//       title: "Project Based Learning",
//       description: "Hands-on projects that reinforce theoretical concepts"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Certified Trainer",
//       description: "Expert guidance from qualified and certified instructors"
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Competition Access",
//       description: "Support for national/international STEM competitions"
//     },
//     {
//       icon: <Rocket className="w-6 h-6" />,
//       title: "Advanced Modules",
//       description: "Aerospace, drone & AI robotics modules"
//     }
//   ];

//   const projects = [
//     {
//       name: "Gesture-Controlled LED Effects",
//       icon: <Zap className="w-8 h-8" />,
//       description: "Control LED patterns with hand gestures",
//       image: assetss.project1,
//       color: "from-amber-500 to-orange-600"
//     },
//     {
//       name: "Smart Home Control via App",
//       icon: <Home className="w-8 h-8" />,
//       description: "Remote home automation using mobile app",
//       image: assetss.project2,
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       name: "Obstacle Avoidance Robot",
//       icon: <Settings className="w-8 h-8" />,
//       description: "Autonomous navigation with obstacle detection",
//       image: assetss.project3,
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       name: "Gesture Controlled Robot",
//       icon: <Bluetooth className="w-8 h-8" />,
//       description: "Robot control through intuitive hand gestures",
//       image: assetss.project4,
//       color: "from-violet-500 to-purple-600"
//     },
//     {
//       name: "Bluetooth Controlled Car",
//       icon: <Smartphone className="w-8 h-8" />,
//       description: "Wireless vehicle control via Bluetooth",
//       image: assetss.project5,
//       color: "from-rose-500 to-pink-600"
//     }
//   ];

//   const labComponents = [
//     {
//       icon: <CircuitBoard className="w-5 h-5" />,
//       name: "Leela by Aaklan Microcontroller",
//       description: "Advanced microcontroller for smart projects"
//     },
//     {
//       icon: <Wifi className="w-5 h-5" />,
//       name: "Multiple type of Sensors",
//       description: "Various sensors for different applications"
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       name: "Multiple type of Motors",
//       description: "DC, servo, and stepper motors"
//     },
//     {
//       icon: <BookText className="w-5 h-5" />,
//       name: "Level wise Booklets",
//       description: "Structured learning materials"
//     },
//     {
//       icon: <Wrench className="w-5 h-5" />,
//       name: "Soldering Machine",
//       description: "Professional soldering equipment"
//     },
//     {
//       icon: <Printer className="w-5 h-5" />,
//       name: "3D printer",
//       description: "For prototyping and model creation"
//     }
//   ];

//   const microcontrollerFeatures = [
//     { name: "Matrix Display", icon: "🔆" },
//     { name: "Motor Mounting Port", icon: "⚙️" },
//     { name: "Port for Ultrasonic Sensor", icon: "📡" },
//     { name: "Type C Port", icon: "🔌" },
//     { name: "ESP-WROOM-32", icon: "💾" }
//   ];

//   return (
//     <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
//       {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Floating Circles - Responsive sizes */}
//           <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
//           <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

//           {/* Grid Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0" style={{
//               backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
//                         linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
//               backgroundSize: '30px 30px',
//             }}></div>
//           </div>

//           {/* Animated Gradient Orbs - Responsive sizes */}
//           <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
//           <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

//           {/* Additional floating elements - Responsive positioning */}
//           <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
//         </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 mb-6 hover:shadow-xl transition-shadow duration-300">
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E22213] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E22213]"></span>
//             </span>
//             <Rocket className="w-4 h-4 text-[#0b234a]" />
//             <span className="text-sm font-semibold text-[#0b234a]">Complete Lab Solution</span>
//           </div>

//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
//             <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
//               What We Offer Robotics and AI Lab
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//             Project-based learning aligned with NEP & global STEM standards. Advanced aerospace,
//             drone & AI robotics modules with complete support for competitions.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
//           {/* Lab Setup - Full Width on Mobile, 2 cols on Large */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
//               <div className="flex flex-col gap-6 lg:gap-8">
//                 {/* Image */}
//                 <div className="w-full">
//                   <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl aspect-video sm:aspect-[16/10] lg:aspect-[16/9]">
//                     <img
//                       src={assetss.labSetup}
//                       alt="Aaklan Robotics and AI Lab Setup"
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
//                         <Target className="w-5 h-5 sm:w-6 sm:h-6" />
//                         Lab Setup Overview
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <div className="space-y-3 sm:space-y-4 mb-6">
//                     {[
//                       "Project-based learning aligned with NEP & global STEM standards",
//                       "Support for national/international STEM competitions",
//                       "Advanced aerospace, drone & AI robotics modules"
//                     ].map((text, index) => (
//                       <div key={index} className="flex items-start gap-3 group cursor-pointer">
//                         <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                           <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                         </div>
//                         <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{text}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="bg-gradient-to-r from-[#0b234a]/5 via-[#E22213]/5 to-orange-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#0b234a]/10">
//                     <div className="flex items-start gap-3">
//                       <Sparkles className="w-5 h-5 text-[#E22213] flex-shrink-0 mt-0.5" />
//                       <p className="text-sm sm:text-base text-gray-700">
//                         <strong className="text-[#0b234a]">Complete Support:</strong> Aaklan provides curriculum, lab setup, equipment,
//                         maintenance and complete support for Atal Tinkering Labs.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Microcontroller Card */}
//           <div className="lg:col-span-1">
//             <div className="bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
//               <div className="flex flex-col h-full">
//                 <div className="text-center mb-6">
//                   <div className="relative w-full aspect-square max-w-xs mx-auto mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
//                     <img
//                       src={assetss.microcontroller}
//                       alt="Aaklan Microcontroller"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <h3 className="text-xl sm:text-2xl font-bold mb-2">Aaklan Microcontroller</h3>
//                   <p className="text-blue-100 text-sm leading-relaxed">
//                     Your first smart PCB for students! Perfect for schools, makers, and young innovators.
//                   </p>
//                 </div>

//                 <div className="space-y-2 sm:space-y-3 flex-grow">
//                   {microcontrollerFeatures.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 bg-white/10 rounded-lg sm:rounded-xl p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group"
//                     >
//                       <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
//                       <span className="text-sm sm:text-base font-medium">{feature.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Lab Components */}
//         <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 mb-8 lg:mb-12">
//           <h3 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-6 sm:mb-8 flex items-center gap-3">
//             <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-[#E22213]" />
//             Lab Components
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {labComponents.map((component, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                   <div className="text-white">
//                     {component.icon}
//                   </div>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{component.name}</h4>
//                   <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{component.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 mb-8 lg:mb-12">
//           <h3 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-6 sm:mb-8 flex items-center gap-3">
//             <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#E22213]" />
//             What We Offer
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredFeature(index)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//                 className="relative p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br from-[#E22213]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

//                 <div className="relative">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                     <div className="text-white">
//                       {feature.icon}
//                     </div>
//                   </div>
//                   <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{feature.title}</h4>
//                   <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>

//                 <ChevronRight className={`absolute bottom-4 right-4 w-5 h-5 text-[#E22213] transform transition-all duration-300 ${hoveredFeature === index ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'}`} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Projects Showcase */}
//         <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100">
//           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-8 sm:mb-12 text-center">
//             Featured Projects
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setActiveProject(index)}
//                 onMouseLeave={() => setActiveProject(null)}
//                 className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
//               >
//                 <div className="relative aspect-square overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
//                     <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform transition-all duration-300">
//                       <div className={`mb-3 transition-all duration-300 ${activeProject === index ? 'scale-110' : 'scale-100'}`}>
//                         <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
//                           <div className="text-white">
//                             {project.icon}
//                           </div>
//                         </div>
//                       </div>
//                       <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{project.name}</h4>
//                       <p className={`text-xs sm:text-sm text-gray-200 transition-all duration-300 ${activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AaklanLabSection;


import { useState, useEffect } from 'react';
import {
  Rocket,
  Target,
  BookOpen,
  Settings,
  Cpu,
  Zap,
  Award,
  Users,
  Star,
  CheckCircle,
  Wifi,
  Bluetooth,
  Smartphone,
  Home,
  CircuitBoard,
  BookText,
  Printer,
  Wrench,
  ChevronRight,
  Sparkles,
  Gauge,
  Satellite,
  Camera,
  Microchip
} from 'lucide-react';
import { assets, card } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets - adjust these paths according to your Vite project structure
const assetss = {
  labSetup: assets.labSetup,
  microcontroller:  assets.microcontroller,
  project1: card.one,
  project2: card.two,
  project3: card.three,
  project4: card.two,
  project5: card.two,
};

const AaklanLabSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curriculum for Robotics & AI",
      description: "Comprehensive learning materials aligned with NEP & global STEM standards"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Robotics Kits and Tools",
      description: "Complete kits with microcontrollers, sensors, and accessories"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Project Based Learning",
      description: "Hands-on projects that reinforce theoretical concepts"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Certified Trainer",
      description: "Expert guidance from qualified and certified instructors"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competition Access",
      description: "Support for national/international STEM competitions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Advanced Modules",
      description: "Aerospace, drone & AI robotics modules"
    }
  ];

  const projects = [
    {
      name: "Gesture-Controlled LED Effects",
      icon: <Zap className="w-8 h-8" />,
      description: "Control LED patterns with hand gestures",
      image: assetss.project1,
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "Smart Home Control via App",
      icon: <Home className="w-8 h-8" />,
      description: "Remote home automation using mobile app",
      image: assetss.project2,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Obstacle Avoidance Robot",
      icon: <Settings className="w-8 h-8" />,
      description: "Autonomous navigation with obstacle detection",
      image: assetss.project3,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Gesture Controlled Robot",
      icon: <Bluetooth className="w-8 h-8" />,
      description: "Robot control through intuitive hand gestures",
      image: assetss.project4,
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "Bluetooth Controlled Car",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Wireless vehicle control via Bluetooth",
      image: assetss.project5,
      color: "from-rose-500 to-pink-600"
    }
  ];

  const labComponents = [
    {
      icon: <CircuitBoard className="w-5 h-5" />,
      name: "Leela by Aaklan Microcontroller",
      description: "Advanced microcontroller for smart projects"
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      name: "Multiple type of Sensors",
      description: "Various sensors for different applications"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      name: "Multiple type of Motors",
      description: "DC, servo, and stepper motors"
    },
    {
      icon: <BookText className="w-5 h-5" />,
      name: "Level wise Booklets",
      description: "Structured learning materials"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      name: "Soldering Machine",
      description: "Professional soldering equipment"
    },
    {
      icon: <Printer className="w-5 h-5" />,
      name: "3D printer",
      description: "For prototyping and model creation"
    }
  ];

  const microcontrollerFeatures = [
    { 
      name: "Matrix Display", 
      icon: <Gauge className="w-5 h-5" />,
      description: "High-resolution LED matrix for visual output"
    },
    { 
      name: "Motor Mounting Port", 
      icon: <Gauge className="w-5 h-5" />,
      description: "Dedicated ports for motor connections"
    },
    { 
      name: "Ultrasonic Sensor Port", 
      icon: <Satellite className="w-5 h-5" />,
      description: "Connect ultrasonic sensors for distance measurement"
    },
    { 
      name: "Type C Port", 
      icon: <Microchip className="w-5 h-5" />,
      description: "Modern USB-C connectivity"
    },
    { 
      name: "ESP-WROOM-32", 
      icon: <Cpu className="w-5 h-5" />,
      description: "Powerful microcontroller with WiFi & Bluetooth"
    }
  ];

  return (
    <section className="relative min-h-screen py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles - Responsive sizes */}
          <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                        linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>

          {/* Animated Gradient Orbs - Responsive sizes */}
          <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

          {/* Additional floating elements - Responsive positioning */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 mb-6 hover:shadow-xl transition-shadow duration-300" data-aos="fade-down" data-aos-delay="200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E22213] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E22213]"></span>
            </span>
            <Rocket className="w-4 h-4 text-[#0b234a]" />
            <span className="text-sm font-semibold text-[#0b234a]">Complete Lab Solution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4" data-aos="fade-up" data-aos-delay="200">
            <span className="bg-gradient-to-r from-[#E22213] via-[#0b234a] to-orange-500 bg-clip-text text-transparent">
              What We Offer Robotics and AI Lab
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4" data-aos="fade-up" data-aos-delay="300">
            Project-based learning aligned with NEP & global STEM standards. Advanced aerospace,
            drone & AI robotics modules with complete support for competitions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Lab Setup - Full Width on Mobile, 2 cols on Large */}
          <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="300">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
              <div className="flex flex-col gap-6 lg:gap-8">
                {/* Image */}
                <div className="w-full" data-aos="zoom-in" data-aos-delay="400">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl aspect-video sm:aspect-[16/10] lg:aspect-[16/9]">
                    <img
                      src={assetss.labSetup}
                      alt="Aaklan Robotics and AI Lab Setup"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                        <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                        Lab Setup Overview
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div data-aos="fade-up" data-aos-delay="500">
                  <div className="space-y-3 sm:space-y-4 mb-6">
                    {[
                      "Project-based learning aligned with NEP & global STEM standards",
                      "Support for national/international STEM competitions",
                      "Advanced aerospace, drone & AI robotics modules"
                    ].map((text, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 group cursor-pointer"
                        data-aos="fade-up" 
                        data-aos-delay={600 + (index * 100)}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-[#0b234a]/5 via-[#E22213]/5 to-orange-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#0b234a]/10" data-aos="fade-up" data-aos-delay="900">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#E22213] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700">
                        <strong className="text-[#0b234a]">Complete Support:</strong> Aaklan provides curriculum, lab setup, equipment,
                        maintenance and complete support for Atal Tinkering Labs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microcontroller Card */}
          <div className="lg:col-span-1" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
              <div className="flex flex-col h-full">
                <div className="text-center mb-6" data-aos="zoom-in" data-aos-delay="500">
                  <div className="relative w-full aspect-square max-w-xs mx-auto mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={assetss.microcontroller}
                      alt="Aaklan Microcontroller"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Aaklan Microcontroller</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Your first smart PCB for students! Perfect for schools, makers, and young innovators.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3 flex-grow">
                  {microcontrollerFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/10 rounded-lg sm:rounded-xl p-2 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                      data-aos="fade-up"
                      data-aos-delay={600 + (index * 100)}
                    >
                      <div className="flex-1">
                        <span className="text-sm sm:text-base font-medium block">{feature.name}</span>
                        <span className="text-xs text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Components */}
        <div 
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-6 sm:mb-8 flex items-center gap-3" data-aos="fade-right" data-aos-delay="300">
            <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-[#E22213]" />
            Lab Components
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {labComponents.map((component, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                data-aos="zoom-in"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-white">
                    {component.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{component.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div 
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 mb-8 lg:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-6 sm:mb-8 flex items-center gap-3" data-aos="fade-right" data-aos-delay="300">
            <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#E22213]" />
            What We Offer
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="relative p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                data-aos="flip-up"
                data-aos-delay={400 + (index * 100)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#E22213]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#E22213] to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                <ChevronRight className={`absolute bottom-4 right-4 w-5 h-5 text-[#E22213] transform transition-all duration-300 ${hoveredFeature === index ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div 
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b234a] mb-8 sm:mb-12 text-center" data-aos="fade-up" data-aos-delay="300">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform transition-all duration-300">
                      <div className={`mb-3 transition-all duration-300 ${activeProject === index ? 'scale-110' : 'scale-100'}`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                          <div className="text-white">
                            {project.icon}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{project.name}</h4>
                      <p className={`text-xs sm:text-sm text-gray-200 transition-all duration-300 ${activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AaklanLabSection;