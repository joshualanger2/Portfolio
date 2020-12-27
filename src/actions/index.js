import {SELECT_TAB, SELECT_PROJECT, INITIAL_LOAD} from '../constants/actionTypes'

export const selectTab = tab => {
    return {
        type: SELECT_TAB,
        payload: tab
    };
};

export const selectProject = project => {
    return {
        type: SELECT_PROJECT,
        payload: project
    };
};

export const initialLoad = state => {
    return {
        type: INITIAL_LOAD,
        payload: state
    }
}