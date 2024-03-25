import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import { useDispatch, useSelector } from 'react-redux';
import { ProblemGetByIdAction } from '../../redux/actions/problemActions';
import parse from 'html-react-parser';
import PageLoader from '../../components/common/PageLoader';
import { stateToHTML } from 'draft-js-export-html'; // Import the stateToHTML function
import RichTextField from '../../components/admin/RichTextField';
import Description from '../../components/common/Description';



function ProblemDetailPage() {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const dispatch = useDispatch();
  const { loading, problem, error } = useSelector(state => state.problemGetByIdReducer);

  console.log(problem.description)
  useEffect(() => {
    // Fetch problem details when component mounts
    dispatch(ProblemGetByIdAction(id));
  }, [dispatch, id]);

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
      <div className="mb-4 md:mb-0 md:pr-4 flex-1 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Problem Details</h2>
        <div className="problem-details-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : problem ? (
            <div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <div className="problem-description">
                <Description initialContent={problem.description} disabled="disabled"/>
              </div>
              {/* <div>{parse(stateToHTML(problem.description))}</div> */}
              <h4 className="text-lg font-semibold mb-2">Constraints</h4>
              <div className="problem-constraints">{problem.constraints}</div>
             
            </div>
          ) : (
            <p>No problem details available</p>
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
                useShadows: false,
                vertical: 'visible',
                horizontal: 'visible',
                horizontalScrollbarSize: 10,
                verticalScrollbarSize: 10
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
