// pages/AdminDashboardPage.js

import React from 'react';
import AdminDashboard from '../admin/AdminDashboard';

const AdminDashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
