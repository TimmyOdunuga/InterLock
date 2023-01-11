import {
    StyleSheet,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image, StatusBar, Keyboard
} from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'



const Header = ({ route, userInitial, goDrawer, profileRoute, screen, goBackFormProfile }) => {

    if (screen == "Home")
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={profileRoute} style={styles.initial} activeOpacity={0.7}>
                    <View style={styles.userInitial}>
                        <Text style={styles.initialText}>{userInitial}</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.routeText}>{route}</Text>

                <TouchableOpacity onPress={goDrawer} style={{ width: 20, height: 25, alignItems: 'flex-end' }}>
                    <View style={styles.menuIcon}></View>
                    <View style={{ ...styles.menuIcon, width: "100%" }}></View>
                    <View style={{ ...styles.menuIcon, marginRight: 10, width: 10 }}></View>
                </TouchableOpacity>
            </View>
        );
    else
        return (
            <View style={{ ...styles.container, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={goBackFormProfile} style={styles.arrowBackTouch}>
                    <AntDesign name="right" size={15} color="#170F62" />
                </TouchableOpacity>
            </View>
        );

}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 40,
        padding: 20,
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    initial: {
        padding: 3,
        backgroundColor: "#E6E6E6",
        borderRadius: 17
    },
    userInitial: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 15,

    },
    initialText: {
        color: '#fff'
    },
    routeText: {
        fontSize: 20,
        fontWeight: '600',
    },
    menuIcon: {
        backgroundColor: '#5B52BA',
        width: 10,
        height: 4,
        marginTop: 4,
        borderRadius: 15,
    },
    arrowBackTouch: {
        width: 40,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5'
    },

});
