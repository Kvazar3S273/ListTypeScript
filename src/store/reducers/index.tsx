import {combineReducers} from "redux";
import { authReducer } from "../../components/auth/Login/login_reducer";
import {prodReducer} from "./prodReducer";
import {productsReducer} from "../../components/products/reducer";

export const rootReducer = combineReducers({
     auth: authReducer,
     prod: prodReducer,
     products: productsReducer
    //log:authReducer
})

export type RootState = ReturnType<typeof rootReducer>