import React from 'react';

import {
  AppRegistry, 
  StyleSheet,
  View
} from 'react-native';

import './App.css';
import Home from './home';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header title="RN List"></Header>
        <Home/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  appContainer : {
    flex: 1
  } 
}) 

AppRegistry.registerComponent('App', () => App)

export default App;
