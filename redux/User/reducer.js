import { GET_USER_SUCCESS } from "./types"

const initState = {
    user: null
}

export const UserReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}