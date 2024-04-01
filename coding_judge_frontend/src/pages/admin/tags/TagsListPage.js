import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { tagListAction, tagDeleteAction } from '../../../redux/actions/tagActions'; // Updated import
import PageLoader from '../../../components/common/PageLoader';
import { CREATE_TAG_RESET } from '../../../redux/constants/tagConstants'; // Updated import

function TagsListPage() { // Updated component name
  const dispatch = useDispatch();
  const { loading, tags } = useSelector(state => state.tagListReducer); // Updated state selector
  const { success, error } = useSelector(state => state.tagDeleteReducer); // Updated state selector
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(!userInfo){
      navigate('/login')
    }
    dispatch({ type: CREATE_TAG_RESET }) // Updated reset action
    dispatch(tagListAction()); // Updated action
  }, [dispatch, success, userInfo]); // Include success in the dependency array to refetch tags when a deletion is successful

  const handleEdit = (tagId) => {
    // Handle edit action
    console.log(`Editing tag with id ${tagId}`);
  };

  const handleDelete = (tagId) => {
    dispatch(tagDeleteAction(tagId)); // Updated delete action
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Tags List</h2>
      {success && <p className="text-green-600">Tag deleted successfully.</p>} {/* Display success message if deletion is successful */}
      {error && <p className="text-red-600">{error}</p>} {/* Display error message if deletion fails */}
      <Link to="/tag_create"> {/* Updated link */}
        <button className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New Tag {/* Updated button text */}
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
            {tags && tags.map(tag => (
              <tr key={tag._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tag._id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tag.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tag.description.length > 50 ? tag.description.substring(0, 50) + '...' : tag.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link to={`/tag_edit/${tag._id}`}>
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                  </Link>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(tag._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TagsListPage;
