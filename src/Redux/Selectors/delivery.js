import { createSelector } from "reselect";

const getDeliveryState = state => state.get("deliveryReducer");

export const items = createSelector(getDeliveryState, deliveryState => deliveryState.get("items"));

export const date = createSelector(getDeliveryState, deliveryState => deliveryState.get("date"));

export const isFetching = createSelector(getDeliveryState, deliveryState => deliveryState.get("isFetching"));

export const didInvalidate = createSelector(getDeliveryState, deliveryState => deliveryState.get("didInvalidate"));

export const selectedItem = createSelector(getDeliveryState, deliveryState => deliveryState.get("selectedItem"));
