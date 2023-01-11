import React from 'react'
import { Button, View, StatusBar } from 'react-native';
import Home from "../screens/home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SideMenu from "../components/sideMenu"
import HomeDrawerNavigator from './drawerNativation'
import Profile from '../screens/userProfile'






const Stack = createStackNavigator();


export default function HomeStackNavigator() {

    return (
        <>
            <StatusBar
                backgroundColor="black"
                barStyle='default'
                hidden={false} />
                
            <NavigationContainer>

                <Stack.Navigator headerMode='none' screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal-inverted',

                }}>
                    <Stack.Screen name="Home">
                        {props => <HomeDrawerNavigator {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="Profile">
                        {props => <Profile {...props} />}
                    </Stack.Screen>
                </Stack.Navigator>

            </NavigationContainer>
        </>
    );
}