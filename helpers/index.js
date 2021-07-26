import axios from "axios";
import { API_REFRESH_TOKEN } from "../constants/apiConstants/loginConstants";

export function isFailedAuth(error, cb, dispatch){
    if(error?.status === 403){
        const refreshToken = localStorage.getItem('refreshToken')
        if(refreshToken){
            axios.post(API_REFRESH_TOKEN, {
                refresh: refreshToken
            })
            .then(res => {
                if(res.data.access){
                    localStorage.setItem('accessToken', res.data.access);
                }
                if(res.data.refresh){
                    localStorage.setItem('refreshToken', res.data.refresh);
                }
                if(cb){
                    dispatch(cb())
                }
            })
        }
    }
}