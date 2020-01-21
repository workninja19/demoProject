import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../Screens/Home/index';
import Search from '../Screens/Search/index';
import UserProfile from '../Screens/UserProfile/index';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            style={{ width: 22, height: 22, padding: 2 }}
                            source={require('../Assets/Icons/Home2.png')}
                        />
                    ) : (
                            <Image
                                style={{ width: 22, height: 22, padding: 2 }}
                                source={require('../Assets/Icons/Home.png')}
                            />
                        )
            }
        },

        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            style={{ width: 22, height: 22, padding: 2 }}
                            source={require('../Assets/Icons/Search.png')}
                        />
                    ) : (
                            <Image
                                style={{ width: 22, height: 22, padding: 2 }}
                                source={require('../Assets/Icons/Search2.png')}
                            />
                        )
            }
        },

        UserProfile: {
            screen: UserProfile,
            navigationOptions: {
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Image
                            style={{ width: 22, height: 22, padding: 2 }}
                            source={require('../Assets/Icons/Dash2.png')}
                        />
                    ) : (
                            <Image
                                style={{ width: 22, height: 22, padding: 2 }}
                                source={require('../Assets/Icons/Dash.png')}
                            />
                        )
            }
        },
    },
    {
        animationEnabled: false,
        swipeEnabled: false,
        lazy: true,
        tabBarOptions: {
            showLabel: false
        },
    }
);
export default createAppContainer(TabNavigator);