// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7HYTIU5baWhVsL7Nsg1OR9Xpu48-nu-Y",
  authDomain: "hackathon-easy.firebaseapp.com",
  projectId: "hackathon-easy",
  storageBucket: "hackathon-easy.appspot.com",
  messagingSenderId: "396735286680",
  appId: "1:396735286680:web:f43e45ef272a4d144eefed",
  measurementId: "G-EY81LV6B8T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);