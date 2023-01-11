import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/header'
import { TouchableOpacity } from '../node_modules/react-native-gesture-handler';


const Home = ({ navigation, profileRoute }) => {

    const goDrawer = () => navigation.navigate('SideMenu')

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

                <Header screen={'Home'}
                    profileRoute={profileRoute}
                    goDrawer={goDrawer} route={"Home"}
                    userInitial={"TO"}

                />

                <Text>Odunuga</Text>

                <View>
                    <Text>18th Wednesday</Text>
                    <TouchableOpacity>
                        <Text>week</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}














export default Home;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    subContainer: {
        flex: 1,
        height: "100%",
        backgroundColor: "#0012",
        maxWidth: 650,
    }
});