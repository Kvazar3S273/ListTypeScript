import { AuthAction, AuthActionTypes, AuthState } from './types';

const initialState : AuthState = {
    user: null,
    isAuth: false
}

export const authReducer = (state=initialState, action: AuthAction) : AuthState => {
    switch(action.type) {
        case AuthActionTypes.LOGIN_AUTH: {
            return {
                ...state, isAuth: true, user: action.payload
            };
        }
        default:
            return state;
    }
}