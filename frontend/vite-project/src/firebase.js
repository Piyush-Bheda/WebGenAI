// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webgenai-1f4c5.firebaseapp.com",
  projectId: "webgenai-1f4c5",
  storageBucket: "webgenai-1f4c5.firebasestorage.app",
  messagingSenderId: "139070551801",
  appId: "1:139070551801:web:c91f5ad1676b57b0c19428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}