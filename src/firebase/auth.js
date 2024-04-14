import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const signOut = () => {
    return auth.signOut()
}