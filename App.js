import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/SignIn';
import { Font, AppLoading } from "expo";

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
          <SignIn />
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
