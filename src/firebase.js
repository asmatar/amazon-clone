import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBKAn7lQv4eEQUATLweVX7bncSYsyfkK5Q",
    authDomain: "clone-1afb7.firebaseapp.com",
    projectId: "clone-1afb7",
    storageBucket: "clone-1afb7.appspot.com",
    messagingSenderId: "252646505410",
    appId: "1:252646505410:web:ee598ea5cbc07223c7b45b",
    measurementId: "G-DK1DDMFP96"
  });

const db =  firebase.firestore();

export { db };
