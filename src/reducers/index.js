import { combineReducers } from "redux";
import selectTabReducer from "./selectTab"

const rootReducer = combineReducers({
    selectTab: selectTabReducer
});

export default rootReducer;