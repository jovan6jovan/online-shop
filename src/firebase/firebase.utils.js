import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAblYOSbSk3tFeaeBCZwY9YkRjUqyCVf34",
    authDomain: "jersey-db.firebaseapp.com",
    databaseURL: "https://jersey-db.firebaseio.com",
    projectId: "jersey-db",
    storageBucket: "jersey-db.appspot.com",
    messagingSenderId: "1094623466111",
    appId: "1:1094623466111:web:6b9d7cdde97ba21cb3a54a",
    measurementId: "G-RWS3K2V7BT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
