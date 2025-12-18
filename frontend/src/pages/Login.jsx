import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from 'react-dom'
import { X } from "lucide-react"; 

const Login = ({ isOpen, setIsOpen }) => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [grade, setGrade] = useState("");
  const [course, setCourse] = useState("");
  const [classType, setClassType] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (state === "Sign Up") {
      if (name.trim().length < 3) {
        newErrors.name = "Name must be at least 3 characters long.";
      }
      if (!phone) {
        newErrors.phone = "Phone number is required.";
      }
      if (otpSent && !otp) {
        newErrors.otp = "OTP is required.";
      }
      if (!grade) {
        newErrors.grade = "Please select a grade.";
      }
      if (!course) {
        newErrors.course = "Please select a course.";
      }
      if (!classType) {
        newErrors.classType = "Please select a class type.";
      }
    }
    
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    
    if (state === "Login" && !password) {
      newErrors.password = "Password is required.";
    } else if (state === "Sign Up" && password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = () => {
    if (!phone) {
      setErrors({...errors, phone: "Phone number is required."});
      return;
    }
    // In a real app, you would call an API to send OTP
    setOtpSent(true);
    setErrors({...errors, phone: ""});
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    try {
      // Your API calls would go here
      // For now, we'll just simulate a successful submission
      setTimeout(() => {
        setLoading(false);
        setIsOpen(false);
        // Reset form
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");
        setOtp("");
        setGrade("");
        setCourse("");
        setClassType("");
        setReferenceCode("");
        setOtpSent(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    createPortal(
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 flex items-center justify-center z-100 bg-black/60 ${isOpen ? "block" : "hidden"}`}
      >
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-2 m-auto items-start p-8  border rounded-xl text-zinc-600 text-sm shadow-lg bg-white dark:bg-gray-900 dark:text-white relative"
        >
          {/* Close Icon */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-zinc-500 dark:text-white hover:text-zinc-700"
          >
            <X size={24} />
          </button>

          <p className="text-xl font-semibold w-full text-center">
            {state === "Sign Up" ? "REGISTER A NEW ACCOUNT" : "LOGIN TO YOUR REGISTERED ACCOUNT!"}
          </p>

          {state === "Sign Up" && (
            <>
              <div className="w-full">
                <p>Name</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="w-full">
                <p>Email</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="w-full">
                <p>Select Grade</p>
                <select
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="">Select Grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade}</p>}
              </div>

              <div className="w-full">
                <p>Select Course</p>
                <select
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                </select>
                {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
              </div>

              <div className="w-full">
                <p>Select Class Type</p>
                <select
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                >
                  <option value="">Select Class Type</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                {errors.classType && <p className="text-red-500 text-xs mt-1">{errors.classType}</p>}
              </div>

              <div className="w-full">
                <p>Reference Code (optional)</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="text"
                  onChange={(e) => setReferenceCode(e.target.value)}
                  value={referenceCode}
                />
              </div>

              <div className="w-full">
                <p>Phone Number</p>
                <div className="flex gap-2">
                  <input
                    className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="mt-1 px-4 py-0.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Send OTP
                  </button>
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {otpSent && (
                <div className="w-full">
                  <p>Enter OTP</p>
                  <input
                    className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                    type="text"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                    required
                  />
                  {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
                </div>
              )}

              <div className="w-full">
                <p>Password</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </>
          )}

          {state === "Login" && (
            <>
              <div className="w-full">
                <p>Email*</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="w-full">
                <p>Password*</p>
                <input
                  className="border border-zinc-300 dark:bg-gray-700 dark:text-white rounded w-full p-2 mt-1"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer text-base bg-orange-500 text-white rounded-md py-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Processing..." : state === "Sign Up" ? "Submit" : "Login"}
          </button>

          {state === "Sign Up" ? (
            <p className="w-full text-center">
              Are you a member?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary underline cursor-pointer"
              >
                Login now
              </span>
            </p>
          ) : (
            <p className="w-full text-center">
              Not a member yet?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary underline cursor-pointer"
              >
                Register now
              </span>
            </p>
          )}
        </form>
      </div>,
      document.getElementById('portal')
    )
  );
};

export default Login;