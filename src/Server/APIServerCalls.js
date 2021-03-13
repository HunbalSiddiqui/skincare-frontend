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
            return err.response.data
        })
}


export const userSignin = (credentials) => {
    return axios.post(`${API}/users/auth/signin`,
            credentials)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return err.response.data
        })
}


export const Authenticate = (user, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(user));
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    }
    return false
}