import React from 'react';
import ProblemsList from '../../components/admin/ProblemsList';

const ManageProblemsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Problems List</h1>
        <ProblemsList />
      </div>
    </div>
  );
};

export default ManageProblemsPage;
