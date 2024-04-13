import { auth } from "./firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth"
  import { addUser, getUserRole } from '../requests/firebaseRequests'

export const registerUser = async (email, password) => {
    const a= await  createUserWithEmailAndPassword(auth, email, password);
    const uid = a.user.uid
    addUser(uid)
    console.log(a)
}

export const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
}

export const signOut = () => {
    return auth.signOut()
}