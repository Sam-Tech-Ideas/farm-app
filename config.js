// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzcam9ivuQADLfEHazSo_8AF-ghIuCrw",
  authDomain: "ecommerce-project-103ba.firebaseapp.com",
  projectId: "ecommerce-project-103ba",
  storageBucket: "ecommerce-project-103ba.appspot.com",
  messagingSenderId: "1038028862358",
  appId: "1:1038028862358:web:a57acdc17457719e2b63b7",
  measurementId: "G-XGB0KSQKXM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app
 
);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
