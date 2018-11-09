import React, { Component } from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import moment from "moment"

export default class UserInfo extends Component {
    render() {
        const {user} = this.props
        return (
            <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 3 }}>
                    <Avatar
                        size="large"
                        rounded
                        source={{
                            uri:
                                "http://www.ninosdelmilenio.org/wp-content/themes/ndm/static/images/avatar_default.png",
                        }}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={{ flex: 7 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 20 }}>{user.get("UserName")}</Text>
                        <Text>Gia nhập từ ngày {moment(user.get("CreatedAt")).format("DD/MM/YYYY")}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
