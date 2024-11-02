import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFXsjGUN1FY0fMhiyN9RFDkJ1pJ5A4kQ0",
  authDomain: "tutorial-3ccb5.firebaseapp.com",
  projectId: "tutorial-3ccb5",
  storageBucket: "tutorial-3ccb5.firebasestorage.app",
  messagingSenderId: "407813217870",
  appId: "1:407813217870:web:04fdb3fcbba924405cad1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);