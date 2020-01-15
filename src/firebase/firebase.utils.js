import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO-PwUBy4qt1gOpfFIdgSet6FgGbS4RIc",
    authDomain: "crwn-db-b46b4.firebaseapp.com",
    databaseURL: "https://crwn-db-b46b4.firebaseio.com",
    projectId: "crwn-db-b46b4",
    storageBucket: "crwn-db-b46b4.appspot.com",
    messagingSenderId: "64478593644",
    appId: "1:64478593644:web:1a3849bb88874c8ad1ce49",
    measurementId: "G-B5MHXVBPXZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;