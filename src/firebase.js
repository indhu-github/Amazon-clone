import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYVyutqfjKjCueIrpzUnqMMEMTruHsHlQ",
  authDomain: "clone-1e098.firebaseapp.com",
  databaseURL: "https://clone-1e098.firebaseio.com",
  projectId: "clone-1e098",
  storageBucket: "clone-1e098.appspot.com",
  messagingSenderId: "867519835819",
  appId: "1:867519835819:web:c4883ad5cf3df1873fd1ee",
  measurementId: "G-C85XQJ8SHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //realtime db in firebase
const auth = firebase.auth();

export { db, auth };
