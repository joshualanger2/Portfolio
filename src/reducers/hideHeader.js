import { HIDE_HEADER } from "../constants/actionTypes";

const hideHeaderReducer = (state = false, action) => {
    switch (action.type) {
        case HIDE_HEADER:
            return state = !state;
        default:
            return state;
    }
};

export default hideHeaderReducer;