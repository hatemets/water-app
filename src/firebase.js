import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCz3QlUIMthHf_QB_0zVasrHLAHAAbzPOM",
    authDomain: "junction2021-cf61c.firebaseapp.com",
    projectId: "junction2021-cf61c",
    storageBucket: "junction2021-cf61c.appspot.com",
    messagingSenderId: "1031576086128",
    appId: "1:1031576086128:web:0fdff412af338c6e51b6b5"
};
  
// Initialize Firebase
var fireapp = firebase.initializeApp(config);

export default fireapp