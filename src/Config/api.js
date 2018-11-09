import { AsyncStorage } from "react-native";

const HEADERS = {
    DEFAULT_HEADER: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    JWT_HEADER: async () => {
        const TOKEN = await AsyncStorage.getItem('STORAGE_KEY');
        console.log("HI",TOKEN)
        return {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: TOKEN
        };
    },
    file_header: () => ({
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("jwt")
    })
};

export const API_URLS = {
    getAllDeliveryNodes: () => ({
        endPoint:
            "http://206.189.151.19:3000/deliverysolution/driver?driverId=LX-001&departureTimeLower=1526250600000&departureTimeUpper=1526250600001",
        method: "GET"
    }),
    logIn: () => ({
        endPoint: `https://avf.dev.anfast.com.vn/api/account/v1/users/login`,
        method: "POST",
        headers: HEADERS.JWT_HEADER()
    }),
    getRoutesByDriverID: id => ({
        endPoint: ``,
        method: "GET",
        headers: HEADERS.JWT_HEADER()
    })
};
