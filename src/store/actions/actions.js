import * as actionType from './actionTypes'

export const setAuthentication = (isLoggedIn) => {
    return (dispatch) => {
        dispatch({
            type: actionType.SET_AUTHENTICATION,
            isLoggedIn: isLoggedIn
        })
    }
}







