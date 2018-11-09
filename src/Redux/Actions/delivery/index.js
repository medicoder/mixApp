import { TYPES } from "../config";
import * as DeliverySelector from "../../Selectors/delivery";

import { getDeliveryItems } from "./async";
export { getDeliveryItems };

export const changeDate = timestamp => ({
    type: TYPES.CHANGE_DELIVERY_DATE,
    payload: {
        timestamp,
    },
});

export const fetchingDeliveryItems = () => ({
    type: TYPES.FETCHING_DELIVERY_ITEMS,
});

export const fetchDeliveryItemsSuccess = payload => ({
    type: TYPES.FETCH_DELIVERY_ITEMS_SUCCESS,
    payload,
});

export const fetchDeliveryItemsFailure = payload => ({
    type: TYPES.FETCH_DELIVERY_ITEMS_FAILURE,
    payload,
});

export const getDeliveryItemsIfNeed = () => (dispatch, getState) => {
    const state = getState();
    const isFetching = DeliverySelector.isFetching(state);
    const didInvalidate = DeliverySelector.didInvalidate(state);
    if (!isFetching && didInvalidate) {
        dispatch(getDeliveryItems());
    }
};

export const invalidateDeliveryItems = () => ({
    type: TYPES.INVALIDATE_DELIVERY_ITEMS,
});

export const selectDeliveryItem = deliveryItem => ({
    type: TYPES.SELECT_DELIVERY_ITEM,
    payload: {
        deliveryItem,
    },
});
