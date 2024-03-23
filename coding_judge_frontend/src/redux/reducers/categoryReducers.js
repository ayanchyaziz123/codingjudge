// categoryReducers.js

import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAILURE,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE,
    EDIT_CATEGORY_REQUEST,
    EDIT_CATEGORY_SUCCESS,
    EDIT_CATEGORY_FAILURE,
    GET_CATEGORY_BY_ID_REQUEST,
    GET_CATEGORY_BY_ID_SUCCESS,
    GET_CATEGORY_BY_ID_FAILURE
} from '../constants/categoryConstants';
  
  
// Reducer for creating a category
export const categoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
            return { success: false, loading: true };
  
        case CREATE_CATEGORY_SUCCESS:
            return { success: true, loading: false, category: action.payload };
  
        case CREATE_CATEGORY_FAILURE:
            return { success: false, loading: false, error: action.payload };
  
        default:
            return state;
    }
};

// Reducer for listing categories
export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return { loading: true, categories: [] };

        case FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload,
            };

        case FETCH_CATEGORIES_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

// Reducer for deleting a category
export const categoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return { loading: true };

        case DELETE_CATEGORY_SUCCESS:
            return { loading: false, success: true };

        case DELETE_CATEGORY_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

// Reducer for editing a category
export const categoryEditReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_CATEGORY_REQUEST:
            return { loading: true };

        case EDIT_CATEGORY_SUCCESS:
            return { loading: false, success: true, category: action.payload };

        case EDIT_CATEGORY_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

// Reducer for getting category by ID
export const categoryGetByIdReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case GET_CATEGORY_BY_ID_REQUEST:
            return { loading: true, category: {} };

        case GET_CATEGORY_BY_ID_SUCCESS:
            return { loading: false, category: action.payload };

        case GET_CATEGORY_BY_ID_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
