import React from 'react';
import { FaRocket, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

const CultureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#2d4a8a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#E22213]/10 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-500/10 rounded-full mix-blend-screen blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#E22213]/20 to-orange-500/20 rounded-full text-sm font-semibold mb-4 border border-white/10">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Our <span className="bg-gradient-to-r from-[#E22213] via-orange-500 to-orange-400 bg-clip-text text-transparent">Culture</span> & Values
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                At Aaklan, we foster an environment of innovation, collaboration, and continuous learning. 
                We believe that when our team thrives, our students succeed.
              </p>
            </div>
            
            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: FaRocket, 
                  title: "Innovation First", 
                  text: "We constantly push boundaries in education technology",
                  gradient: "from-[#E22213]/20 to-[#E22213]/10"
                },
                { 
                  icon: FaHeart, 
                  title: "Student-Centric", 
                  text: "Every decision prioritizes student success",
                  gradient: "from-orange-500/20 to-orange-500/10"
                },
                { 
                  icon: FaUsers, 
                  title: "Collaborative Spirit", 
                  text: "Teamwork and knowledge sharing drive success",
                  gradient: "from-[#E22213]/20 to-[#E22213]/10"
                },
                { 
                  icon: FaStar, 
                  title: "Excellence", 
                  text: "We strive for excellence in teaching and tech",
                  gradient: "from-orange-500/20 to-orange-500/10"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2 text-white group-hover:text-orange-100 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                );
              })}
            </div>

            
          </div>

          {/* Right Column - Illustration/Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden">
              {/* Abstract gradient shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E22213]/20 via-transparent to-orange-500/20 rounded-3xl"></div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#E22213]/30 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-full blur-xl"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
                    <FaUsers className="text-4xl text-white/80" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Team Culture</h3>
                  <p className="text-white/70 max-w-md mx-auto">
                    A vibrant community of educators, developers, and innovators working together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;