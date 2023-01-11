import React, { useState } from 'react';
import {
    StyleSheet, TextInput,
    Button, TouchableWithoutFeedback,
    TouchableOpacity, Text, View,
    ImageBackground, Image, Keyboard
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons as Icon, Feather, Ionicons } from '@expo/vector-icons'
import { TouchableRipple } from 'react-native-paper';
import interlockDB from '../auth/interlockDatabase'



const arrow = require("../assets/images/arrow.png")




export default function Register({ changeToLogin, goToHomeScreen }) {

    const [isEmailActive, setEmailActive] = useState(false);
    const [isNameActive, setNameActive] = useState(false);
    const [isPasswordActive, setPasswordActive] = useState(false);

    const [state, setState] = useState(state)
    const [pressed, setPressed] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState("")

    const register = () => {
        if (email == "" || password == "" || name == "") {
            return alert("Please enter details")

        }

        interlockDB.createUserWithEmailPassword(email, password, name)
            .then(snapShot => {
                console.log(snapShot)
                goToHomeScreen()
            })
            .catch(err => alert(err.error.message))

    }

    return (
        <Animatable.View animation='slideInLeft' duration={250} style={styles.registerForm}>

            <Text style={styles.createText} >Create account</Text>

            <View style={styles.inputBox}>
                <Feather name="mail" size={16} color="#717177" style={styles.inputIcon} />

                <TextInput

                    keyboardType='email-address'
                    onFocus={() => setEmailActive(true)}
                    onBlur={() => setEmailActive(false)}
                    style={{
                        ...styles.formGeneral,
                        borderColor: isEmailActive ? "#717177" : "#E3E3E8",
                    }}
                    defaultValue={email}
                    onChangeText={(val) => setEmail(val)}
                    placeholder="Email" returnKeyType="next"
                />

            </View>

            <View style={styles.inputBox}>
                <Ionicons name="person-outline" size={16} color="#717177" style={styles.inputIcon} />
                <TextInput
                    onFocus={() => setNameActive(true)}
                    onBlur={() => setNameActive(false)}
                    onChangeText={(val) => setName(val)}
                    style={{
                        ...styles.formGeneral,
                        borderColor: isNameActive ? "#717177" : "#E3E3E8",
                    }}
                    placeholder="Full name" returnKeyType="next"

                />

            </View>


            <View style={styles.inputBox}>
                <Feather name="unlock" size={16} color="#717177" style={styles.inputIcon} />
                <TextInput
                    onFocus={() => setPasswordActive(true)}
                    onBlur={() => setPasswordActive(false)}
                    secureTextEntry={pressed}
                    style={{
                        ...styles.formGeneral,
                        borderColor: isPasswordActive ? "#717177" : "#E3E3E8",
                    }}
                    onChangeText={(val) => setPassword(val)}
                    placeholder="Password"
                />

                <TouchableRipple

                    style={{
                        width: 30, height: 30,
                        backgroundColor: '#F3F3F3', justifyContent: 'center',
                        alignItems: 'center', position: 'absolute', right: 0,
                        borderRadius: 20, marginRight: 5,
                    }}

                    onPress={() => {
                        if (pressed) return setPressed(false)
                        else return setPressed(true)
                    }}
                    rippleColor="#717177"
                >
                    <Icon name={pressed ? "eye" : "eye-off"} size={16} color="#717177" />
                </TouchableRipple>

            </View>


            <TouchableOpacity activeOpacity={0.7} onPress={register} style={styles.createAccountBtn}>
                <Text style={styles.createAccountBtnText}>Create account</Text>
            </TouchableOpacity>


            <View style={styles.haveAccount}>
                <Text style={styles.forgetPasswordText}>Don't have an Account?</Text>


                <TouchableOpacity onPress={changeToLogin} style={styles.loginLink}>
                    <Text style={styles.forgetPasswordText}>Login</Text>
                </TouchableOpacity>
            </View>

        </Animatable.View>
    );
}


const styles = StyleSheet.create({
    inputBox: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    registerForm: {
        flex: 5,
        padding: 20
    },
    inputIcon: {
        position: 'absolute',
        textAlign: 'center',
        width: 40,
    },
    formGeneral: {
        paddingLeft: 35,
        paddingRight: 35,
        height: '100%',
        borderWidth: 0.8,
        borderRadius: 15,
        fontSize: 15,
        width: '100%'

    },
    createText: {
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
    },
    createAccountBtn: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: "#2D2D2D",
    },
    createAccountBtnText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: '500'

    },
    forgetPasswordText: {
        fontSize: 16,
        color: "#A5A5A5",
        fontWeight: '500',
        marginTop: 20,
    },
    haveAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    loginLink: {
        paddingLeft: 10,
        paddingRight: 10,
    },

});