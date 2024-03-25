import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestCaseCreatePage({ onTestCaseAdd }) {
  const [problemIdOptions, setProblemIdOptions] = useState([]);
  const [selectedProblemId, setSelectedProblemId] = useState('');
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    fetchProblemIdOptions();
  }, []);

  const fetchProblemIdOptions = async () => {
    try {
      const response = await axios.get('/problems/get_all'); // Adjust the route according to your backend setup
      setProblemIdOptions(response.data.problems.map(problem => ({ id: problem._id, title: problem.title })));
    } catch (error) {
      console.error('Error fetching problem ID options:', error);
    }
  };

  const handleProblemIdChange = (e) => {
    setSelectedProblemId(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log("input: ", input)
  };

  const handleOutputChange = (e) => {
    setOutput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProblemId || !title.trim() || !input.trim() || !output.trim()) return; // Prevent adding empty fields
    onTestCaseAdd({ problemId: selectedProblemId, title, input, output });
    setSelectedProblemId(''); // Clear input fields after submission
    setTitle('');
    setInput('');
    setOutput('');
  };

  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Test Case</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="problemId" className="block text-sm font-medium text-gray-700">Select Problem</label>
          <select
            id="problemId"
            value={selectedProblemId}
            onChange={handleProblemIdChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          >
            <option value="">Select a problem...</option>
            {problemIdOptions.map(problem => (
              <option key={problem.id} value={problem.id}>{problem.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          />
        </div>
        <div>
          <label htmlFor="input" className="block text-sm font-medium text-gray-700">Input</label>
          <textarea
            id="input"
            value={input}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          ></textarea>
        </div>
        <div>
          <label htmlFor="output" className="block text-sm font-medium text-gray-700">Output</label>
          <textarea
            id="output"
            value={output}
            onChange={handleOutputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Test Case
        </button>
      </form>
    </div>
  );
}

export default TestCaseCreatePage;
