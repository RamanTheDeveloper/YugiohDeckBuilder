import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAjpgqmuScaQxPUYDpzEBOFzotfpcqbehU",
    authDomain: "yugiohdeckbuilder-8acfb.firebaseapp.com",
    projectId: "yugiohdeckbuilder-8acfb",
    storageBucket: "yugiohdeckbuilder-8acfb.appspot.com",
    messagingSenderId: "447746052433",
    appId: "1:447746052433:web:b74fb5647149f230248370",
    measurementId: "G-7TZT237G95"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const db = getFirestore()
export const auth = getAuth()
export const firestore = firebase.initializeApp(firebaseConfig).firestore
