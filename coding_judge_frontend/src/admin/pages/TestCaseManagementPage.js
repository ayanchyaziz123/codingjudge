import React, { useState } from 'react';

const TestCaseManagementPage = () => {
  const [problemNumber, setProblemNumber] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [testCases, setTestCases] = useState([
    { id: 1, problemNumber: 1, input: 'Input 1', output: 'Output 1' },
    { id: 2, problemNumber: 1, input: 'Input 2', output: 'Output 2' },
  ]);
  const [editingTestCaseId, setEditingTestCaseId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTestCaseId !== null) {
      // Update existing test case
      const updatedTestCases = testCases.map(testCase =>
        testCase.id === editingTestCaseId
          ? { ...testCase, problemNumber, input, output }
          : testCase
      );
      setTestCases(updatedTestCases);
      setEditingTestCaseId(null);
    } else {
      // Add new test case
      const newTestCase = { id: testCases.length + 1, problemNumber, input, output };
      setTestCases([...testCases, newTestCase]);
    }
    setProblemNumber('');
    setInput('');
    setOutput('');
  };

  const handleEdit = (testCase) => {
    setProblemNumber(testCase.problemNumber);
    setInput(testCase.input);
    setOutput(testCase.output);
    setEditingTestCaseId(testCase.id);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Previous Test Cases</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem Number</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Input</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testCases.map(testCase => (
                <tr key={testCase.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testCase.problemNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testCase.input}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{testCase.output}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button onClick={() => handleEdit(testCase)} className="text-blue-500 hover:text-blue-700">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Add New Test Case</h2>
          <form onSubmit={handleSubmit} className="max-w-lg">
            <div className="mb-4">
              <label htmlFor="problemNumber" className="block text-gray-700 font-bold mb-2">Problem Number</label>
              <input type="text" id="problemNumber" value={problemNumber} onChange={(e) => setProblemNumber(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="input" className="block text-gray-700 font-bold mb-2">Input</label>
              <textarea id="input" value={input} onChange={(e) => setInput(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="output" className="block text-gray-700 font-bold mb-2">Output</label>
              <textarea id="output" value={output}
              onChange={(e) => setOutput(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  {editingTestCaseId !== null ? 'Update Test Case' : 'Add Test Case'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestCaseManagementPage;
  