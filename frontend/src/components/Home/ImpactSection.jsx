import { useNavigate } from "react-router-dom";

export default function ImpactSection() {
  const data = [
    {
      percent: "100%",
      color: "from-[#0b234a] to-[#0b234a]/80",
      title: "Students Interest",
      desc: "VR transforms learning into a captivating adventure with 3D content and engaging graphics, sparking curiosity for deeper academic exploration."
    },
    {
      percent: "99%",
      color: "from-orange-500 to-orange-400",
      title: "Makes Learning Easy",
      desc: "Virtual reality technology simplifies learning, transforming difficult concepts into interactive, hands-on experiences, thereby enhancing understanding and engagement."
    },
    {
      percent: "99%",
      color: "from-[#E22213] to-[#E22213]/80",
      title: "Improved Teacher's Communication",
      desc: "With the help of Aaklan VR, teachers have the ability to provide textbook information with real-life experiences. It improves teacher's communication."
    },
    {
      percent: "98%",
      color: "from-[#0b234a] to-[#E22213]",
      title: "Comfortable Hardware",
      desc: "You can conduct various practical experiments and experiences in a safe virtual space without the need for physical resources or heavy hardware."
    }
  ];


  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 md:px-10 bg-linear-to-br from-gray-50 to-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Impact of <span className="bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent">VR in Education</span> and Classroom engagement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Circle Badge */}
            <div className="flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 group-hover:from-[#0b234a]/5 group-hover:to-orange-500/5 transition-all duration-300">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg bg-linear-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.percent}
                </div>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-[#0b234a] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
              {item.desc}
            </p>

            {/* Bottom accent bar */}
            <div className={`mt-4 h-1 w-12 rounded-full bg-linear-to-r ${item.color} transition-all duration-300 group-hover:w-16`}></div>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold bg-linear-to-r from-[#0b234a] to-[#E22213] bg-clip-text text-transparent mb-2">
              1000K+
            </div>
            <div className="text-gray-600 text-sm">Students Engaged</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold bg-linear-to-r from-orange-500 to-[#E22213] bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 text-sm">Schools Partnered</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-2xl font-bold bg-linear-to-r from-[#0b234a] to-orange-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <button onClick={() => navigate("/vr-ar-lab")}  className="bg-linear-to-r from-[#0b234a] to-[#E22213] hover:from-[#0b234a]/90 hover:to-[#E22213]/90 text-white font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          See VR in Action
        </button>
        <p className="text-gray-500 text-sm mt-4">
          Experience the future of education today
        </p>
      </div>
    </section>
  );
}