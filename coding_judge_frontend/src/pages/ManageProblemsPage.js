// pages/ManageProblemsPage.js

import React from 'react';
import ManageProblem from '../admin/ManageProblem';

const ManageProblemsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Manage Problems</h1>
        <ManageProblem/>
      </div>
    </div>
  );
};

export default ManageProblemsPage;
