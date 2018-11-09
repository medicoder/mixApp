import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./src/Redux/store";
import Login from "./src/Containers/Auth/Login";
import Delivery from "./src/Containers/Delivery";
import DeliveryCustomer from "./src/Containers/DeliveryCustomer";
import Pickup from "./src/Containers/Pickup";
import Profile from "./src/Containers/Profile";

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

const AuthStack = createStackNavigator(
    { Login: { screen: Login } },
    {
        initialRouteName: "Login",
    }
);

const DeliveryStack = createStackNavigator(
    {
        Delivery: {
            screen: Delivery,
            navigationOptions: {
                title: "Giao hàng",
            },
        },
        DeliveryCustomer: { screen: DeliveryCustomer },
    },
    {
        initialRouteName: "Delivery",
    }
);

const renderTitle = title => {
    switch (title) {
        case "Delivery":
            return "Giao hàng";
        case "Pickup":
            return "Nhận hàng";
        case "Profile":
            return "Cá nhân";
    }
};

const AppStack = createBottomTabNavigator(
    { Delivery: DeliveryStack, Pickup: { screen: Pickup }, Profile: Profile },
    {
        initialRouteName: "Delivery",
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                const iconType = "feather";
                let iconName;
                switch (routeName) {
                    case "Delivery":
                        iconName = "upload";
                        break;
                    case "Pickup":
                        iconName = "download";
                        break;
                    case "Profile":
                        iconName = "user";
                        break;
                }
                return <Icon type={iconType} name={iconName} size={25} color={tintColor} />;
            },
            title: renderTitle(navigation.state.routeName),
        }),
        backBehavior: "none",
    }
);

const RootStack = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: "Auth",
    }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
