import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const providers = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const signInGithub = () =>{
        return signInWithPopup(auth, providers)
    }

    const profile = (userDetails) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userDetails);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        });
        return(()=>{
            unsubscribe();
        })
    },[])

    const logOut = () =>{
        return signOut(auth)
    }

    



    const userDetails = {
        signUp,
        signIn,
        signInGoogle,
        signInGithub,
        user,
        loading,
        logOut,
        profile,
        setLoading,
    }

    
    
    return (
            <AuthContext.Provider value={userDetails}>
                {children}
            </AuthContext.Provider>
    );
};

export default ContextProvider;