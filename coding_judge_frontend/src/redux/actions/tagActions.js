import axios from 'axios';
import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_SUCCESS,
    FETCH_TAGS_FAILURE,
    CREATE_TAG_REQUEST,
    CREATE_TAG_SUCCESS,
    CREATE_TAG_FAILURE,
    DELETE_TAG_REQUEST,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_FAILURE,
    GET_TAG_BY_ID_REQUEST,
    GET_TAG_BY_ID_SUCCESS,
    GET_TAG_BY_ID_FAILURE,
    EDIT_TAG_REQUEST,
    EDIT_TAG_SUCCESS,
    EDIT_TAG_FAILURE,
    RESET_TAG_STATE
} from '../constants/tagConstants'; // Import tag action types

// Action creator to reset tag state
export const resetTagState = () => ({
    type: RESET_TAG_STATE
});

// Action creator to create a new tag
export const tagCreateAction = (formData) => async (dispatch) => {
    try {
        console.log(formData);
        dispatch({
            type: CREATE_TAG_REQUEST
        });

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };

        const { data } = await axios.post(
            'http://localhost:8000/tag/create', // Update endpoint
            formData,
            config
        );

        dispatch({
            type: CREATE_TAG_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CREATE_TAG_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Action creator to fetch list of tags
export const tagListAction = () => async (dispatch) => {
    console.log("tag list action")
    try {
        dispatch({ type: FETCH_TAGS_REQUEST });
        const { data } = await axios.get('http://localhost:8000/tag/get_all'); // Update endpoint

        dispatch({
            type: FETCH_TAGS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FETCH_TAGS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Action creator to delete a tag
export const tagDeleteAction = (tagId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TAG_REQUEST });
        await axios.delete(`http://localhost:8000/tag/delete/${tagId}`); // Update endpoint
        dispatch({
            type: DELETE_TAG_SUCCESS,
            payload: tagId
        });
    } catch (error) {
        dispatch({
            type: DELETE_TAG_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Action creator to fetch a tag by its ID
export const tagGetByIdAction = (tagId) => async (dispatch) => {
    try {
        console.log("hello world..!");
        dispatch({ type: GET_TAG_BY_ID_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/tag/get/${tagId}`); // Update endpoint

        dispatch({
            type: GET_TAG_BY_ID_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_TAG_BY_ID_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Action creator to edit a tag
export const tagEditAction = (tagId, formData) => async (dispatch, getState) => {
    try {
        dispatch({ type: EDIT_TAG_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo ? userInfo.token : null}`
            }
        };
        console.log(userInfo.token);

        const { data } = await axios.put(
            `http://localhost:8000/tag/edit/${tagId}`, // Update endpoint
            formData,
            config
        );

        dispatch({
            type: EDIT_TAG_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: EDIT_TAG_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
