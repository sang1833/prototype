import { useState, useEffect } from "react";
import {
  FaHome,
  FaTshirt,
  FaPlane,
  FaUtensils,
  FaChevronDown
} from "react-icons/fa";

const TopNavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isFashionDropdownOpen, setIsFashionDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (isMobile) {
      setIsDropdownOpen(false);
    }
  };

  const toggleFashionDropdown = (e) => {
    e.preventDefault();
    setIsFashionDropdownOpen(!isFashionDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Chọn 1 option</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className={`flex items-center text-white hover:text-yellow-200 transition-colors duration-300 ${
                  activeItem === "Home" ? "border-b-2 border-yellow-200" : ""
                }`}
                onClick={() => handleItemClick("Home")}
              >
                <FaHome className="mr-2" />
                Home
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className={`flex items-center text-white hover:text-yellow-200 transition-colors duration-300 ${
                  activeItem === "Fashion" ? "border-b-2 border-yellow-200" : ""
                }`}
                onClick={toggleFashionDropdown}
              >
                <FaTshirt className="mr-2" />
                Fashion
                <FaChevronDown className="ml-1" />
              </a>
              {isFashionDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
                    >
                      Trends
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
                    >
                      Outfits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center text-white hover:text-yellow-200 transition-colors duration-300 ${
                  activeItem === "Travel" ? "border-b-2 border-yellow-200" : ""
                }`}
                onClick={() => handleItemClick("Travel")}
              >
                <FaPlane className="mr-2" />
                Travel
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center text-white hover:text-yellow-200 transition-colors duration-300 ${
                  activeItem === "Food" ? "border-b-2 border-yellow-200" : ""
                }`}
                onClick={() => handleItemClick("Food")}
              >
                <FaUtensils className="mr-2" />
                Food
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobile && isDropdownOpen && (
        <div className="mt-4 bg-white rounded-md shadow-lg py-2">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
            onClick={() => handleItemClick("Home")}
          >
            <FaHome className="inline-block mr-2" />
            Home
          </a>
          <div className="relative">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
              onClick={toggleFashionDropdown}
            >
              <FaTshirt className="inline-block mr-2" />
              Fashion
            </a>
            {isFashionDropdownOpen && (
              <ul className="pl-8">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-100 transition-colors duration-300"
                  >
                    Trends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-100 transition-colors duration-300"
                  >
                    Outfits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-100 transition-colors duration-300"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
            onClick={() => handleItemClick("Travel")}
          >
            <FaPlane className="inline-block mr-2" />
            Travel
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors duration-300"
            onClick={() => handleItemClick("Food")}
          >
            <FaUtensils className="inline-block mr-2" />
            Food
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
