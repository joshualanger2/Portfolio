import { SELECT_TAB } from "../constants/actionTypes";

const selectTabReducer = (state = "projects", action) => {
    switch (action.type) {
        case SELECT_TAB:
            return (state = action.payload);
        default:
            return state;
    }
};

export default selectTabReducer;