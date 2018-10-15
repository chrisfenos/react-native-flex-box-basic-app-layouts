import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, SafeAreaView, Button
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createStackNavigator } from 'react-navigation';
import RootStack from './navigation/stack';

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fafbfe',
  },
  topGrid3: {
    flex: 3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '5%',
  },
  middleGrid5AndSome: {
    flex: 5.5,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  footerGrid1AndSome: {
    flex: 0.75,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
