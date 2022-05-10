// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCcqJ4Bh2xp6vCoIjTfBJSv6QQ5sQxi8g",
  authDomain: "login-349800.firebaseapp.com",
  projectId: "login-349800",
  storageBucket: "login-349800.appspot.com",
  messagingSenderId: "561684149865",
  appId: "1:561684149865:web:8f1f2a86b0bbb72c30d4f8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
