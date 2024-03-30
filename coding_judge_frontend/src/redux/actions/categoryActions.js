// categoryActions.js
import axios from 'axios'
// Import action types
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
    GET_CATEGORY_BY_ID_REQUEST,
    GET_CATEGORY_BY_ID_SUCCESS,
    GET_CATEGORY_BY_ID_FAILURE,
    EDIT_CATEGORY_REQUEST,
    EDIT_CATEGORY_SUCCESS,
    EDIT_CATEGORY_FAILURE,
    RESET_CATEGORY_STATE
  } from '../constants/categoryConstants';
  

  export const resetCategoryState = () => ({
    type: RESET_CATEGORY_STATE
  });
  // Action creator to create a new category
  export const categoryCreateAction = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        dispatch({
            type: CREATE_CATEGORY_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:8000/category/create',
            formData,
            config
        )

        dispatch({
            type: CREATE_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_CATEGORY_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const categoryListAction = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_CATEGORIES_REQUEST })
        const { data } = await axios.get('http://localhost:8000/category/categories',)

        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const categoryDeleteAction = (categoryId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CATEGORY_REQUEST });
        await axios.delete(`http://localhost:8000/category/delete/${categoryId}`);
        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: categoryId
        });
    } catch (error) {
        dispatch({
            type: DELETE_CATEGORY_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const categoryGetByIdAction = (categoryId) => async (dispatch) => {
    try {
        console.log("hello world..!")
        dispatch({ type: GET_CATEGORY_BY_ID_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/category/get/${categoryId}`);

        dispatch({
            type: GET_CATEGORY_BY_ID_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: GET_CATEGORY_BY_ID_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const categoryEditAction = (categoryId, formData) => async (dispatch, getState) => {
    try {
        dispatch({ type: EDIT_CATEGORY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo ? userInfo.token : null}`
            }
        }
        console.log(userInfo.token)

        const { data } = await axios.put(
            `http://localhost:8000/category/edit/${categoryId}`,
            formData,
            config
        );

        dispatch({
            type: EDIT_CATEGORY_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: EDIT_CATEGORY_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

  