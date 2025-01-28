import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, sendEmailVerification, updatePassword, sendPasswordResetEmail, deleteUser, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContext = createContext(null)
export { AuthContext };
const AuthProvider = ({ children }) => {
    // Disable logs by overriding console functions
    //console.log = console.info = console.warn = console.error = () => { };

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google signin
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        // Corrected the cleanup function to call unsubscribe
        return () => {
            unsubscribe()
        }
    }, [auth])

    const updateprofile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: { name }, photoURL: { image }
        })
    }
    const updatepassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
    }

    const passwordresetemail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logout = () => {
        return signOut(auth)
    }
    const deleteuser = () => {
        return deleteUser(auth.currentUser)
    }

    const userInfo = {
        signup,
        login,
        googleSignIn,
        user,
        loading,
        updateprofile,
        updatepassword,
        emailVerification,
        passwordresetemail,
        logout,
        deleteuser
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;