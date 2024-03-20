import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ManageProblem = () => {
  const [problems, setProblems] = useState([
    { id: 1, title: "Problem 1", description: "Description of Problem 1" },
    { id: 2, title: "Problem 2", description: "Description of Problem 2" },
    { id: 3, title: "Problem 3", description: "Description of Problem 3" },
    // Add more sample problems as needed
  ]);

  const navigate = useNavigate(); // Initialize navigate function

  // State variables to track form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [tags, setTags] = useState('');
  const [isPublic, setIsPublic] = useState(false); // State variable for public/private checkbox

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the problem details to the backend
    const newProblem = { id: problems.length + 1, title, description };
    setProblems([...problems, newProblem]);
    // Reset form inputs
    setTitle('');
    setDescription('');
    setDifficulty('');
    setTags('');
    setIsPublic(false);
  };

  // Function to handle editing a problem
  const handleEditProblem = (problemId) => {
    console.log('Edit problem:', problemId);
    // Implement logic to navigate to the edit problem page with the selected problem ID
  };

  // Function to handle deleting a problem
  const handleDeleteProblem = (problemId) => {
    const updatedProblems = problems.filter(problem => problem.id !== problemId);
    setProblems(updatedProblems);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Manage Problems</h2>
      {/* Problem Add Form */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Add New Problem</h3>
        <form onSubmit={handleSubmit} className="max-w-lg">
          {/* Form Inputs */}
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          {/* Difficulty */}
          {/* Tags */}
          {/* Is Public */}
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Problem</button>
        </form>
      </div>
      
      {/* Problems List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Problems List</h3>
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
    </div>
  );
};

export default ManageProblem;
