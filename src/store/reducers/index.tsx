import {combineReducers} from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import {prodReducer} from "./prodReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    prod: prodReducer    
})

export type RootState = ReturnType<typeof rootReducer>