import {combineReducers} from 'redux'
import userReducer from '../Reducers/UserReducer';
import authReducer from '../Reducers/AuthReducer'

export default combineReducers({
    user:userReducer,
    login:authReducer
});