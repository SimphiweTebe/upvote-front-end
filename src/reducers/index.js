import { combineReducers } from 'redux';
import posts from './posts';
import uiReducer from './interface'
import auth from './auth'

export default combineReducers({
    posts,
    features: uiReducer,
    auth
})