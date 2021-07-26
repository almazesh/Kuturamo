import { combineReducers } from "redux";
import { AppReducer } from "./App/reducer";
import { LoginReducer } from "./Login/reducer";
import { MainPageReducer } from "./MainPage/reducer";
import { UserReducer } from "./User/reducer";

export const rootReducer = combineReducers({
    App: AppReducer,
    Login: LoginReducer,
    MainPage: MainPageReducer,
    User: UserReducer
})