import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


const Alert = () => {

    return (
        <View style={styles.container}>
            <Text>New Alert</Text>
        </View>
    );
}














export default Alert;


const styles = StyleSheet.create({
    container: {
        width: '90%',
        position: 'absolute',
        marginTop: 35,
        // backgroundColor: '#ff4',
        // padding: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});