// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-5f75e.firebaseapp.com",
  projectId: "blog-5f75e",
  storageBucket: "blog-5f75e.appspot.com",
  messagingSenderId: "907116295998",
  appId: "1:907116295998:web:c4b79919489b2538429e6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };