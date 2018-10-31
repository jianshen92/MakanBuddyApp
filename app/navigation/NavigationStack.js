import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from 'app/screens/Login';
import Register from 'app/screens/Register';

import Home from 'app/screens/Home';
import Map from 'app/screens/Map';
import More from 'app/screens/More'

const SignedIn = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Map: {
            screen: Map,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        More: {
            screen: More,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Register: {
            screen: Register,
            // navigationOptions: { header: null, gesturesEnabled: false }
        },
        SignedIn: {
            screen: SignedIn,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'SignedIn'
    }
);

export default RNApp;


