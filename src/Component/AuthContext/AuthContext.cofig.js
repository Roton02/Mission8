// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzp66zaE7iKkYKC-JTj7Qx4E-LT4Cax6Q",
  authDomain: "read-habits.firebaseapp.com",
  projectId: "read-habits",
  storageBucket: "read-habits.appspot.com",
  messagingSenderId: "117147110065",
  appId: "1:117147110065:web:5b44862ab0534dca8af090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)