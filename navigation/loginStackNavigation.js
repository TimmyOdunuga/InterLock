import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import FormPage from "../screens/formPage";
import OnBoardingScreen from "../screens/onBoardingScreen";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// const screens = {
//     OnBoardingScreen: {
//         screen: props => <OnBoardingScreen {...props} />,
//     },
//     FormPage: {
//         screen: props => <FormPage {...props} />
//     }
// }

// const HomeStack = createStackNavigator(screens, {

//     headerMode: 'hide',
//     mode: 'modal',
// });

// export default createAppContainer(HomeStack);



const Stack = createStackNavigator();


export default function LoginNavigator({ setUser }) {

    return (
        <NavigationContainer>

            <Stack.Navigator gestureEnabled headerMode='none'>
                <Stack.Screen name="OnBoarding">
                    {props => <OnBoardingScreen {...props} />}
                </Stack.Screen>

                <Stack.Screen name="SignupLogin">
                    {props => <FormPage setUser={setUser} {...props} />}
                </Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}
