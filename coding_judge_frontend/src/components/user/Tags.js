import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tagListAction } from '../../redux/actions/tagActions';


const Tags = () => {
  // Sample problems data

  const dispatch = useDispatch();
  const { loading: tagListLoading, tags } = useSelector(state => state.tagListReducer); // Updated state selector

  useEffect(() => {
    dispatch(tagListAction())
  }, [dispatch]); // Include success in the dependency array to refetch problems when a deletion is successful
     

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Tags</h3>
          </div>
          <div className="bg-white px-4 py-4 sm:px-6 flex space-x-4">
            {/* Render tags */}
            {tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
