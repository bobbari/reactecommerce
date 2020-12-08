import  firebase from 'firebase/app'
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
if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export const createUserProfileDocument = async (auth, additionalDate) =>{
    console.log("Auth ", auth)
    if (!auth) {
        // if no user(auth) was found
        return
    }
    const userRef = firestore.doc(`users/${auth.uid}`);
    const snapshot = userRef.get();
    console.log("snapshots ", snapshot);
    if (!snapshot.exists) {
        const {displayName, email } = auth;
        const createAt = new Date();
        const createUserObject = { 
            displayName: displayName, 
            email: email, 
            createAt: createAt,
             ...additionalDate
            }
        try {
            await userRef.set(createUserObject);
            // console.log("userRef ", userRef);
        } catch (error) {
            console.log("error while storing in firebase", error);
        }
        
    }
    return userRef;
}

export default firebase;    