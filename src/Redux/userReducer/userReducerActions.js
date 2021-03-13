import {
    SET_CURRENT_USER
} from "./userReducerConstants"

export var setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: {
            user
        }
    }
}


export var userLogout = () => {
    return async (dispatch,getState) => {
        try {
            if(localStorage.getItem('jwt'))
            {
                localStorage.removeItem('jwt')
                dispatch(setCurrentUser(null))
                return {
                    Message : "User logged out successfully",
                    type : true
                }
            }
        } catch (error) {
            return {
                Message : "Unable to logout this user",
                type : false
            }
        }
    }
}