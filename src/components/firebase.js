import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvovZhjqxNbHyD6-V2C_6K9IFAmAa3ddg",
  authDomain: "portfolio-8b600.firebaseapp.com",
  projectId: "portfolio-8b600",
  storageBucket: "portfolio-8b600.appspot.com",
  messagingSenderId: "947993265929",
  appId: "1:947993265929:web:b9295abc6cc0b13f5cb5d8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
