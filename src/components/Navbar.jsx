import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <div className="bg-primary text-white text-center py-2">
        <p className="max-w-[90%] mx-auto text-sm">
          Check Out the Updated Vehicle Tax Rates.{" "}
          <a
            href="https://www.autoncell.com/detail/news/tax-rate-vehicles-fiscal-year-2076-2077-province-1-7"
            target="_blank"
            className="underline"
          >
            Click Here!
          </a>
        </p>
      </div>
      <nav
        className={`bg-white bg-opacity-80 backdrop-blur-md shadow-md py-2 ${
          isOpen ? "h-screen" : ""
        }`}
      >
        <div className="mx-auto flex justify-between items-center py-2 max-w-[90%]">
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <img src="/img/nepgov.png" alt="Logo" className="h-16" />
              <div className="max-sm:hidden">
                <h2 className="text-2xl font-medium text-primary">
                  Sawari Sadhan
                </h2>
                <p className="text-sm">Digital Tax Payment Gateway</p>
              </div>
            </div>
          </Link>

          <div className="flex-grow px-10">
            <div className=" hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="ml-2 h-6 w-6 text-gray-400 absolute top-2 right-3" />
            </div>
          </div>

          <div className="hidden lg:flex space-x-6 items-center relative">
            <Link to="/about" className="text-gray-800 hover:text-primary">
              About
            </Link>
            <Link to="/contact-us" className="text-gray-800 hover:text-primary">
              Contact Us
            </Link>
            <Link
              to="/signup"
              className="text-white border border-transparent bg-primary px-8 py-2 rounded hover:bg-secondary"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="text-primary border border-primary bg-transparent px-8 py-2 rounded transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Signup
            </Link>
          </div>
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={`${
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }`}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white bg-opacity-90 backdrop-blur-md h-screen overflow-y-auto pl-4 md:pl-8`}
        >
          <div className="relative pt-4 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch className="mr-3 h-6 w-6 text-gray-400 absolute top-6 right-4" />
          </div>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-primary pl-4 pt-4"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="block text-gray-800 hover:text-primary pl-4 pt-4"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <div className="pl-4 pt-6">
            <Link
              to="/signup"
              className="text-white border border-transparent bg-primary px-8 py-2 rounded hover:bg-secondary"
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
          <div className="pl-4 pt-8">
            <Link
              to="/login"
              className="text-primary border border-primary bg-white px-8 py-2 rounded hover:bg-secondary"
              onClick={closeMenu}
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
