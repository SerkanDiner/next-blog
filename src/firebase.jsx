// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "experience-book.firebaseapp.com",
  projectId: "experience-book",
  storageBucket: "experience-book.firebasestorage.app",
  messagingSenderId: "559395145756",
  appId: "1:559395145756:web:653dcc43a2c8382bcff7d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);