import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,


    

} from '../constants/authConstants'



export const login = (email, password) => async (dispatch) => {
    try {
        console.log("email", email)
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:8000/auth/login',
            { 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        const tkn = data.userInfo;
        localStorage.setItem('userInfo', JSON.stringify(tkn))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// export const logout = () => (dispatch) => {
//     localStorage.removeItem('userInfo')
//     dispatch({ type: USER_LOGOUT })
//     dispatch({ type: USER_DETAILS_RESET })
//     dispatch({ type: ORDER_LIST_MY_RESET })
//     dispatch({ type: USER_LIST_RESET })
// }




export const register = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:8000/auth/register/',
            formData,
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

