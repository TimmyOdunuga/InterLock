import React, { useState } from 'react'
import {
    StyleSheet,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image, StatusBar, Keyboard
} from 'react-native'
import Login from './login';
import Register from './register'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import Alert from '../components/alert'



const arrow = require("../assets/images/arrow.png")
const signupBackground = require("../assets/images/signupBackground.png")




// FormPage
//combines all screens before the Home screen
//Including: onBoardingScreen, Login and sign Up

export default function FormPage({ navigation, setUser }) {
    const [isLogin, setIsLogin] = useState(false)
    const [imageLoad, setImageLoad] = useState(false)


    const goToHomeScreen = () => setUser()

    //Go back to previous page
    const goBack = () => navigation.goBack()

    //Change component rendered to Login
    const changeToLogin = () => setIsLogin(true)

    //Change component rendered to Register
    const changeToRegister = () => setIsLogin(false)


    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1 }}>
                    <Alert />

                    <ImageBackground onLoad={() => setImageLoad(true)} source={signupBackground} style={{ flex: 1, width: '100%' }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={goBack} style={styles.arrowBackTouch}>
                                <AntDesign name="left" size={20} color="#170F62" />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={styles.container}>

                        <View style={styles.subContainer}>


                            {isLogin ? <Login goToHomeScreen={goToHomeScreen} changeToRegister={changeToRegister} />
                                : <Register goToHomeScreen={goToHomeScreen} changeToLogin={changeToLogin} />}
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 4,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",

    },
    subContainer: {
        flex: 1,
        height: "100%",
        maxWidth: 500,
    },
    header: {
        flex: 1,
        paddingTop: 40,
        padding: 20,
        // backgroundColor: '#ffa'
    },
    arrowBackTouch: {
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    arrowBack: {
        // width: "100%",
        // height: "80%"

    },

});