import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProblemsList = () => {
  const [problems, setProblems] = useState([
    { id: 1, title: "Problem 1", description: "Description of Problem 1", tags: ["tag1", "tag2"], difficulty: "easy", isPublic: true },
    { id: 2, title: "Problem 2", description: "Description of Problem 2", tags: ["tag3", "tag4"], difficulty: "medium", isPublic: false },
    { id: 3, title: "Problem 3", description: "Description of Problem 3", tags: ["tag5", "tag6"], difficulty: "hard", isPublic: true },
    { id: 4, title: "Problem 4", description: "Description of Problem 4", tags: ["tag7", "tag8"], difficulty: "medium", isPublic: true },
    { id: 5, title: "Problem 5", description: "Description of Problem 5", tags: ["tag9", "tag10"], difficulty: "easy", isPublic: false },
    { id: 6, title: "Problem 6", description: "Description of Problem 6", tags: ["tag11", "tag12"], difficulty: "hard", isPublic: true },
    { id: 7, title: "Problem 7", description: "Description of Problem 7", tags: ["tag13", "tag14"], difficulty: "medium", isPublic: true },
    { id: 8, title: "Problem 8", description: "Description of Problem 8", tags: ["tag15", "tag16"], difficulty: "easy", isPublic: false },
    { id: 9, title: "Problem 9", description: "Description of Problem 9", tags: ["tag17", "tag18"], difficulty: "hard", isPublic: true },
    { id: 10, title: "Problem 10", description: "Description of Problem 10", tags: ["tag19", "tag20"], difficulty: "medium", isPublic: true },
    // Add more sample problems as needed
  ]);

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
      <h2 className="text-2xl font-bold mb-4">Problems List</h2>
      
      {/* Link to Add Problem Page */}
      <Link to="/add_problem" className="text-blue-500 hover:underline mb-4 block">Add New Problem</Link>

      {/* Problems Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Is Public</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
       
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.title}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.description}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.tags.join(', ')}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.difficulty}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.isPublic ? 'Yes' : 'No'}</td>
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

export default ProblemsList;
