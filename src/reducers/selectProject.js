import { SELECT_PROJECT } from "../constants/actionTypes";

const selectProjectReducer = (state = "", action) => {
    switch (action.type) {
        case SELECT_PROJECT:
            return (state = action.payload);
        default:
            return state;
    }
};

export default selectProjectReducer;