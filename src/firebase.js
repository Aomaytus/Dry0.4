// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUwg0e--XyMgtK9tT5jW7SiLnhG_dObPA",
  authDomain: "react-contact-001.firebaseapp.com",
  databaseURL: "https://react-contact-001-default-rtdb.firebaseio.com",
  projectId: "react-contact-001",
  storageBucket: "react-contact-001.appspot.com",
  messagingSenderId: "992771105069",
  appId: "1:992771105069:web:d245c6180ec41faaf773a4",
  measurementId: "G-B60D6K5X5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
