import { vrFeatures } from "../assets/assets";

export default function VRFeatures() {
  const features = [
    {
      img: vrFeatures.vrFeat1, 
      title: "Hybrid Learning",
      desc: "An expert teacher describes the concept while students enter the world of virtual reality to visually grasp the topic taught.",
      color: "border-[#0b234a]",
      gradient: "from-[#0b234a] to-[#0b234a]/90",
      hover: "hover:border-[#0b234a] hover:bg-[#0b234a]/5"
    },
    {
      img: vrFeatures.vrFeat2,
      title: "Immersive Experience",
      desc: "Complex science topics become easy to comprehend through holistic VR and 360° virtual science lab.",
      color: "border-orange-500",
      gradient: "from-orange-500 to-orange-400",
      hover: "hover:border-orange-500 hover:bg-orange-500/5"
    },
    {
      img: vrFeatures.vrFeat3,
      title: "Enjoyable Learning",
      desc: "VR gaming experience seamlessly stitches learning through play, offering an amusing experience.",
      color: "border-[#E22213]",
      gradient: "from-[#E22213] to-[#E22213]/80",
      hover: "hover:border-[#E22213] hover:bg-[#E22213]/5"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#0b234a] rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#E22213] rounded-full"></div>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-14 relative z-10">
        Enthral your brain with{" "}
        <span className="bg-gradient-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">amazing impressions</span> of the
        lessons through <br />
        <span className="bg-gradient-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent">Virtual Reality</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white p-10 rounded-3xl shadow-lg border-2 border-transparent ${item.hover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group`}
          >
            {/* Icon Container with Gradient Border */}
            <div className="relative mb-6">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mx-auto`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating Element */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
            </div>

            <h3 className={`text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r ${item.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md group-hover:text-gray-700 transition-colors duration-300">
              {item.desc}
            </p>

            {/* Bottom Accent */}
            <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.gradient} rounded-full mx-auto group-hover:w-20 transition-all duration-300`}></div>
          </div>
        ))}
      </div>

      
    </section>
  );
}