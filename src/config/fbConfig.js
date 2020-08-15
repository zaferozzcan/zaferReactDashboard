import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0nRgVVSymAR9teoPIT7F9pK3V7ik9FoY",
  authDomain: "zaferdasboard.firebaseapp.com",
  databaseURL: "https://zaferdasboard.firebaseio.com",
  projectId: "zaferdasboard",
  storageBucket: "zaferdasboard.appspot.com",
  messagingSenderId: "1098778024388",
  appId: "1:1098778024388:web:b23025a0014b148546ec91",
  measurementId: "G-VTZSRM00S6"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
