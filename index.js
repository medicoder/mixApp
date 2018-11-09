import { AppRegistry } from "react-native";
import App from "./App";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);
AppRegistry.registerComponent("antrade_driver_app", () => App);
