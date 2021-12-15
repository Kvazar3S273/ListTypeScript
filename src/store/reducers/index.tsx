import {combineReducers} from "redux";
import { authReducer } from "../../components/auth/Login/login_reducer";
import {prodReducer} from "./prodReducer";

export const rootReducer = combineReducers({
     auth: authReducer,
     prod: prodReducer    
    //log:authReducer
})

export type RootState = ReturnType<typeof rootReducer>