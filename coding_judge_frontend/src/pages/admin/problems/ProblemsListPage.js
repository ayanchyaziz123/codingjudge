import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { problemListAction, problemDeleteAction } from '../../../redux/actions/problemActions';
import PageLoader from '../../../components/common/PageLoader';

function ProblemListPage() {
  const dispatch = useDispatch();
  const { loading, problems } = useSelector(state => state.problemListReducer);
  const { success, error } = useSelector(state => state.problemDeleteReducer);

  useEffect(() => {
    dispatch(problemListAction());
  }, [dispatch, success]);

  const handleEdit = (problemId) => {
    // Redirect to problem edit page with the problem ID
    window.location.href = `/problem_edit/${problemId}`;
  };

  const handleDelete = (problemId) => {
    dispatch(problemDeleteAction(problemId));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Problems List</h2>
      {success && <p className="text-green-600">Problem deleted successfully.</p>}
      {error && <p className="text-red-600">{error}</p>}
      <Link to="/problem_create">
        <button className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New Problem
        </button>
      </Link>
      {loading ? (
        <PageLoader/>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {problems && problems.map(problem => (
              <tr key={problem._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem._id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.difficulty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEdit(problem._id)}>Edit</button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(problem._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProblemListPage;
