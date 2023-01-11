import {
    StyleSheet,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image,
} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'




//Require images
const schedulel_icon = require("../assets/images/schedulel_icon.png")
const share_img = require("../assets/images/share_img.png")
const background_img = require("../assets/images/background_img.png")


















export default function OnBoardingScreen({ navigation }) {

    const handleContinue = () => {
        navigation.push('SignupLogin')
    }



    return (
        <View style={styles.container}>

            <View style={styles.subContainer}>
                <View style={styles.topScreen}>
                    <View style={styles.schedulelText}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "600",
                            lineHeight: 25,
                            paddingBottom: 10,
                            color: "#000000",
                        }}>Share  your schedule</Text>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "400",
                            lineHeight: 25,
                            color: "#000000",
                        }}>Manage your schedule well, but sharing with your family and friends</Text>
                    </View>


                    <Animatable.View animation='slideInLeft' duration={2000} style={{
                        width: '100%',
                        alignItems: 'flex-end',

                    }}>
                        <Image source={schedulel_icon} style={styles.schedulelIcon} />
                    </Animatable.View>
                </View>

                <View style={styles.middleScreen}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image source={share_img} style={styles.shareImg} />
                    </View>
                </View>

                <View style={styles.bottomScreen}>

                    <Animatable.View animation="zoomInUp" duration={1000} style={{
                        position: 'absolute',
                        width: "100%",
                        alignItems: 'center',

                    }}>
                        <Image source={background_img} style={{
                            width: 560,
                            height: 160,
                        }} />
                    </Animatable.View>
                    {/* <TouchableOpacity style={{
                        ...styles.btn,
                        backgroundColor: "#E9E9FD",
                        borderColor: "#E5E5FC",

                    }} onPress={null}>
                        <Text style={{
                            ...styles.btnText, color: "#170F62"
                        }} >Login</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={{
                        ...styles.btn, width: "80%", marginTop: 20, alignItems: 'center',
                        backgroundColor: "#170F62",

                    }} onPress={handleContinue}>
                        <Text
                            style={{ ...styles.btnText, color: "#fff" }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}







// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    subContainer: {
        flex: 1,
        height: "100%",
        maxWidth: 650,
        backgroundColor: "#fff",
    },
    topScreen: {
        width: '100%',
        flex: 2,
    },
    middleScreen: {
        width: '100%',
        flex: 2,
    },
    bottomScreen: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'

    },
    schedulelIcon: {
        width: 223,
        height: 232,
        resizeMode: 'contain',
        marginTop: -5,
        marginRight: -10,
    },
    schedulelText: {
        width: 260,
        position: 'absolute',
        marginLeft: 20,
        paddingTop: 100,
        height: "100%",
        justifyContent: 'center',
    },
    shareImg: {
        width: 322,
        height: 241,
        marginLeft: 100,
    },
    btn: {
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    btnText: {
        fontSize: 16,
        fontWeight: "600",

    },
});