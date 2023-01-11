
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';




class InterlockDB {

    constructor(email = '', password = "", userObject = {}) {
        this.email = email;
        this.password = password;
        this.userObject = userObject
    }

    Authentication() {
        console.log("auth")
        return this.email, this.password
    }

    async currentUser() {
        return new Promise((resolve, rejects) => {
            try {
                AsyncStorage.getItem('interLockCurrentUser')
                    .then(result => {
                        console.log("result: ", result)
                        if (result != null) {
                            // We have data!!

                            resolve(result)
                        } else {
                            rejects({ error: "no current user" })
                        }
                    })
                    .catch(err => {
                        throw (err)
                    })


            } catch (error) {
                // Error retrieving data
                rejects(error)
            }
        })
    }

    async createUserWithEmailPassword(email, password, data) {
        if (email != '' || password != '') {
            return new Promise((resolve, rejects) => {
                fetch('http://192.168.248.2/createuser', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        fullName: data,
                    })
                })
                    .then((json) => json.json())
                    .then((response) => {
                        if (!response ?.error) {
                            resolve(response)
                            try {
                                AsyncStorage.multiSet([
                                    ['interLockToken', resolve.authToken],
                                    ['interLockCurrentUser', response.user]
                                ]).then(dat => console.log("db", dat))
                                    .catch(err => console.log(err))

                            } catch (error) {
                                // Error saving data
                                console.log(error)
                            }
                        }
                        else rejects(response)

                    })
                    .catch(err => rejects(err))
            })
        }

        return this
    }

    signinUserWithEmailPassword(email = '', password = '') {
        if (email != '' || password != '') {
            return new Promise((resolve, rejects) => {
                fetch('http://192.168.248.2:3002/signinuser', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    })
                })
                    .then((json) => json.json())
                    .then((response) => {
                        if (!response ?.error) {
                            resolve(response)
                            console.log("result", response)
                            try {
                                AsyncStorage.multiSet([
                                    ['interLockToken', resolve.authToken],
                                    ['interLockCurrentUser', response.user]
                                ]).then(dat => console.log("db", dat))
                                    .catch(err => console.log(err))

                            } catch (error) {
                                // Error saving data
                                console.log(error)
                            }
                        }
                        else rejects(response)
                    })
                    .catch(err => rejects(err))
            })
        }

        return this
    }

    logout() {
        AsyncStorage.multiRemove([
            ['interLockToken', 'interLockCurrentUser']
        ]);
        return this
    }


}




const interlockDB = new InterlockDB
export default interlockDB