import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const categories = [
    "All Projects",
    "Web Design",
    "Graphic Design",
    "Photography",
    "Blog",
    "UI/UX Design",
    "Mobile Apps",
    "Illustration",
    "3D Modeling",
    "Animation"
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <header className="bg-gray-900 text-white p-4 md:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6">
          <div className="mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Personal Logo"
              className="h-12 w-auto"
              aria-label="Personal Logo"
            />
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              aria-label="Search projects"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <nav className="overflow-x-auto">
          <ul className="flex flex-nowrap justify-start space-x-2 md:space-x-4 pb-2">
            {categories.map((category) => (
              <li key={category} className="flex-shrink-0">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`px-3 py-1 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  aria-label={`${category} category`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
