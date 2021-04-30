import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCCN5lDvjahm3hlJxjtfNOBPeIlAoosMiE",
    authDomain: "todo-app-9430f.firebaseapp.com",
    projectId: "todo-app-9430f",
    storageBucket: "todo-app-9430f.appspot.com",
    messagingSenderId: "217018657104",
    appId: "1:217018657104:web:53cddfb977c460dc3a2455",
    measurementId: "G-5PW9RXRCRK"
});
const db=firebaseApp.firestore();
export default db;