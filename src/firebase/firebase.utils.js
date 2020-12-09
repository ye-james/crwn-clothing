import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDDI3_CscDvEniKYMvIgFw1gyNSr03ScLo",
    authDomain: "crwn-clothing-f2b1e.firebaseapp.com",
    projectId: "crwn-clothing-f2b1e",
    storageBucket: "crwn-clothing-f2b1e.appspot.com",
    messagingSenderId: "858141557771",
    appId: "1:858141557771:web:5859831519693f833df30e"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;