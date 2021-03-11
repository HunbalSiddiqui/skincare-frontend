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