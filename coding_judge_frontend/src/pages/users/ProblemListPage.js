import React from 'react';

const ProblemsListPage = () => {
  // Sample problems data
  const problems = [
    { id: 1, status: "Solved", title: "Problem 1", solution: "Solution 1", acceptance: "90%", difficulty: "Easy", frequency: "Weekly", tags: ["Array", "Sorting"] },
    { id: 2, status: "Unsolved", title: "Problem 2", solution: "Solution 2", acceptance: "75%", difficulty: "Medium", frequency: "Monthly", tags: ["String", "Dynamic Programming"] },
    { id: 3, status: "Solved", title: "Problem 3", solution: "Solution 3", acceptance: "85%", difficulty: "Hard", frequency: "Biweekly", tags: ["Graph", "Backtracking"] },
    // Add more problems as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Tags</h3>
          </div>
          <div className="bg-white px-4 py-4 sm:px-6 flex space-x-4">
            {/* Render tags */}
            {['Array', 'String', 'Sorting', 'Dynamic Programming', 'Graph', 'Backtracking'].map((tag, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Problems</h3>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Solution
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acceptance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {problems.map(problem => (
                  <tr key={problem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.solution}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.acceptance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.difficulty}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsListPage;
