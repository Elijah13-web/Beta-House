import React, { useState } from "react";
import imglogo2 from "../../assets/icons/🦆 icon _google_.png";
import photo from "../../assets/images/13625 1.png";

const SignUp = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setLoading(true);

    try {
      console.log("Signing up...");
    } catch (err) {
      console.error("Error signing up:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start mx-6">
      <div className="max-w-lg md:mx-4 md:order-1">
        <form onSubmit={handleSignUp}>
          <h1 className="md:text-2xl text-xl font-bold text-black text-start">
            Join our community of home seekers and explore the possibilities that await.
          </h1>
          <p className="text-lg font-extralight text-start">
            Let's get started by filling out the information below
          </p>

          {/* First Name and Last Name */}
          <div className="mb-2 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-lg font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
                className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-lg font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
                className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email and Password fields */}
          <div className="mb-2">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="">
            <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-4 flex items-center">
            <div
              className={`w-6 h-6 border-2 rounded-md cursor-pointer flex items-center justify-center ${
                rememberMe ? "bg-[#3D9970]" : "bg-gray-200"
              }`}
              onClick={handleCheckboxChange}
            >
              {rememberMe && <span className="text-white font-bold">&#10003;</span>}
            </div>
            <label className="ml-3 text-base">
              I agree to{" "}
              <span className="text-[#3D9970] cursor-pointer">Terms of Service</span> and Privacy Policies
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-3 bg-[#3D9970] text-white rounded-full hover:bg-[#2D7F5E] mt-2"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <div className="flex items-center justify-between p-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex text-black items-center justify-center border-2 py-2 rounded-lg cursor-pointer">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>Continue with Google</span>
          </div>
          
          {/* Switch to Login */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <b onClick={switchToLogin} className="cursor-pointer text-[#3D9970] px-1">Sign In</b>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full md:mt-0 md:order-2 md:ml-4">
        <img src={photo} alt="Welcome Illustration" className="md:h-[700px] h-[700px]" />
      </div>
    </div>
  );
};

export default SignUp;
