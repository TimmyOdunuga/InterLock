import React from 'react'
import { Button, View } from 'react-native';
import Home from "../screens/home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from "../components/sideMenu"



const Drawer = createDrawerNavigator();


export default function HomeDrawerNavigator({ navigation }) {

    const profileRoute = () => navigation.push('Profile')
    const goBack = () => navigation.goBack()

    return (

        <Drawer.Navigator gestureEnabled headerMode='none'>
            <Drawer.Screen name="Home">
                {props => <Home profileRoute={profileRoute} goBack={goBack} {...props} />}
            </Drawer.Screen>

            <Drawer.Screen name="SideMenu">
                {props => <SideMenu {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}