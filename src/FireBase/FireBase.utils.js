import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

var config = {
    apiKey: "AIzaSyCD82K7qpejO_Hr1BHjE6_rraQb7r8d40c",
    authDomain: "crwn-db-825f9.firebaseapp.com",
    databaseURL: "https://crwn-db-825f9.firebaseio.com",
    projectId: "crwn-db-825f9",
    storageBucket: "crwn-db-825f9.appspot.com",
    messagingSenderId: "315122576699",
    appId: "1:315122576699:web:9feef5c2204b729adddb1e",
    measurementId: "G-CSVFBRF9D4"
};  
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;    