import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL
} from '../constants/userConstants'


export const userListReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true, user: [] }
        case USER_LIST_SUCCESS:
            return { loading: false, user: action.payload }
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}