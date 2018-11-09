import moment from "moment";
import { fromJS } from "immutable";
import { TYPES } from "../Actions/config";

const initialState = fromJS({
    items: [],
    didInvalidate: true,
    isFetching: false,
    lastUpdated: 0,
    selectedItem: {},
    date: moment(),
});

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.CHANGE_DELIVERY_DATE:
            const { timestamp } = action.payload;
            return state.merge({
                date: timestamp,
                didInvalidate: true,
            });
        case TYPES.FETCHING_DELIVERY_ITEMS:
            return state.merge({
                isFetching: true,
            });
        case TYPES.FETCH_DELIVERY_ITEMS_SUCCESS:
            const results = action.payload.map(item => {
                const departureTime = moment(item.departure_time.value).format("HH:mm");
                const arrivalTime = moment(item.arrival_time.value).format("HH:mm");
                return {
                    title: `${departureTime} - ${arrivalTime}`,
                    data: item.delivery_routes,
                };
            });
            return state.merge({
                isFetching: false,
                didInvalidate: false,
                lastUpdated: moment().unix(),
                items: results,
            });
        case TYPES.INVALIDATE_DELIVERY_ITEMS:
            return state.merge({
                didInvalidate: true,
            });
        case TYPES.SELECT_DELIVERY_ITEM:
            return state.merge({
                selectedItem: action.payload.deliveryItem,
            });
        default:
            return state;
    }
};

export default deliveryReducer;
