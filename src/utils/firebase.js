import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe8AK9smx6ZQ0IU_DsSOx10ZtxpbYpYBI",
  authDomain: "clone-fb685.firebaseapp.com",
  projectId: "clone-fb685",
  storageBucket: "clone-fb685.appspot.com",
  messagingSenderId: "644857395911",
  appId: "1:644857395911:web:484358deb671223c239ce2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
