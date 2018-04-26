import React from "react";
import { DrawerNavigator } from "react-navigation";
import SignIn from '../SignIn';
import Register from '../Register';
import LogoTitle from '../LogoTitle';
import Mains from '../Mains';
import Home from '../Home';
import SideMenus from '../SideMenus'
import SideBar from "../SideBar/SideBar.js";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

const DrawNav = DrawerNavigator(
    {
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
                shadowRadius: 0,
                shadowOpacity: 0,
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
          Home : {
            screen : Register,
            
            navigationOptions:{
              title: "Home",
          } 
          
          
          }
    },
    {
      contentComponent: props => <Sidebar {...props} />
    }
  );
  const DrawerNav = null;
  DrawNav.navigationOptions = ({ navigation }) => {
    DrawerNav = navigation;
    return {
      header: null
    };
  };


export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}