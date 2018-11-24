import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//for RNApp
import Login from 'app/screens/Login';
import Register from 'app/screens/Register';

//for SignedIn (bottom tabstack)
import Home from 'app/screens/Home';
import Map from 'app/screens/Map';
import More from 'app/screens/More';

//for HomeViewStack (on Home screen)
import Item from 'app/screens/Item';
import Claim from 'app/screens/Claim';

//for MoreViewStack (on More screen)
import Profile from 'app/screens/Profile';
import MyClaims from 'app/screens/MyClaims';
import Notifications from 'app/screens/Notifications';
import Contact from 'app/screens/Contact';


const MoreViewStack = createStackNavigator(
    {
        More: {
            screen: More,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Profile: {
            screen: Profile,
            navigationOptions: { headerTitle: 'My Profile', gesturesEnabled: false}
        },
        MyClaims: {
            screen: MyClaims,
            navigationOptions: { headerTitle: 'My Claims', gesturesEnabled: false}
        },
        Notifications: {
            screen: Notifications,
            navigationOptions: { headerTitle: 'Notifications', gesturesEnabled: false}
        },
        Contact: {
            screen: Contact,
            navigationOptions: { headerTitle: 'Contact', gesturesEnabled: false}
        }
    }, 
    {
        initialRouteName: 'More'
    }
)

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
            screen: MoreViewStack,
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


