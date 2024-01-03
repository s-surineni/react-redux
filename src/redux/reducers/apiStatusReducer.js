import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS";
}
export default function apiStatusReducer(state = initialState.apiCallsInProgress7, action) {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}