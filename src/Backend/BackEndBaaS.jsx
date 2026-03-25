// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAsCsxn42DCi4pZPhbJFfkk9sTPkvCtB1U", 
  authDomain: "ecart-8c42b.firebaseapp.com",
  projectId: "ecart-8c42b",
  storageBucket: "ecart-8c42b.firebasestorage.app",
  messagingSenderId: "94524996816",
  appId: "1:94524996816:web:4ac4a38f5aa79d8fc9b2d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _Auth=getAuth(app)
export const _DB=getFirestore(app)