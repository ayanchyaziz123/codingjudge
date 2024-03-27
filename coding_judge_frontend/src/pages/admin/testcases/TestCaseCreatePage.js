import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { problemListAction } from '../../../redux/actions/problemActions';
import PageLoader from '../../../components/common/PageLoader';
import { testCaseCreateAction } from '../../../redux/actions/testcseActions';
import Description from '../../../components/common/Description';


function TestCaseCreatePage({ onTestCaseAdd }) {
  const dispatch = useDispatch();

  const [selectedProblemId, setSelectedProblemId] = useState('');
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const { problems } = useSelector(state => state.problemListReducer);
  const { success, loading } = useSelector(state => state.testcaseCreateReducer);

  useEffect(() => {
    dispatch(problemListAction());
  }, [dispatch, selectedProblemId]);

  const handleProblemIdChange = (e) => {
    setSelectedProblemId(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOutputChange = (e) => {
    setOutput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProblemId || !title.trim() || !input.trim() || !output.trim()) return; // Prevent adding empty fields
    dispatch(testCaseCreateAction({ problemId: selectedProblemId, title, input, output }));
    // Clear input fields after submission
    setSelectedProblemId('');
    setTitle('');
    setInput('');
    setOutput('');
  };

  // Filter the problems array to get the selected problem
  const selectedProblem = problems.find(problem => problem._id === selectedProblemId);

  return (
    <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row">
      <div className="md:w-1/3 px-4">
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
              {problems.map(problem => (
                <option key={problem._id} value={problem._id}>{problem.title}</option>
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
            disabled={loading} // Disable button while loading
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
          >
            {loading ? <PageLoader size={6} /> : 'Add Test Case'}
          </button>
          </form>
        {success && <p className="text-green-500 mt-2">Test case added successfully!</p>}
      </div>
      <div className="md:w-1/2 px-4">
        {selectedProblem && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Problem Details</h2>
            <h3 className="text-xl font-semibold mb-2">{selectedProblem.title}</h3>
            <div className="problem-description">
              <Description initialContent={selectedProblem.description} disabled="disabled"/>
            </div>
            <h4 className="text-lg font-semibold mb-2">Constraints</h4>
            <div className="problem-constraints">{selectedProblem.constraints}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestCaseCreatePage;
