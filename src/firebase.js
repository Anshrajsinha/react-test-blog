// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKEBiFNeOJd7moc3Ln1Vok5fUoXUQwQ50",
  authDomain: "file-upload-3fe31.firebaseapp.com",
  projectId: "file-upload-3fe31",
  storageBucket: "file-upload-3fe31.appspot.com",
  messagingSenderId: "186048473596",
  appId: "1:186048473596:web:d78ae6ad8ab1a4dfdfea79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)