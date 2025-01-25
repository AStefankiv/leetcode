// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWH5ZijNy_ItYcUMMPJMaDA41_fXRJdeo",
  authDomain: "fb-tutorial-80c9d.firebaseapp.com",
  projectId: "fb-tutorial-80c9d",
  storageBucket: "fb-tutorial-80c9d.firebasestorage.app",
  messagingSenderId: "170153993846",
  appId: "1:170153993846:web:90a11072ef61664f07a157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;