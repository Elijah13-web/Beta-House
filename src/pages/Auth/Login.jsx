import React, { useState } from "react";
import imglogo2 from "../../assets/icons/🦆 icon _google_.png";
import photo from "../../assets/images/13625 1.png";

const Login = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call for login
      const response = await fakeLoginAPI(formData.email, formData.password);

      if (response.success) {
        alert("Login successful!");
      } else {
        alert("Login failed: " + response.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fakeLoginAPI = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password") {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Invalid email or password" });
        }
      }, 1000);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-6 border rounded-lg py-4 md:py-24 relative h-screen overflow-auto text-black">
      <div className="">
        {/* Image Section */}
        <button
               className="absolute md:top-12 top-0 md:right-5 right-2 md:text-3xl text-4xl text-gray-500 hover:text-gray-800"
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

        {/* Content Section */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h1 className="md:text-2xl text-xl font-bold mb-3">
              Welcome Back to BetaHouse!
            </h1>
            <p className="text-lg font-light mb-5">
              Let’s get started by filling out the information below.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold text-gray-700"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3D9970] text-white rounded-full hover:bg-[#2D7F5E] transition-colors"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-gray-500">Or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <div className="flex items-center justify-center border-2 border-gray-300 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <img
                  src={imglogo2}
                  alt="Google logo"
                  className="w-6 h-6 mr-2"
                />
                <span>Continue with Google</span>
              </div>

              <p className="text-center mt-4">
                New User?{" "}
                <b
                  onClick={switchToSignUp}
                  className="cursor-pointer text-[#3D9970] hover:underline"
                >
                  Sign Up
                </b>
              </p>
            </form>
          </div>

          {/* Image Section for Desktop */}
          <div className="hidden md:block w-1/2 bg-gray-100 h-[600px]">
            <img
              src={photo}
              alt="Welcome Illustration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
