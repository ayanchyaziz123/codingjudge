// CategoryCreatePage.js
import React, { useState } from 'react';

function CategoryCreatePage({ onCategoryAdd }) {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryDescriptionChange = (e) => {
    setCategoryDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return; // Prevent adding empty category names
    onCategoryAdd({ name: categoryName, description: categoryDescription });
    setCategoryName('');
    setCategoryDescription('');
  };

  return (
    <div className="mx-auto max-w-md mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleCategoryNameChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          />
        </div>
        <div>
          <label htmlFor="categoryDescription" className="block text-sm font-medium text-gray-700">Category Description</label>
          <textarea
            id="categoryDescription"
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2 border"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default CategoryCreatePage;
