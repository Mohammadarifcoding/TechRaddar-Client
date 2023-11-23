// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtyTNLA_MAtZHoZJ4ncmuyxHoqhwYuH5E",
  authDomain: "arif-12-assignment.firebaseapp.com",
  projectId: "arif-12-assignment",
  storageBucket: "arif-12-assignment.appspot.com",
  messagingSenderId: "1093933360209",
  appId: "1:1093933360209:web:edc15b7bb6e7036470c470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  Auth = getAuth(app)
export default Auth
