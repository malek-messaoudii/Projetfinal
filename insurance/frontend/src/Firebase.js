import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBh6NN46vAbL-aYndZcS6rLNapvcckFq0o",
    authDomain: "assurance-8a7be.firebaseapp.com",
    projectId: "assurance-8a7be",
    storageBucket: "assurance-8a7be.appspot.com",
    messagingSenderId: "760235434290",
    appId: "1:760235434290:web:48f7d75c88e9f065f6772b",
    measurementId: "G-6MH55B6YYT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {auth,provider}

  export default db 

  

