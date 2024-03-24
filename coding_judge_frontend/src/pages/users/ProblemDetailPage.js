import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import 'monaco-editor/esm/vs/editor/editor.all.js'; // Import Monaco Editor

function ProblemDetailPage() {
  const { problemId } = useParams(); // Assuming you have a route parameter for problemId
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript'); // Default language is JavaScript

  // Static sample problem
  const problem = {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order. Given an array of integers, return indices of the two numbers such that they add up to a specific target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    constraints: 'The solution should have a time complexity of O(n).',
    sampleInput: '[2,7,11,15]\n9',
    sampleOutput: '[0,1]'
  };

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  const runCode = () => {
    try {
      // Execute the code
      const result = eval('(' + code + ')')();
      setOutput("Output: " + JSON.stringify(result));
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  const handleSubmit = () => {
    // Here you can add code to submit the code to your backend or perform any other actions
    // For now, let's just run the code
    runCode();
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row">
      <div className="mb-4 md:mb-0 md:pr-4 flex-1 overflow-auto"> {/* Adjusted width and added overflow */}
        <h2 className="text-2xl font-semibold mb-4">Problem Details</h2>
        <div className="problem-details-container">
          {problem ? (
            <div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <div className="problem-description">{problem.description}</div>
              <h4 className="text-lg font-semibold mb-2">Constraints</h4>
              <div className="problem-constraints">{problem.constraints}</div>
              <h4 className="text-lg font-semibold mb-2">Sample Input</h4>
              <pre className="bg-gray-100 p-4 mb-4">{problem.sampleInput}</pre>
              <h4 className="text-lg font-semibold mb-2">Sample Output</h4>
              <pre className="bg-gray-100 p-4 mb-4">{problem.sampleOutput}</pre>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="md:w-1/2 pl-4">
        <h2 className="text-2xl font-semibold mb-4">Code Editor</h2>
        <div className="mt-4 flex items-center">
          <button onClick={runCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Run Code</button>
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          <div className="ml-auto">
            <select value={selectedLanguage} onChange={handleLanguageChange} className="bg-white border border-gray-400 rounded px-2 py-1">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              {/* Add more options for other languages as needed */}
            </select>
          </div>
        </div>
        <div className="mt-4">{output}</div>
        <div className="h-full">
          <MonacoEditor
            language={selectedLanguage}
            theme="vs-dark"
            value={code}
            options={{
              selectOnLineNumbers: true,
              scrollbar: {
                useShadows: false, // Removes shadows around the scroll bar
                vertical: 'visible', // Always show vertical scrollbar
                horizontal: 'visible', // Always show horizontal scrollbar
                horizontalScrollbarSize: 10, // Increase the size of horizontal scrollbar
                verticalScrollbarSize: 10 // Increase the size of vertical scrollbar
              }
            }}
            onChange={handleCodeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProblemDetailPage;
