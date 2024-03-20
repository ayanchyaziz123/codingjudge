import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import ProblemAddPage from './ProblemAddPage'; // Import ProblemAddPage component

const sampleProblems = [
  { id: 1, title: "Problem 1", description: "Description of Problem 1" },
  { id: 2, title: "Problem 2", description: "Description of Problem 2" },
  { id: 3, title: "Problem 3", description: "Description of Problem 3" },
  // Add more sample problems as needed
];

const ProblemsListPage = () => {
  const [problems, setProblems] = useState(sampleProblems);
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle editing a problem
  const handleEditProblem = (problemId) => {
    console.log('Edit problem:', problemId);
    // Implement logic to navigate to the edit problem page with the selected problem ID
  };

  // Function to handle adding a new problem
  const handleAddProblem = () => {
    // Navigate to the ProblemAddPage when the "Add New Problem" button is clicked
    navigate('/problem_add');
  };

  // Function to handle deleting a problem
  const handleDeleteProblem = (problemId) => {
    const updatedProblems = problems.filter(problem => problem.id !== problemId);
    setProblems(updatedProblems);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Problems List</h2>
      <div className="mb-4">
        <button onClick={handleAddProblem} className="bg-green-500 text-white py-2 px-4 rounded-md mr-2">Add New Problem</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEditProblem(problem.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                <button onClick={() => handleDeleteProblem(problem.id)} className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsListPage;
