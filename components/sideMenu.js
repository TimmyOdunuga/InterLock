import {
    StyleSheet,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image, StatusBar, Keyboard
} from 'react-native'
import React from 'react'


const SideMenu = ({ route, userInitial }) => {
    return (
        <View style={styles.container}>
            <Text>Side drawer</Text>
        </View>
    );
}

export default SideMenu;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#234",
    },
});
