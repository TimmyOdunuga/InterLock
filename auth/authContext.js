import React, { useEffect, useState } from 'react';
import interlockDB from './interlockDatabase'

//create a context
export const AuthContext = React.createContext();


//pass the context to this function 
//and the context will be passed too the children
export const AuthContainer = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        //Set user on user state available 
        // interlockDB.logout();

        // interlockDB.currentUser()
     //     .then(dat => {
        //         console.log(dat)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        setCurrentUser({
            "fullName": "Helen Odunuga",
            "email": "elen@test.com",
            "uid": "4qKf6h4XEN9vpfNRDijk9dUFDQDrTFvCRSjzqmieGAtx"
        })

    }, []);

    return (
        <AuthContext.Provider
            value={{ currentUser, setCurrentUser }}
        >
            {children}
        </AuthContext.Provider>
    )
};




// class Firebase {
// 	constructor() {
// 		this.auth = fire.auth()
// 		this.db = fire.firestore()
// 	}

// 	isInitialized() {
// 		return new Promise(resolve => {
// 			this.auth.onAuthStateChanged(resolve)
// 		})
// 	}

// 	getCurrentUsername() {
// 		return this.auth.currentUser && this.auth.currentUser.displayName
// 	}

// }

// export default new Firebase()
