import axios from 'axios';
import {
    FETCH_TEST_CASES_REQUEST,
    FETCH_TEST_CASES_SUCCESS,
    FETCH_TEST_CASES_FAILURE,
    CREATE_TEST_CASE_REQUEST,
    CREATE_TEST_CASE_SUCCESS,
    CREATE_TEST_CASE_FAILURE,
    DELETE_TEST_CASE_REQUEST,
    DELETE_TEST_CASE_SUCCESS,
    DELETE_TEST_CASE_FAILURE
} from '../constants/testcaseConstants';

export const testCasesFetch = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_TEST_CASES_REQUEST });
        const { data } = await axios.get('http://localhost:8000/testcase'); // Adjust the route according to your backend setup
        dispatch({
            type: FETCH_TEST_CASES_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: FETCH_TEST_CASES_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const testCaseCreateAction = (testCaseData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_TEST_CASE_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const { data } = await axios.post('http://localhost:8000/testcase/create', testCaseData, config); // Adjust the route according to your backend setup
        dispatch({
            type: CREATE_TEST_CASE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CREATE_TEST_CASE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

export const testCaseDelete = (testCaseId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TEST_CASE_REQUEST });
        await axios.delete(`http://localhost:8000/testcase/${testCaseId}`); // Adjust the route according to your backend setup
        dispatch({
            type: DELETE_TEST_CASE_SUCCESS,
            payload: testCaseId
        });
    } catch (error) {
        dispatch({
            type: DELETE_TEST_CASE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
