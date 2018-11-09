import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import InfoCard from "../../Components/DeliveryCustomer/InfoCard";
import InvoicesCard from "../../Components/DeliveryCustomer/InvoicesCard";
import * as DeliverySelector from "../../Redux/Selectors/delivery";

class DeliveryCustomer extends Component {
    static navigationOptions = {
        title: "CHI TIẾT ĐIỂM ĐẾN",
        headerStyle: {
            backgroundColor: "#512DA8",
            paddingTop: 24,
            height: 80,
        },
        headerTitleStyle: {
            color: "white",
        },
        headerTintColor: "white",
    };

    render() {
        const { customer } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <InfoCard customer={customer.toJS()} />
                    <InvoicesCard invoices={customer.get("order_id").toJS()} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = state => ({
    customer: DeliverySelector.selectedItem(state),
});

export default connect(mapStateToProps)(DeliveryCustomer);
