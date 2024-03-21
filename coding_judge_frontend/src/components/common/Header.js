import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const isAuthenticated = useSelector(state => state.userLogin.userInfo !== null); // Get authentication status from Redux state

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
          {/* Render different links based on authentication status */}
          {isAuthenticated ? (
            <>
              <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
              <li><Link to="/logout" className="hover:text-gray-400">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
              <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
