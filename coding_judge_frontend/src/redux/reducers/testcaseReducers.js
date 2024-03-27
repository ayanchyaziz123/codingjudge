// testCaseConstants.js

// Constants for fetching test cases
export const FETCH_TEST_CASES_REQUEST = 'FETCH_TEST_CASES_REQUEST';
export const FETCH_TEST_CASES_SUCCESS = 'FETCH_TEST_CASES_SUCCESS';
export const FETCH_TEST_CASES_FAILURE = 'FETCH_TEST_CASES_FAILURE';

// Constants for creating test cases
export const CREATE_TEST_CASE_REQUEST = 'CREATE_TEST_CASE_REQUEST';
export const CREATE_TEST_CASE_SUCCESS = 'CREATE_TEST_CASE_SUCCESS';
export const CREATE_TEST_CASE_FAILURE = 'CREATE_TEST_CASE_FAILURE';

// Constants for deleting test cases
export const DELETE_TEST_CASE_REQUEST = 'DELETE_TEST_CASE_REQUEST';
export const DELETE_TEST_CASE_SUCCESS = 'DELETE_TEST_CASE_SUCCESS';
export const DELETE_TEST_CASE_FAILURE = 'DELETE_TEST_CASE_FAILURE';

export const RUN_TEST_CASE_REQUEST = 'RUN_TEST_CASE_REQUEST';
export const RUN_TEST_CASE_SUCCESS = 'RUN_TEST_CASE_SUCCESS';
export const RUN_TEST_CASE_FAILURE = 'RUN_TEST_CASE_FAILURE';



export const testcaseCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TEST_CASE_REQUEST:
            return { success: false, loading: true };

        case CREATE_TEST_CASE_SUCCESS:
            return { success: true, loading: false, testcase: action.payload };

        case CREATE_TEST_CASE_FAILURE:
            return { success: false, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const testcaseRunReducer = (state = {}, action) => {
    switch (action.type) {
        case RUN_TEST_CASE_REQUEST:
            return { success: false, loading: true };

        case RUN_TEST_CASE_SUCCESS:
            return { success: true, loading: false, results: action.payload };

        case RUN_TEST_CASE_FAILURE:
            return { success: false, loading: false, error: action.payload };

        default:
            return state;
    }
};
