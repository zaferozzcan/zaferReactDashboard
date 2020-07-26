import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCt2BxPRcEhebajW2g8FHt0obpq6DXwxPQ",
  authDomain: "zaferozcandash-f4157.firebaseapp.com",
  databaseURL: "https://zaferozcandash-f4157.firebaseio.com",
  projectId: "zaferozcandash-f4157",
  storageBucket: "zaferozcandash-f4157.appspot.com",
  messagingSenderId: "66304341535",
  appId: "1:66304341535:web:a3514cd86de1a3a098872a",
  measurementId: "G-VTDS1BG2M7"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
