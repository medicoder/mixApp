import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./Reducers";

const logger = createLogger({
    collapsed: true,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;
