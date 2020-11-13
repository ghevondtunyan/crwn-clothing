import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyD21Njeu1lRyBYaqmd3JwNf0SwOgTzSykU",
  authDomain: "crwn-db-8bdf4.firebaseapp.com",
  databaseURL: "https://crwn-db-8bdf4.firebaseio.com",
  projectId: "crwn-db-8bdf4",
  storageBucket: "crwn-db-8bdf4.appspot.com",
  messagingSenderId: "139944166086",
  appId: "1:139944166086:web:cc03ab579f8a9035ce4dc7",
  measurementId: "G-P12W540W11",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
