import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import StatusBar from "../../Components/StatusBar";
import DatePicker from "../../Components/DatePicker";
import DeliveryList from "../../Components/Delivery/List";
import * as DeliverySelector from "../../Redux/Selectors/delivery";

import {
    changeDate,
    getDeliveryItemsIfNeed,
    invalidateDeliveryItems,
    selectDeliveryItem,
} from "../../Redux/Actions/delivery";

class Delivery extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = {
        header: null,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        nextProps.getDeliveryItemsIfNeed();
        return prevState;
    }

    onDatePickerChange = date => {
        this.props.changeDate(date);
    };

    onItemPress = item => {
        this.props.selectDeliveryItem(item);
        this.props.navigation.navigate("DeliveryCustomer");
    };

    render() {
        const { isFetching } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.datePicker}>
                    <DatePicker
                        date={this.props.date}
                        onChange={selectedDate => this.onDatePickerChange(selectedDate)}
                    />
                </View>
                <View style={styles.list}>
                    <DeliveryList
                        onItemPress={item => this.onItemPress(item)}
                        isFetching={isFetching}
                        dataSource={this.props.deliveryItems.toJS()}
                        onRefresh={() => this.props.invalidateDeliveryItems()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    datePicker: {
        flex: 1,
    },
    list: {
        flex: 9,
        backgroundColor: "#e7e8f1",
    },
});

const mapStateToProps = state => ({
    date: DeliverySelector.date(state),
    isFetching: DeliverySelector.isFetching(state),
    didInvalidate: DeliverySelector.didInvalidate(state),
    deliveryItems: DeliverySelector.items(state),
});

const mapDispatchToProps = dispatch => ({
    changeDate: selectedDate => dispatch(changeDate(selectedDate)),
    getDeliveryItemsIfNeed: () => dispatch(getDeliveryItemsIfNeed()),
    invalidateDeliveryItems: () => dispatch(invalidateDeliveryItems()),
    selectDeliveryItem: item => dispatch(selectDeliveryItem(item)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delivery);
