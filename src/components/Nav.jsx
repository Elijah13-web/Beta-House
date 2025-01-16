import React, { useState, useRef, useEffect } from 'react';
import Wrapper from './reasurable/Wrapper';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import aisha from "../assets/images/Ellipse 8.png";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for opening modal
  const [isSignUp, setIsSignUp] = useState(true); // To switch between SignUp and Login
  const [showBackToTop, setShowBackToTop] = useState(false); // State for Back to Top button
  const propertiesRef = useRef(null);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handlePropertiesClick = () => {
    propertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Open the sign-up modal
  const handleGetStartedClick = () => {
    setIsModalOpen(true);
    setIsSignUp(true); // Show the sign-up form first
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Switch to the login form
  const switchToLogin = () => {
    setIsSignUp(false);
  };

  // Switch to the sign-up form
  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/Hide Back to Top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="shadow-md fixed top-0 left-0 right-0 z-50 py-2 text-gray-200">
      <Wrapper>
        <div>
          <nav className="flex justify-between items-center py-4 mx-2">
            <div to="/" className="flex items-baseline text-primary">
              <h1 className="text-xl hover:cursor-pointer bg-[#52a286] rounded-full w-10 h-10 text-center p-1">
                BH
              </h1>
              <h1 className="hover:cursor-pointer ml-2 font-pacifico text-xl">BetaHouse</h1>
            </div>

            <div onClick={onToggleMenu} className="cursor-pointer text-custom-green md:hidden">
              {menuOpen ? <IoMdClose className="mx-3" /> : <GiHamburgerMenu className="mx-3" />}
            </div>

            <div className="hidden md:flex space-x-2 lg:space-x-9 md:space-x-5">
              <a href="#home" className="hover:cursor-pointer hover:border-b-2">
                Home
              </a>
              <a onClick={handlePropertiesClick} className="hover:cursor-pointer hover:border-b-2">
                Properties
              </a>
              <a href="#about us" className="hover:cursor-pointer hover:border-b-2">
                About Us
              </a>
              <a href="#blog" className="hover:cursor-pointer hover:border-b-2">
                Blog
              </a>
              <a href="#contact us" className="hover:cursor-pointer hover:border-b-2">
                Contact Us
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex" onClick={handleGetStartedClick}>
                <div className="md:flex gap-3 text-center hidden">
                  <img src={aisha} alt="" className="w-8 h-8" />
                  <h1 className="text-xl hover:cursor-pointer hover:border-b-2">Get started</h1>
                </div>
              </div>
            </div>
          </nav>

          {/* Modal for SignUp/Login */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-xl md:w-[1000px] w-full">
              {isSignUp ? (
  <SignUp switchToLogin={switchToLogin} handleCloseModal={handleCloseModal} />
) : (
  <Login switchToSignUp={switchToSignUp} handleCloseModal={handleCloseModal}/>
)}
              </div>
            </div>
          )}

          {menuOpen && (
            <div className="bg-[#24282c] space-y-2 p-4">
              <div className="flex flex-col md:hidden space-y-2 p-4">
                <a href="#home" className="hover:cursor-pointer text-lg">
                  Home
                </a>
                <a onClick={handlePropertiesClick} className="hover:cursor-pointer text-lg">
                  Properties
                </a>
                <a href="#about us" className="hover:cursor-pointer text-lg">
                  About Us
                </a>
                <a href="#blog" className="hover:cursor-pointer text-lg">
                  Blog
                </a>
                <a href="#contact us" className="hover:cursor-pointer text-lg">
                  Contact Us
                </a>
              </div>
              <div className="md:hidden" onClick={handleGetStartedClick}>
                <div className="flex gap-1 text-center md:hidden">
                  <img src={aisha} alt="" className="w-8 h-8" />
                  <h1 className="text-xl hover:cursor-pointer hover:border-b-2">Get started</h1>
                </div>
              </div>
            </div>
          )}

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 right-3 bg-[#52a286] text-white w-10 h-10 rounded-full shadow-md hover:bg-[#419170]"
            >
              ↑
            </button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Nav;
