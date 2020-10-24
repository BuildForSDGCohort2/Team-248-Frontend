import { combineReducers } from "redux";
import locale from "./Lang";
import Auth from "./Auth";

export default combineReducers({
    locale, Auth
})