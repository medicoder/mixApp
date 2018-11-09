import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Icon } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePickerVisible: false,
        };
    }

    _onDatePick = date => {
        this.setState(prevState => ({
            datePickerVisible: false,
        }));
        this.props.onChange(moment(date));
    };

    _onShowDatePicker = () => {
        this.setState(prevState => ({
            datePickerVisible: true,
        }));
    };

    _onHideDatePicker = () => {
        this.setState(prevState => ({
            datePickerVisible: false,
        }));
    };

    render() {
        const { date } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.dateTime}>
                    <View style={styles.dateLabel}>
                        <Text style={{ color: "white", fontSize: 20 }}>Ngày: {moment(date).format("DD/MM/YYYY")}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            icon={<Icon name="calendar" type="material-community" color="#ffffff" />}
                            onPress={() => this._onShowDatePicker()}
                            title="Chọn ngày"
                        />
                    </View>
                </View>
                <DateTimePicker
                    cancelTextIOS="Hủy"
                    confirmTextIOS="Xác nhận"
                    titleIOS="Chọn ngày"
                    cancelTextStyle={{ color: "red" }}
                    locale={"vi"}
                    isVisible={this.state.datePickerVisible}
                    onCancel={() => this._onHideDatePicker()}
                    onConfirm={selectedDate => this._onDatePick(selectedDate)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#311B65",
        paddingRight: 10,
        paddingLeft: 10,
    },
    dateTime: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    dateLabel: {
        flex: 5,
    },
    button: {
        flex: 4,
    },
});
