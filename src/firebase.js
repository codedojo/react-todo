import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBuU2jzVp9buuRUNLD81hM9WdZ8VE5hwf4",
    authDomain: "react-todo-16181.firebaseapp.com",
    databaseURL: "https://react-todo-16181.firebaseio.com",
    projectId: "react-todo-16181",
    storageBucket: "react-todo-16181.appspot.com",
    messagingSenderId: "853702437056",
    appId: "1:853702437056:web:356a2257476d5e5a7ea525"
});

const db = firebase.firestore();

export { db };