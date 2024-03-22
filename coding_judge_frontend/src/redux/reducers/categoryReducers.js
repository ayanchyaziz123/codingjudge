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
            return { loading: true }
  
        case CREATE_CATEGORY_SUCCESS:
            return { loading: false, userInfo: action.payload.categories }
  
        case CREATE_CATEGORY_FAILURE:
            return { loading: false, error: action.payload }
  
        default:
            return state
    }
  }
  