import {
    SET_CURRENT_USER,
    SET_USER_DETAILS
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
    return async (dispatch, getState) => {
        try {
            if (localStorage.getItem('jwt')) {
                localStorage.removeItem('jwt')
                dispatch(setCurrentUser(null))
                return {
                    Message: "User logged out successfully",
                    type: true
                }
            }
        } catch (error) {
            return {
                Message: "Unable to logout this user",
                type: false
            }
        }
    }
}


export var setUserDetails = (user) => {
    return async (dispatch, getState) => {
        dispatch({
            type: SET_USER_DETAILS,
            payload: {
                user
            }
        })
    }
}