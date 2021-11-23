import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD8vqF42c93GBQTddLW2ogqMBrTsd5_hMw",
  authDomain: "ukov-d4d34.firebaseapp.com",
  projectId: "ukov-d4d34",
  storageBucket: "ukov-d4d34.appspot.com",
  messagingSenderId: "177229184464",
  appId: "1:177229184464:web:cc3e84e16c7cbba4240dd5",
  measurementId: "G-YKKLWCD0V6",
};
// Initialize Firebase

export const fbase = firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics();
export const dbService = firebase.firestore();
export const fireStorage = firebase.storage();
