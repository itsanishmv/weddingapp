// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: "wedding-app-158b3.firebaseapp.com",
  projectId: "wedding-app-158b3",
  storageBucket: "wedding-app-158b3.appspot.com",
  messagingSenderId: "834346380079",
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const db = getFirestore()
