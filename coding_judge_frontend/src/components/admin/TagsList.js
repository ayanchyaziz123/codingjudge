import React from 'react';

const TagsList = ({ tags, onEditTag, onDeleteTag }) => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Tags List</h2>
      {tags.length === 0 ? (
        <p className="text-gray-500">No tags available</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {tags.map((tag) => (
            <li key={tag.id} className="py-4">
              <div className="bg-white shadow-md rounded p-4">
                <h3 className="text-lg font-bold mb-2">{tag.name}</h3>
                {tag.description && (
                  <p className="text-sm text-gray-600">{tag.description}</p>
                )}
                <div className="flex justify-end mt-2">
                  <button onClick={() => onEditTag(tag.id)} className="text-blue-600 mr-2">Edit</button>
                  <button onClick={() => onDeleteTag(tag.id)} className="text-red-600">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsList;
