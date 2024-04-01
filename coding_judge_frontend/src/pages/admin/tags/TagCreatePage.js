import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tagCreateAction } from '../../../redux/actions/tagActions';

function TagCreatePage() {
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false)
  const tagCreate = useSelector(state => state.tagCreateReducer);
  const { success, loading, tag } = tagCreate;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        navigate('/tags_list');
      }, 2000); // 3 seconds timeout

      // Clean up the timeout to avoid memory leaks
    }
  }, [success, navigate]);

  const handleTagNameChange = e => {
    setTagName(e.target.value);
  };

  const handleTagDescriptionChange = e => {
    setTagDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!tagName.trim()) return; // Prevent adding empty tag names
    dispatch(tagCreateAction({ name: tagName, description: tagDescription }));
  };

  return (
    <div className="mx-auto max-w-md mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Tags</h2>
      {showSuccess && <div className="text-green-600 mb-4">Tag successfully Created!</div>} {/* Success message div */}
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
          Add Tag
        </button>
      </form>
    </div>
  );
}

export default TagCreatePage;
