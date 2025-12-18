import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { some } from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const Navigate = useNavigate()
    return (
        <div className="relative w-full overflow-hidden bg-white">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Circles - Responsive sizes */}
                <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#E22213]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                <div className="absolute top-20 right-4 sm:top-40 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#0b234a]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(#0b234a 1px, transparent 1px),
                              linear-gradient(90deg, #0b234a 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                    }}></div>
                </div>

                {/* Animated Gradient Orbs - Responsive sizes */}
                <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-r from-[#E22213] to-[#0b234a] rounded-full opacity-5 animate-pulse-slow"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-linear-to-r from-[#0b234a] to-orange-500 rounded-full opacity-5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

                {/* Additional floating elements - Responsive positioning */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-linear-to-br from-[#E22213] to-orange-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-linear-to-tr from-[#0b234a] to-[#E22213] rounded-full opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
            {/* Dot Decorations */}
            <div className="dot-cluster absolute top-[-50px] left-[-50px]"></div>
            <div className="dot-cluster dot-sm absolute top-[-65px] right-[-55px]"></div>
            <div className="dot-cluster absolute bottom-[-50px] left-[-50px]"></div>
            <div className="dot-cluster absolute bottom-[-50px] right-[-50px]"></div>

            {/* Orange Glow Blobs */}
            <div className="absolute top-[-68px] right-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full"></div>
            <div className="absolute top-[-68px] left-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full"></div>

            {/* Bottom SVG Shape */}
            <div className="absolute bottom-0 w-full pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-[250px]" preserveAspectRatio="none">
                    <path fill="#FF6900" d="M0,256L30,250.7C60,245..."></path>
                </svg>
            </div>

            <div className="absolute bottom-0 w-full pointer-events-none">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-[250px]"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#FF6900"
                        fillOpacity="0.7"
                        d="M0,256L30,250.7C60,245,120,235,180,224C240,213,300,203,360,208C420,213,480,235,540,229.3C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,96C1140,107,1200,117,1260,133.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative px-4 sm:px-8 md:px-16 lg:px-20 py-14 flex flex-col md:flex-row items-center gap-10">

                {/* Text Section */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left max-w-lg md:max-w-3xl z-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                        A DeepTech-Driven EdTech Ecosystem <br />

                        <span className="text-orange-500 relative inline-block">
                            <Typewriter
                                words={["Viksit Bharat", "Future of Learning", "India's Innovation Hub"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                            <span className="absolute left-0 -bottom-1 h-1 w-full bg-orange-500 rounded-full -rotate-3" />
                        </span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start mt-6">
                        <motion.button onClick={() => Navigate('/book-demo')} whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg font-semibold">
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => document.getElementById("statsSection")?.scrollIntoView({
                                behavior: "smooth"
                            })}
                            className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
                        >
                            Read More
                        </motion.button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
                    <img src={some.circleBanner} alt="Hero Visual" className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-xl mx-auto" />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;

// import { motion } from "framer-motion";
// import { some } from "../assets/assets.js";

// const Hero = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-white">

//             {/* 🔥 Dot Cluster Top Left */}
//             <div className="dot-cluster absolute top-[-50px] left-[-50px]"></div>

//             {/* 🔥 Dot Cluster Top Right */}
//             <div className="dot-cluster dot-sm absolute top-[-65px] right-[-55px]"></div>

//             {/* 🔥 Dot Cluster Bottom Center */}
//             <div className="dot-cluster absolute bottom-[-50px] left-[-50px]"></div>

//             <div className="dot-cluster absolute bottom-[-50px] right-[-50px]"></div>

//             <div className="absolute top-[-68px] right-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full pointer-events-none"></div>
//             <div className="absolute top-[-68px] left-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full pointer-events-none"></div>

//             {/* Bottom Gradient */}
//             <div className="absolute bottom-0 w-full pointer-events-none">
//                 <svg
//                     viewBox="0 0 1440 320"
//                     className="w-full h-[250px]"
//                     preserveAspectRatio="none"
//                 >
//                     <path
//                         fill="#FF6900"
//                         fillOpacity="1"
//                         d="M0,256L30,250.7C60,245,120,235,180,224C240,213,300,203,360,208C420,213,480,235,540,229.3C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,96C1140,107,1200,117,1260,133.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L0,320Z"
//                     ></path>
//                 </svg>
//             </div>



//             {/* Main Content */}
//             <div className="relative px-4 sm:px-8 md:px-16 lg:px-20 py-14 flex flex-col md:flex-row items-center justify-between gap-10">

//                 {/* Text */}
//                 <motion.div
//                     initial={{ x: -30, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center md:text-left max-w-lg md:max-w-3xl z-10"
//                 >
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
//                         A DeepTech-Driven EdTech Ecosystem <br />
//                         for{" "}
//                         <span className="text-orange-500 relative inline-block">
//                             Viksit Bharat
//                             <span
//                                 className="absolute left-0 -bottom-1 h-1 w-full bg-orange-500 rounded-full"
//                                 style={{ transform: "rotate(-3deg)", transformOrigin: "left bottom" }}
//                             ></span>
//                         </span>
//                     </h1>

//                     {/* Buttons */}
//                     <div className="flex gap-4 justify-center md:justify-start mt-6">
//                         <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2 sm:px-8 sm:py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg font-semibold">Get Started</motion.button>
//                         <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2 sm:px-8 sm:py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">Read More</motion.button>
//                     </div>
//                 </motion.div>

//                 {/* Image */}
//                 <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
//                     <img src={some.circleBanner} alt="Hero Visual" className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-xl mx-auto" />
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// export default Hero;
