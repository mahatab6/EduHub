import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const providers = new GithubAuthProvider();

    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const signInGithub = () =>{
        return signInWithPopup(auth, providers)
    }



    const userDetails = {
        signUp,
        signIn,
        signInGoogle,
        signInGithub,
        email: "mahatab@gmail.com"
    }


    return (
            <AuthContext.Provider value={userDetails}>
                {children}
            </AuthContext.Provider>
    );
};

export default ContextProvider;