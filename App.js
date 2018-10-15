import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, SafeAreaView, Button
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class App extends Component {

  state = {
    page: 0,
  };

  toggleLayout = () => {
    const nextLayout = this.state.page + 1;
    this.setState({ page: nextLayout });
  }

  render() {
    const currentPage = this.state.page;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.topGrid3}>
          <Text style={styles.welcome}>Icon</Text>    
          <Text style={styles.welcome}>Title</Text>    
          <Text style={styles.welcome}>Description</Text>     
        </View>
        <View style={styles.middleGrid5AndSome}>
        </View>
        <View style={styles.footerGrid1AndSome}>
          <Button onPress={this.toggleLayout} title="Toggle Layout"/>       
        </View>
      </SafeAreaView>
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
