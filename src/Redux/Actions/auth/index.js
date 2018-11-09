import { TYPES } from "../config";
import { signIn } from "./async";

export { signIn };

export const signingIn = () => ({
    type: TYPES.SIGNING_IN,
});

export const signInSuccess = (payload) => ({
    type: TYPES.SIGN_IN_SUCCESS,
    payload
});

export const signInFailure = () => ({
    type: TYPES.SIGN_IN_FAILURE,
});

export const signOut = () => ({
    type: TYPES.SIGN_OUT,
});
