// redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    LoginReducer,
} from './reducers/authReducers'
import {categoryCreateReducer, categoryListReducer, categoryDeleteReducer, categoryGetByIdReducer, categoryEditReducer} from './reducers/categoryReducers';
import { problemCreateReducer, problemListReducer, problemDeleteReducer, problemGetByIdReducer, problemUpdateReducer } from './reducers/problemReducers';
import { testcaseCreateReducer, testcaseRunReducer } from './reducers/testcaseReducers';
import { tagCreateReducer, tagListReducer, tagDeleteReducer, tagGetByIdReducer, tagEditReducer } from './reducers/tagReducers';




const reducer = combineReducers({
    userLogin: LoginReducer,
    categoryCreateReducer: categoryCreateReducer,
    categoryListReducer: categoryListReducer,
    categoryDeleteReducer: categoryDeleteReducer,
    problemCreateReducer: problemCreateReducer,
    problemListReducer: problemListReducer,
    problemDeleteReducer: problemDeleteReducer,
    problemGetByIdReducer: problemGetByIdReducer,
    testcaseCreateReducer: testcaseCreateReducer,
    testcaseRunReducer: testcaseRunReducer,
    problemUpdateReducer: problemUpdateReducer,
    categoryGetByIdReducer: categoryGetByIdReducer,
    categoryEditReducer: categoryEditReducer,
    tagCreateReducer: tagCreateReducer,
    tagListReducer: tagListReducer,
    tagDeleteReducer: tagDeleteReducer,
    tagGetByIdReducer: tagGetByIdReducer,
    tagEditReducer: tagEditReducer
})


// const cartItemsFromStorage = localStorage.getItem('cartItems') ?
//     JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
//     JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    // cart: {
    //     cartItems: cartItemsFromStorage,
    //     shippingAddress: shippingAddressFromStorage,
    // },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
