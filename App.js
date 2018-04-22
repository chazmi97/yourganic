import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import Register from './src/Register';
export default class App extends React.Component {
<<<<<<< HEAD

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
=======
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
          <SignIn />
        </View>
      );
    }
    else {
      return (
        <Text></Text>
      );
    }
>>>>>>> 964813da8e3d059c57864441582d1f3ba2225759
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
