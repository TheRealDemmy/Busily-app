import axios from "axios";
import { FETCH_ALL_DATA, FETCH_ONE_DATA, SCAN_DATA } from "../constants/Constants";

const dataFetch = (data) => ({
    type: FETCH_ALL_DATA,
    data,
});

export const fetchDataAll = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        dispatch(dataFetch(response.data));
    });

};
export function fetchMainUser(user) {
    return {
        type: FETCH_ONE_DATA,
        payload: user,
    }
};
export function getScanData(data) {
    return {
        type: SCAN_DATA,
        payload: data,
    }
};
