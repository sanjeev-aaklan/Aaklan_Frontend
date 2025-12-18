import React from "react";
import { futures } from "../../assets/assets.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { useNavigate } from "react-router-dom";

const FutureSkills = () => {
  const Navigate = useNavigate()

  const items = [
    {
      name: "Coding - Graphical & Python",
      image: futures.ProgrammingImg,
      color: "from-[#0b234a] to-[#0b234a]/80",
      description: "Learn programming fundamentals through visual blocks and Python syntax",
      level: "Beginner to Advanced",
      duration: "12 Weeks"
    },
    {
      name: "Artificial Intelligence",
      image: futures.Artificial_Intelligence,
      color: "from-orange-500 to-orange-400",
      description: "Understand AI concepts, machine learning, and neural networks",
      level: "Intermediate",
      duration: "16 Weeks"
    },
    {
      name: "Machine Learning",
      image: futures.MlImg,
      color: "from-[#E22213] to-[#E22213]/80",
      description: "Build and train ML models with real-world applications",
      level: "Advanced",
      duration: "20 Weeks"
    },
    {
      name: "Robotics",
      image: futures.RoboticsImg,
      color: "from-[#0b234a] to-[#E22213]",
      description: "Design, build and program robots with sensors and motors",
      level: "Beginner to Intermediate",
      duration: "14 Weeks"
    },
    {
      name: "AR & VR Tech",
      image: futures.ArVrImg,
      color: "from-orange-500 to-[#E22213]",
      description: "Create immersive augmented and virtual reality experiences",
      level: "Intermediate",
      duration: "18 Weeks"
    },
    {
      name: "Internet of Things (IoT)",
      image: futures.IotImg,
      color: "from-[#0b234a] to-orange-500",
      description: "Connect devices and build smart systems with IoT technology",
      level: "Intermediate to Advanced",
      duration: "16 Weeks"
    },
    {
      name: "Biomimetic Robot",
      image: futures.BiomimeticImg,
      color: "from-[#E22213] to-orange-500",
      description: "Create robots inspired by nature and biological systems",
      level: "Advanced",
      duration: "22 Weeks"
    },
    {
      name: "Advanced Robotics",
      image: futures.AdvancedRoboticsImg,
      color: "from-[#0b234a] via-orange-500 to-[#E22213]",
      description: "Master advanced robotics concepts and autonomous systems",
      level: "Expert",
      duration: "24 Weeks"
    },
  ];

  return (
    <section className="py-4 px-4 bg-linear-to-br from-white to-gray-50 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#0b234a] rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#E22213] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-500/20 shadow-lg mb-2">
            <span className="w-2 h-2 bg-[#E22213] rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-[#0b234a] rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-[#0b234a]">Future-Ready Skills</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Master <span className="bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">In-Demand</span>{" "}
            <span className="bg-linear-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prepare for the future with hands-on courses in emerging technologies.
            Our project-based approach ensures practical learning and real-world application.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Featured Course */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={futures.ProgrammingImg}
                  alt="Featured Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Featured Course</h3>
                    <p className="text-gray-600">Most popular among students</p>
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-linear-to-r from-[#0b234a] to-[#E22213] text-white font-semibold rounded-full text-sm">
                    #1 Trending
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coding & Programming</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  Start your coding journey with graphical programming and progress to Python.
                  Build real projects and develop problem-solving skills.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0b234a] mb-1">50+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">48</div>
                    <div className="text-sm text-gray-500">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#E22213] mb-1">100%</div>
                    <div className="text-sm text-gray-500">Hands-on</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-700 mb-1">8-18</div>
                    <div className="text-sm text-gray-500">Age Group</div>
                  </div>
                </div>

                <button onClick={() => Navigate('/book-demo')} className="w-full bg-linear-to-r from-[#0b234a] to-[#E22213] text-white font-semibold py-2 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Demo Request
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Courses Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCards]}
              effect="cards"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: '.courses-next',
                prevEl: '.courses-prev',
              }}
              pagination={{
                clickable: true,
                el: '.courses-pagination',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="h-96"
            >
              {items.map((item, index) => (
                <SwiperSlide key={item.name}>
                  <div className="rounded-3xl p-8 h-full text-white relative overflow-hidden group cursor-pointer">
                    {/* Clean Background Image - No Color Overlay */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Only minimal dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                            {item.level}
                          </span>
                          <span className="text-2xl font-bold text-white drop-shadow-xl bg-black/40 px-3 py-1 rounded-lg">#{index + 1}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 drop-shadow-xl bg-black/30 px-4 py-2 rounded-lg inline-block">
                          {item.name}
                        </h3>

                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 mb-6">
                          <p className="text-white leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Course Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{item.duration}</span>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="pt-4 mt-4">
                        <button
                          onClick={() => Navigate('/course-details')}
                          className="w-full px-4 py-3 bg-black/60 backdrop-blur-lg rounded-xl text-white font-medium hover:bg-black/70 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 group"
                        >
                          <span>View Course Details</span>
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Hover Effect - Slight brightness increase */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="courses-prev p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50 group">
                <svg className="w-6 h-6 text-gray-700 group-hover:text-[#0b234a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="courses-pagination flex gap-2"></div>

              <button className="courses-next p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50 group">
                <svg className="w-6 h-6 text-gray-700 group-hover:text-[#0b234a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSkills;