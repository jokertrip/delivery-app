import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../Screens/MainScreen.js';
import CategoryScreen from '../Screens/CategoryScreen.js';
import ItemScreen from '../Screens/ItemScreen.js';
import ShopCartScreen from '../Screens/ShopCartScreen.js';
import AuthScreen from '../Screens/AuthScreen.js';
import {useSelector} from 'react-redux';

const MainStackNavigator = createStackNavigator()

const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: '#0EC546'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerTintColor: 'white'
}

const tabScreenOptions = {
    headerShown: false
}

const MainStack = () => {
    return(
        <MainStackNavigator.Navigator screenOptions={defaultScreenOptions}>
            <MainStackNavigator.Screen name={'Main'} component={MainScreen} />
            <MainStackNavigator.Screen name={'Category'} component={CategoryScreen} />
            <MainStackNavigator.Screen name={'Item'} component={ItemScreen} />
        </MainStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const MyTab = () => {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen name='Menu' component={MainStack} />
            <Tab.Screen name='Shop Cart' component={ShopCartScreen} />
        </Tab.Navigator>
    )
}

const MainNavigator = () => {
    const isLogged = useSelector(state => !!state.token)

    return(
        <NavigationContainer>
            {!isLogged && <AuthScreen/>}
            {isLogged &&<MyTab/>}
        </NavigationContainer>
    )
}

export default MainNavigator