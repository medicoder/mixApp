import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { Card, ListItem, Text, Badge, Input, Divider, Button, Icon } from "react-native-elements";

export default class InvoicesCard extends Component {
    constructor(props) {
        super(props);
        const dataSource = props.invoices.map(item => ({
            ...item,
            checked: item.status === 1,
        }));
        this.state = {
            dataSource: dataSource,
        };
    }
    _onCheck = item => {
        const dataSource = this.state.dataSource.map(itemState => {
            if (itemState.name === item.name) {
                return {
                    ...itemState,
                    checked: !itemState.checked,
                };
            }
            return itemState;
        });
        this.setState(prevState => ({
            dataSource: dataSource,
        }));
    };
    _keyExtractor = item => `${item.name}_${Math.random()}`;
    _renderItem = item => {
        return (
            <ListItem
                title={
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 9 }}>{item.ProductName}</Text>
                        <Badge value={item.Quantity} textStyle={{ color: "white" }} containerStyle={{ flex: 1 }} />
                    </View>
                }
                checkBox={{
                    onPress: () => this._onCheck(item),
                    checked: this.state.dataSource.find(record => record.name === item.name).checked,
                }}
            />
        );
    };
    render() {
        return (
            <Card title="Danh sách đơn hàng" containerStyle={{ marginBottom: 15 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this._renderItem(item.Products[0])}
                    keyExtractor={this._keyExtractor}
                />
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <View>
                    <Input label="Ghi chú" multiline={true} numberOfLines={4} inputStyle={{ height: 200 }} />
                    <Button
                        containerStyle={{ marginTop: 10 }}
                        icon={<Icon name="check" type="font-awesome" color="white" />}
                        title={"Cập nhật"}
                    />
                </View>
            </Card>
        );
    }
}
