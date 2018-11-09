import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import StatusBar from "../../Components/StatusBar";

export default class Pickup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <Text h4>Tính năng đang được phát triển!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e7e8f1",
    },
});
