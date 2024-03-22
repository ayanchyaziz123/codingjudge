// TagsListPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialTags = [
  { id: 1, name: 'Tag 1' },
  { id: 2, name: 'Tag 2' },
  { id: 3, name: 'Tag 3' },
  // Add more initial tags if needed
];

function TagsListPage() {
  const [tags, setTags] = useState(initialTags);

  const handleDelete = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Tags List</h2>
      <Link to="/tag_create">
  <button className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Add New Tag
  </button>
</Link>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tags.map(tag => (
            <tr key={tag.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tag.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tag.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900" onClick={() => handleDelete(tag.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TagsListPage;
