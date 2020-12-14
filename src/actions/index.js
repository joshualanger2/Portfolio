import {SELECT_TAB} from '../constants/actionTypes'

export const selectTab = tab => {
    return {
        type: SELECT_TAB,
        payload: tab
    };
};