import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://testcase.myideasoft.com/'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
