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
    DELETE_TEST_CASE_FAILURE,
    RUN_TEST_CASE_REQUEST,
    RUN_TEST_CASE_SUCCESS,
    RUN_TEST_CASE_FAILURE,
    SUBMIT_TEST_CASE_REQUEST,
    SUBMIT_TEST_CASE_SUCCESS,
    SUBMIT_TEST_CASE_FAILURE
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

export const testCaseRunAction = (submissionData) => async (dispatch, getState) => {
    try {
        dispatch({ type: RUN_TEST_CASE_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo ?  userInfo.token : null}`
            }
        }
        const { data } = await axios.post('http://localhost:8000/testcase/run', submissionData, config);
        dispatch({
            type: RUN_TEST_CASE_SUCCESS,
            payload: data // You can pass additional data if needed
        });
    } catch (error) {
        dispatch({
            type: RUN_TEST_CASE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};







