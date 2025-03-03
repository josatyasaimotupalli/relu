// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACvuule6gt8w4g2RMLzl3IZBQGv8agEmE",
  authDomain: "rule-103d5.firebaseapp.com",
  projectId: "rule-103d5",
  storageBucket: "rule-103d5.firebasestorage.app",
  messagingSenderId: "992766580392",
  appId: "1:992766580392:web:12ce4c1aa24ef27c86949d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;