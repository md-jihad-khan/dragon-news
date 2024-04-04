// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1b5s26XP-0eefsE3uxuOGLUr6MtFvLs0",
  authDomain: "dragon-news-9f879.firebaseapp.com",
  projectId: "dragon-news-9f879",
  storageBucket: "dragon-news-9f879.appspot.com",
  messagingSenderId: "249821537666",
  appId: "1:249821537666:web:9d37de272d0194c6791b9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
