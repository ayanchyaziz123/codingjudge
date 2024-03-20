import React, { useState } from 'react';
import RichTextField from './RichTextField'; // Import RichTextField component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AddProblem = ({ onAddProblem }) => {
  const navigate = useNavigate();

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
    const newProblem = { title, description, tags: tags.split(','), difficulty, isPublic };
    onAddProblem(newProblem);
    // Reset form inputs
    setTitle('');
    setDescription('');
    setDifficulty('');
    setTags('');
    setIsPublic(false);
    navigate('/'); // Navigate back to the main page after adding problem
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="container mx-auto py-8 flex justify-center">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Add New Problem</h2>
          <form onSubmit={handleSubmit} className="max-w-lg">
            {/* Form Inputs */}
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
           
            {/* Tags */}
            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags (comma-separated)</label>
              <input type="text" id="tags" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            {/* Difficulty */}
            <div className="mb-4">
              <label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2">Difficulty</label>
              <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
             {/* Description */}
             <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <RichTextField value={description} onChange={setDescription} />
            </div>
            {/* Is Public */}
            <div className="mb-4">
              <label htmlFor="isPublic" className="flex items-center">
                <input type="checkbox" id="isPublic" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">Public</span>
              </label>
            </div>
            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Problem</button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {/* Add content here to display on the right side */}
          <div className="w-3/4 bg-gray-200 h-64 rounded-md">
            <p className="text-center text-gray-700">Content on the right side</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProblem;
