import { useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Institution Logo"
              className="h-10 w-auto mr-4"
            />
            <h1 className="text-white text-2xl font-bold">EduPlatform</h1>
          </div>

          <nav className="lg:flex items-center">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0`}
            >
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-yellow-200 transition duration-300 flex items-center"
                >
                  Course Categories <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        All Courses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        Arts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        Science
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                      >
                        Languages
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-200 transition duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mt-4 lg:mt-0">
            <FaUser className="mr-2" /> Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
