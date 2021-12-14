import {
    AuthAction, AuthActionTypes,
    ILoginModel, ILoginResponse, IUser, LoginError
} from './types';
import { Dispatch } from "react";
import http from '../../../http_common';
import axios, { AxiosError } from "axios";
import jwt from "jsonwebtoken";
import { Authtoken } from './auth_token';

export const LoginUser = (data: ILoginModel) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        const response = await http.post<ILoginResponse>('api/auth/login', data);
        const { access_token } = await response.data;
        //localStorage.token = access_token;
        console.log(access_token);
        AuthUser(access_token, dispatch);
        return Promise.resolve();
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            //console.log("Action problem", error);
            const serverError = error as AxiosError<LoginError>;
            if (serverError && serverError.response) {
                return Promise.reject(serverError.response.data);
            }
        }
        return Promise.reject(error);
    }
}

export const AuthUser = (token: string, dispatch: Dispatch<AuthAction>) => {
    Authtoken(token);
    localStorage.setItem('Token', token);
    AuthTokenDecode(token,dispatch);
}

export const AuthTokenDecode=(token: string, dispatch: Dispatch<AuthAction>)=>
{
    const userdata = jwt.decode(token) as IUser;
    //console.log("Userdata",userdata);
    const user: IUser = {
        email: userdata.email,
        image: userdata.image,
    };
    console.log(userdata.email);

    dispatch({
        type: AuthActionTypes.LOGIN_AUTH,
        payload: user,
    });
}




export const LogoutUser=()=>{
    return async (dispatch:Dispatch<AuthAction>)=>{
        Authtoken('');
        dispatch({
            type:AuthActionTypes.LOGOUT_AUTH
        });
        localStorage.removeItem('Token');
    }
}
