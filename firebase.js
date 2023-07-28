// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkvVNaOc3RwZaaCw6WZHWHXq9kXMDYi5k",
    authDomain: "nlpwebnav.firebaseapp.com",
    projectId: "nlpwebnav",
    storageBucket: "nlpwebnav.appspot.com",
    messagingSenderId: "871148945038",
    appId: "1:871148945038:web:c827bdb1b6a4e4545bd3df",
    measurementId: "G-KQVRJWRRQM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
 
  