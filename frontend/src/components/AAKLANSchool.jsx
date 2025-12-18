import React from 'react'
import { some } from '../assets/assets'

const AAKLANSchool = () => {
    return (
        <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#082046] leading-snug">
                        AAKLAN - School Staff Training
                    </h2>

                    {/* Premium Highlighted Note Box */}
                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-sm">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <span className="font-semibold text-[#082046]">Empowering Educators with AI Expertise:&nbsp;</span>
                            Our esteemed master AI trainers are dedicated to transforming the teaching ecosystem by equipping 
                            <span className="font-medium text-[#082046]"> computer science teachers, STEM faculty, and IT staff</span> 
                            with cutting-edge skills.
                            <br /><br />
                            Through dynamic <span className="font-medium text-[#082046]">live training sessions</span> and 
                            <span className="font-medium text-[#082046]"> carefully designed short courses</span>, educators gain confidence and mastery to teach 
                            <span className="font-semibold text-[#082046]"> Artificial Intelligence, Machine Learning, and modern technology</span> effectively.
                            <br /><br />
                            This ensures teachers are fully prepared to inspire and guide the next generation of innovators.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={some.stafftraining}
                        alt="School Staff Training"
                        className="w-full max-w-xl object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default AAKLANSchool
