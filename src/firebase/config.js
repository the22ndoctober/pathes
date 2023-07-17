import app from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDLNERWRIJ60Ls2uzzmp9_azuhimqGKvKI",
  authDomain: "traker-a4be9.firebaseapp.com",
  projectId: "traker-a4be9",
  storageBucket: "traker-a4be9.appspot.com",
  messagingSenderId: "284852320406",
  appId: "1:284852320406:web:2cb5a5413119ce60c8eab7"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

export {firebase, firestore, firebaseConfig, app}