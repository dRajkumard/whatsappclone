// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4Brx-I7mZP6xzzgY4FkMapbzR1MC5J4",
  authDomain: "whatsappclone-e549b.firebaseapp.com",
  projectId: "whatsappclone-e549b",
  storageBucket: "whatsappclone-e549b.appspot.com",
  messagingSenderId: "922430063624",
  appId: "1:922430063624:web:710906b47e3e1931883dbd",
  measurementId: "G-M8XYSP9G3N"
};
  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.
  GoogleAuthProvider();
  export {auth, provider};
  export default db;