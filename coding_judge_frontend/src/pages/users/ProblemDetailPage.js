import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import { ProblemGetByIdAction } from '../../redux/actions/problemActions';
import { testCaseRunAction } from '../../redux/actions/testcseActions';
import PageLoader from '../../components/common/PageLoader';
import Description from '../../components/common/Description';

function ProblemDetailPage() {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const dispatch = useDispatch();
  const { loading, problem, error } = useSelector(state => state.problemGetByIdReducer);
  const {loading: testcaseRunLoading, success: testcaseRunSuccess, error: testcaseRunError, result} = useSelector(state => state.testcaseRunReducer);
  const userInfo = useSelector(state => state.userLogin.userInfo);
  console.log("Problems : ", problem)
  useEffect(() => {
    dispatch(ProblemGetByIdAction(id));
  }, [dispatch, id, userInfo]);

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  const handleRunCode = () => {
    dispatch(testCaseRunAction({ code, language: selectedLanguage }));
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmitCode = () => {
    // Implement code submission logic here
    console.log("Code submitted!");
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/5 md:pr-4 h-screen overflow-y-auto">
          {loading ? (
            <PageLoader />
          ) : error ? (
            <p>Error: {error}</p>
          ) : problem ? (
            <div>
              <h2 className="text-3xl font-semibold mb-2">{problem.title}</h2>
              <div className="mb-4">
                <Description initialContent={problem.description} disabled />
              </div>
              <h3 className="text-lg font-semibold mb-2">Category: {problem.category && problem.category.name}</h3> {/* Display category name */}
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap mb-4">
                {problem.tags && problem.tags.map(tag => (
                  <span key={tag._id} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag.name}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">Constraints</h3>
              <p>{problem.constraints}</p>
            </div>
          ) : (
            <p>No problem details available</p>
          )}
        </div>
        <div className="md:w-2/5 pl-4">
          <div className="flex items-center justify-between mb-4 space-x-4">
            {userInfo ? (
              <>
                <div>
                  <button onClick={handleRunCode} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Run</button>
                  <button  onClick={handleSubmitCode} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Submit</button>
                </div>
                <select value={selectedLanguage} onChange={handleLanguageChange} className="form-select">
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                  <option value="c/c++">C/C++</option>
                </select>
              </>
            ) : (
              <button className="btn-primary" disabled>Login to Run</button>
            )}
          </div>
          {result && (
  <div className="mb-4">
   {testcaseRunLoading ? (
  <div className="text-center">Loading...</div>
) : testcaseRunError ? (<div><h1>Error</h1></div>) : (
  result.isPassed ? (
    <div className="border border-green-500 bg-green-100 text-green-700 px-6 py-4 rounded-md shadow-md">
  <div className="flex items-center">
    <span className="text-lg text-green-800 font-semibold mr-2">Accepted!</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.293 9.293a1 1 0 011.414 0L11 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </div>
  <div className="mt-4">
    <div className="flex">
      <div className="mr-8">
        <p className="text-sm text-green-700 font-semibold">Input:</p>
        {result.input.split('\n').map((line, index) => (
          <div key={index} className="text-sm">{line}</div>
        ))}
      </div>
      <div>
        <p className="text-sm text-green-700 font-semibold">Output:</p>
        <div className="text-sm">{result.executedOutput}</div>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-sm text-green-700 font-semibold">Expected Output:</p>
      <div className="text-sm">{result.actualOutput}</div>
    </div>
  </div>
</div>

  ) : (
    <div className="border border-red-500 bg-red-100 text-red-700 px-6 py-4 rounded-md shadow-md">
    <div className="flex items-center">
      <span className="text-lg text-red-800 font-semibold mr-2">Wrong Answer!</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 011.414 0L10 11.586l2.879-2.88a1 1 0 111.414 1.414L11.414 13l2.88 2.879a1 1 0 11-1.414 1.414L10 14.414l-2.879 2.88a1 1 0 01-1.414-1.414L8.586 13 5.707 10.121a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="mt-4">
      <div className="flex">
      <div className="mr-8">
        <p className="text-sm text-red-700 font-semibold">Input:</p>
        {result.input.split('\n').map((line, index) => (
          <div key={index} className="text-sm">{line}</div>
        ))}
      </div>
        <div>
          <p className="text-sm text-red-700 font-semibold">Output:</p>
          <div className="text-sm">{result.executedOutput}</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-red-700 font-semibold">Expected Output:</p>
        <div className="text-sm">{result.actualOutput}</div>
      </div>
    </div>
  </div>
  
  )
)}
  </div>
)}
          <div className="h-full">
            <MonacoEditor
              language={selectedLanguage}
              theme="vs-dark"
              value={code}
              height="500px"
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
    </div>
  );
}

export default ProblemDetailPage;
