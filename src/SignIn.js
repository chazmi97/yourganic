import React from 'react'
import { 
    View, Text, StyleSheet, ImageBackground, Image, Platform,
    KeyboardAvoidingView
} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input ,
    Label
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

var myBackground = require('../assets/image/pink.jpg');
var logo = require('../assets/image/Logo.png');
class SignIn extends React.Component{

    redirect(){
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    {/* <Header style={{ backgroundColor: 'transparent', marginTop: 18 }} noShadow>
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
                    </Header> */}
                    <ScrollView style={{flex: 1}}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleStyle}>Welcome to Yourganic!</Text>
                        <Form>
                            <Item floatingLabel>
                                <Label style={styles.labelStyle}>Username</Label>
                                <Input style={styles.inputTextStyle} />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={styles.labelStyle}>Password</Label>
                                <Input style={styles.inputTextStyle} />
                            </Item>
                        </Form>
                        <Button
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Sign In</Text>
                        </Button>
                        <Text style={{ color: 'white', alignSelf: 'center', marginTop: 30, flex: 1, flexDirection: 'row', alignContent: 'flex-end' }}> Dont have account? SIGN UP</Text>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    titleStyle: {
        fontSize: 25,
        color: 'white',
        // alignItems: 'center',
        alignSelf: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        // flex: 1,
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 20,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    headerStyle: {
        backgroundColor: 'transparent', 
        marginTop: Platform.OS === "android" ? 13 : 0,
        // paddingTop: 18,
        // marginTop: Platform.OS === "android" ? 18 : 0,
        // backgroundColor: 'gray',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: { 
        color: 'white' 
    }
});

export default SignIn;