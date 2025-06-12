import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }



    const userDetails = {
        signUp,
        signIn,
        email: "mahatab@gmail.com"
    }


    return (
            <AuthContext.Provider value={userDetails}>
                {children}
            </AuthContext.Provider>
    );
};

export default ContextProvider;