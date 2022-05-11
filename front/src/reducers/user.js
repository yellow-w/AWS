import { createAction, handleActions } from "redux-actions";

const initialState =
{
    me: {
        id: null,
        email: null,
        nickname: null,
        provider: null  //kakao or local
    },
    isLogin: false,
    error: null,
    loadding: false
}
const USER_LOGIN = {
    REQUEST:'USER/LOGIN_REQUEST',
    SUCCESS:'USER/LOGIN_SUCCESS',
    FAILURE:'USER/LOGIN_FAILURE'
}

export const user_login_request = createAction(USER_LOGIN.REQUEST)
export const user_login_success = createAction(USER_LOGIN.SUCCESS)
export const user_login_failure = createAction(USER_LOGIN.FAILURE)


// console.log(user_login_request())
// console.log(user_login_request({payload}))
// console.log(user_login_request.toString())

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN.REQUEST:
            return{
                ...state,
                loadding: true,
                error: null,
                isLogin: false
            }
        case USER_LOGIN.SUCCESS:
            return{
                ...state,
                loadding: false,
                isLogin: true,
                me: {
                    ...action.payload.data.user
                },
                error: null
            }
        case USER_LOGIN.FAILURE:
            return{
                ...state,
                loadding: false,
                error: action.data
            }
        default:
            return state;
    }
}

export default user;

