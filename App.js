import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './screens/home'
import OnBoardingScreen from './screens/onBoardingScreen'
import HomeStackNavigator from "./navigation/stackNavigation"
import LoginNavigator from "./navigation/loginStackNavigation"
import { AuthContext, AuthContainer } from './auth/authContext'
import Alert from './components/alert'







export default function App() {
  const [userState, setUserState] = useState(null)


  //Set user on user state available 
  useEffect(() => {
    setUserState(false)
  }, []);


  //change from OnBoardingScreen to Home screen
  const setUser = () => setUserState(true)


  return (
    <AuthContainer>
      <StatusBar
        backgroundColor="black"
        barStyle='default'
        hidden={false} />
      {userState ? <HomeStackNavigator />
        : <LoginNavigator setUser={setUser} />}
    </AuthContainer>
  )
}


