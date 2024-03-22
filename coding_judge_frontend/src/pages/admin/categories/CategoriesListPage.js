// CategoriesListPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialCategories = [
  { id: 1, name: 'Category 1', description: 'Description for Category 1' },
  { id: 2, name: 'Category 2', description: 'Description for Category 2' },
  { id: 3, name: 'Category 3', description: 'Description for Category 3' }
];

function CategoriesListPage() {
  const [categories, setCategories] = useState(initialCategories);

  const handleEdit = (categoryId) => {
    // Handle edit action
    console.log(`Editing category with id ${categoryId}`);
  };

  const handleDelete = (categoryId) => {
    // Handle delete action
    setCategories(categories.filter(category => category.id !== categoryId));
    console.log(`Deleting category with id ${categoryId}`);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Categories List</h2>
      <Link to="/category_create">
  <button className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Add New Category
  </button>
</Link>
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
          {categories.map(category => (
            <tr key={category.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => handleEdit(category.id)}>Edit</button>
                <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriesListPage;
