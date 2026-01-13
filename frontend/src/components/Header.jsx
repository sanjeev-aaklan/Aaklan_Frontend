import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
// import Login from "../pages/Login.jsx";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // login/signup modal
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Active route check
  const isActivePath = useCallback(
  (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  },
  [location]
);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Coding", path: "/coding" },
    { name: "Robotics & AI", path: "/robotics-ai" },
    { name: "VR/AR Lab", path: "/vr-ar-lab" },
    { name: "LMS", path: "/lms" },
    { name: "Books", path: "/books" },
  ];

  const handleLoginRedirect = () => {
    window.location.href = "https://crm.aaklan.com/";
  };


  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-500">
      {/* Top Bar - Always visible */}
      <div className="bg-[#0b234a] text-white text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 py-1 px-6 text-white">
          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Address:</span>{" "}
              <span>Jaipur - 302026</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <span>info@aaklan.com</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <div>
              <span className="font-semibold">Contact:</span>{" "}
              <span>+91 - 9571677609</span>
            </div>
          </div>

          {/* Login / Signup */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={handleLoginRedirect}
              className="text-lg px-8 py-0.5 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b234a] transition-all"
            >
              Login
            </button>


            {/* <button
              onClick={() => setIsOpen("signup")}
              className="text-lg px-6 py-2 rounded-full font-medium 
          bg-linear-to-r from-yellow-400 to-orange-500 
          text-[#0b234a] shadow-xl hover:scale-110 hover:shadow-2xl transition-all"
            >
              Signup
            </button> */}

            {/* <Login isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <Link to="/">
            <img
              src={assets.logo}
              className="h-12 filter drop-shadow-md cursor-pointer"
              alt="logo"
            />
          </Link>

          {/* Desktop Menu with Links */}
          <ul className="hidden lg:flex gap-8 font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`transition-colors duration-300 ${isActivePath(item.path)
                      ? "text-yellow-500 font-semibold"
                      : "text-gray-700 hover:text-yellow-500"
                    }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-400 transition-all duration-300 ${isActivePath(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Links */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${isActivePath(item.path)
                        ? "bg-yellow-50 text-yellow-600 font-semibold border-l-4 border-yellow-500"
                        : "text-gray-700 hover:bg-gray-50 hover:text-yellow-500"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-6 px-4 pt-4 border-t">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleLoginRedirect();
                  }}
                  className="w-full px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-500 font-semibold hover:bg-yellow-400 hover:text-[#0b234a] transition-all"
                >
                  Login
                </button>


                {/* <button
                  onClick={() => {
                    setIsOpen("signup");
                    setMobileOpen(false);
                  }}
                  className="w-full px-6 py-3 rounded-full font-medium 
                  bg-linear-to-r from-yellow-400 to-orange-500 
                  text-[#0b234a] shadow-lg hover:scale-105 transition-all"
                >
                  Signup
                </button> */}
              </div>
            </ul>
          </div>
        )}
      </nav>

      {/* <Login isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </header>
  );
}