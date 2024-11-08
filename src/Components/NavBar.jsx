import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-lg md:text-3xl">
          <Link to="/">DHARANI ENTERPRISES</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="#about-us"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about-us").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About Us
          </Link>
          <Link
            to="#contact-us"
            className="hover:text-yellow-400 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact-us").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white shadow-lg animate-slide-in">
          <Link
            to="/"
            className="block px-4 py-3 bg-gray-800 text-white hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className="block px-4 py-3 bg-gray-800 text-white hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          <Link
            to="#about-us"
            className="block px-4 py-3 hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about-us").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About Us
          </Link>
          <Link
            to="#contact-us"
            className="block px-4 py-3 hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact-us").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
