// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-62f80.firebaseapp.com",
  projectId: "mern-blog-62f80",
  storageBucket: "mern-blog-62f80.appspot.com",
  messagingSenderId: "770796836473",
  appId: "1:770796836473:web:36571c64f10f36057766a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
