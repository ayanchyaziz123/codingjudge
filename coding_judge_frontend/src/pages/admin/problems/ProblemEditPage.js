import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RichTextField from '../../../components/admin/RichTextField';
import { ProblemGetByIdAction, problemUpdateAction } from '../../../redux/actions/problemActions';

function ProblemEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [timeLimit, setTimeLimit] = useState('');
  const [memoryLimit, setMemoryLimit] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const problemGetById = useSelector(state => state.problemGetByIdReducer);
  const updateProblem = useSelector(state => state.problemUpdateAction);
  const { loading, problem, error } = problemGetById;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProblemGetByIdAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (problem) {
      setProblemTitle(problem.title);
      setProblemDescription(problem.description);
      setDifficulty(problem.difficulty);
      setTimeLimit(problem.timeLimit);
      setMemoryLimit(problem.memoryLimit);
      setIsPublic(problem.isPublic);
    }
  }, [problem]);

  useEffect(() => {
    if (updateProblem && updateProblem.updateSuccess) {
      navigate('/admin_problems_list');
    }
  }, [updateProblem, navigate]);

  const handleProblemTitleChange = (e) => {
    setProblemTitle(e.target.value);
  };

  const handleProblemDescriptionChange = (content) => {
    setProblemDescription(content);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleTimeLimitChange = (e) => {
    setTimeLimit(e.target.value);
  };

  const handleMemoryLimitChange = (e) => {
    setMemoryLimit(e.target.value);
  };

  const handleIsPublicChange = (e) => {
    setIsPublic(e.target.checked);
  };

  const handleSubmit = (e) => {
    alert("going")
    e.preventDefault();
    dispatch(problemUpdateAction(id, {
      title: problemTitle,
      description: problemDescription,
      difficulty,
      timeLimit: parseInt(timeLimit),
      memoryLimit: parseInt(memoryLimit),
      isPublic
    }));
  };

  return (
    <div className="mx-auto max-w-7xl mt-8 px-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Edit Problem</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : problem ? (
        <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex">
          <div className="flex-1">
            <div className="flex flex-col mb-4">
              <label htmlFor="problemTitle" className="block text-sm font-medium text-gray-700 mb-1">Problem Title</label>
              <input
                type="text"
                id="problemTitle"
                value={problemTitle}
                onChange={handleProblemTitleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={handleDifficultyChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="timeLimit" className="block text-sm font-medium text-gray-700 mb-1">Time Limit (ms)</label>
              <input
                type="number"
                id="timeLimit"
                value={timeLimit}
                onChange={handleTimeLimitChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="memoryLimit" className="block text-sm font-medium text-gray-700 mb-1">Memory Limit (MB)</label>
              <input
                type="number"
                id="memoryLimit"
                value={memoryLimit}
                onChange={handleMemoryLimitChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
              />
            </div>
            <div className="flex items-center">
              <input
                id="isPublic"
                type="checkbox"
                checked={isPublic}
                onChange={handleIsPublicChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-900">
                Make Problem Public
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
            >
              {updateProblem && updateProblem.updateLoading ? 'Updating...' : 'Update Problem'}
            </button>
          </div>
          <div className="flex-1 ml-4">
            <div className="flex flex-col">
              <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-700 mb-1">Problem Description</label>
              <RichTextField
                initialContent={problem.description}
                onContentChange={handleProblemDescriptionChange}
              />
            </div>
          </div>
        </form>
      ) : (
        <p>No problem found with the given ID</p>
      )}
    </div>
  );
}

export default ProblemEditPage;
