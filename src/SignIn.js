import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Platform} from 'react-native';
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
        this.props.switchScreen("register")
    }

    render() {
        return (
            <Container style={styles.headerStyle}>
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    <Header style={{ backgroundColor: 'transparent', marginTop: 18 }} noShadow>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Login</Title>
                        </Body>
                        <Right />
                    </Header>
                    <ScrollView style={{flex: 1}}>
                        {/* <View style={styles.container}> */}
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleStyle}>Welcome to Yourganic!</Text>
                        {/* </View> */}
                        {/* <Container> */}
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
                        {/* </Container> */}
                    </ScrollView>
                </ImageBackground>
            </Container>
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
        alignItems: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 20,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    headerStyle: {
        // paddingTop: 18,
        // marginTop: Platform.OS === "android" ? 18 : 0,
        backgroundColor: 'gray',
    },
    labelStyle: {
        color: 'white',
    },
    inputTextStyle: { 
        color: 'white' 
    }
});

export default SignIn;