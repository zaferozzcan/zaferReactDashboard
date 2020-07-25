import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDv2azdSo_ac4mGso94mY00H3_PILhaSq8",
  authDomain: "zafersdasboard.firebaseapp.com",
  databaseURL: "https://zafersdasboard.firebaseio.com",
  projectId: "zafersdasboard",
  storageBucket: "zafersdasboard.appspot.com",
  messagingSenderId: "218806196632",
  appId: "1:218806196632:web:7c12e14c51ef873854b3ed",
  measurementId: "G-90Y9HQ76S8"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
