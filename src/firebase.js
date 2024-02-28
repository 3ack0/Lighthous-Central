// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoHf9KAXc6wDLPYPRG9dOnXMxA9msVk3I",
  authDomain: "lighthouse-central.firebaseapp.com",
  projectId: "lighthouse-central",
  storageBucket: "lighthouse-central.appspot.com",
  messagingSenderId: "134259388219",
  appId: "1:134259388219:web:9a3479fac7ae55b832511e",
  measurementId: "G-GSEE5FY0TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
export default db;