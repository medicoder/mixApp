import { fetchingDeliveryItems, fetchDeliveryItemsSuccess } from "./";
import { apiCall } from "../../../Utilitites/api";
import { API_URLS } from "../../../Config/api";

export const getDeliveryItems = () => async dispatch => {
    const API = API_URLS.getAllDeliveryNodes();
    dispatch(fetchingDeliveryItems());
    const { response, error } = await apiCall(API);
    if (!error && response.status === 200) {
        dispatch(fetchDeliveryItemsSuccess(response.data.result));
    }
};
