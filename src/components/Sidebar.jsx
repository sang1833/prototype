import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaCreditCard,
  FaDollarSign,
  FaBell,
  FaSignInAlt,
  FaUserPlus,
  FaChartBar,
  FaHeading
} from "react-icons/fa";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      title: "Header",
      icon: <FaHeading />,
      subsections: ["Gradient", "Solid"]
    },
    {
      title: "Product Card",
      icon: <FaCreditCard />,
      subsections: ["Basic", "Advanced", "Premium"]
    },
    {
      title: "Pricing Plan",
      icon: <FaDollarSign />,
      subsections: ["Monthly", "Yearly", "Custom"]
    },
    {
      title: "Notification",
      icon: <FaBell />,
      subsections: ["Email", "Push", "SMS"]
    },
    {
      title: "Sign In",
      icon: <FaSignInAlt />,
      subsections: ["Email", "Social", "Two-Factor"]
    },
    {
      title: "Sign Up",
      icon: <FaUserPlus />,
      subsections: ["Personal", "Business", "Enterprise"]
    },
    {
      title: "Dashboard UI",
      icon: <FaChartBar />,
      subsections: ["Analytics", "Sales", "User Management"]
    }
  ];

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="bg-gray-800 text-white h-screen w-64 py-6 px-4 overflow-y-auto">
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ul>
        {filteredSections.map((section, index) => (
          <li key={section.title} className="mb-2">
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between w-full py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
              aria-expanded={expandedSections.includes(index)}
            >
              <span className="flex items-center">
                {section.icon}
                <span className="ml-2">{section.title}</span>
              </span>
              {expandedSections.includes(index) ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
            {expandedSections.includes(index) && (
              <ul className="ml-6 mt-2 space-y-2">
                {section.subsections.map((subsection) => (
                  <li key={subsection}>
                    <Link
                      to={subsection}
                      className="block py-1 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
                    >
                      {subsection}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
