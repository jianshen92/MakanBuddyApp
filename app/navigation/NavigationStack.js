import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from 'app/screens/Login';
import Register from 'app/screens/Register';

import Home from 'app/screens/Home';
import Map from 'app/screens/Map';
import More from 'app/screens/More';
import Item from 'app/screens/Item';
import Claim from 'app/screens/Claim';

const HomeViewStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Item: {
            screen: Item,
            navigationOptions: { headerTitle: 'Item View', gesturesEnabled: false }
        },
        Claim: {
            screen: Claim,
            navigationOptions: { headerTitle: 'Claim View', gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Home'
    }

);

const SignedIn = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeViewStack,
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


