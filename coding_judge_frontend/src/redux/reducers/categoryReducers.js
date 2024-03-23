// categoryReducers.js

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,

  } from '../constants/categoryConstants';
  
  
  // Category reducer function
  export const categoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
            return {  success: false, loading: true }
  
        case CREATE_CATEGORY_SUCCESS:
            return { success: true, loading: false, category: action.payload }
  
        case CREATE_CATEGORY_FAILURE:
            return { success: false, loading: false, error: action.payload }
  
        default:
            return state
    }
  }


  export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { loading: true, categories: [] }

        case FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload,
            }

        case FETCH_CATEGORIES_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}  

  
  