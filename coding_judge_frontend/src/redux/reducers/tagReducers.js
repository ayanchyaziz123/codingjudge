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
    EDIT_TAG_REQUEST,
    EDIT_TAG_SUCCESS,
    EDIT_TAG_FAILURE,
    GET_TAG_BY_ID_REQUEST,
    GET_TAG_BY_ID_SUCCESS,
    GET_TAG_BY_ID_FAILURE,
} from '../constants/tagConstants';

export const tagCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TAG_REQUEST:
            return { success: false, loading: true };

        case CREATE_TAG_SUCCESS:
            return { success: true, loading: false, tag: action.payload };

        case CREATE_TAG_FAILURE:
            return { success: false, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const tagListReducer = (state = { tags: [] }, action) => {
    switch (action.type) {
        case FETCH_TAGS_REQUEST:
            return { loading: true, tags: [] };

        case FETCH_TAGS_SUCCESS:
            return {
                loading: false,
                tags: action.payload,
            };

        case FETCH_TAGS_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const tagDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_TAG_REQUEST:
            return { loading: true };

        case DELETE_TAG_SUCCESS:
            return { loading: false, success: true };

        case DELETE_TAG_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const tagEditReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_TAG_REQUEST:
            return { loading: true };

        case EDIT_TAG_SUCCESS:
            return { loading: false, success: true, tag: action.payload };

        case EDIT_TAG_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const tagGetByIdReducer = (state = { tag: {} }, action) => {
    switch (action.type) {
        case GET_TAG_BY_ID_REQUEST:
            return { loading: true, tag: {} };

        case GET_TAG_BY_ID_SUCCESS:
            return { loading: false, tag: action.payload };

        case GET_TAG_BY_ID_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};


