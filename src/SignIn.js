import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/image/pink.jpg');

class SignIn extends React.Component{
    render() {
        return (
            <View>
                <ImageBackground source={myBackground}
                    style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            Welcome to Yourganic!
                        </Text>
                        <Button
                            block={true}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Sign In</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>
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
    }
});

export default SignIn;