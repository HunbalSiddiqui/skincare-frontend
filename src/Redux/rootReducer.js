import {combineReducers} from 'redux'
import userReducer from './userReducer/userReducer'

var rootReducer = combineReducers({
    userReducer: userReducer
})

export default rootReducer