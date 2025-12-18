import React from 'react'
import { some } from '../assets/assets'

const CodingAi = () => {
    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#082046] leading-snug">
                        Coding and AI Platform
                    </h2>

                
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <span className="font-semibold text-[#082046]">Interactive Coding Platforms:&nbsp;</span>
                            Platforms like <span className="font-medium text-[#082046]">PictoBlox, MIT App Inventor, Scratch,</span> and 
                            <span className="font-medium text-[#082046]"> Code.org</span> make coding accessible and engaging through visual programming.  
                            These tools empower students to build interactive projects, apps, and games — developing strong 
                            <span className="font-semibold text-[#082046]"> creativity, logical thinking,</span> and 
                            <span className="font-semibold text-[#082046]"> problem-solving skills.</span>
                        </p>
                    </div>

                    <button className="mt-8 bg-[#EA8E0A] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition">
                        Learn Coding Now!
                    </button>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={some.PictoBlox3}
                        alt="AI & Robotics Kits"
                        className="w-full max-w-xl object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default CodingAi
