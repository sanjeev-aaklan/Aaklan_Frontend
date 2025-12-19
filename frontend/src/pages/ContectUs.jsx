import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactUs() {
  const googleMapLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6023388628223!1d75.8308751!2d26.788943099999997!3d26.7889431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53914157649%3A0xf8fdd0bdcddcb95!2sAaklan!5e0!3m2!1sen!2sin!4v1763838459064!5m2!1sen!2sin";

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#E22213]" />,
      title: "Our Address",
      details: "Jaipur, Rajasthan 302026, India",
      link: "https://maps.app.goo.gl/MAMNwako8fqeBeRn8",
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#E22213]" />,
      title: "Email Us",
      details: "info@aaklan.com\nsupport@aaklan.com",
      link: "mailto:info@aaklan.com",
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-[#E22213]" />,
      title: "Call Us",
      details: "+91 - 9571677609\n+91 - 1234567890",
      link: "tel:+919571677609",
    },
    {
      icon: <FaClock className="text-2xl text-[#E22213]" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#0b234a] text-white py-14">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Reach out to us — we're here to help guide your learning journey.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0b234a] mb-3">
            Let's Connect
          </h2>
          <p className="text-gray-600">
            Have questions about admissions, courses, or visits? Contact us directly.
          </p>
        </div>

        <div className="space-y-5">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              onClick={() => info.link && window.open(info.link, "_blank")}
              className={`flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-md transition-all ${
                info.link
                  ? "cursor-pointer hover:shadow-xl hover:scale-[1.02]"
                  : ""
              }`}
            >
              <div className="bg-orange-100 p-3 rounded-lg">
                {info.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b234a] mb-1">
                  {info.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {info.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0b234a] mb-3">Find Us Here</h2>
          <p className="text-gray-600">
            Visit our campus in Jaipur and experience our learning environment.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
          <iframe
            src={googleMapLink}
            className="w-full h-80 md:h-96 rounded-xl"
            loading="lazy"
            allowFullScreen
            title="Aaklan Location Map"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://maps.app.goo.gl/MAMNwako8fqeBeRn8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0b234a] text-white rounded-lg font-semibold hover:bg-[#E22213] transition"
          >
            Open on Google Maps
          </a>
          <a
            href="tel:+919571677609"
            className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
