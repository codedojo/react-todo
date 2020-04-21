import firebase from 'firebase';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: 'react-todo-16181',
    appId: '1:853702437056:web:356a2257476d5e5a7ea525',
    authDomain: 'react-todo-16181.firebaseapp.com',
    databaseURL: 'https://react-todo-16181.firebaseio.com',
    storageBucket: 'react-todo-16181.appspot.com',
    messagingSenderId: '853702437056'
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };