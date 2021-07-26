import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types"

const initState = {
    register: {
        loading: false,
        success: null,
        error: null
    },
    login: {
        loading: false,
        success: null,
        error: null
    }
}

export const LoginReducer = (state = initState, action) => {
    switch(action.type){
        case REGISTER_REQUEST:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: true
                }
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    success: true,
                    error: false
                }
            }
        case REGISTER_FAILED:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    success: false,
                    error: action.payload
                }
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    success: action.payload,
                    error: false
                }
            }
        case LOGIN_FAILED:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    success: false,
                    error: action.payload
                }
            }
        default: 
            return state
    }
}