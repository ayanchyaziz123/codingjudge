import React, { useState } from 'react';

const TagAdd = ({ onAddTag }) => {
  const [tagName, setTagName] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle changes in the tag name input field
  const handleNameChange = (e) => {
    setTagName(e.target.value);
  };

  // Function to handle changes in the description input field
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to handle the submission of a new tag
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tagName.trim()) return;
    onAddTag({ name: tagName, description });
    setTagName('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Add New Tag</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tagName" className="block text-sm font-medium text-gray-700">Tag Name</label>
          <input
            type="text"
            id="tagName"
            value={tagName}
            onChange={handleNameChange}
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter tag name"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="3"
            className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter tag description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add Tag
        </button>
      </form>
    </div>
  );
};

export default TagAdd;
