// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlU7KI7cra3ZI3Xf-iTIMUXbmeHfmTPgA",
  authDomain: "netmirror-e886a.firebaseapp.com",
  projectId: "netmirror-e886a",
  storageBucket: "netmirror-e886a.firebasestorage.app",
  messagingSenderId: "1016249428533",
  appId: "1:1016249428533:web:658dc4c977e99fd3bedf7c",
  measurementId: "G-9WBKQQQNQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }; 