import axios from "axios";
export const apiCall = async ({ endPoint, method, payload, headers }) => {
    try {
        const result = await axios({
            method: method,
            url: endPoint,
            headers: headers,
            data: payload,
        });
        return {
            response: result,
            error: null,
        };
    } catch (e) {
        return {
            response: null,
            error: e.request.status,
        };
    }
};
