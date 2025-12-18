import React from 'react'
import { motion } from 'framer-motion'
import { vrFeatures } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const VrFeatureSection = () => {
    const navigate = useNavigate()
    return (
        <section className="w-full py-10 px-4 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0b234a] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-[#E22213] rounded-full"></div>
            </div>

            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-14 relative z-10">
                Gear up for a fascinating,{" "}
                <span className="bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">unforgettable</span>, and deep learning<br />
                <span className="bg-gradient-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent">experience with Aaklan</span>
            </h2>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-xl flex items-center justify-center">
                        {/* Main Image Container */}
                        <div className="relative bg-gradient-to-br from-[#0b234a]/5 to-orange-500/5 rounded-3xl p-8 border border-[#0b234a]/10">
                            <img
                                src={vrFeatures.AaklanVr}
                                alt="AI & Robotics Kits"
                                className="w-[65%] object-contain"
                            />
                        </div>

                        {/* Animated Element */}
                        <motion.div 
                            className="absolute right-0 translate-x-6 bg-gradient-to-br from-[#E22213]/10 to-orange-500/10 rounded-2xl p-4 border border-[#E22213]/20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <img
                                src={vrFeatures.d_elements}
                                alt="Extra VR Feature"
                                className="w-full object-contain"
                            />
                        </motion.div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0b234a] rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-[#0b234a] leading-snug">
                        Explore endless creativity through the lens of Virtual Reality
                    </h2>

                    <div className="text-gray-700 text-lg mt-4 leading-relaxed space-y-4">
                        <p>
                            AaklanVR's immersive VR technology creates an artificial world with numerous educational activities. Here, students have the freedom to explore, experiment, and encounter a multitude of things, fostering their creativity and imagination.
                        </p>
                        
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#0b234a] to-[#0b234a]/80 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                                <span>Immersive Virtual Explorations</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                                <span>Engaging Interactive Educational Activities</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#E22213] to-[#E22213]/80 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                                <span>Practical Learning in Virtual Reality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#0b234a] to-[#E22213] rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                                <span>A Comprehensive Library of 850+ Learning Concepts</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button onClick={() => navigate('vr-ar-lab')} className="bg-gradient-to-r from-[#0b234a] to-[#E22213] hover:from-[#0b234a]/90 hover:to-[#E22213]/90 text-white font-semibold text-lg px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Explore VR Now</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        
                        <button onClick={() => navigate('/book-demo')} className="bg-white text-[#0b234a] font-semibold text-lg px-4 py-2 rounded-xl shadow-lg hover:shadow-xl border-2 border-[#0b234a]/20 hover:border-[#0b234a] transform hover:-translate-y-1 transition-all duration-300">
                            Book Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#0b234a] to-[#0b234a]/80 bg-clip-text text-transparent">850+</div>
                            <div className="text-gray-600 text-sm">Learning Concepts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">50+</div>
                            <div className="text-gray-600 text-sm">VR Activities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#E22213] to-[#E22213]/80 bg-clip-text text-transparent">10K+</div>
                            <div className="text-gray-600 text-sm">Students</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VrFeatureSection;