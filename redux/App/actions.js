import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from './types'
import { GET_USER_FAILED } from '../User/types'
import { getUserAction } from '../User/actions'

export const openSidebarAction = () => {
    return {
        type: OPEN_SIDEBAR
    }
}

export const closeSidebarAction = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}

export const firstAuthAction = () => async (dispatch) => {
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken){
        return dispatch(getUserAction())
    }
    dispatch({
        type: GET_USER_FAILED
    });
}