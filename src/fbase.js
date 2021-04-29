import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCogaxsgqkCoclTx2d0muECXTR8vpDGVw4",
    authDomain: "ukov-a0914.firebaseapp.com",
    projectId: "ukov-a0914",
    storageBucket: "ukov-a0914.appspot.com",
    messagingSenderId: "882658702546",
    appId: "1:882658702546:web:c6e605fe743dc34464290b",
    measurementId: "G-FSFG0H8BX5"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  firebase.analytics();


 