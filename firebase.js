// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"; 
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SdaVHCqqWhcmM8_I7u2rDTyBklVuJGI",
  authDomain: "laundry-application-2384b.firebaseapp.com",
  projectId: "laundry-application-2384b",
  storageBucket: "laundry-application-2384b.appspot.com",
  messagingSenderId: "1030010158373",
  appId: "1:1030010158373:web:60b47891b7843789d76ecc",
  measurementId: "G-FBF7HPVY82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();
export {auth,db};