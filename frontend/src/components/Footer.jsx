import {
  Mail, Phone, MapPin, Clock, ChevronRight,
  Facebook, Twitter, Instagram, Youtube, ArrowUp,
  Linkedin
} from "lucide-react";
import { footer } from "../assets/assets";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-linear-to-br from-[#062241] to-[#0a3266] text-white relative overflow-hidden">

      {/* Scroll To Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">

          {/* Logo */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="mb-6 hover:scale-105 transition-transform">
              <img
                src={footer.logolight}
                alt="Aaklan Logo"
                className="w-48 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              We are a digital coding company for kids up to 12th grade.
              Our mission is to help kids become creators, thinkers, and innovators.
            </p>

            {/* Social Links (Still External) */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aaklan_edutech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-lg transition-all"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aaklan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-lg transition-all"
              >
                <Linkedin size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Aaklan2020"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-600 p-2 rounded-lg transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>

          </div>

          {/* Learning Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Learning Programs</h3>
            <ul className="space-y-3">
              {[
                { name: "Early Learning Program (Nursery to UKG)", path: "/programs/computer-coding-books-1-8" },
                { name: "Little Tech Explorers (1 to 5)", path: "/programs/coding-robotics-ai-books-6-8" },
                { name: "Computer And Coding (1 to 8)", path: "/programs/coding-robotics-ai-python-9-12" },
                { name: "Create The Future (6 to 12)", path: "/programs/online-coding-classes" },
              ].map((item, index) => (
                <li key={index} className="group cursor-pointer"
                  onClick={() => navigate(item.path)}>
                  <span className="flex items-center text-white/80 group-hover:text-white transition">
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Refund Policy", path: "/refund" },
                { name: "Career", path: "/career" },
                { name: "Contact Us", path: "/contact" },
                { name: "Blog", path: "/blog" },
              ].map((item, index) => (
                <li key={index} className="group cursor-pointer"
                  onClick={() => navigate(item.path)}>
                  <span className="flex items-center text-white/80 hover:text-white transition">
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section (External Links kept same) */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Get In Touch</h3>

            <div className="space-y-4 mb-6">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail size={16} />
                <a href="mailto:Info@aaklan.com" className="hover:text-blue-300">Info@aaklan.com</a>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone size={16} />
                <a href="tel:+919571677609" className="hover:text-blue-300">+91 - 9571677609</a>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin size={16} />
                <a href="https://maps.google.com/?q=Jaipur 302026" className="hover:text-blue-300" target="_blank" rel="noreferrer">
                  Jaipur - 302026
                </a>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-white/10 p-4 rounded-lg">
              <Clock size={18} className="mb-2 text-blue-400" />
              <p>Mon - Sat: 10:00am - 5:00pm</p>
              <p className="text-red-300">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Aaklan IT Solutions Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
