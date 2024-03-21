// categoryActions.js

// Import action types
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
  } from '../constants/categoryConstants';
  
  // Action creator to create a new category
  export const createCategory = (categoryData) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_CATEGORY_REQUEST });
      try {
        // Perform API call to create a new category
        const response = await fetch('/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(categoryData),
        });
        const data = await response.json();
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
        // After creating the category, fetch the updated list of categories
        dispatch(fetchCategories());
      } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error.message });
      }
    };
  };
  