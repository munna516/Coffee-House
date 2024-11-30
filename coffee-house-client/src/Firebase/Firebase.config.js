// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp07ufP8V-F3leD92xO__m0REhR8nFSuo",
  authDomain: "coffee-house-25061.firebaseapp.com",
  projectId: "coffee-house-25061",
  storageBucket: "coffee-house-25061.firebasestorage.app",
  messagingSenderId: "370281739103",
  appId: "1:370281739103:web:7e9b79a1ca2bbb02d9fcea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
