import React, { useState } from 'react';

const ProblemAddPage = () => {
  // State variables to track form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [tags, setTags] = useState('');
  const [isPublic, setIsPublic] = useState(false); // State variable for public/private checkbox

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the problem details to the backend
    console.log('Form submitted:', { title, description, difficulty, tags, isPublic });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Problem Management</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2">Difficulty</label>
          <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2">
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags</label>
          <input type="text" id="tags" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
          <p className="text-sm text-gray-500 mt-1">Enter tags separated by commas (e.g., array, sorting, dynamic programming)</p>
        </div>
        <div className="mb-4">
          <label htmlFor="isPublic" className="block text-gray-700 font-bold mb-2">Public</label>
          <input type="checkbox" id="isPublic" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} className="mr-2" />
          <span className="text-sm text-gray-500">Check if the problem is public</span>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Problem</button>
        </div>
      </form>
    </div>
  );
};

export default ProblemAddPage;
