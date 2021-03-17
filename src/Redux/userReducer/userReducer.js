import { SET_CURRENT_USER, SET_USER_DETAILS } from "./userReducerConstants";

var initialState = {
    currentUser : null,
    userDetails : null
}


var userReducer = (state=initialState, action) => {
    const {type,payload} = action
    switch (type) {
        case SET_CURRENT_USER:
            return {...state,currentUser:payload.user}     
        case SET_USER_DETAILS:
            return {...state,userDetails:payload.user}     
        default:
            return state
    }
}

export default userReducer