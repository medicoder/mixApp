import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";

const WithLoading = WrappedComponent => {
    return class LoadingHOC extends Component {
        render() {
            return (
                <Fragment>
                    {this.props.isFetching ? (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>Đang tải ...</Text>
                        </View>
                    ) : (
                        <WrappedComponent {...this.props} />
                    )}
                </Fragment>
            );
        }
    };
};
export default WithLoading;
