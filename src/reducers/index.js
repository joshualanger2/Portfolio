import { combineReducers } from "redux";
import selectTabReducer from "./selectTab"
import selectProjectReducer from "./selectProject"
import initialLoadReducer from "./initialLoad"

const rootReducer = combineReducers({
    selectTab: selectTabReducer,
    selectProject: selectProjectReducer,
    initialLoad: initialLoadReducer
});

export default rootReducer;