import React from 'react'
import {View,Text,StyleSheet,ImageBackground, TextInput, ScrollView} from 'react-native';
// import { TextField } from 'react-native-material-textfield';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input, Label
} from 'native-base';
import {StackNavigator} from 'react-navigation';

import SignIn from './SignIn';
// import Register from './register';

var myBackground = require('../assets/image/pink.jpg');

class Register extends React.Component{
    static navigationOptions = {
        // title: "Register",
        headerTitleStyle: { color: 'white' },
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
    }
    constructor(props) {
        super(props);
      }
      state = {
        email: '',
        password:'',
        retype :'',
        phone:''
      };

      redirect(){
        this.props.navigation.navigate('Register', { name: 'Jane' } )
      }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Container style={styles.headerStyle}>   
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    {/* <Header style={{ backgroundColor: 'transparent' }} noShadow>
                        <Left>
                            <Button transparent         
                                title="Go to Jane's profile"
                                onPress={() =>
                                this.redirect()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.title}>Register</Title>
                        </Body>
                        <Right />
                    </Header> */}
                    <ScrollView style={styles.container}>
                        <Text style={styles.titleStyle}>
                            Welcome to Yourganic!
                        </Text>
                        <Form>
                            <Item floatingLabel>
                                 <Label style={styles.title}>Email</Label>
                                 <Input style={styles.input} 
                                 onChangeText={(email) => this.setState({email})} 
                                 />
                            </Item>
                            <Item floatingLabel >
                                <Label style={styles.title}>Password</Label>
                                <Input 
                                style={styles.input}
                                secureTextEntry= {true} 
                                onChangeText={(password) => this.setState({password})}
                                />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Retype Password</Label>
                                <Input 
                                style={styles.input}
                                secureTextEntry= {true} 
                                onChangeText={(retype) => this.setState({retype})}
                            />
                            </Item>

                            <Item floatingLabel >
                                <Label style={styles.title}>Handphone</Label>
                                <Input 
                                style={styles.input}
                                keyboardType={"numeric"}
                                onChangeText={(handphone) => this.setState({handphone})}
                                />
                            </Item>
                        </Form>

                        <Button
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Register</Text>
                        </Button>
                    </ScrollView>
                </ImageBackground>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
    },
    titleStyle: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        margin:20,
        paddingTop: 70,
    },
    buttonStyle: {
        margin: 10
    },
    buttonTextStyle: {
        color: 'white',

    },
    title:{
        color: 'white'
    },
    input:{
        color: 'white',
    }
});

export default Register;