import { CheckCircle } from "lucide-react";
import { some } from "../assets/assets";

export default function AiRoboticsSection() {
  const items = [
    "Computer Education",
    "Coding",
    "Artificial Intelligence",
    "Robotics",
  ];

  return (
    <section className="relative w-full bg-[#082046] py-16 px-4 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <img
            src={some.SkillfulMindsCurriculum}
            alt="Teacher guiding students"
            className="w-full max-w-lg object-cover lg:scale-[1.15] lg:translate-x-6"
          />
        </div>
        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Transforming <span className="text-orange-400">Computer Labs</span> into
            Innovative <span className="text-orange-400">AI and Robotics Lab</span>
          </h2>

          <p className="text-gray-200 leading-relaxed mb-10">
            Our cutting-edge program transforms traditional computer labs into dynamic AI and 
            Robotics labs, revolutionizing education for CBSE, ICSE, and all state board 
            curriculums. By integrating AI and coding skills, we prepare students to thrive in 
            the 21st century, fostering innovation, critical thinking, and problem-solving 
            abilities that will shape the future. Our labs are designed to ignite curiosity and 
            inspire the next generation of tech leaders, equipping them with hands-on experience 
            in AI and robotics—skills essential for success in tomorrow's world.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {items.map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={22} className="text-orange-400" />
                <span className="text-white text-lg font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
