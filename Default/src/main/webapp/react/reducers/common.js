import { combineReducers } from "redux";
import UIReducer from "../reducers/ui";
import AppsReducer from "../reducers/apps";

export default combineReducers({
    UIReducer,
    AppsReducer
});
