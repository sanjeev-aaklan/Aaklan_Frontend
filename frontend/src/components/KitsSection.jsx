import { some } from "../assets/assets";

export default function KitsSection() {
  const kits = [
    "AI Delivery Robot",
    "Gripper Robot", 
    "IR Detector",
    "Edge Detector",
    "Line Follower Robot",
    "Obstacle Avoidance Bot",
    "Voice Controlled Robot"
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#082046] mb-4">
            Next-Gen <span className="text-[#EA8E0A]">AI & Robotics</span> Laboratory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Equip your institution with cutting-edge Quarky DIY kits designed to transform AI learning into an engaging, hands-on experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section with Decorative Elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src={some.roboticsLab}
                alt="AI & Robotics Kits"
                className="w-full max-w-xl rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-60 z-0"></div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {kits.map((kit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#EA8E0A] rounded-full"></div>
                  <span className="text-gray-800 font-medium">{kit}</span>
                </div>
              ))}
            </div>

            {/* Highlight Card */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-[#EA8E0A] p-6 rounded-xl shadow-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EA8E0A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#082046] mb-2">
                    Hands-On Learning Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive kits include project-based activities, step-by-step guides, and real-world applications that make AI concepts tangible and exciting for students of all levels.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#EA8E0A] hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Explore Robotics Kits
                <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="flex-1 bg-white border-2 border-[#082046] text-[#082046] hover:bg-[#082046] hover:text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Curriculum
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Used by 500+ Schools</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Age 10-18 Appropriate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}