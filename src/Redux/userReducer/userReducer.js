import { SET_CURRENT_USER } from "./userReducerConstants";

var initialState = {
    currentUser : null
}


var userReducer = (state=initialState, action) => {
    const {type,payload} = action
    switch (type) {
        case SET_CURRENT_USER:
            return {...state,currentUser:payload.user}            
        default:
            return state
    }
}

export default userReducer