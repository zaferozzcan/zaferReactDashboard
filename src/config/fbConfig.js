import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJdn1Yno42f2N64TrCIbJRFCKQRjNBnh8",
  authDomain: "reactdashboard-d034f.firebaseapp.com",
  databaseURL: "https://reactdashboard-d034f.firebaseio.com",
  projectId: "reactdashboard-d034f",
  storageBucket: "reactdashboard-d034f.appspot.com",
  messagingSenderId: "628153226041",
  appId: "1:628153226041:web:66f61da45208080a9c0ee8",
  measurementId: "G-GVN286FBDV"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
