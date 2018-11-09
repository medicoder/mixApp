import { fromJS } from "immutable";
import { TYPES } from "../Actions/config";
import { AsyncStorage } from "react-native"

const initialState = fromJS({
    isAuthenticated: false,
    isFetching: false,
    User: {}
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SIGNING_IN:
            return state.merge({
                isFetching: true,
            });
        case TYPES.SIGN_IN_SUCCESS:
            AsyncStorage.setItem('STORAGE_KEY', action.payload.Token)
            return state.merge({
                isFetching: false,
                isAuthenticated: true,
                User: action.payload.User
            });
        case TYPES.SIGN_IN_FAILURE:
            return state;
        case TYPES.SIGN_OUT:
            return state.merge({
                isAuthenticated: false,
            });
        default:
            return state;
    }
};

export default authReducer;
