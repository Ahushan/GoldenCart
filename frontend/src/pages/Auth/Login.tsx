
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
// import google from '../assets/google-logo.png';
// import facebook from '../assets/facebook-logo.png';
import { Link } from 'react-router-dom';
import Step_PreviousPage_Button from '../../components/Step_PreviousPage_Button';
// import Register from './Register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-red-gradient">
      <Step_PreviousPage_Button />
      <div className="bg-gray-50 bg-opacity-70 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        <form>
          <div className="relative mb-7">
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                email ? 'scale-75 -translate-y-5 bg-white rounded-md px-2 py-0' : 'translate-y-1'
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
          <div className="relative">
            <label
              className={`absolute left-3 top-1 transition-all duration-200 transform  ${
                password ? 'scale-75 -translate-y-5 bg-white rounded-md px-2' : 'translate-y-1' 
              } text-gray-600 `}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-600"
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
          <div className="flex justify-between mt-7 mb-3">
            <Link to={""} className="text-sm text-blue-600 hover:underline">
              forget password?
            </Link>
            <Link to={"/Register"} className="text-sm text-blue-600 hover:underline">
              Not Registered? Sign Up
            </Link>
          </div>
          <button
            type="submit"
            className="w-full border-blue-900 hover:border-blue-200 border-2 text-black font-semibold py-2 rounded-md hover:bg-blue-900 hover:text-white transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="mx-2 text-gray-500">Or continue with</span>
        </div>
        <button className="  bg-blue-700 w-full flex items-center justify-center text-white border border-gray-200 font-semibold py-2 rounded-md  transition duration-200">
          <img
            src={google} 
            alt="Google Logo"
            className="h-5 mr-2"
          />
          Continue with Google
        </button>
        <button className=" mt-5 bg-black w-full flex items-center justify-center text-white border border-gray-200 font-semibold py-2 rounded-md  transition duration-200">
          <img
            src={facebook} 
            alt="Google Logo"
            className="h-5 mr-2"
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;