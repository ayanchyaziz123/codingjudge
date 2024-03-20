import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // State to manage profile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Coding Judge</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/problems" className="hover:text-gray-400">Problems</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-400">Leaderboard</Link></li>
          <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
          <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
          {/* Profile Dropdown */}
          <li className="relative">
            <button onClick={toggleProfileMenu} className="hover:text-gray-400 focus:outline-none">
              Profile
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 10c2.667 0 4 1.333 4 2v1H6v-1c0-.667 1.333-2 4-2z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Profile Dropdown Content */}
            {profileMenuOpen && (
              <ul className="absolute bg-gray-900 mt-2 py-2 w-32 rounded-lg shadow-lg z-10">
                <li><Link to="/profile" className="block px-4 py-2 text-gray-200 hover:bg-gray-800">My Profile</Link></li>
                <li><Link to="/settings" className="block px-4 py-2 text-gray-200 hover:bg-gray-800">Settings</Link></li>
                <li><Link to="/logout" className="block px-4 py-2 text-gray-200 hover:bg-gray-800">Logout</Link></li>
              </ul>
            )}
          </li>
          {/* End of Profile Dropdown */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
