import { StyleSheet, SafeAreaView, AppRegistry } from "react-native";
import React from "react";

import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

AppRegistry.registerComponent("main", () => App);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
