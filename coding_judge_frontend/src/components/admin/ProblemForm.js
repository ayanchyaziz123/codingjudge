// ProblemForm.js
import React, { useState, useEffect } from 'react';
import RichTextField from './RichTextField';

function ProblemForm({ initialValues, onSubmit }) {
  const [formData, setFormData] = useState(initialValues || {});

  // Update formData when initialValues change
  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleRichTextChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add Problem</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border" />
        </div>

        {/* Bangla Title */}
        <div>
          <label htmlFor="banglaTitle" className="block text-sm font-medium text-gray-700">Bangla Title</label>
          <input type="text" id="banglaTitle" name="banglaTitle" value={formData.banglaTitle} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border" />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (English)</label>
          <RichTextField name="description" value={formData.description} onChange={handleRichTextChange} />
        </div>

        {/* Bangla Description */}
        <div>
          <label htmlFor="banglaDescription" className="block text-sm font-medium text-gray-700">Description (Bangla)</label>
          <RichTextField name="banglaDescription" value={formData.banglaDescription} onChange={handleRichTextChange} />
        </div>

        {/* Is Public */}
        <div className="flex items-center">
          <input id="isPublic" name="isPublic" type="checkbox" checked={formData.isPublic} onChange={handleCheckboxChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-900">Is Public</label>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
          <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3 border" />
        </div>
        
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  );
}

export default ProblemForm;
