import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import Login from '../Screens/Login/index';
import SignUp from '../Screens/SignUp/index';
import Home from '../Screens/Home/index';
import Search from '../Screens/Search/index';
import Categories from '../Screens/Categories/index';
import UserProfile from '../Screens/UserProfile/index';

const AppNavigator = createStackNavigator({
    Main: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    Categories: {
        screen: Categories,
        navigationOptions: {
            header: null
        }
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },

    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(AppNavigator);
