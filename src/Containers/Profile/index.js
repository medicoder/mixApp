import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import StatusBar from "../../Components/StatusBar";
import UserInfo from "../../Components/Profile/UserInfo";
import { signOut } from "../../Redux/Actions/auth";
import * as AuthSelector from "../../Redux/Selectors/auth";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderIcon = key => {
        switch (key) {
            case "changePassword":
                return {
                    type: "feather",
                    name: "lock",
                };
            case "signout":
                return {
                    type: "feather",
                    name: "log-out",
                };
        }
    };

    _renderTitle = key => {
        switch (key) {
            case "changePassword":
                return "Đổi mật khẩu";
            case "signout":
                return "Đăng xuất";
        }
    };

    _onPress = key => {
        switch (key) {
            case "":
                break;
            case "signout":
                this._signOut();
                break;
        }
    };

    _signOut = () => {
        this.props.signOut();
    };

    _renderItem = item => {
        return (
            <ListItem
                leftIcon={<Icon name={this._renderIcon(item.key).name} type={this._renderIcon(item.key).type} />}
                title={this._renderTitle(item.key)}
                onPress={() => this._onPress(item.key)}
                onLongPress={() => this._onPress(item.key)}
            />
        );
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!nextProps.isAuthenticated) {
            nextProps.navigation.navigate("Login");
        }
        return prevState;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <UserInfo user={this.props.user}/>
                <FlatList
                    data={[{ key: "changePassword" }, { key: "signout" }]}
                    renderItem={({ item }) => this._renderItem(item)}
                />
            </View>
        );
    }
}

export const mapStateToProps = state => ({
    isAuthenticated: AuthSelector.isAuthenticated(state),
    user: AuthSelector.selectUser(state)
});

export const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7e8f1",
    },
});
