// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjbIoyU4yPcPYl_ODxqndPJgegYbWtW8A",
  authDomain: "emajon-simple-8910a.firebaseapp.com",
  projectId: "emajon-simple-8910a",
  storageBucket: "emajon-simple-8910a.appspot.com",
  messagingSenderId: "102547342134",
  appId: "1:102547342134:web:1fc8903bf94818b1eea997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;