import "react-native-gesture-handler";
import { LogBox, View } from "react-native";
import RootNavigator from "./Src/Routes";

import { Provider } from "redux";
import { store } from "./Src/Redux/Store";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
