import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    submitOnPress = () => {
        this.props.onSubmit(this.state);
    };

    usernameOnChangeText = value => {
        this.setState(prevState => ({
            username: value,
        }));
    };

    passwordOnChangeText = value => {
        this.setState(prevState => ({
            password: value,
        }));
    };

    render() {
        const {
            error: { hasError, message },
        } = this.props;

        return (
            <View style={styles.container}>
                {hasError ? (
                    <View>
                        <Text style={styles.errorMessage}>{message}</Text>
                    </View>
                ) : null}
                <Input
                    placeholder="Tài khoản ..."
                    containerStyle={styles.inputMargin}
                    onChangeText={value => this.usernameOnChangeText(value)}
                />
                <Input
                    placeholder="Mật khẩu ..."
                    containerStyle={styles.inputMargin}
                    secureTextEntry={true}
                    onChangeText={value => this.passwordOnChangeText(value)}
                />
                <Button
                    icon={<Icon name="log-in" type="feather" color="white" />}
                    onPress={() => this.submitOnPress()}
                    title={"Đăng nhập"}
                    buttonStyle={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputMargin: {
        marginTop: 10,
    },
    button: {
        marginTop: 10,
        paddingLeft: 10,
    },
    errorMessage: {
        color: "#ff0000",
        fontStyle: "italic",
    },
});
