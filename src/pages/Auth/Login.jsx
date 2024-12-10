import React, { useState } from "react";
import imglogo2 from "../../assets/icons/🦆 icon _google_.png";
import photo from "../../assets/images/13625 1.png"

const Login = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

   // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setLoading(true);

    try {
      console.log("Logging in...");
    } catch (err) {
      console.error("Error logging in:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start mx-6 text-black border-2 p-2">
         <div
        onClick={handleClose}
        className="absolute top-4 right-4 cursor-pointer text-xl font-bold"
      >
        X
      </div>
       <div className="mt-6 md:mt-0 md:order-2 md:ml-4 md:hidden">
        <img src={photo} alt="Welcome Illustration" className="h-[250px] w-full" />
      </div>
      <div className="max-w-lg mx-auto md:mx-4 md:order-1 md:h-0 h-[660px]">
        <h1 className="text-2xl font-bold mb-3 md:mt-7 text-start">
          Welcome Back to BetaHouse!
        </h1>
        <p className="text-2xl font-extralight mb-3 text-start">
          Let’s get started by filling out the information below
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email
            </label>
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

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
              Password
            </label>
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

          <button
            type="submit"
            className="w-full py-4 px-4 bg-[#3D9970] text-white rounded-full hover:bg-[#2D7F5E]"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <div className="my-2 flex items-center justify-between p-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center justify-center border-2 p-3 rounded-lg cursor-pointer">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>Continue with Google</span>
          </div>

          <p className="text-center mt-2">
            New User?{" "}
            <b onClick={switchToSignUp} className="cursor-pointer text-[#3D9970] px-1">
              Sign Up
            </b>
          </p>
        </form>
      </div>

      <div className="mt-6 md:mt-0 md:order-2 md:ml-4 hidden md:block">
        <img src={photo} alt="Welcome Illustration" />
      </div>
    </div>
  );
};

export default Login;
