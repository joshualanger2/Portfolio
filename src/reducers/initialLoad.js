import { INITIAL_LOAD } from "../constants/actionTypes";

const initialLoadReducer = (state = false, action) => {
    switch (action.type) {
        case INITIAL_LOAD:
            return state = action.payload;
        default:
            return state;
    }
};

export default initialLoadReducer;