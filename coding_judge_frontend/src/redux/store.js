// redux/store.js
import {thunk} from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import adminReducer from './reducers/adminReducer';
import userReducer from './reducers/userReducer';




// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
