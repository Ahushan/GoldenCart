import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../assets/google-logo.png";
import facebook from "../assets/facebook-logo.png";
import { Link } from "react-router-dom";
import Step_PreviousPage_Button from "../../components/Step_PreviousPage_Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-blue-gradient">
      <Step_PreviousPage_Button />
      <div className="bg-gray-100 bg-opacity-70 p-6 rounded-lg shadow-md w-80">
        {" "}
        {/* Reduced width and padding */}
        <h2 className="text-xl font-bold text-center mb-4">
          Create an Account
        </h2>{" "}
        {/* Reduced font size */}
        <form>
          <div className="relative mb-5">
            {" "}
            {/* Reduced margin-bottom */}
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                name
                  ? "scale-75 -translate-y-5 bg-white rounded-md px-2 py-0"
                  : "translate-y-1"
              } text-gray-600`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder=" "
            />
          </div>
          <div className="relative mb-5">
            {" "}
            {/* Reduced margin-bottom */}
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                email
                  ? "scale-75 -translate-y-5 bg-white rounded-md px-2 py-0"
                  : "translate-y-1"
              } text-gray-600`}
              htmlFor="email"
            >
              Email Id
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder=" "
            />
          </div>
          <div className="relative mb-5">
            {" "}
            {/* Reduced margin-bottom */}
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                password
                  ? "scale-75 -translate-y-5 bg-white rounded-md px-2"
                  : "translate-y-1"
              } text-gray-600 `}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder=" "
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-xl text-black"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="relative mb-5">
            {" "}
            {/* Reduced margin-bottom */}
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                confirmPassword
                  ? "scale-75 -translate-y-5 bg-white rounded-md px-2"
                  : "translate-y-1"
              } text-gray-600 `}
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder=" "
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-3 text-xl text-black"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full border-blue-700 border-2 text-black font-semibold py-1 rounded-md hover:bg-blue-700 hover:text-white transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <Link to={"/Login"} className="text-sm text-blue-600 hover:underline">
            Already have an account ?{" "}
          </Link>
        </div>
        <div className="flex items-center justify-center my-3">
          {" "}
          {/* Reduced margin */}
          <span className="mx-2 text-gray-500">Or continue with</span>
        </div>
        <button className="bg-blue-700 w-full flex items-center justify-center text-white border border-gray-200 font-semibold py-1 rounded-md transition duration-200">
          <img src={google} alt="Google Logo" className="h-5 mr-2" />
          Continue with Google
        </button>
        <button className="mt-3 bg-black w-full flex items-center justify-center text-white border border-gray-200 font-semibold py-1 rounded-md transition duration-200">
          <img src={facebook} alt="Facebook Logo" className="h-5 mr-2" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
