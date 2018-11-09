import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

const InfoField = ({ icon: { name, type }, value }) => {
    return (
        <View style={styles.field}>
            <View style={styles.icon}>
                <Icon size={20} name={name} type={type} />
            </View>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

export default class InfoCard extends Component {
    render() {
        console.log(this.props.customer);
        const {
            customer_name,
            end_location: { address },
            phone,
        } = this.props.customer;
        return (
            <Card title="Thông tin khách hàng">
                <InfoField icon={{ name: "user-o", type: "font-awesome" }} value={customer_name} />
                <InfoField icon={{ name: "map-pin", type: "feather" }} value={address} />
                <InfoField icon={{ name: "phone", type: "feather" }} value={phone} />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    field: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
    },
    icon: {
        flex: 2,
    },
    value: {
        flex: 8,
    },
});
