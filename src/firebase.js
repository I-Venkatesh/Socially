// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBXBELmVk6oCov6OgQIq_ZApbTPd5rgsO8",
  authDomain: "socially-48d7f.firebaseapp.com",
  projectId: "socially-48d7f",
  storageBucket: "socially-48d7f.appspot.com",
  messagingSenderId: "560246808466",
  appId: "1:560246808466:web:a33076494d05728a602b4b",
  measurementId: "G-NLV5K31DZR"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;