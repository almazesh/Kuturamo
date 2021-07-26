import axios from 'axios'
import { API_LOGIN, API_REFRESH_TOKEN, API_REGISTER } from '../../constants/apiConstants/loginConstants'
import { loginValidation } from '../../helpers/authValidation/loginValidation';
import { registerValidation } from '../../helpers/authValidation/registerValidation'
import { LOGIN_FAILED, LOGIN_REFRESH_TOKEN_FAILED, LOGIN_REFRESH_TOKEN_REQUEST, LOGIN_REFRESH_TOKEN_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from './types'

export const registerAction = (postData, router) => async (dispatch) => {
    const errorData = []

    registerValidation(postData, errorData)
    
    if(errorData.length > 0){
        return dispatch({
            type: REGISTER_FAILED,
            payload: errorData
        });
    }

    dispatch({
        type: REGISTER_REQUEST
    })
    axios.post(API_REGISTER, postData)
    .then(() => {
        // localStorage.setItem('accessToken', res.data.access);
        // localStorage.setItem('refreshToken', res.data.refresh);

        dispatch({
            type: REGISTER_SUCCESS
        })
        router.push('/')
    })
    .catch(err => {
        dispatch({
            type: REGISTER_FAILED,
            payload: err.response.data?.errors
        })
    })
}

export const loginAction = (postData, router) => async (dispatch) => {
    const errorData = [];

    loginValidation(postData, errorData)

    if(errorData.length > 0){
        return dispatch({
            type: LOGIN_FAILED,
            payload: errorData
        });
    }

    dispatch({
        type: LOGIN_REQUEST
    })
    axios.post(API_LOGIN, postData)
    .then(async (res) => {
        localStorage.setItem('accessToken', res.data.access);
        localStorage.setItem('refreshToken', res.data.refresh);

        await router.push('/');

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: LOGIN_FAILED,
            payload: err.response.data?.errors
        })
    })
}

export const refreshTokenAction = (postData) => async (dispatch) => {
    dispatch({
        type: LOGIN_REFRESH_TOKEN_REQUEST
    })
    axios.post(API_REFRESH_TOKEN, postData)
    .then((res) => {
        dispatch({
            type: LOGIN_REFRESH_TOKEN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: LOGIN_REFRESH_TOKEN_FAILED,
            payload: err.response.data
        })
    })
}