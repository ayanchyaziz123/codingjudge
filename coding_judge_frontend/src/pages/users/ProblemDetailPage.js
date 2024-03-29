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
  const results = useSelector(state => state.testcaseRunReducer?.results);
  const userInfo = useSelector(state => state.userLogin.userInfo);

  useEffect(() => {
    dispatch(ProblemGetByIdAction(id));
  }, [dispatch, id]);

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
          {results && (
            <div className="mb-4">
            {results.isPassed ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-semibold">Accepted!</strong>
                <p className="mt-2">
                  <strong>Input:</strong> <br /> {results.input}
                </p>
                <p className="mt-1">
                  <strong>Output:</strong> {results.executedOutput}
                </p>
                <p className="mt-1">
                  <strong>Expected :</strong> {results.actualOutput}
                </p>
              </div>
            ) : (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-semibold">Error!</strong>
                <p className="mt-2">
                  {results.message}
                </p>
              </div>
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
