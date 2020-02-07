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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
