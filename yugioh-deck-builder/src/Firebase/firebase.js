
//import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAjpgqmuScaQxPUYDpzEBOFzotfpcqbehU",
    authDomain: "yugiohdeckbuilder-8acfb.firebaseapp.com",
    projectId: "yugiohdeckbuilder-8acfb",
    storageBucket: "yugiohdeckbuilder-8acfb.appspot.com",
    messagingSenderId: "447746052433",
    appId: "1:447746052433:web:b74fb5647149f230248370",
    measurementId: "G-7TZT237G95"
};

/* firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); */

const app = initializeApp(firebaseConfig)
