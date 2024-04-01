import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { tagEditAction, tagGetByIdAction, resetTagState } from '../../../redux/actions/tagActions'; // Import tag actions
import PageLoader from '../../../components/common/PageLoader';

function TagEditPage() {
  const { id } = useParams();
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const { tag, loading: tagGetByIdLoading, error: tagGetByIdError } = useSelector(state => state.tagGetByIdReducer); // Use tag state and selectors
  const { loading: tagEditLoading, error: tagEditError, success: tagEditSuccess } = useSelector(state => state.tagEditReducer); // Use tag state and selectors
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    dispatch(tagGetByIdAction(id)); // Dispatch tag get by ID action
  }, [dispatch, id]);

  useEffect(() => {
    if (tag) {
      setTagName(tag.name);
      setTagDescription(tag.description);
    }
  }, [tag]);

  useEffect(() => {
    if (tagEditSuccess) {
      // Reset form fields and error messages
      setTagName('');
      setTagDescription('');
      dispatch(resetTagState()); // Dispatch reset tag state action
  
      // Show success message for 3 seconds
      setShowSuccess(true);
      
      // After 3 seconds, navigate to tags list page
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/tags_list');
      }, 2000);
    }
  }, [tagEditSuccess, navigate, dispatch]);

  const handleTagNameChange = (e) => {
    setTagName(e.target.value);
  };

  const handleTagDescriptionChange = (e) => {
    setTagDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tagName.trim()) return;

    dispatch(tagEditAction(id, { name: tagName, description: tagDescription })); // Dispatch tag edit action
  };

  return (
    <div className="mx-auto max-w-md mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Tag</h2>
      {tagGetByIdError && <div className="text-red-600 mb-4">{tagGetByIdError}</div>} {/* Error message div */}
      {tagEditError && <div className="text-red-600 mb-4">{tagEditError}</div>} {/* Error message div */}
      {showSuccess && <div className="text-green-600 mb-4">Tag successfully updated!</div>} {/* Success message div */}
      {tagGetByIdLoading || tagEditLoading ? <PageLoader /> : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tagName" className="block text-sm font-medium text-gray-700">Tag Name</label>
            <input
              type="text"
              id="tagName"
              value={tagName}
              onChange={handleTagNameChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
            />
          </div>
          <div>
            <label htmlFor="tagDescription" className="block text-sm font-medium text-gray-700">Tag Description</label>
            <textarea
              id="tagDescription"
              value={tagDescription}
              onChange={handleTagDescriptionChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Tag
          </button>
        </form>
      )}
    </div>
  );
}

export default TagEditPage;
