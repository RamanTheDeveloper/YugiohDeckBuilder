import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebase from 'firebase/compat/app';



const auth = getAuth();
const db = getFirestore();

export const register = async(email, password) => {
    try{
        const userCreds = await firebase.auth().createUserWithEmailAndPassword(
            auth, email, password
        )
        const user = userCreds.user
        await addDoc(collection(db, "users"), {
            uid: user.uid, 
            email: user.email
        })
        return true
    } catch(error){
        return {error: error.message}
    }
}

export const login = async(email, password) => {
    try{
        const userCreds = await firebase.auth().signInWithEmailAndPassword(
            auth, email, password
        )
        const user = userCreds.user
        return true
    } catch(error){
        return {error: error.message}
    }
}

const logout = async() => {
     try{
        await logout(auth)
        return true
     } catch(error){
        return false
     }
}