import { createSelector } from "reselect";

const getAuthState = state => state.get("authReducer");

export const isAuthenticated = createSelector(getAuthState, authState => authState.get("isAuthenticated"));
export const selectUser = createSelector(getAuthState, authState => authState.get("User"));
