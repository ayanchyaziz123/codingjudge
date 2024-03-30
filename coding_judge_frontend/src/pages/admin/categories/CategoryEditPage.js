import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { categoryEditAction, categoryGetByIdAction, resetCategoryState } from '../../../redux/actions/categoryActions';

function CategoryEditPage() {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const { category, loading: categoryGetByIdLoading, error: categoryGetByIdError } = useSelector(state => state.categoryGetByIdReducer);
  const { loading: categoryEditLoading, error: categoryEditError, success: categoryEditSuccess } = useSelector(state => state.categoryEditReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    dispatch(categoryGetByIdAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (category) {
      setCategoryName(category.name);
      setCategoryDescription(category.description);
    }
  }, [category]);

  useEffect(() => {
    if (categoryEditSuccess) {
      // Reset form fields and error messages
      setCategoryName('');
      setCategoryDescription('');
      dispatch(resetCategoryState());
  
      // Show success message for 3 seconds
      setShowSuccess(true);
      
      // After 3 seconds, navigate to categories list page
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/categories_list');
      }, 2000);
    }
  }, [categoryEditSuccess, navigate, dispatch]);
  

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryDescriptionChange = (e) => {
    setCategoryDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    dispatch(categoryEditAction(id, { name: categoryName, description: categoryDescription }));
  };

  return (
    <div className="mx-auto max-w-md mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>
      {categoryGetByIdError && <div className="text-red-600 mb-4">{categoryGetByIdError}</div>} {/* Error message div */}
      {categoryEditError && <div className="text-red-600 mb-4">{categoryEditError}</div>} {/* Error message div */}
      {showSuccess && <div className="text-green-600 mb-4">Category successfully updated!</div>} {/* Success message div */}
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
          Update Category
        </button>
      </form>
    </div>
  );
}

export default CategoryEditPage;
