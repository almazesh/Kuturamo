import axios from "axios";
import { GET_USER, GET_USER_FAILED, GET_USER_SUCCESS } from "./types";
import { isFailedAuth } from '../../helpers'
import { API_GET_USER } from "../../constants/apiConstants/appConstants";

export const getUserAction = () => async (dispatch) => {
    const accessToken = localStorage.getItem('accessToken');
    dispatch({
        type: GET_USER
    })

    axios
    .get(API_GET_USER, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(res => {
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_USER_FAILED,
            payload: err.data
        })
        isFailedAuth(err.response, getUserAction, dispatch)
    })
}