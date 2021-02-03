import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAFxo1EwNcb20-h9uyAlXz729tomzvJvaY",
    authDomain: "react-chat-app-2ea6a.firebaseapp.com",
    projectId: "react-chat-app-2ea6a",
    storageBucket: "react-chat-app-2ea6a.appspot.com",
    messagingSenderId: "817780106623",
    appId: "1:817780106623:web:b13500b35b2078c10b264a",
    measurementId: "G-3F8D3XR4PR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase