import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/home';

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Home/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent("App", () => App);

