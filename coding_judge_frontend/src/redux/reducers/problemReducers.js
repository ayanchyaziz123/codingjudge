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
    EDIT_PROBLEM_REQUEST,
    EDIT_PROBLEM_SUCCESS,
    EDIT_PROBLEM_FAILURE,
    GET_PROBLEM_BY_ID_REQUEST,
    GET_PROBLEM_BY_ID_SUCCESS,
    GET_PROBLEM_BY_ID_FAILURE
} from '../constants/problemConstants';

export const problemCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_PROBLEM_REQUEST:
            return { success: false, loading: true };

        case CREATE_PROBLEM_SUCCESS:
            return { success: true, loading: false, problem: action.payload };

        case CREATE_PROBLEM_FAILURE:
            return { success: false, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const problemListReducer = (state = { problems: [] }, action) => {
    switch (action.type) {
        case FETCH_PROBLEMS_REQUEST:
            return { loading: true, problems: [] };

        case FETCH_PROBLEMS_SUCCESS:
            return {
                loading: false,
                problems: action.payload.problems,
            };

        case FETCH_PROBLEMS_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const problemDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PROBLEM_REQUEST:
            return { loading: true };

        case DELETE_PROBLEM_SUCCESS:
            return { loading: false, success: true };

        case DELETE_PROBLEM_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const problemEditReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PROBLEM_REQUEST:
            return { loading: true };

        case EDIT_PROBLEM_SUCCESS:
            return { loading: false, success: true, problem: action.payload };

        case EDIT_PROBLEM_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const problemGetByIdReducer = (state = { problem: {} }, action) => {
    switch (action.type) {
        case GET_PROBLEM_BY_ID_REQUEST:
            return { loading: true, problem: {} };

        case GET_PROBLEM_BY_ID_SUCCESS:
            return { loading: false, problem: action.payload.problem };

        case GET_PROBLEM_BY_ID_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
