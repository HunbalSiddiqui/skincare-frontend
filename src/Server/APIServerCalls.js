import axios from "axios"
import { API } from "./API"


export const userSignup = (userDetails) => {
    return axios.post(`${API}/users/auth/signup`,
    userDetails)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}