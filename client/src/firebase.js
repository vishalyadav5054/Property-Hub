// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-74740.firebaseapp.com",
  projectId: "real-estate-74740",
  storageBucket: "real-estate-74740.appspot.com",
  messagingSenderId: "966366293588",
  appId: "1:966366293588:web:945b16745bb59b7020c7c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);