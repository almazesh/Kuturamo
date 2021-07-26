import { CLEAR_CATEGORY, SET_ACTIVE_CATEGORY } from "./types"

export const setActiveCategory = category => {
    return {
        type: SET_ACTIVE_CATEGORY,
        payload: category
    }
}

export const clearCategory = () => {
    return {
        type: CLEAR_CATEGORY
    }
}