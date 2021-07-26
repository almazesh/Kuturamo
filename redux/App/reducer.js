import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../Login/types"
import { GET_USER_FAILED, GET_USER_SUCCESS } from "../User/types"
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./types"

const initState = {
    sidebar: false,
    firstLoading: false,
    isAuth: false
}

export const AppReducer = (state = initState, action) => {
    switch(action.type){
        case OPEN_SIDEBAR:
            return {
                ...state,
                sidebar: true
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                sidebar: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                firstLoading: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                firstLoading: false
            }
        case GET_USER_FAILED:
            return {
                ...state,
                firstLoading: true
            }
        case GET_USER_SUCCESS:
            return { 
                ...state,
                firstLoading: true,
                isAuth: true
            }
        default:
            return state
    }
}