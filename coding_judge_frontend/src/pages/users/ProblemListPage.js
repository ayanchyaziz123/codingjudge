import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { problemListAction } from '../../redux/actions/problemActions';
import PageLoader from '../../components/common/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import Tags from '../../components/user/Tags';



const ProblemsListPage = () => {
  // Sample problems data

  const dispatch = useDispatch();
  const { loading, problems } = useSelector(state => state.problemListReducer);

  useEffect(() => {
    dispatch(problemListAction());
  }, [dispatch]); // Include success in the dependency array to refetch problems when a deletion is successful
     

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Tags/>

        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Problems</h3>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
               
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
             
                
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difficulty
                  </th>
            
                </tr>
              </thead>
              {
                loading ? <PageLoader/> : 
                <tbody className="bg-white divide-y divide-gray-200">
                {problems.map(problem => (
                  <tr key={problem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
           
                    <Link to={`/problem_detail/${problem._id}`} className="text-blue-500 hover:underline">
                      {problem.title}
                    </Link>
                    </td>
        
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.difficulty}</td>

                  </tr>
                ))}
              </tbody>
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsListPage;
