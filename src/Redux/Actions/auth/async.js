import { signingIn, signInSuccess, signInFailure } from "./index";
import { API_URLS } from "../../../Config/api";
import { apiCall } from "../../../Utilitites/api";

export const signIn = payload => async dispatch => {
    const api = API_URLS.logIn();
    console.log(api)
    dispatch(signingIn());
    const { response, error } = await apiCall({ ...api, payload });
    console.log(response, error)
    if (!error && response.status === 200) {
        dispatch(signInSuccess(response.data.Data));
    } else {
        dispatch(signInFailure());
    }
};
