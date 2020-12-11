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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //Create a document object with userAuth id
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //Create record if one does not exist
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
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