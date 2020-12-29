import { combineReducers } from "redux";
import selectTabReducer from "./selectTab"
import selectProjectReducer from "./selectProject"
import initialLoadReducer from "./initialLoad"
import hideHeaderReducer from "./hideHeader"

const rootReducer = combineReducers({
    selectTab: selectTabReducer,
    selectProject: selectProjectReducer,
    initialLoad: initialLoadReducer,
    hideHeader: hideHeaderReducer
});

export default rootReducer;