// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// authentication purpose like email/password, google, facebook, etc,..
import { getFirestore } from "firebase/firestore"; // storing the data [database]

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH5cAtfOq6zhgv9mLZxFG0HMGeMD14HxM",
  authDomain: "fir-project-9f4d3.firebaseapp.com",
  projectId: "fir-project-9f4d3",
  storageBucket: "fir-project-9f4d3.appspot.com",
  messagingSenderId: "509409372120",
  appId: "1:509409372120:web:12bfb94b47fd0bc2b374ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);