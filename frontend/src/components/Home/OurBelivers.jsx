import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ourBelivers } from '../../assets/OurBelivers/OurBelivers.js';

const OurBelivers = () => {
  const believers = [
    { id: 1, logo: ourBelivers.gps, name: 'gps' },
    { id: 2, logo: ourBelivers.sga, name: 'sga' },
    { id: 3, logo: ourBelivers.skyworld, name: 'skyworld' },
    { id: 4, logo: ourBelivers.sas, name: 'sas' },
    { id: 5, logo: ourBelivers.chatrpati, name: 'chatrpati' },
    { id: 6, logo: ourBelivers.mac, name: 'mac' },
    { id: 7, logo: ourBelivers.mhs, name: 'mhs' },
    { id: 9, logo: ourBelivers.skyworld, name: 'skyworld' },
    { id: 10, logo: ourBelivers.mac, name: 'mac' },
  ];

  return (
    <section className="relative w-full py-16 bg-linear-to-br from-[#0b234a]/10 via-white to-[#E22213]/10">

      {/* Top Wave with New Colors */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0b234a" />
              <stop offset="100%" stopColor="#E22213" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#topWave)"
          ></path>
        </svg>
      </div>

      {/* Bottom Wave with New Colors */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bottomWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E22213" />
              <stop offset="100%" stopColor="#0b234a" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#bottomWave)"
          ></path>
        </svg>
      </div>

      {/* Floating Orbs with New Colors */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-linear-to-r from-[#0b234a] to-[#E22213] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-linear-to-r from-orange-500 to-[#E22213] rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-linear-to-r from-[#E22213] to-orange-500 rounded-full opacity-10 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header with New Gradient Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#0b234a] via-orange-500 to-[#E22213] bg-clip-text text-transparent">
            Our Believers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Your trust in our services motivates us and strengthens our connections.
            Alone we can do so little, together we can do so much.
          </p>
        </div>

        {/* Single Line Swiper Carousel with New Gradient Background */}
        <div className="relative bg-linear-to-r from-[#0b234a]/10 via-white to-[#E22213]/10 rounded-3xl p-8 shadow-lg border border-orange-500/20 backdrop-blur-sm">

          {/* Main Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 80,
              },
            }}
            className="single-line-swiper"
          >
            {believers.map((believer) => (
              <SwiperSlide key={believer.id}>
                <div className="flex items-center justify-center p-4 h-28 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0b234a]/20 hover:border-orange-500/50 backdrop-blur-sm">
                  <img
                    src={believer.logo}
                    alt={`${believer.name} Logo`}
                    className="max-w-full max-h-16 object-contain mx-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient Overlays with New Colors */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#0b234a]/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#E22213]/10 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Stats Section with New Colors */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {[
            { number: '100+', text: 'Schools', color: 'from-[#0b234a] to-[#0b234a]/80' },
            { number: '100K+', text: 'Students', color: 'from-orange-500 to-orange-600' },
            { number: '25+', text: 'Cities', color: 'from-[#E22213] to-[#E22213]/80' },
            { number: '5+', text: 'Years', color: 'from-[#0b234a] to-[#E22213]' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBelivers;