// // components/Career/PerksBenefits.js
// import React from 'react';
// import { FaMoneyBillWave, FaHome, FaChild, FaHeart } from 'react-icons/fa';

// const PerksBenefits = () => {
//   const perks = [
//     {
//       icon: FaMoneyBillWave,
//       title: "Competitive Salary",
//       description: "Industry-standard compensation with regular reviews"
//     },
//     {
//       icon: FaHome,
//       title: "Flexible Work",
//       description: "Remote and hybrid options for better work-life balance"
//     },
//     {
//       icon: FaChild,
//       title: "Learning Budget",
//       description: "Annual budget for courses, books, and conferences"
//     },
//     {
//       icon: FaHeart,
//       title: "Health Insurance",
//       description: "Comprehensive health coverage for you and family"
//     }
//   ];

//   return (
//     <section className="py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">Why Join Aaklan?</h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
//             We believe in taking care of our team so they can focus on making a difference
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {perks.map((perk, index) => {
//             const IconComponent = perk.icon;
//             return (
//               <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <div className="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
//                   <IconComponent className="text-2xl text-orange-500 group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#0b234a] mb-3">{perk.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PerksBenefits;


import React from 'react';
import { FaMoneyBillWave, FaHome, FaChild, FaHeart, FaGraduationCap, FaCalendarAlt, FaUmbrellaBeach, FaHandsHelping } from 'react-icons/fa';

const PerksBenefits = () => {
  const perks = [
    {
      icon: FaMoneyBillWave,
      title: "Competitive Salary",
      description: "Industry-standard compensation with performance bonuses",
      color: "from-[#E22213]/20 to-orange-500/20"
    },
    {
      icon: FaHome,
      title: "Flexible Work",
      description: "Remote and hybrid options with flexible hours",
      color: "from-[#0b234a]/20 to-blue-500/20"
    },
    {
      icon: FaGraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, certifications, and conferences",
      color: "from-[#E22213]/20 to-purple-500/20"
    },
    {
      icon: FaHeart,
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and family",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: FaCalendarAlt,
      title: "Paid Time Off",
      description: "Generous vacation days and paid holidays",
      color: "from-[#0b234a]/20 to-green-500/20"
    },
    {
      icon: FaUmbrellaBeach,
      title: "Wellness Programs",
      description: "Mental health support and wellness activities",
      color: "from-[#E22213]/20 to-pink-500/20"
    },
    {
      icon: FaChild,
      title: "Parental Leave",
      description: "Paid parental leave for new parents",
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: FaHandsHelping,
      title: "Mentorship",
      description: "Career guidance and professional development",
      color: "from-[#0b234a]/20 to-cyan-500/20"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-16 left-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b234a] mb-4">
            Perks & <span className="bg-gradient-to-r from-[#E22213] to-orange-500 bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We invest in our team's wellbeing and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${perk.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-2xl text-[#0b234a] group-hover:text-[#E22213] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0b234a] mb-3 text-center group-hover:text-[#E22213] transition-colors duration-300">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm md:text-base">
            {[
              { label: "Learning Budget", value: "$1,000/year" },
              { label: "Vacation Days", value: "20+" },
              { label: "Parental Leave", value: "12 weeks" },
              { label: "Wellness Stipend", value: "$500/year" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center hover:scale-110 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="text-xl md:text-2xl font-bold text-[#E22213]">{stat.value}</div>
                <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;