import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import LoginForm from "../../../Components/Auth/Login/Form";
import { signIn } from "../../../Redux/Actions/auth";
import * as AuthSelector from "../../../Redux/Selectors/auth";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {
                hasError: false,
                message: ""
            }
        };
    }

    static navigationOptions = {
        header: null
    };


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isAuthenticated) {
            nextProps.navigation.navigate("Delivery");
        }
        return prevState;
    }

    onSubmit = value => {
        const { username, password } = value;
        this.props.signIn({ Username: username, Password: password });
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.container}>
                    <LoginForm
                        error={this.state.error}
                        onSubmit={value => this.onSubmit(value)}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = state => ({
    isAuthenticated: AuthSelector.isAuthenticated(state)
});
const mapDispatchToProps = dispatch => ({
    signIn: (username, password) => dispatch(signIn(username, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
