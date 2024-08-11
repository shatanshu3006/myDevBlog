// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mydevblog-1st-iteration.firebaseapp.com",
  projectId: "mydevblog-1st-iteration",
  storageBucket: "mydevblog-1st-iteration.appspot.com",
  messagingSenderId: "21595050437",
  appId: "1:21595050437:web:97d7a0b8ef2cf4b73d7bac",
  measurementId: "G-2PT0C3PS5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);