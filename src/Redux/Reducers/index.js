import { combineReducers } from "redux-immutable";

import authReducer from "./auth";
import deliveryReducer from "./delivery";

export default combineReducers({
    authReducer,
    deliveryReducer,
});
