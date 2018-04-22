import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Platform} from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Header style={{ backgroundColor: 'transparent', marginTop: 18 }} noShadow>
        <Left>
            <Button transparent
                onPress={() =>
                this.redirect()}>
            >
                <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>Login</Title>
        </Body>
        <Right />
    </Header>
      );
    }
  }

  export default LogoTitle;