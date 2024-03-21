// TagCreatePage.js
import React, { useState } from 'react';

function TagCreatePage({ onTagAdd }) {
  const [tagName, setTagName] = useState('');
  const [description, setDescription] = useState('');

  const handleTagNameChange = (e) => {
    setTagName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tagName.trim()) return; // Prevent adding empty tag names
    onTagAdd({ name: tagName, description });
    setTagName(''); // Clear input fields after submission
    setDescription('');
  };

  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Tag</h2>
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
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
