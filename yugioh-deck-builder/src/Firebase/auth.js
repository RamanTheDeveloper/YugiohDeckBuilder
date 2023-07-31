
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import { auth } from './firebase';
  
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}

export const isLoggedIn = () => {
  return !!auth.currentUser
}