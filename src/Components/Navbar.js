import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-opacity-70 backdrop-filter backdrop-blur-lg bg-black px-4 py-2.5 lg:mx-5 lg:mt-3 lg:rounded-full md:mx-5 md:mt-3 md:rounded-full z-50">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="hidden md:flex justify-between">
            <div>
              <Link
                to="/"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/" className="text-white text-lg font-semibold">
                <span className="bg-red-600 px-2 py-1 text-center rounded-full">
                  A
                </span>
                Duryodhan
              </Link>
            </div>
            <div>
              <Link
                to="/skills"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </Link>
              <Link
                to="/resume"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/skills"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Resume
            </Link>
            <Link
              to="/about"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
