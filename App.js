import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import SignIn from './src/SignIn';
import Register from './src/Register';
import {Stack} from './src/Router';
import LogoTitle from './src/LogoTitle'
import Mains from './src/Mains'


const Apps = StackNavigator({

  Main:{
    screen: Mains,
    navigationOptions:{
      // title: "Main",
      // headerTitleStyle: { color: 'white' },
      // // headerLeft: (<Image source={require('../resources/independent-logo.png')} style={styles.logo}/>),
      headerStyle: {        
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      }
    }    
  },
  SignIn: { 
    screen: SignIn,
    navigationOptions:{
      title: "Login",
      headerTitleStyle: { color: 'white' },
      // // headerLeft: (<Image source={require('../resources/independent-logo.png')} style={styles.logo}/>),
      headerStyle: {        
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      },
  }
},
  Register: { 
    screen: Register,
    navigationOptions:{
      title: "Register",
      headerTitleStyle: { color: 'white' },
      // // headerLeft: (<Image source={require('../resources/independent-logo.png')} style={styles.logo}/>),
      headerStyle: {        
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0,
      },
  }
  
  },
});

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    currentScreen: "signIn"

  }

  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "signIn"){
      return (
        <SignIn switchScreen={this.switchScreen} />
      )
    }
    else if (this.state.currentScreen === "register") {
      return (
        <Register switchScreen={this.switchScreen}/>
      )
    }
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
