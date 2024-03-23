import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryListAction, categoryDeleteAction } from '../../../redux/actions/categoryActions';
import PageLoader from '../../../components/common/PageLoader';

function CategoriesListPage() {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector(state => state.categoryListReducer);
  const { success, error } = useSelector(state => state.categoryDeleteReducer);

  useEffect(() => {
    dispatch(categoryListAction());
  }, [dispatch, success]); // Include success in the dependency array to refetch categories when a deletion is successful

  const handleEdit = (categoryId) => {
    // Handle edit action
    console.log(`Editing category with id ${categoryId}`);
  };

  const handleDelete = (categoryId) => {
    dispatch(categoryDeleteAction(categoryId));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Categories List</h2>
      {success && <p className="text-green-600">Category deleted successfully.</p>} {/* Display success message if deletion is successful */}
      {error && <p className="text-red-600">{error}</p>} {/* Display error message if deletion fails */}
      <Link to="/category_create">
        <button className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New Category
        </button>
      </Link>
      {loading ? (
        <PageLoader/>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.map(category => (
              <tr key={category._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category._id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description.length > 50 ? category.description.substring(0, 50) + '...' : category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEdit(category._id)}>Edit</button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(category._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CategoriesListPage;
