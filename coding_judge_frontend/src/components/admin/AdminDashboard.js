// components/admin/AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/manage_problems" className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md flex items-center justify-center">
          Manage Problems
        </Link>
        <Link to="/manage_users" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-md flex items-center justify-center">
          Manage Users
        </Link>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg shadow-md flex items-center justify-center">
          View Statistics
        </button>
        {/* Add more links/buttons for other admin functionalities */}
      </div>
    </div>
  );
};

export default AdminDashboard;
