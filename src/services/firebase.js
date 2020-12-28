import firebase from 'firebase'

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDT-BXXzigqJYQE2Is044xpxbbCNFPl5mQ",
    authDomain: "chitchat-739ae.firebaseapp.com",
    projectId: "chitchat-739ae",
    storageBucket: "chitchat-739ae.appspot.com",
    messagingSenderId: "970308875529",
    appId: "1:970308875529:web:d50f0c1f6aa26df5728fd8"
};

// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();