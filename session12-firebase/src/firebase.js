// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe8MCbhTsUzAv9WLzDrsyPoJPpdjkzuUE",
  authDomain: "fir-react-upload-fbf27.firebaseapp.com",
  projectId: "fir-react-upload-fbf27",
  storageBucket: "fir-react-upload-fbf27.appspot.com",
  messagingSenderId: "568688068874",
  appId: "1:568688068874:web:4b8b3fdb07313e020992f3",
  measurementId: "G-8DHCKKTFW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
