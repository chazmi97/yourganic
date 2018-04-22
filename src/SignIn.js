import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import { 
    Container, Header, Left, Body, Right, Button, Icon, 
    Title, Content, FooterTab, Footer, Form, Item, Input 
} from 'native-base';

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
                    <Header style={{ backgroundColor: 'transparent' }} noShadow>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.switchScreen("register")}
                            >
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Login</Title>
                        </Body>
                        <Right />
                    </Header>
                    <View style={styles.container}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.titleStyle}>Welcome to Yourganic!</Text>
                        <Content>
                            <Form>
                                <Item>
                                    <Input placeholder="Username" />
                                </Item>
                                <Item last>
                                    <Input placeholder="Password" />
                                </Item>
                            </Form>
                        </Content>
                        <Button
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Sign In</Text>
                        </Button>
                    </View>
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
        margin: 10
    },
    buttonTextStyle: {
        color: 'white'
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    headerStyle: {
        paddingTop: 18,
        backgroundColor: 'gray',
    }
});

export default SignIn;