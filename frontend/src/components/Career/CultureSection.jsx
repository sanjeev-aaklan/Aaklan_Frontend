// // components/Career/CultureSection.js
// import React from 'react';
// import { FaRocket, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

// const CultureSection = () => {
//   return (
//     <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b234a] to-[#1a3a6e] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Culture & Values</h2>
//             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//               At Aaklan, we foster an environment of innovation, collaboration, and continuous learning. We believe that when our team thrives, our students succeed.
//             </p>
            
//             <div className="space-y-4">
//               {[
//                 { icon: FaRocket, text: "Innovation-driven approach to education" },
//                 { icon: FaHeart, text: "Student-first mindset in everything we do" },
//                 { icon: FaUsers, text: "Collaborative and supportive team environment" },
//                 { icon: FaStar, text: "Excellence in teaching and technology" }
//               ].map((item, index) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <div key={index} className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
//                       <IconComponent className="text-orange-400 text-xl" />
//                     </div>
//                     <span className="text-lg text-blue-100">{item.text}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
          
//           <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
//             <h3 className="text-2xl font-bold mb-6 text-center">Ready to Make an Impact?</h3>
//             <form className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="text"
//                 placeholder="What role interests you?"
//                 className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
//               >
//                 Get Notified About New Roles
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CultureSection;


import React from 'react';
import { FaRocket, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

const CultureSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#2d4a8a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-16 right-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-[#E22213] to-orange-500 bg-clip-text text-transparent">Culture</span> & Values
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              At Aaklan, we foster an environment of innovation, collaboration, and continuous learning. 
              We believe that when our team thrives, our students succeed.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: FaRocket, title: "Innovation First", text: "We constantly push boundaries in education technology" },
                { icon: FaHeart, title: "Student-Centric", text: "Every decision prioritizes student success and engagement" },
                { icon: FaUsers, title: "Collaborative Spirit", text: "Teamwork and knowledge sharing drive our success" },
                { icon: FaStar, title: "Excellence", text: "We strive for excellence in teaching and technology" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#E22213]/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-[#E22213] text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <span className="text-white/80 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Ready to <span className="bg-gradient-to-r from-[#E22213] to-orange-500 bg-clip-text text-transparent">Make an Impact?</span>
            </h3>
            <p className="text-white/90 text-center mb-6">
              Join our talent community and get notified about new opportunities
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E22213] focus:border-transparent transition-all duration-300"
              />
              <input
                type="text"
                placeholder="What role interests you?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E22213] focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E22213] to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-[#c01e11] hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Notified About New Roles
              </button>
            </form>
            <p className="text-white/60 text-xs text-center mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;