import React from "react";
import { StatusBar, View } from "react-native";

const CustomStatusBar = () => (
    <View>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" animated barStyle="light-content" />
        <View
            style={{
                height: 24,
                backgroundColor: "#512DA8",
            }}
        />
    </View>
);

export default CustomStatusBar;
