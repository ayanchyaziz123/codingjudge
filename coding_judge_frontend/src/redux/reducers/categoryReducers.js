// categoryReducers.js

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
  } from '../constants/categoryConstants';
  
  // Initial state for categories
  const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  // Category reducer function
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
      case CREATE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload,
          error: null,
        };
      case CREATE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: [...state.categories, action.payload],
          error: null,
        };
      case FETCH_CATEGORIES_FAILURE:
      case CREATE_CATEGORY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  