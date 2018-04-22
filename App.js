import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Register from './src/Register';
export default class App extends React.Component {

  state = { 
    currentScreen: "signIn"
  }
  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "register"){
      return (
        <Register switchScreen={this.switchScreen} />
      )
    }
    else if (this.state.currentScreen === "signIn") {
      return (
        <SignIn />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
