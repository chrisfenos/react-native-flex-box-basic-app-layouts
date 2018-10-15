import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, SafeAreaView, Button
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.topGrid3}>
          <Text style={styles.welcome}>Home Page</Text>             
        </View>
        <View style={styles.middleGrid5AndSome}>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        <View style={styles.footerGrid1AndSome}>
          <Text style={styles.welcome}>Footer</Text>   
        </View>
      </SafeAreaView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
}
);

export default class App extends React.Component { 
  render() {
    return <RootStack />
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
