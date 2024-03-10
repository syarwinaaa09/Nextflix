import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAubSF-uPayUPuwpHFy-pOoEUKFONb6tys",
    authDomain: "nextflix-fb4d7.firebaseapp.com",
    projectId: "nextflix-fb4d7",
    storageBucket: "nextflix-fb4d7.appspot.com",
    messagingSenderId: "68856527022",
    appId: "1:68856527022:web:bc45585fc3b661e0b3d53f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db