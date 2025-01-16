import React, { useState } from "react";
import imglogo2 from "../../assets/icons/🦆 icon _google_.png";
import photo from "../../assets/images/13625 1.png";

const SignUp = ({ switchToLogin, handleCloseModal }) => {
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
    <div className="flex flex-col md:flex-row mx-4 md:mx-6 border rounded-lg py-4 md:py-10 relative h-screen overflow-auto text-black">
      {/* Close Button */}
      <button
        className="absolute md:top-4 top-0 right-2 md:text-3xl text-4xl text-gray-500 hover:text-gray-800"
        onClick={handleCloseModal}
      >
        &times;
      </button>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center my-6 md:hidden">
        <img
          src={photo}
          alt="Welcome Illustration"
          className="w-full max-h-[300px] md:max-h-[650px] object-cover rounded-md"
        />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full px-4 md:px-8 ">
        <form onSubmit={handleSignUp} className="space-y-4">
          <h1 className="text-lg md:text-2xl font-bold text-start pt-2">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-sm md:text-lg font-extralight text-start pt-2">
            Let's get started by filling out the information below
          </p>

          {/* First Name and Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-sm md:text-lg font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-slate-100 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm md:text-lg font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-slate-100 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email and Password Fields */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-lg font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-slate-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm md:text-lg font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-slate-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm md:text-lg font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-slate-100 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <div
              className={`w-5 h-5 border-2 rounded-md cursor-pointer flex items-center justify-center ${
                rememberMe ? "bg-[#3D9970]" : "bg-gray-200"
              }`}
              onClick={handleCheckboxChange}
            >
              {rememberMe && (
                <span className="text-white font-bold">&#10003;</span>
              )}
            </div>
            <label className="ml-3 text-sm text-gray-700">
              I agree to{" "}
              <span className="text-[#3D9970] cursor-pointer">
                Terms of Service
              </span>{" "}
              and Privacy Policies
            </label>
          </div>

          {/* Submit Button */}
          <button
                type="submit"
                className="w-full py-3 bg-[#3D9970] text-white rounded-full hover:bg-[#2D7F5E] transition-colors"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>

          <div className="flex items-center justify-between py-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <div className="flex items-center justify-center border py-2 rounded-md cursor-pointer">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>Continue with Google</span>
          </div>

          {/* Switch to Login */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <b
              onClick={switchToLogin}
              className="cursor-pointer text-[#3D9970]"
            >
              Sign In
            </b>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 h-[700px] my-2">
                      <img
                        src={photo}
                        alt="Welcome Illustration"
                        className="h-full w-full object-cover"
                      />
                    </div>
    </div>
  );
};

export default SignUp;
