import { useState } from "react";
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Updated map embed link
  const googleMapLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6023388628223!1d75.8308751!2d26.788943099999997!3d26.7889431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53914157649%3A0xf8fdd0bdcddcb95!2sAaklan!5e0!3m2!1sen!2sin!4v1763838459064!5m2!1sen!2sin";

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl text-[#E22213]" />,
      title: "Our Address",
      details: "Jaipur, Rajasthan 302026, India",
      link: "https://maps.app.goo.gl/MAMNwako8fqeBeRn8",
    },
    {
      icon: <FaEnvelope className="text-2xl sm:text-3xl text-[#E22213]" />,
      title: "Email Us",
      details: "info@aaklan.com\nsupport@aaklan.com",
      link: "mailto:info@aaklan.com",
    },
    {
      icon: <FaPhoneAlt className="text-2xl sm:text-3xl text-[#E22213]" />,
      title: "Call Us",
      details: "+91 - 9571677609\n+91 - 1234567890",
      link: "tel:+919571677609",
    },
    {
      icon: <FaClock className="text-2xl sm:text-3xl text-[#E22213]" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com/aaklan" },
    { icon: <FaTwitter />, url: "https://twitter.com/aaklan" },
    { icon: <FaInstagram />, url: "https://instagram.com/aaklan" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/aaklan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0b234a] via-[#1a3a6e] to-[#0b234a] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-orange-500 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-[#E22213] rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100">
            Reach out to us — we're here to help guide your learning journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Campus Tour
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-8 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#0b234a] transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid gap-8 lg:gap-12 lg:grid-cols-2">

        {/* CONTACT INFO */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-3 md:mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Have questions about admissions, courses, or school visits? Reach out — we're ready to help.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={() => info.link && window.open(info.link, "_blank")}
                className={`flex space-x-3 sm:space-x-4 items-start p-4 sm:p-6 border-2 border-gray-100 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  info.link ? "cursor-pointer hover:scale-105 hover:border-orange-200" : "cursor-default"
                }`}
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-2 sm:p-3 rounded-lg flex-shrink-0 group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-300">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0b234a] mb-1 sm:mb-2 group-hover:text-[#E22213] transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                    {info.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-[#0b234a] mb-3 sm:mb-4">Follow Us</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Stay updated with our latest programs and student achievements
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl text-gray-600 hover:text-white transition-all duration-300 p-3 bg-gray-100 hover:bg-[#E22213] rounded-xl hover:scale-110 shadow-md hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 border-gray-100">

          <div className="text-center mb-4 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <HiMailOpen className="text-2xl sm:text-3xl text-orange-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-2">Send Us a Message</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We typically respond within 24 hours
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="bg-gradient-to-r from-green-50 to-green-100 text-green-800 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base border-l-4 border-green-500 shadow-md">
              <strong>✓ Message sent successfully!</strong> We'll get back to you within 24 hours.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-gradient-to-r from-red-50 to-red-100 text-red-800 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base border-l-4 border-red-500 shadow-md">
              <strong>⚠ Something went wrong!</strong> Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Full Name *" 
                  className="border-2 border-gray-200 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full transition-all duration-300 text-sm sm:text-base hover:border-orange-300"
                />
              </div>
              <div>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email *" 
                  className="border-2 border-gray-200 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full transition-all duration-300 text-sm sm:text-base hover:border-orange-300"
                />
              </div>
            </div>

            <input 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone Number" 
              className="border-2 border-gray-200 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full transition-all duration-300 text-sm sm:text-base hover:border-orange-300"
            />

            <select 
              name="subject" 
              required 
              value={formData.subject} 
              onChange={handleChange} 
              className="border-2 border-gray-200 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full transition-all duration-300 text-sm sm:text-base hover:border-orange-300 bg-white"
            >
              <option value="">Select Subject *</option>
              <option value="coding">Coding Programs</option>
              <option value="robotics">Robotics & AI</option>
              <option value="vr-ar">VR/AR Lab</option>
              <option value="workshop">Workshop</option>
              <option value="books">Books</option>
              <option value="courses">Online Courses</option>
              <option value="pre-primary">Pre Primary School</option>
              <option value="general">General Inquiry</option>
            </select>

            <textarea 
              name="message" 
              rows="5" 
              required 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message *" 
              className="border-2 border-gray-200 p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full resize-none transition-all duration-300 text-sm sm:text-base hover:border-orange-300"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 rounded-lg font-semibold flex justify-center items-center gap-2 text-white transition-all duration-300 text-sm sm:text-base shadow-lg ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-orange-500 to-[#E22213] hover:from-orange-600 hover:to-[#ff2b1a] hover:shadow-xl hover:scale-105"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <IoIosSend className="text-lg sm:text-xl" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b234a] mb-2">Find Us Here</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Visit our state-of-the-art campus in Jaipur and experience our innovative learning environment
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 border-gray-100">
          <iframe
            src={googleMapLink}
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg sm:rounded-xl shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aaklan Location Map"
          ></iframe>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8">
          <a
            href="https://maps.app.goo.gl/MAMNwako8fqeBeRn8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0b234a] text-white rounded-lg sm:rounded-xl hover:bg-[#E22213] transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl text-center"
          >
            📍 Open on Google Maps
          </a>
          <a
            href="tel:+919571677609"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg sm:rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl text-center"
          >
            📞 Call Now
          </a>
        </div>

        {/* QUICK CONTACT BANNER */}
        <div className="mt-8 bg-gradient-to-r from-[#0b234a] to-[#1a3a6e] text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
            <p className="text-blue-100 mb-4 text-sm sm:text-base">
              Call us directly for urgent inquiries about admissions or programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919571677609" className="text-2xl sm:text-3xl font-bold text-orange-300 hover:text-orange-200 transition-colors">
                +91 - 9571677609
              </a>
              <span className="text-blue-200 hidden sm:block">|</span>
              <a href="mailto:info@aaklan.com" className="text-lg sm:text-xl text-orange-300 hover:text-orange-200 transition-colors">
                info@aaklan.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}