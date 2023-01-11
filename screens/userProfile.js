import {
    StyleSheet, ScrollView,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image, StatusBar, Keyboard
} from 'react-native'
import React, { useState, useContext } from 'react'
import Header from '../components/header'
import { Ionicons, AntDesign, Feather, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import { AuthContext } from '../auth/authContext'


const optionsBtn = [
    {
        title: "Edit profile",
        icon: 'edit-2',
        route: 'EditProfile'
    },
    {
        title: "Upload",
        icon: 'upload',
        route: 'upload'
    },
    {
        title: "Status",
        icon: 'primitive-dot',
        route: 'status'
    },
]

const user = [
    { type: 'Email', data: 'Helenodunuga@gmail.com' },
    { type: 'Phone', data: '(857)-456-3778' }
]


const groupData = [
    {
        name: "The Odunugas",
        members: '7'
    }, {
        name: "The Odunugas",
        members: '7'
    }
]








const Profile = ({ navigation }) => {
    const userData = useContext(AuthContext)

    const goBackFormProfile = () => navigation.goBack()

    const nav = (val) => console.log(userData)


    return (
        <View style={styles.container}>
            <Header
                goBackFormProfile={goBackFormProfile}
                screen={"Profile"}

            />

            <ScrollView>
                <View style={styles.profileImg}>
                    <View style={{
                        width: 120, height: 120,
                        borderRadius: 50, marginBottom: 20,
                    }}>

                        <Image
                            style={{
                                resizeMode: 'cover',
                                width: '100%', height: '100%',
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib' }} />

                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{userData.currentUser.fullName}</Text>
                </View>

                <View style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center', flexDirection: "row"
                }}>

                    {optionsBtn.map((val, i) => {
                        return (
                            <Options key={i} nav={nav} title={val.title}
                                icon={val.icon} route={val.route}

                            />
                        )
                    })}
                </View>
                <View style={styles.userData}>
                    {user.map((userData, i) => {
                        return (
                            <View key={i}>
                                <UserData userData={userData} />
                            </View>
                        )
                    })}
                </View>

                <View style={{ ...styles.userData, backgroundColor: '#EEEEEE' }}>
                    <Text style={{
                        fontWeight: '600', fontSize: 18, paddingLeft: 10, padding: 5
                    }}>Groups</Text>
                    {groupData.map((snap, i) => {
                        return (
                            <View key={i} style={styles.groupList}>
                                <UserGroups data={snap} />
                            </View>
                        )
                    })}
                </View>

            </ScrollView>

        </View>
    );
}




const Options = ({ title, icon, route, nav }) => {
    const [pressed, setPressed] = useState(false)

    const antDesign = title == "Edit profile" || title == "Upload"

    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ alignItems: 'center' }}
            onPressOut={() => setPressed(false)}
            onPressIn={() => setPressed(true)}
            onPress={() => nav(route)}
        >
            <View style={{ ...styles.optionIcon, borderColor: pressed ? "#000" : '#E6E6E6' }}>

                {antDesign ? <Feather name={icon} size={20} />
                    : <Octicons name={icon} size={20} />}
            </View>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}






const UserData = ({ userData }) => {

    return (
        <View style={styles.data}>
            <Text style={styles.type}>{userData.type}</Text>
            <Text style={styles.actualData}>{userData.data}</Text>
            {/* <View style={styles.line}></View> */}
        </View>
    );
}




const UserGroups = ({ data }) => {

    return (
        <>
            <View style={styles.group}>
                <View style={styles.groupImg}></View>
                <View style={styles.groupInfo}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#474747', paddingBottom: 2.5, }}>{data.name}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#A9A9A9', paddingTop: 2.5, }}>{data.members} members</Text>
                </View>
            </View>

            <TouchableOpacity style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                <SimpleLineIcons name="options-vertical" size={20} color="#B9B9B9" />
            </TouchableOpacity>
        </>
    );
}








const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingLeft: 20, paddingRight: 20,
    },
    optionIcon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        borderColor: '#E6E6E6',
        borderWidth: 0.8,
        marginBottom: 10,
    },
    profileImg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    userData: {
        padding: 10,
        width: '100%',
        backgroundColor: "#000",
        borderRadius: 18,
        marginTop: 30,
    },
    data: {
        padding: 15,

    },
    type: {
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        color: '#fff'
    },
    actualData: {
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 10,
        color: '#8D8D8D',
    },
    line: {
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 2,
    },
    group: {
        flexDirection: 'row',
    },
    groupImg: {
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    groupInfo: {
        left: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    groupList: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }

});






export default Profile;