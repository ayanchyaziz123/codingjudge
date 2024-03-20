// DashboardPage.js

import React from 'react';


const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Include the Sidebar component */}
      
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Add dashboard cards or components here */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-gray-600">1000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Problems</h3>
            <p className="text-gray-600">500</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Submissions</h3>
            <p className="text-gray-600">2000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Users (Today)</h3>
            <p className="text-gray-600">150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
