import axios from "axios"
import {
    API
} from "./API"


export const userSignup = (userDetails) => {
    return axios.post(`${API}/users/auth/signup`,
            userDetails)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return err
        })
}


export const userSignin = (credentials) => {
    return axios.post(`http://localhost:8000/api/v1/users/auth/signin`,
            credentials)
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((err) => {
            return err
        })
}


export const Authenticate = (user, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(user));
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window !== "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return true
    }
    return false
}