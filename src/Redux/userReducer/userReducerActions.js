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
            console.log(localStorage.getItem('jwt'))
            if(localStorage.getItem('jwt'))
            {
                localStorage.removeItem('jwt')
                dispatch(setCurrentUser(null))
            }
        } catch (error) {
            return {
                message : "Unable to logout this user",
                type : false
            }
        }
    }
}