import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms delay for a smooth transition
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can add navigation or API calls here
  };

  return (
    <nav className="bg-[#f8ba9b] text-[#3f3a38] p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          My Book Library
        </Link>

        {/* Navigation Links + Search Bar */}
        <div className="flex items-center space-x-6 font-semibold">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 md:w-64 px-3 py-1 border border-[#3f3a38] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8dc0df] transition"
            />
            <button 
              type="submit" 
              className="bg-[#8DC0DF] text-white px-3 py-1 rounded-lg hover:bg-[#F2A0B6] transition"
            >
              🔍
            </button>
          </form>
          <Link to="/" className="hover:text-white transition">Home</Link>
         

          {/* Search Bar */}
          

          {/* Dropdown Menu */}
          <div 
            className="relative" 
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="hover:text-white transition">
              Categories 
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-[#8dc0df] border border-[#A8E6CF] rounded-b-lg shadow-lg">
                <Link to="/category/romantic" className="block px-4 py-2 hover:bg-[#f6c0c0] transition">Romantic</Link>
                <Link to="/category/fantasy" className="block px-4 py-2 hover:bg-[#f6c0c0] transition">Fantasy</Link>
                <Link to="/category/horror" className="block px-4 py-2 hover:bg-[#f6c0c0] transition">Horror</Link>
                <Link to="/category/humour" className="block px-4 py-2 hover:bg-[#f6c0c0] transition">Humour</Link>
              </div>
            )}
          </div>
          <Link to="/Readlater" className="hover:text-white transition">Read Later</Link>
          <Link to="/" className="hover:text-white transition">My profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
