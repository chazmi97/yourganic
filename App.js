import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import { 
  Container, Header, Left, Body, Right, Button, Icon, 
  Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';

import SignIn from './src/SignIn';
import Register from './src/Register';
import LogoTitle from './src/LogoTitle';
import Mains from './src/Mains';
import Home from './src/Home';
import SideMenus from './src/SideMenus'
import HomeScreen from './src/HomeScreen/HomeScreen.js'

// import ReduxNavigation from './Navigation/ReduxNavigation'


const Apps = StackNavigator({
  Main:{ screen: Mains },
  SignIn: { screen: SignIn },
  Register: { screen: Register },
});


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <Apps />
        </View>
      );
    }
    else {
      return (
        <Text></Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
