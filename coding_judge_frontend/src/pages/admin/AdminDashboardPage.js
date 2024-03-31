// pages/AdminDashboardPage.js

import React from 'react';
import AdminDashboard from '../../components/admin/AdminDashboard'
import Sidebar from '../../components/admin/Sidebar';

const AdminDashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200 p-4">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
