import React, { useState } from 'react';
import TagsList from '../../components/admin/TagsList';
import TagAdd from '../../components/admin/TagAdd';

const TagManagementPage = () => {
  const [tags, setTags] = useState([
    { id: 1, name: 'React', description: 'JavaScript library for building user interfaces' },
    { id: 2, name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
    { id: 3, name: 'MongoDB', description: 'NoSQL database program' },
    // Add more sample tags as needed
  ]);

  const handleAddTag = (newTag) => {
    // Add the new tag to the existing tags list
    setTags([...tags, newTag]);
  };

  const handleEditTag = (tagId) => {
    // Logic for editing a tag
    console.log('Edit tag:', tagId);
  };

  const handleDeleteTag = (tagId) => {
    // Logic for deleting a tag
    console.log('Delete tag:', tagId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Tag Management</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <TagAdd onAddTag={handleAddTag} />
        </div>
        <div>
          <TagsList tags={tags} onEditTag={handleEditTag} onDeleteTag={handleDeleteTag} />
        </div>
      </div>
    </div>
  );
};

export default TagManagementPage;
