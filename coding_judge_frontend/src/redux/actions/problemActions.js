import axios from 'axios';
import {
    FETCH_PROBLEMS_REQUEST,
    FETCH_PROBLEMS_SUCCESS,
    FETCH_PROBLEMS_FAILURE,
    CREATE_PROBLEM_REQUEST,
    CREATE_PROBLEM_SUCCESS,
    CREATE_PROBLEM_FAILURE,
    DELETE_PROBLEM_REQUEST,
    DELETE_PROBLEM_SUCCESS,
    DELETE_PROBLEM_FAILURE,
    GET_PROBLEM_BY_ID_REQUEST,
    GET_PROBLEM_BY_ID_SUCCESS,
    GET_PROBLEM_BY_ID_FAILURE
} from '../constants/problemConstants';


export const ProblemGetByIdAction = (problemId) => async (dispatch) => {
    try {
        dispatch({ type: GET_PROBLEM_BY_ID_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/problem/get/${problemId}`);
        dispatch({
            type: GET_PROBLEM_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROBLEM_BY_ID_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
export const problemCreateAction = (formData) => async (dispatch) => {
    console.log(formData)
    try {
        dispatch({ type: CREATE_PROBLEM_REQUEST });
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        const { data } = await axios.post('http://localhost:8000/problem/create', formData, config);
        dispatch({
            type: CREATE_PROBLEM_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CREATE_PROBLEM_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const problemListAction = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_PROBLEMS_REQUEST });
        const { data } = await axios.get('http://localhost:8000/problem/get_all');
        dispatch({
            type: FETCH_PROBLEMS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FETCH_PROBLEMS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const problemDeleteAction = (problemId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PROBLEM_REQUEST });
        await axios.delete(`http://localhost:8000/problem/delete/${problemId}`);
        dispatch({
            type: DELETE_PROBLEM_SUCCESS,
            payload: problemId
        });
    } catch (error) {
        dispatch({
            type: DELETE_PROBLEM_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
