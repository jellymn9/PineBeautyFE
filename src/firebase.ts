// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcl9bofky0H4ZczDGXkAyA0IvUpEH_ixc",
  authDomain: "pinebeautybe.firebaseapp.com",
  projectId: "pinebeautybe",
  storageBucket: "pinebeautybe.firebasestorage.app",
  messagingSenderId: "486212011597",
  appId: "1:486212011597:web:26d66001035af64243be04",
  measurementId: "G-C89HDRQ4B3",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize and export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
