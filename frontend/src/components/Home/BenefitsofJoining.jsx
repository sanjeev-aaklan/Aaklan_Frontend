import React from 'react'
import { vrFeatures } from '../../assets/assets.js'

const BenefitsofJoining = () => {
    return (
        <section class="bg-[#071C44] text-white py-16 px-6">
            
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div class="flex justify-center">
                    <div class="relative w-full max-w-md">
                        <img
                            src={vrFeatures.AaklanLab}
                            alt="Instructor working with robotics"
                            class="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 class="text-4xl font-bold leading-tight">
                        Benefits of Joining <br />
                        <span class="text-yellow-400">Aaklan Labs</span>
                    </h2>

                    <div class="mt-10 space-y-10">


                        <div class="flex items-start space-x-4">
                            <div class="bg-white text-[#071C44] p-3 rounded-full">
                                📚
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold">Project-Based Learning</h3>
                                <p class="text-gray-300">
                                    Engage in hands-on learning by creating real projects
                                    that enhance skills while having fun.
                                </p>
                            </div>
                        </div>


                        <div class="flex items-start space-x-4">
                            <div class="bg-white text-[#071C44] p-3 rounded-full">
                                ⚙️
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold">Future-Ready Skills</h3>
                                <p class="text-gray-300">
                                    Acquire skills that prepare kids for the tech-driven
                                    world of tomorrow.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="bg-white text-[#071C44] p-3 rounded-full">
                                👨‍🏫
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold">Experienced Instructors</h3>
                                <p class="text-gray-300">
                                    Learn from industry experts who guide and inspire
                                    students every step of the way.
                                </p>
                            </div>
                        </div>


                        <div class="flex items-start space-x-4">
                            <div class="bg-white text-[#071C44] p-3 rounded-full">
                                🏅
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold">Certification</h3>
                                <p class="text-gray-300">
                                    Gain recognition for accomplishments with certificates
                                    showcasing completed projects and newfound skills.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default BenefitsofJoining