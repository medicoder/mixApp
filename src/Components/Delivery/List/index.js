import React, { Component } from "react";
import { View, SectionList, StyleSheet, RefreshControl } from "react-native";
import { Icon } from "react-native-elements";
import { ListItem, Text } from "react-native-elements";
import WithLoading from "../../../HOC/WithLoading";

class DeliveryList extends Component {
    _renderItem = item => {
        return (
            <ListItem
                leftIcon={<Icon name={"question"} type={"simple-line-icon"} color="orange" />}
                title={item.customer_name}
                subtitle={item.end_location.address}
                badge={{ value: item.order_id.length, textStyle: { color: "white" } }}
                containerStyle={styles.itemStyle}
                chevron
                onPress={() => this.props.onItemPress(item)}
                onLongPress={() => this.props.onItemPress(item)}
            />
        );
    };
    _renderSectionHeader = section => (
        <View
            style={{
                marginLeft: 10,
                marginRight: 10,
            }}
        >
            <Text h4>{section.title}</Text>
        </View>
    );

    _keyExtractor = item => item.customer_id;

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => this._renderItem(item)}
                    renderSectionHeader={({ section }) => this._renderSectionHeader(section)}
                    sections={this.props.dataSource}
                    refreshControl={
                        <RefreshControl refreshing={this.props.isFetching} onRefresh={() => this.props.onRefresh()} />
                    }
                />
            </View>
        );
    }
}

export default WithLoading(DeliveryList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemStyle: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
    },
});
