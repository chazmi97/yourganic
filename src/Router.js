import {StackNavigator} from 'react-navigation';
import SignIn from './SignIn';
import Register from './Register';

export const Stack = StackNavigator({
    SignIn:{
        screen : SignIn
    },
    Register:{
        screen :Register
    }
})

