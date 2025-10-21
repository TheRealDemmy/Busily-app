import {FETCH_ALL_DATA, FETCH_ONE_DATA, SCAN_DATA} from "../constants/Constants";

const initialState = {
    users: [],
    user: {
      name: "",
    },
    scanData: [],
};

export const app = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_DATA:
            return {
                ...state,
                users: action.data,
            };
        case FETCH_ONE_DATA:
            return {
                ...state,
                user: action.payload
            };
        case SCAN_DATA:
            return {
                ...state,
                scanData: [...state.scanData, action.payload]
            };
        default:
            return state;
    }
};
